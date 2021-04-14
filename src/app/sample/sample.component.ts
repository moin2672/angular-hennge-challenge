import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-sample",
  templateUrl: "./sample.component.html",
  styleUrls: ["./sample.component.css"]
})
export class SampleComponent implements OnInit {
  actualdata: any[] = [
    {
      id: 1,
      from: "donotreply@dnd.com",
      to: "asdf@gmail.com",
      cc: "asdf1@gmail.com",
      bcc: "",
      subject: "Free shopping voucher",
      body: "This is a sample mail",
      date: "01/02/2021"
    },
    {
      id: 2,
      from: "donotreply1@dnd.com",
      to: "asdf@gmail1.com",
      cc: "asdf11@gmail.com",
      bcc: "asdf21@gmail.com",
      subject: "Free shopping voucher",
      body: "This is a sample mail for shopping voucher",
      date: "02/03/2021"
    },
    {
      id: 3,
      from: "donotreply2@dnd.com",
      to: "asdf@gmail2.com",
      cc: "asdf12@gmail.com",
      bcc: "asdf22@gmail.com",
      subject: "Free coupon voucher",
      body: "This is a sample mail for coupon voucher",
      date: "03/04/2021"
    },
    {
      id: 4,
      from: "donotreply3@dnd.com",
      to: "asdf@gmail3.com",
      cc: "asdf13@gmail.com",
      bcc: "asdf23@gmail.com",
      subject: "Free az voucher",
      body: "This is a sample mail for az voucher",
      date: "04/05/2021"
    },
    {
      id: 5,
      from: "donotreply4@dnd.com",
      to: "asdf@gmail4.com",
      cc: "asdf14@gmail.com",
      bcc: "asdf24@gmail.com",
      subject: "Free fp voucher",
      body: "This is a sample mail for fp voucher",
      date: "05/06/2021"
    },
    {
      id: 6,
      from: "donotreply5@dnd.com",
      to: "asdf@gmail5.com",
      cc: "asdf15@gmail.com",
      bcc: "asdf25@gmail.com",
      subject: "Free mn voucher",
      body: "This is a sample mail for mn voucher",
      date: "06/07/2021"
    },
    {
      id: 7,
      from: "donotreply6@dnd.com",
      to: "asdf@gmail6.com",
      cc: "asdf16@gmail.com",
      bcc: "asdf26@gmail.com",
      subject: "Free fp voucher",
      body: "This is a sample mail for msho voucher",
      date: "07/08/2021"
    }
  ];
  data: any[];
  fromDateValue = "";
  toDateValue = "";
  form: FormGroup;
  resetFilter:boolean=false;
  constructor() {}

  ngOnInit() {
    this.form = new FormGroup({
      fromDate: new FormControl(this.fromDateValue),
      toDate: new FormControl(this.toDateValue)
    });
    this.data = this.actualdata;
    // this.data = this.actualdata.filter(
    //   value => new Date(value.date) > new Date()
    // );
  }

  onSearchMail() {
    //console.log(this.form.value);
    console.log(this.form.value);
    // if (this.form.value.searchText != null) {
    //   searchText = this.form.value.searchText;
    // }
    if (this.form.value.fromDate != "" && this.form.value.toDate != "") {
      // this.data=this.actualdata.filter(value => {
      //   if(new Date(value.date) > new Date(this.form.value.fromDate) && true){
      //     return true;
      //   }else{
      //     return false;
      //   }
      // });
      this.data = this.actualdata.filter(
        value =>
          new Date(value.date) >= new Date(this.form.value.fromDate) &&
          new Date(value.date) <= new Date(this.form.value.toDate)
      );
      this.resetFilter=!this.resetFilter;
    }
  }

  onReset(){
    this.data = this.actualdata;
    this.resetFilter=!this.resetFilter;
    this.form.reset;
    this.form.setValue({
      fromDate:this.fromDateValue,
      toDate:this.toDateValue
    });
  }
}
