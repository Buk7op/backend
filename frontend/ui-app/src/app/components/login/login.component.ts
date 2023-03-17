import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  type: string = "password";
  loginForm!: FormGroup;
  
  constructor(private fb: FormBuilder, private auth: AuthService) {
    
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onLogin(){
    if(this.loginForm.valid){
      this.auth.login(this.loginForm.value)
      .subscribe({
        next:(res) => {
          console.log("ok");
        },
        error: (err) => {
          console.log("NOT OK");
        }
      })
    }else{
      this.validateFormFields(this.loginForm);
    }
  }

  private validateFormFields(formGroup: FormGroup){
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if(control instanceof FormControl) {
        control.markAsDirty({onlySelf: true});
      }else if(control instanceof FormGroup){
        this.validateFormFields(control)
      }
    })
  }
}
