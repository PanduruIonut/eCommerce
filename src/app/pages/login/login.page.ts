import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/services/user.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  providers: [UserService]
})
// tslint:disable-next-line:component-class-suffix
export class LoginPage implements OnInit {

  imageUrl = '../../../assets/images/userlogin.png';
  Forms: FormGroup;
  user: User;


  constructor(private userService: UserService, private readonly _router: Router, private formBuilder: FormBuilder) {
    this.user = new User();
  }
  ngOnInit(): void {
    this.Forms = this.formBuilder.group({
      Email: new FormControl(this.user.Email, [
        Validators.required,
      ]),
      Password: new FormControl(this.user.Password, [
        Validators.required
      ]),
    });
  }
  get f() { return this.Forms.controls; }

  onSubmit() {
    if (this.user.Email !== '' && this.user.Password !== '') {

      this.userService
        .postLogin(this.user.Email, this.user.Password)
        .subscribe(data => {
          this._router.navigate(['products']);
        });
    }
  }
  ShowSection() {
    this._router.navigate(['sign-up']);
  }

}
