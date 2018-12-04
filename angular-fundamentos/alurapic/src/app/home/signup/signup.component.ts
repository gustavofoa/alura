import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { lowerCaseValidator } from 'src/app/shared/validators/lower-case.validator';
import { UserNoTakenValidatorService } from './user-no-taken.validator.service';
import { NewUser } from './new-user';
import { SignUpService } from './signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ap-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignUpComponent implements OnInit {

  signupForm: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private userNotTakenValidatorService: UserNoTakenValidatorService,
    private signUpService: SignUpService,
    private router: Router
  ) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      userName: ['', 
        [Validators.required, Validators.minLength(2), Validators.maxLength(30), lowerCaseValidator],
        [this.userNotTakenValidatorService.checkUserNameTaken()]
      ],
      fullName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(40)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(14)]]
    });
  }

  signup() {
    const newUser = this.signupForm.getRawValue() as NewUser;
    this.signUpService
    .signup(newUser)
    .subscribe(
      () => this.router.navigate(['']),
      err => console.log(err)
    );
  }

}
