import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;
  errmsg: any;
  errmsgShow = false;

  constructor(
    private formBuilder: FormBuilder,
    private service: ApiserviceService,
    private router: Router
  ) {
    this.signUpForm = this.formBuilder.group({
      emailId: ['', Validators.required],
      fullName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  sigUpSubmit() {
    if (this.signUpForm.valid) {
      console.log(this.signUpForm.value);
      this.errmsgShow = false;

      // Call API
      this.service.onLogin(this.signUpForm.value).subscribe((res: any) => {
        console.log(res, 'signup');

        if (res.message == 'User Email Already Present') {
          alert('User Email Already Present');
        } else {
          alert('Success');
        }
      });
    } else {
      this.errmsgShow = true;
      this.errmsg = 'All fields are required';
    }
  }
}
