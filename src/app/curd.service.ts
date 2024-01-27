import { Injectable } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurdService {
  constructor(private fs: Firestore) {}

  addData(data: object) {
    const colInst = collection(this.fs, 'studentData');
    addDoc(colInst, data)
      .then(() => {
        console.log('data saved successfully');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getData() {
    const col = collection(this.fs, 'studentData');
    return collectionData(col, { idField: 'id' });
  }

  delete(id: string) {
    const coll = doc(this.fs, 'studentData', id);
    return deleteDoc(coll)
      .then(() => {
        console.log('data deleted');
      })
      .catch((err) => {
        console.log(err);
      });
  }

   getCurrentData(id:string){

    const colt = doc(collection(this.fs,"studentData"),id)
    
    return getDoc(colt)
       
  }


  updateData(id: string,data: any){

    const upd=doc(this.fs,"studentData",id)
   return updateDoc(upd,data)
    console.log( updateDoc(upd,data));
    

  }
}
