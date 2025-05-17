import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { LoginService } from '../login/login.service';


@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [RouterLink,RouterOutlet,CommonModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {

  constructor(private routes:Router,private userservice:LoginService){}

  

  onLogoff(){
   
    this.routes.navigate(["/login"])
  }

 
}
