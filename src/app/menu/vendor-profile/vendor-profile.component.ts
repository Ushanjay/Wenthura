import { Component, OnInit } from '@angular/core';
import {NbWindowService} from "@nebular/theme";
import {EditProfileComponent} from "./edit-profile/edit-profile.component";

@Component({
  selector: 'app-vendor-profile',
  templateUrl: './vendor-profile.component.html',
  styleUrls: ['./vendor-profile.component.scss']
})
export class VendorProfileComponent implements OnInit {

  constructor(private windowService: NbWindowService) { }

  ngOnInit(): void {
  }
  openWindowForm() {
    this.windowService.open(EditProfileComponent, { title: `Edit Profile` });
  }
}
