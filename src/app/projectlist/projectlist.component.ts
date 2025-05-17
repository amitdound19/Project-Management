import { Component, OnInit } from '@angular/core';
import { ProjectDetails } from '../saveproject/saveproject.dto';
import { SaveprojectService } from '../saveproject/saveproject.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projectlist',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './projectlist.component.html',
  styleUrl: './projectlist.component.css'
})
export class ProjectlistComponent implements OnInit{
 
  searchTerm: string = '';
  list:ProjectDetails[]=[];

  constructor(private ser:SaveprojectService){}
  
  ngOnInit(): void {
   this.projectlist(); 
  }
 
  projectlist(){
    this.ser.getprojectlist().subscribe(result=>{
      this.list=result;
    })
  }

  onSearch():void{
    if(this.searchTerm){
      this.ser.searchProjectsByName(this.searchTerm).subscribe(result=>{
        this.list=result;
      });
    }else{
      this.projectlist();
    }
  }

  changeStatus(p:ProjectDetails,newStatus:string):void{
    if(p.id!=null){
     p.status = newStatus; 

      this.ser.updateStatus(p.id,newStatus).subscribe(result=>
       {
         console.log("status updated sucessfully"); 
       },
      error =>{console.log("error updating status "+error)}
       );
     }  
}

}
