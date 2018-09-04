import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  loginUser(e) {
    e.preventDefault();
    console.log(e);
    const username = e.target.elements[0].value;
    const password = e.target.elements[1].value;
   if (username === 'admin@gmail.com' && password === 'admin') {
      this.router.navigate(['additem']);
   } else if (username === 'anusha@gmail.com' && password === 'anusha') {
    this.router.navigate(['additem']);
   } else {
     alert(' Login failed ');
   }
  }

  onSubmit() {
    const username = '';
    const password = '';
    if (username === '' && password === '') {
      // this.router.navigate('../login');
      alert('Username and password is required!');
    }
  }

}
