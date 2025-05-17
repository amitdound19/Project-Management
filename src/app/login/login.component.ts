import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Users } from './login.dto';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  
constructor(private loginService:LoginService,private fb:FormBuilder,private routes:Router){}

  userlist:Users[]=[];

  loginform!:FormGroup;

  ngOnInit(): void {

    this.loginform=this.fb.group({
      uid:['',[Validators.required]],
      email:['',[Validators.required]],
      password:['',[Validators.required]]
    })
    
  }


  get Uid(){
    return this.loginform.get("uid");
  }

  get email(){
    return this.loginform.get("email")
  }

  get password(){
    return this.loginform.get("password")
  }



  onLogin(){
    let user= {email:this.loginform.value.email,password:this.loginform.value.password};

    this.loginService.loginUser(user).subscribe(result=>{
      
      if(result!=null && result.email===user.email && result.password===user.password){
        console.log("login success...")
        this.routes.navigate(['/welcome']);
      }else{
        alert("invalid username and password...")
      }
    })
  }
  
    
}
