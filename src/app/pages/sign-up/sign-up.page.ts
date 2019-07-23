import { Component, OnInit, ViewChild } from '@angular/core';
import { SignUpFormComponent } from '../../components/sign-up-form/sign-up-form.component';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
  providers: [UserService]
})
export class SignUpPage implements OnInit {
  // tslint:disable-next-line:variable-name
  constructor(private userService: UserService, private readonly _router: Router) {
    this.user = new User();
    this.user.Gender = '';
  }
  @ViewChild('signUpForm') signUpForm: SignUpFormComponent;
  public isVisible = false;
  imageUrl = '/assets/img/default-img.png';
  fileToUpload: File = null;

  user: User;

  public IsValid() {
    this.isVisible = true;
  }

  ngOnInit() { }

  OnSubmit() {
    const isValid = this.signUpForm.IsValid();
    if (isValid) {
      this.user = this.signUpForm.GetForm();
      this.userService
        .SaveUser(this.user)
        .subscribe(data => {
          this.user.FirstName = null;
          this.user.LastName = null;
          this.user.Gender = null;
          this.user.Email = null;
          this.user.PhoneNumber = null;
          this.user.Password = null;
          this._router.navigate(['login']);
        });
    } else { console.log('Forms not complete'); }
  }
}
