import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsComponent } from '../../components/forms/forms.component';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UploadImageService } from 'src/services/user.service';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.page.html',
  styleUrls: ['./sing-up.page.scss'],
  providers: [UploadImageService]
})
export class SingUpPage implements OnInit {
  // tslint:disable-next-line:variable-name
  constructor(private imageService: UploadImageService, private readonly _router: Router) {
    this.user = new User();
    this.user.Gender = '';
  }
  @ViewChild('userComponent') userComponent: FormsComponent;
  public isVisible = false;
  imageUrl = '/assets/img/default-img.png';
  fileToUpload: File = null;

  user: User;

  public IsValid() {
    this.isVisible = true;
  }

  ngOnInit() { }

  OnSubmit() {
    const isValid = this.userComponent.IsValid();
    if (isValid) {
      this.user = this.userComponent.GetForm();
      const result = this.imageService.register(this.user);
      //   this.imageService
      //     .register(this.user)
      //     .subscribe(data => {
      //       this.user.FirstName = null;
      //       this.user.LastName = null;
      //       this.user.Gender = null;
      //       this.user.DateOfBirth = null;
      //       this.imageUrl = '/assets/img/default-img.png';
      //       this._router.navigate(['login']);
      //     });
      // } else { console.log('Forms not complete'); }
    }
  }
}
