import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private _snackbar:MatSnackBar) { }


  openSnackBar(msg:string){
    this._snackbar.open(msg,'',{duration:4000,
      verticalPosition:'top'});
  }

}
