import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarHomeComponent } from './numberplate-home/numberplate-home.component';
import { CarRoutingModule } from './cars-routing.module';
import { EntityDefinitionService } from '@ngrx/data';
import { numberplateEntityMetaData } from './store/number-plate-entity-metadata';
import { MatCardModule } from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { AddNumberplateComponent } from './add-numberplate/add-numberplate.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import { DeleteNumberplateComponent } from './delete-numberplate/delete-numberplate.component';
import { EditNumberplateComponent } from './edit-numberplate/edit-numberplate.component';

@NgModule({
  declarations: [
    CarHomeComponent,
    AddNumberplateComponent,
    DeleteNumberplateComponent,
    EditNumberplateComponent,
  ],
  imports: [
    CommonModule,
    CarRoutingModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatSnackBarModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
    MatRadioModule
  ]
})
export class CarsModule {
  constructor(entityDefinationService:EntityDefinitionService){
    entityDefinationService.registerMetadataMap(numberplateEntityMetaData)
  }
}

