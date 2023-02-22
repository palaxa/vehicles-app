import { Component,OnInit } from '@angular/core';
import { EntityCollectionService, EntityCollectionServiceFactory } from '@ngrx/data';
import { Observable } from 'rxjs';
import { Numberplate } from '../cars/store/numberplate';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddNumberplateComponent } from '../add-numberplate/add-numberplate.component';
import { DeleteNumberplateComponent } from '../delete-numberplate/delete-numberplate.component';

@Component({
  selector: 'app-car-home',
  templateUrl: './numberplate-home.component.html',
  styleUrls: ['./numberplate-home.component.scss']
})
export class CarHomeComponent implements OnInit{
  displayedColumns: string[] = ['regNo','name', 'regDate', 'make', 'model','fuelType','vehicleClass','fitnessDueDate','action'];
  constructor(entityColServiceFactory:EntityCollectionServiceFactory,private dialogref:MatDialog){
    this.numberplateService = entityColServiceFactory.create<Numberplate>("Numberplate");
    this.numberPlates$ = this.numberplateService.entities$
  }

  numberplateService : EntityCollectionService<Numberplate>
  numberPlates$:Observable<Numberplate[]>;
  resultsLength = 0;

  ngOnInit(): void {
    this.numberplateService.getAll();
  }

  addNewNumberplate(){
    const config = new MatDialogConfig();
    config.width = "70%";
    config.height = "90%";
    this.dialogref.open(AddNumberplateComponent,{data :{action:'add'}});
  }

  updateNumberPlate(formData:Numberplate){
    const config = new MatDialogConfig();
    config.width = "70%";
    config.height = "90%";
    const id = formData.id;
    this.dialogref.open(AddNumberplateComponent,{data :{action:'edit',formData:formData,id:id}});
  }

  deleteNumberPlate(formData:Numberplate){
    const config = new MatDialogConfig();
    config.width = "70%";
    config.height = "90%";
    this.dialogref.open(DeleteNumberplateComponent,{data :{action:'delete',id:formData.id,regNo:formData.registrationNumber}});
  }
}
