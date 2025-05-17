import { Component, OnInit } from '@angular/core';
import { Users } from '../login/login.dto';
import { LoginService } from '../login/login.service';
import { SaveprojectService } from '../saveproject/saveproject.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{

  userlist:Users[]=[];

 total:number=0;
  closed:number=0;
  running:number=0;
  cancelled:number=0;
  registered:number=0;

  constructor(private ser:SaveprojectService){}

  ngOnInit(): void {
   this.count();
  }

  count(){
    this.ser.countStatus().subscribe(result=>{
        this.running=result.Running|| 0;
        this.cancelled=result.Cancelled||0;
        this.closed=result.Closed||0;
        this.registered=result.Registered||0;
        this.total=this.running+this.closed+this.cancelled+this.registered;

    },
    error =>{
      console.log("error occured while counting stats "+error);
    }
   );

  }

}

