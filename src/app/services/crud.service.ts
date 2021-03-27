import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from "@angular/router";

export class TODO {
  $key: string;
  title: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})

export class CrudService {

  constructor(
    private ngFirestore: AngularFirestore,
    private router: Router
  ) { }

  create(todo: TODO) {
    return this.ngFirestore.collection('tasks').add(todo);
  }

  getTasks() {
    return this.ngFirestore.collection('tasks').snapshotChanges();
  }
  
  getTask(id) {
    return this.ngFirestore.collection('tasks').doc(id).valueChanges();
  }

  update(id, todo: TODO) {
    this.ngFirestore.collection('tasks').doc(id).update(todo)
      .then(() => {
        this.router.navigate(['/todo-list']);
      }).catch(error => console.log(error));;
  }

  delete(id: string) {
    this.ngFirestore.doc('tasks/' + id).delete();
  }

}
