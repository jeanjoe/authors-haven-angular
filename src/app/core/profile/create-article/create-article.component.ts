import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss']
})
export class CreateArticleComponent implements OnInit {

  forms: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.createFormBuilder();
  }

  createFormBuilder = () => {
    this.forms = this.formBuilder.group({
      title: ['', Validators.required]
    });
  }

  onSubmitForm = () => {
    console.log(this.forms.value);
  }

}
