import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  @Input() fileToUpload: File = null;
  @Output() fileToUploadChange: EventEmitter<File> = new EventEmitter<File>();

  imageUrl = '../../../assets/images/user-register.png';
  @Input() user: User;
  constructor() {
    this.user = new User();
  }

  ngOnInit() {
  }
}
