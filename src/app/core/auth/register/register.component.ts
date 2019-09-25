import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  forms: FormGroup;
  errorMessage: string;
  fetching: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.createReactiveForm();
  }

  createReactiveForm = () => {
    this.forms = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  submitForm() {
    this.fetching = true;
    this.errorMessage = '';
    const data = {
      username: this.forms.value.username,
      email: this.forms.value.email,
      password: this.forms.value.password
    };
    this.authService.register(data).pipe()
    .subscribe(
      () => { this.router.navigate(['/dashboard']); },
      error => {
        this.fetching = false;
        this.errorMessage = error;
      }
    );
  }

}
