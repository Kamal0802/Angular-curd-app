import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DocumentData, DocumentSnapshot, Firestore, doc, updateDoc } from '@angular/fire/firestore';
import { CurdService } from 'src/app/curd.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  type:number=1;

 
  id:string=this.route.snapshot.params['id']
  constructor(private fs:Firestore,private curdService:CurdService ,private route:ActivatedRoute,private fb:FormBuilder){
    console.log(this.id);
 
    
  }

  currentData: any;
   data: any;

  StudentData:any=this.fb.group({
    FirstName:new FormControl("",Validators.required),
   LastName:new FormControl("",Validators.required),
    Email:new FormControl("",Validators.required),
    Age:new FormControl("",Validators.required),
    MobileNumber:new FormControl("",Validators.required),
    AlternateNumber:new FormControl("",Validators.required),
    gender:new FormControl("",Validators.required),
    DateOfBirth:new FormControl("",Validators.required),
    Department:new FormControl("",Validators.required),
    year:new FormControl("",Validators.required),
    Address:new FormControl("",Validators.required),

  })

  ngOnInit(): void {
    this.curdService.getCurrentData(this.id).then((snapshot: DocumentSnapshot<DocumentData>) => {
    
       this.data = snapshot.data();
      console.log(this.data);
      this.StudentData.setValue(this.data)
      

      
    })
    .catch((error) => {
      console.error(error);
      
    });
  
    if (this.id != null){
      this.type=0
    }
    
  }


 
  updateData(){

    const upd=doc(this.fs,"studentData",this.id)
   updateDoc(upd,this.StudentData.value)
    
    console.log(this.StudentData.value);
    this.StudentData.reset()
    alert("data Updated successfully")

  }
   

   
   

 

  getData(){

    this.curdService.addData(this.StudentData.value)
console.log(this.StudentData.value);
this.StudentData.reset()
alert("data added successfully")
  }

}
