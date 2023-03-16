import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signUpForm!: FormGroup;
  
  constructor(private fb: FormBuilder) {
    
  }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(){
    if(this.signUpForm.valid){
      console.log(this.signUpForm.value);
    }else{
      this.validateFormFields(this.signUpForm);
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

  resolveError(control: string): boolean{
    return this.signUpForm.controls[control].dirty && this.signUpForm.hasError('required', control);
  }
}
