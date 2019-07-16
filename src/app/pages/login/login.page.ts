import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
//   providers: [UploadImageService]
})
// tslint:disable-next-line:component-class-suffix
export class LoginPage implements OnInit {

  imageUrl = '../../../assets/images/userlogin.png';
  public isSectionVisible = false;
  submitted = false;


  constructor() { }

  ngOnInit() {
  }

//   OnSubmit(userName: any) {
//     this.submitted = true;

//     // var passwoad= userName.controls['passwoad'].value; 


//     // this.imageService
//     //     .postLogin(userName)
//     //     .subscribe(data => {
//     //       this._router.navigate(['/home']);
//     //     }); }
// //   ShowSection() {
// //     this.isSectionVisible = true;
//   }

}
