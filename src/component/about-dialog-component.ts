import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

type DialogData = {
    uiVersion: string,
    apiVersion: string,
    metadataVersion: string
};

@Component({
    selector: 'app-about-dialog',
    template: `
  <div mat-dialog-content>  
  <li><span>Version: </span>1.0.0</li>
  <li><span>Tech Stack: </span>angular jest ng-mocks cypress</li>
</div>`,
    styles: ['div { font-weight: normal; }']
})
export class AboutDialogComponent {

    constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }

}
