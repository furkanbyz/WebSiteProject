import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';
import { actors } from "../../../../../BackEnd/datas/actors"
import { FormControl, FormGroup, Validators } from "@angular/forms"
import { ActivatedRoute } from "@angular/router"
import { Router } from '@angular/router';



@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {

  actors: any = actors
  readData: any;
  successmsg: any;
  errormsg: any;
  getparamid: any;

  constructor(
    private service: ApiServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.getAllDataActors()
  }

  ngOnInit(): void {

  }

  userForm = new FormGroup({
    "isim": new FormControl("", Validators.required),
    "filmler": new FormControl("", Validators.required),
  });

  
  ggg(id: any) {
    this.getparamid = id

    this.service.getSingleDataActors(this.getparamid).subscribe((res) => {
      console.log("get single data", res);

      this.userForm.patchValue({
        isim: res.isim,
        filmler: res.filmler
      })

    })

  }


  //  CREATE NEW USER
  userSubmit() {

    if (this.userForm.valid) {

      console.log(this.userForm.value);

      this.service.createDataActors(this.userForm.value).subscribe((res) => {
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
      this.service.updateDataActors(this.userForm.value, this.getparamid).subscribe((res) => {
        console.log("resUpdated2", res);

      })
      this.router.navigateByUrl('/actors');

    } else {

    }

  }


  //  GET DELETE ID 
  deleteID(id: any) {

    console.log("deleteID:", id);
    this.service.deleteDataActors(id).subscribe((res) => {

      console.log("deleteRES:", res);

      this.successmsg = res.message
      this.getAllDataActors()

    })

  }

  getAllDataActors() {
    this.service.getAllDataActors().subscribe((res) => {
      console.log("res:", res);
      this.readData = res;

    })


  }


}
