import { Component, Inject }  from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

export interface Dialog {
  title: String,
  content: String,
  onSuccess(): void
}

@Component({
  selector: 'dialog-service',
  templateUrl: 'dialog.html',
  standalone: true,
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
})
export class DialogService {
  constructor(
    public dialogRef: MatDialogRef<DialogService>,
    @Inject(MAT_DIALOG_DATA) public data: Dialog
  ){}

  onClose(): void {
    this.dialogRef.close()
  }

  onSuccess() {
    if(this.data.onSuccess) {
      this.data.onSuccess()
    }
  }
}
