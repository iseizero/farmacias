import { WebRoutes } from './web.routing';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        RouterModule.forChild(WebRoutes)
    ],
    declarations:[
        HomeComponent
    ],
    providers:[]
})

export class WebModule{}