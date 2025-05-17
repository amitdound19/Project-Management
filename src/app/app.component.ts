import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SaveprojectComponent } from './saveproject/saveproject.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { WelcomeComponent } from './welcome/welcome.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoginComponent,SaveprojectComponent,HeaderComponent,WelcomeComponent,CommonModule,RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'ProjectManagement';

    menuType:string="default";
  constructor(private routes:Router){}
 
  ngOnInit(): void {
    
  }
}
