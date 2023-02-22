import { Component, Inject, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { fuel, make, vehicleclass } from '../shared/models/data-model';
import { fuelTypes, makesData, vehicleClasses } from '../shared/utils/data';
import { numberPlateValidator } from '../shared/utils/numberplateValidator';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SnackbarService } from '../shared/snackbar.service';
import { DialogData } from '../shared/models/dialog-data';
import {
  EntityCollectionService,
  EntityCollectionServiceFactory,
} from '@ngrx/data';
import { Numberplate } from '../cars/store/numberplate';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-numberplate',
  templateUrl: './add-numberplate.component.html',
  styleUrls: ['./add-numberplate.component.scss'],
})
export class AddNumberplateComponent implements OnInit {
  formTitle = 'Add New Numberplate';
  numberplateForm: FormGroup;
  makes: Array<make>;
  fuelTypes: Array<fuel>;
  vehicleClasses: Array<vehicleclass>;
  isAddMode: boolean;
  isEditMode: boolean;
  id: string;
  updatednumberFormData: Numberplate;

  constructor(
    @Inject(MAT_DIALOG_DATA) public appData: DialogData,
    public dialogRef: MatDialogRef<AddNumberplateComponent>,
    public snackBarService: SnackbarService,
    entityColServiceFactory: EntityCollectionServiceFactory,
    private router: Router
  ) {
    this.creteForm();
    this.numberplateService =
      entityColServiceFactory.create<Numberplate>('Numberplate');
  }
  numberplateService: EntityCollectionService<Numberplate>;

  ngOnInit() {
    this.assignData();
    this.checkAction();
    this.findValidTillDate();
    this.updateIdValue();
  }

  creteForm() {
    this.numberplateForm = new FormGroup({
      registrationNumber: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.maxLength(6),
          Validators.minLength(6),
          numberPlateValidator(),
        ])
      ),
      registrationDate: new FormControl('', Validators.compose([])),
      ownerName: new FormControl('', Validators.compose([Validators.required])),
      chassisNo: new FormControl(''),
      engineNo: new FormControl(''),
      make: new FormControl(''),
      modelName: new FormControl(''),
      fuelType: new FormControl(''),
      vehicleClass: new FormControl(''),
      fitnessValidTill: new FormControl(''),
      id: new FormControl(''),
    });
  }

  assignData() {
    this.makes = makesData;
    this.fuelTypes = fuelTypes;
    this.vehicleClasses = vehicleClasses;
  }

  findValidTillDate() {
    this.numberplateForm
      .get('registrationDate')
      ?.valueChanges.subscribe((date) => {
        const valideDate = new Date(
          new Date(date).setDate(date.getDate() + 5475)
        );
        this.numberplateForm.get('fitnessValidTill')?.setValue(valideDate);
      });
  }

  updateIdValue() {
    this.numberplateForm
      .get('registrationNumber')
      ?.valueChanges.subscribe(() => {
        this.numberplateForm
          .get('id')
          ?.setValue(Math.floor(Date.now() * Math.random()));
      });
  }

  submit() {
    if (this.numberplateForm.invalid) {
      return;
    }
    if (this.isAddMode) {
      this.createNumberplate(this.numberplateForm.value);
    } else {
      this.updateNumberplate();
    }
  }

  createNumberplate(formData: Numberplate) {
    this.numberplateService.getAll().subscribe((data) => {
      const dataFound = data.find(
        (c) => c.registrationNumber === formData.registrationNumber
      );
      if (dataFound) {
        this.snackBarService.openSnackBar(
          'Numberplate ' +
            formData.registrationNumber +
            ' already exists please enter different one'
        );
      } else {
        this.numberplateService
          .add(this.numberplateForm.value)
          .subscribe(() => {
            this.dialogRef.close();
            this.snackBarService.openSnackBar(
              'Numberplate created successfully for ' +
                this.numberplateForm.value.registrationNumber +
                ''
            );
          });
      }
    });
  }

  checkAction() {
    if (this.appData.action === 'add') {
      this.isAddMode = true;
      this.isEditMode = false;
      this.formTitle = 'Create new numberplate';
    }
    if (this.appData.action === 'edit') {
      this.isEditMode = true;
      this.isAddMode = false;
      this.id = this.appData.id;
      this.numberplateForm.patchValue(this.appData.formData);
      this.assignData();
      this.formTitle =
        'Update numberplate details of ' +
        this.numberplateForm.value.registrationNumber +
        '';
    }
  }

  updateNumberplate() {
    this.numberplateService.update(this.numberplateForm.value).subscribe(() => {
      this.dialogRef.close();
      this.snackBarService.openSnackBar(
        'Numberplate update successfully for ' +
          this.numberplateForm.value.registrationNumber +
          ''
      );
    });
  }
}
