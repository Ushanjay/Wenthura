import { Component, OnInit } from '@angular/core';
import {NbWindowRef} from "@nebular/theme";
import {NzMessageService, NzUploadFile} from "ng-zorro-antd";
import {Observable, Observer} from "rxjs";

@Component({
  template: `
    <form class="form">
      <div class="up">
      <nz-upload
        class="avatar-uploader"
        nzAction="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        nzName="avatar"
        nzListType="picture-card"
        [nzShowUploadList]="false"
        [nzBeforeUpload]="beforeUpload"
        (nzChange)="handleChange($event)"
      >
        <ng-container *ngIf="!avatarUrl">
          <i class="upload-icon" nz-icon [nzType]="loading ? 'loading' : 'plus'"></i>
          <div class="ant-upload-text">Upload</div>
        </ng-container>
        <img *ngIf="avatarUrl" [src]="avatarUrl" style="width: 100%"/>
      </nz-upload>
      </div>

      <input type="text" nbInput fullWidth placeholder="Company Name">
      <textarea rows="5" nbInput fullWidth placeholder="Discription"></textarea>
      <nb-select fullWidth selected="Wedding">
        <nb-option value="Wedding">Wedding</nb-option>
        <nb-option value="Parties">Parties</nb-option>
      </nb-select>
      <input type="email" nbInput fullWidth placeholder="E-mail">
      <input type="text" nbInput fullWidth placeholder="Contact No">
      <button status="info" nbButton outline>Submit</button>
    </form>
  `,
  styleUrls: ['edit-profile.component.scss'],
})
export class EditProfileComponent{
  loading = false;
  avatarUrl?: string;

  constructor(public windowRef: NbWindowRef , private msg: NzMessageService) {}

  close() {
    this.windowRef.close();
  }

  beforeUpload = (file: NzUploadFile, _fileList: NzUploadFile[]) => {
    return new Observable((observer: Observer<boolean>) => {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) {
        this.msg.error('You can only upload JPG file!');
        observer.complete();
        return;
      }
      const isLt2M = file.size! / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.msg.error('Image must smaller than 2MB!');
        observer.complete();
        return;
      }
      observer.next(isJpgOrPng && isLt2M);
      observer.complete();
    });
  };

  private getBase64(img: File, callback: (img: string) => void): void {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result!.toString()));
    reader.readAsDataURL(img);
  }

  handleChange(info: { file: NzUploadFile }): void {
    switch (info.file.status) {
      case 'uploading':
        this.loading = true;
        break;
      case 'done':
        // Get this url from response in real world.
        this.getBase64(info.file!.originFileObj!, (img: string) => {
          this.loading = false;
          this.avatarUrl = img;
        });
        break;
      case 'error':
        this.msg.error('Network error');
        this.loading = false;
        break;
    }
  }

}

