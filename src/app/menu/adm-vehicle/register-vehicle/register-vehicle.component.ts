import {Component, Input, OnInit, Output, TemplateRef, ViewChild} from '@angular/core';
import {NbWindowRef, NbWindowService} from "@nebular/theme";
import {NzMessageService, NzUploadFile} from "ng-zorro-antd";
import {Observable, Observer} from "rxjs";
import {EventEmitter} from "events";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Vehicle} from "../../../model/vendor";
import {VehicleServiceService} from "../../../services/vehicles-service.service";

// noinspection AngularMissingOrInvalidDeclarationInModule
@Component({

  selector: 'app-register-vehicle',
  templateUrl: './register-vehicle.component.html',
  styleUrls: ['./register-vehicle.component.scss']
})

export class RegisterVehicleComponent implements OnInit{

  loading = false;
  avatarUrl?: string;
  vehicle: Vehicle = new Vehicle();
  veh: Vehicle = new Vehicle();
  cars: Array<Vehicle>;
  carsRecieved: Array<Vehicle>;
  action: string;
  aid: number;
  selectedCar: Vehicle;
  @ViewChild('Updateform', {read: TemplateRef}) escCloseTemplate: TemplateRef<HTMLElement>;
  @Input()
  car: Vehicle;

  @Output()
  carAddedEvent = new EventEmitter();
  private selectedFile;
  imgURL: any;

  constructor(private httpClientService: VehicleServiceService,
              private activedRoute: ActivatedRoute,
              private router: Router,
              private httpClient: HttpClient,
              private msg: NzMessageService,
              private windowService: NbWindowService) {
  }

  ngOnInit(): void {
    this.refreshData();
    this.toggleLoadingAnimation();
  }

  public onFileChanged(event) {
    console.log(event);
    this.selectedFile = event.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event2) => {
      this.imgURL = reader.result;
    };

  }

  saveCar() {
    if (this.vehicle.id == null) {
      const uploadData = new FormData();
      uploadData.append('imageFile', this.selectedFile, this.selectedFile.name);
      this.selectedFile.imageName = this.selectedFile.name;

      this.httpClient.post('http://localhost:8080/springboot-crud-rest/vehicle/upload', uploadData, {observe: 'response'})
        .subscribe((response) => {
            if (response.status === 200) {
              this.httpClientService.addBook(this.vehicle).subscribe(
                res => {
                  this.vehicle = new Vehicle();
                  location.reload()
                }
              );
              console.log('Image uploaded successfully');
            } else {
              console.log('Image not uploaded successfully');
            }
          }
        );
    } else {
      this.httpClientService.updateBook(this.vehicle).subscribe(
        (book) => {
          location.reload();
          console.log('uploaded successfully');
        }
      );
    }
  }

  refreshData() {
    this.httpClientService.getBooks().subscribe(
      response => this.handleSuccessfulResponse(response)
    );
    this.activedRoute.queryParams.subscribe(
      (params) => {
        // get the url parameter named action. this can either be add or view.
        this.action = params['action'];
        // get the parameter id. this will be the id of the book whose details
        // are to be displayed when action is view.
        const id = params['id'];
        // if id exists, convert it to integer and then retrive the book from
        // the books array
        if (id) {
          this.selectedCar = this.cars.find(car => {
            return car.id === +id;
          });
        }
      }
    );
  }

// we will be taking the books response returned from the database
// and we will be adding the retrieved
  handleSuccessfulResponse(response) {
    this.cars = new Array<Vehicle>();
    //get books returned by the api call
    this.carsRecieved = response;
    for (const car of this.carsRecieved) {

      const carwithRetrievedImageField = new Vehicle();
      carwithRetrievedImageField.id = car.id;
      carwithRetrievedImageField.name = car.name;
      //populate retrieved image field so that book image can be displayed
      carwithRetrievedImageField.retrievedImage = 'data:image/jpeg;base64,' + car.picByte;
      carwithRetrievedImageField.author = car.author;
      carwithRetrievedImageField.price = car.price;
      carwithRetrievedImageField.picByte = car.picByte;
      this.cars.push(carwithRetrievedImageField);
    }
  }

  deleteCar(event) {
    this.aid = event;
    this.httpClientService.deleteBook(this.aid).subscribe(
      res => {
        location.reload();
      },
      error => {
        alert("An error occured during process!")
      }
    )
  }

  toggleLoadingAnimation() {
    this.loading = true;
    setTimeout(() => this.loading = false, 3000);
  }
  // addBook() {
  //   this.selectedBook = new Vendor();
  //   this.router.navigate(['menu', 'adm-vendor'], { queryParams: { action: 'add' } });
  // }
  //
  // viewBook(id: number) {
  //   this.router.navigate(['menu/adm-vendor/reg-ven','view-book'], { queryParams: { id, action: 'view' } });
  //   console.log(id);
  // }
  openWindowForm(event) {
    this.windowService.open(this.escCloseTemplate, {title: 'Update', hasBackdrop: true},);
    this.veh = new Vehicle();
    this.veh = event;
    console.log("Fuck")
    console.log(event);
    console.log(this.veh);
  }

  editCar(event) {
    this.veh = new Vehicle();
    this.veh = event;
    console.log("Here Am I")
    console.log(this.veh)
    if (this.veh.id == null) {
      const uploadData = new FormData();
      uploadData.append('imageFile', this.selectedFile, this.selectedFile.name);
      this.selectedFile.imageName = this.selectedFile.name;

      this.httpClient.post('http://localhost:8080/springboot-crud-rest/vehicle/upload', uploadData, {observe: 'response'})
        .subscribe((response) => {
            if (response.status === 200) {
              this.httpClientService.addBook(this.veh).subscribe(
                res => {
                  this.veh = new Vehicle();
                  location.reload()
                }
              );
              console.log('Image uploaded successfully');
            } else {
              console.log('Image not uploaded successfully');
            }
          }
        );
    } else {
      this.httpClientService.updateBook(this.veh).subscribe(
        (book) => {
          location.reload();
          console.log('uploaded successfully');
        }
      );
    }
  }
}
