import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';
import { drawers } from "../../../../../BackEnd/datas/drawers"
import { FormControl, FormGroup, Validators } from "@angular/forms"
import { ActivatedRoute } from "@angular/router"
import { Router } from '@angular/router';



@Component({
  selector: 'app-drawers',
  templateUrl: './drawers.component.html',
  styleUrls: ['./drawers.component.css']
})
export class DrawersComponent implements OnInit {

  drawers: any = drawers
  readData: any;
  successmsg: any;
  errormsg: any;
  getparamid: any;

  constructor(
    private service: ApiServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.getAllDataDrawers()
  }

  ngOnInit(): void {

  }

  userForm = new FormGroup({
    "isim": new FormControl("", Validators.required),
    "tablolar": new FormControl("", Validators.required),
  });

  
  ggg(id: any) {
    this.getparamid = id

    this.service.getSingleDataDrawers(this.getparamid).subscribe((res) => {
      console.log("res:::", res);

      this.userForm.patchValue({
        isim: res.isim,
        tablolar: res.tablolar
      })

    })

  }


  
  //  CREATE NEW USER
  userSubmit() {

    if (this.userForm.valid) {

      console.log(this.userForm.value);

      this.service.createDataDrawers(this.userForm.value).subscribe((res) => {
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
      this.service.updateDataDrawers(this.userForm.value, this.getparamid).subscribe((res) => {
        console.log("resUpdated2", res);

      })
      this.router.navigateByUrl('/drawers');

    } else {

    }

  }


  //  GET DELETE ID 
  deleteID(id: any) {

    console.log("deleteID:", id);
    this.service.deleteDataDrawers(id).subscribe((res) => {

      console.log("deleteRES:", res);

      this.successmsg = res.message
      this.getAllDataDrawers()

    })

  }

  getAllDataDrawers() {
    this.service.getAllDataDrawers().subscribe((res) => {
      console.log("res:", res);
      this.readData = res;

    })


  }


}
