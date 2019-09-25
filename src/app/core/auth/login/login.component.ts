import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  forms: FormGroup;
  fetching = false;
  errorMessage: string;
  returnUrl: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private authService: AuthService
    ) {
      if (this.authService.currentUserValue) {
        this.router.navigate(['/dashboard']);
      }
    }

  ngOnInit() {
    // tslint:disable-next-line: no-string-literal
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
    this.createReactiveForm();
  }

  createReactiveForm = () => {
    this.forms = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  formControls = () => {
    return this.forms.controls;
  }

  submitForm = () => {
    this.fetching = true;
    this.errorMessage = '';
    const data = {
      email: this.forms.value.email,
      password: this.forms.value.password
    };
    this.authService.login(data).pipe()
    .subscribe(
      res => {
        this.router.navigate([this.returnUrl]);
      },
      error => {
        this.fetching = false;
        this.errorMessage = error;
      }
    );
  }

}
