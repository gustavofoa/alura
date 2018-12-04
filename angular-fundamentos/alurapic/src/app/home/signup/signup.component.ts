import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { lowerCaseValidator } from 'src/app/shared/validators/lower-case.validator';
import { UserNoTakenValidatorService } from './user-no-taken.validator.service';
import { NewUser } from './new-user';
import { SignUpService } from './signup.service';
import { Router } from '@angular/router';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';

@Component({
  selector: 'ap-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  providers: [ UserNoTakenValidatorService, SignUpService ]
})
export class SignUpComponent implements OnInit {

  signupForm: FormGroup;
  @ViewChild('emailInput') emailInput: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private userNotTakenValidatorService: UserNoTakenValidatorService,
    private signUpService: SignUpService,
    private router: Router,
    private platformDetectorService: PlatformDetectorService
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
    this.platformDetectorService.isPlatformBrowser() &&
            this.emailInput.nativeElement.focus();
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
