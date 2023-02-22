import { Component,OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EntityCollectionService, EntityCollectionServiceFactory } from '@ngrx/data';
import { Numberplate } from '../cars/store/numberplate';
import { DialogDeleteData } from '../shared/models/dialog-data';
import { SnackbarService } from '../shared/snackbar.service';

@Component({
  selector: 'app-delete-numberplate',
  templateUrl: './delete-numberplate.component.html',
  styleUrls: ['./delete-numberplate.component.scss']
})
export class DeleteNumberplateComponent implements OnInit{
  id:string
  numberplateService : EntityCollectionService<Numberplate>
  regNo:string;

  constructor(@Inject(MAT_DIALOG_DATA) public appData: DialogDeleteData,public dialogRef: MatDialogRef<DeleteNumberplateComponent>,public snackBarService:SnackbarService,entityColServiceFactory:EntityCollectionServiceFactory){
    this.numberplateService = entityColServiceFactory.create<Numberplate>("Numberplate");

  }

  ngOnInit(): void {
    this.id = this.appData.id;
    this.regNo = this.appData.regNo;
    this.numberplateService.getAll();
  }

  deleteNumberplate(){
    this.numberplateService.delete(this.id).subscribe(() =>{
      this.dialogRef.close();
      this.snackBarService.openSnackBar(' '+this.regNo+' Numberplate has been deleted successfully');
    })
  }
}
