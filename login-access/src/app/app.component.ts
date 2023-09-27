import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from './users/apiservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'login-access';
  showmenu = false;
  token = this.service.getToken();
  ngOnInit(): void {
    if (this.token) {
      this.showmenu = true;
    } else {
      this.showmenu = false;
    }
  }
  constructor(private service: ApiserviceService, private router: Router) {}

  onDelete() {
    localStorage.clear();
    console.log('logout');
    this.router.navigate(['login']).then((res) => {
      window.location.reload();
    });
    //
  }
}
