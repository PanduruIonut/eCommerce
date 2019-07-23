import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/user.model';


@Component({
  selector: 'app-forms',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})

export class SignUpFormComponent implements OnInit {
  @Input() user: User;
  Forms: FormGroup;

  public submitted = false;

  constructor(private formBuilder: FormBuilder) {
    this.user = new User();
  }

  ngOnInit(): void {
    this.Forms = this.formBuilder.group({
      FirstName: new FormControl(this.user.FirstName, [
        Validators.required,
        Validators.minLength(3)
      ]),
      LastName: new FormControl(this.user.LastName, [
        Validators.required,
        Validators.minLength(3)
      ]),
      Gender: new FormControl(this.user.Gender, [
        Validators.required
      ]),
      Email: new FormControl(this.user.Email, [
        Validators.required,
      ]),
      PhoneNumber: new FormControl(this.user.PhoneNumber, [
        Validators.required
      ]),
      Password: new FormControl(this.user.Password, [
        Validators.required
      ]),
    });
  }
  get f() { return this.Forms.controls; }

  public IsValid() {
    this.submitted = true;
    return this.Forms.valid;
  }
  public GetForm() {
    return this.Forms.value;
  }


}
