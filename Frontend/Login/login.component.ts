import { Component } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { ErpService } from './erp.service';
// import { ErpService } from '../erp.service';

// /** Error when invalid control is dirty, touched, or submitted. */
// export class MyErrorStateMatcher implements ErrorStateMatcher {
//   isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//     const isSubmitted = form && form.submitted;
//     return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
//   }
// }

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  // matcher = new MyErrorStateMatcher();

  constructor(private erpservice:ErpService){
    let data ={"username":"tono","password":"1234"}
    
    this.erpservice.login(data).subscribe(x => {
      console.log("sucses",x)
    })
  }


}