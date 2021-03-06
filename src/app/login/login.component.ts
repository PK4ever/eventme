import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {AngularFireAuth} from 'angularfire2/auth';
import {AuthService} from '../auth.service';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  constructor(public authService: AuthService, private router: Router) {
     }
  ngOnInit() {
  }
login() {
  this.authService.login();
}
logout() {
  this.authService.logout();
  this.router.navigate(['/']);
}
}
