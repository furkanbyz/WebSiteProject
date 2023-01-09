import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';
import { writers } from "../../../../../BackEnd/datas/writers"
import { FormControl, FormGroup, Validators } from "@angular/forms"
import { ActivatedRoute } from "@angular/router"
import { Router } from '@angular/router';



@Component({
  selector: 'app-writers',
  templateUrl: './writers.component.html',
  styleUrls: ['./writers.component.css']
})
export class WritersComponent implements OnInit {

  writers: any = writers
  readData: any;
  successmsg: any;
  errormsg: any;
  getparamid: any;

  constructor(
    private service: ApiServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.getAllDataWriters()
  }

  ngOnInit(): void {

  }

  userForm = new FormGroup({
    "isim": new FormControl("", Validators.required),
    "kitaplar": new FormControl("", Validators.required),
  });

  
  ggg(id: any) {
    this.getparamid = id

    this.service.getSingleDataWriters(this.getparamid).subscribe((res) => {
      console.log("res:::", res);

      this.userForm.patchValue({
        isim: res.isim,
        kitaplar: res.kitaplar
      })

    })

  }


  
  //  CREATE NEW USER
  userSubmit() {

    if (this.userForm.valid) {

      console.log(this.userForm.value);

      this.service.createDataWriters(this.userForm.value).subscribe((res) => {
        console.log("res:", res);
        this.userForm.reset()

        this.successmsg = res.message;

      })
    }
    else {
      this.errormsg = "all field is required !"

    }

  }

  // UPDATE DATA
  userUpdate() {
    console.log("updatedForm", this.userForm.value);

    if (this.userForm.valid) {
      this.service.updateDataWriters(this.userForm.value, this.getparamid).subscribe((res) => {
        console.log("resUpdated2", res);

      })
      this.router.navigateByUrl('/writers');

    } else {

    }

  }


  //  GET DELETE ID 
  deleteID(id: any) {

    console.log("deleteID:", id);
    this.service.deleteDataWriters(id).subscribe((res) => {

      console.log("deleteRES:", res);

      this.successmsg = res.message
      this.getAllDataWriters()

    })

  }

  getAllDataWriters() {
    this.service.getAllDataWriters().subscribe((res) => {
      console.log("res:", res);
      this.readData = res;

    })


  }


}
