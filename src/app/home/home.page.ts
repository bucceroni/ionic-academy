import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private router: Router) { }

  myVar = 'this.is my text'

  foo() {
    return 'Hello Angular'
  }
  openPage() {
    console.log('Hello Angular')
    this.router.navigateByUrl('/details')
  }

}
