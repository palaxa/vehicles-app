import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup,FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EntityCollectionService, EntityCollectionServiceFactory } from '@ngrx/data';
import { Numberplate } from '../cars/store/numberplate';
import { numberPlateValidator } from '../shared/utils/numberplateValidator';
import { combineLatest } from 'rxjs';
import { SnackbarService } from '../shared/snackbar.service';
import { fuel, make, vehicleclass } from '../shared/models/data-model';
import { fuelTypes, makesData, vehicleClasses } from '../shared/utils/data';

@Component({
  selector: 'app-edit-numberplate',
  templateUrl: './edit-numberplate.component.html',
  styleUrls: ['./edit-numberplate.component.scss']
})
export class EditNumberplateComponent implements OnInit {
  numberplateForm:FormGroup;
  formTitle:string;
  updatednumberFormData:Numberplate;
  numberplateService : EntityCollectionService<Numberplate>
  makes: Array<make>;
  fuelTypes: Array<fuel>;
  vehicleClasses: Array<vehicleclass>;

  constructor(entityColServiceFactory:EntityCollectionServiceFactory,private router:Router,private route:ActivatedRoute,private snackBarService:SnackbarService){
    this.createForm();
    this.numberplateService = entityColServiceFactory.create<Numberplate>("Numberplate");
  }

  ngOnInit(): void {
    this.getData();
    this.findValidTillDate();
  }

  createForm(){
    this.numberplateForm = new FormGroup({
      id:new FormControl('',),
      registrationNumber: new FormControl('', Validators.compose([
        Validators.required,
        Validators.maxLength(6),
        Validators.minLength(6),
        numberPlateValidator()
      ])),
      registrationDate: new FormControl('', Validators.compose([])),
      ownerName: new FormControl('',Validators.compose([Validators.required])),
      chassisNo: new FormControl('',),
      engineNo: new FormControl('',),
      make:  new FormControl('',),
      modelName : new FormControl('',),
      fuelType: new FormControl('',),
      vehicleClass : new FormControl('',),
      fitnessValidTill: new FormControl('',),
    });
  }

  updatenumberPlate(data:Numberplate){
    this.updatednumberFormData = data;
    this.numberplateService.update(this.updatednumberFormData).subscribe(() => {
      this.router.navigate(['/']);
      this.snackBarService.openSnackBar('Numberplate update successfully for '+this.updatednumberFormData.registrationNumber+'');
    })
  }

  getData(){
    // this.numberplateForm.patchValue(this.appData.formData);
    combineLatest(
      [
        this.route.paramMap,
        this.numberplateService.entities$
      ]
    ).subscribe(([params,numberplatesformStore]) =>{
      const id = Number(params.get('id'));
      const filteredNumberplate = numberplatesformStore.filter((c) => c.id == id)
      if(filteredNumberplate){
        this.updatednumberFormData = {...filteredNumberplate[0]}
      }else{
        this.router.navigate(['/'])
      }
    })
    this.assignData();
  }

  assignData(){
    this.makes = makesData;
    this.fuelTypes = fuelTypes;
    this.vehicleClasses = vehicleClasses;
    this.numberplateForm.controls['registrationNumber'].setValue(this.updatednumberFormData.registrationNumber);
    this.numberplateForm.controls['registrationDate'].setValue(this.updatednumberFormData.registrationDate);
    this.numberplateForm.controls['ownerName'].setValue(this.updatednumberFormData.ownerName);
    this.numberplateForm.controls['chassisNo'].setValue(this.updatednumberFormData.chassisNo);
    this.numberplateForm.controls['engineNo'].setValue(this.updatednumberFormData.engineNo);
    this.numberplateForm.controls['make'].setValue(this.updatednumberFormData.make);
    this.numberplateForm.controls['modelName'].setValue(this.updatednumberFormData.modelName);
    this.numberplateForm.controls['fuelType'].setValue(this.updatednumberFormData.fuelType);
    this.numberplateForm.controls['vehicleClass'].setValue(this.updatednumberFormData.vehicleClass);
    this.numberplateForm.controls['fitnessValidTill'].setValue(this.updatednumberFormData.fitnessValidTill);
    this.numberplateForm.controls['id'].setValue(this.updatednumberFormData.id);
  }

  findValidTillDate(){
    this.numberplateForm.get('registrationDate')?.valueChanges.subscribe(date => {
      const valideDate = new Date(new Date(date).setDate(date.getDate() + 5475));
      this.numberplateForm.get('fitnessValidTill')?.setValue(valideDate);
    });
  }


}
