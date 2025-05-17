import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { SaveprojectComponent } from './saveproject/saveproject.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectlistComponent } from './projectlist/projectlist.component';
import { TryComponent } from './try/try.component';

export const routes: Routes = [

    {
        path:'header',
        component:HeaderComponent,
        
    },
    {
        path:'',
        component:LoginComponent
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'welcome',
        component:WelcomeComponent,
        children:[
            {
                path:'saveproject',
                component:SaveprojectComponent
            },
            {
                path:'',
                component:DashboardComponent
            },
            {
                path:'dashboard',
                component:DashboardComponent
            },
            {
                path:'projectlist',
                component:ProjectlistComponent
            },
            {
                path:'login',
                component:LoginComponent
            },
            {
                path:'try',
                component:TryComponent
            }
        ]
    }
];
