import { Component } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { CurdService } from 'src/app/curd.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {
  InputData!:any;
  constructor(private fs:Firestore,private curdservice:CurdService){
    this.getdata()
  
  }

  getdata(){
    this.curdservice.getData().subscribe((data)=>{
      this.InputData=data;
      console.log(data);
      
    })
  }

  deleteData(id:string){
         this.curdservice.delete(id)
         alert("data deleted Successfully")
        }

  editData(data: any){
    console.log(data);
    
  }  

}
