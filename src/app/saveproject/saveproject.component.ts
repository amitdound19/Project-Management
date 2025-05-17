import { Component, OnInit } from '@angular/core';
import { ProjectDetails } from './saveproject.dto';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SaveprojectService } from './saveproject.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-saveproject',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './saveproject.component.html',
  styleUrl: './saveproject.component.css'
})
export class SaveprojectComponent implements OnInit{

  projectlist:ProjectDetails[]=[];

  saveprojectform!:FormGroup;

  constructor(private fb:FormBuilder,private servicesaveproject:SaveprojectService){}

  ngOnInit(): void {
    this.saveprojectform=this.fb.group({
      pid:[''],
      pname:['',[Validators.required]],
      reason:['',Validators.required],
      type:['',[Validators.required]],
      division:['',[Validators.required]],
      category:['',[Validators.required]],
      priority:['',[Validators.required]],
      department:['',Validators.required],
      location:['',[Validators.required]],
      startdate:['',[Validators.required]],
      enddate:['',[Validators.required]],
      status:['',[Validators.required]]
    })
  }

  get pid(){
    return this.saveprojectform.get('pid')
  }

  get pname(){
    return this.saveprojectform.get('pname');
  }

  get reason(){
    return this.saveprojectform.get('reason');
  }

  get type(){
    return this.saveprojectform.get('type');
  }

  get division(){
    return this.saveprojectform.get('division');
  }

  get category(){
    return this.saveprojectform.get('category');
  }

  get priority(){
    return this.saveprojectform.get('priority');
  }

  get department(){
    return this.saveprojectform.get('department');
  }

  get location(){
    return this.saveprojectform.get('location');
  }

  get startdate(){
    return this.saveprojectform.get('startdate');
  }

  get enddate(){
    return this.saveprojectform.get('enddate');
  }

  get status(){
    return this.saveprojectform.get('status');
  }

  saveproject(){
    let details={pname:this.saveprojectform.value.pname,reason:this.saveprojectform.value.reason,type:this.saveprojectform.value.type,
             division:this.saveprojectform.value.division,category:this.saveprojectform.value.category,priority:this.saveprojectform.value.priority,
             department:this.saveprojectform.value.department,location:this.saveprojectform.value.location,startdate:this.saveprojectform.value.startdate,
             enddate:this.saveprojectform.value.enddate
            }

             this.servicesaveproject.saveproject(details).subscribe(result=>{
              this.saveprojectform.reset();
              console.log("Backend Response: "+result);
                // if(result && result.pid>0){
                //   alert('Project Saved Successfully')
                // }
                // else{
                //   alert("please enter correct projectdetails")
                // }
             })
  }

}
