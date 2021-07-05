import { Component, OnInit } from '@angular/core';
import {Inventory} from "../../../model/inventory";
import {Observable} from "rxjs";
import {InventoryService} from "../../../services/inventory.service";
import {Router} from "@angular/router";
import {Finance} from "../../../model/finance";
import {FinanceService} from "../../../services/finance.service";

@Component({
  selector: 'app-manage-expenditures',
  templateUrl: './manage-expenditures.component.html',
  styleUrls: ['./manage-expenditures.component.scss']
})
export class ManageExpendituresComponent implements OnInit {

  inv: Finance = new Finance();
  finance: Observable<Finance[]>;
  aid: number;
  constructor(private financeService: FinanceService,
              private router: Router) {}

  ngOnInit() {
    this.getTable();
  }


  settings = {

    add: {

      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,

    },

    edit: {

      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave:true,

    },

    delete: {

      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,

    },


    columns: {

      id: {

        title: 'ID',

        type:'number',

        editable: false,
        addable: false,


      },

      finDate: {

        title: 'Date',

        type: 'string',

      },

      finDescription: {

        title: 'Description',

        type: 'string',

      },

      finExpen: {

        title: 'Transaction',

        type: 'html',
        editor: {
          type: 'list',
          config: {
            list: [{ value: 'Income', title: 'Income' }, { value: 'Expenditure', title: 'Expenditure' }]
          }
        }

      },

      finAmount: {

        title: 'Amount',

        type: 'number',

      },

      finPrice: {

        title: 'Price',

        type: 'number',


      },

      finTPrice: {

        title: 'Total Price',

        type: 'number',

      },

    },

  };



  public getTable(){
    this.financeService.getAllFinance().subscribe(
      res => {
        this.finance =res;
        console.log(res);
      },
      err =>{
        alert("An error occured during process!")
      }

    )
  }

  onDeleteConfirm(event): void {

    if (window.confirm('Are you sure you want to delete?')) {

      this.deleteFinance(event);


    } else {

      event.confirm.reject();

    }

  }

  deleteFinance(event): void{
    this.aid = event.data.id;
    this.financeService.deleteFinance(this.aid).subscribe(
      res => {
        console.log(res);
        event.confirm.resolve(event.source.data);
        this.getTable();
      },
      error =>{
        alert("An error occured during process!")
      }
    )
  }

  onCreateConfirm(event) {

    // @ts-ignore
    let newFinance : Finance = {
      id: null,
      finDate: event.newData.finDate,
      finDescription:event.newData.finDescription,
      finExpen:event.newData.finExpen,
      finAmount:event.newData.finAmount,
      finPrice:event.newData.finPrice,
      finTPrice:event.newData.finTPrice
    };

    this.financeService.createFinance(newFinance).subscribe(
      res =>{
        console.log(res);
        event.confirm.resolve(event.data);
        this.getTable();
      },
      error => console.log(error));
  }

  onSaveConfirm(event) {
    // @ts-ignore
    let newFinance : Finance = {
      id: event.newData.id,
      finDate: event.newData.finDate,
      finDescription:event.newData.finDescription,
      finExpen:event.newData.finExpen,
      finAmount:event.newData.finAmount,
      finPrice:event.newData.finPrice,
      finTPrice:event.newData.finTPrice
    };
    this.aid = event.newData.id;
    this.financeService.updateFinance(this.aid,newFinance).subscribe(
      res =>{
        console.log(res);
        event.confirm.resolve(event.newData);
        this.getTable();
      },
      error => console.log(error));

  }

}
