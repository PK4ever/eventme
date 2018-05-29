import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {AuthService} from '../auth.service';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';
import {FormsModule, NgForm} from '@angular/forms';
import { LoginComponent} from '../login/login.component';
import {NgClass} from '@angular/common';
import {document} from 'ngx-bootstrap/utils/facade/browser';
import index from '@angular/cli/lib/cli';
import {DataService} from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  appName = 'eventme';
  constructor(public authService: AuthService, private afs: AngularFirestore, private firebaseAuth: AngularFireAuth, private router: Router, private loginComponent: LoginComponent, private dataService: DataService) {
    this.firebaseAuth.authState.subscribe(user => {
      if (user) {
        this.dataService.getUserDocs(user.uid);
      }
    });
  }
  ngOnInit() {
  }
  logout() {
    this.loginComponent.logout();
  }
}

  // resetForm(form: NgForm) {
  //   form.reset();
  // }



