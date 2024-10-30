import { Routes } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

import { SearchComponent } from '../search/search.component';
import { RegisterComponent } from '../register/register.component';
import { UpdateComponent } from '../update/update.component';
import { LoginComponent } from '../login/login.component';
import { ShowdataComponent } from '../showdata/showdata.component';
import { DoctordataComponent } from '../doctordata/doctordata.component';
import { Component } from '@angular/core';
import { AddDoctordataComponent } from '../doctordata/add-doctordata/add-doctordata.component';

export const routes: Routes = [
   {path:'footer', component:FooterComponent},
   {path:'', component:LoginComponent},
   {path:'search', component:SearchComponent},
   {path:'register', component:RegisterComponent},
   {path:'updateForm/:id', component:UpdateComponent},
   {path:'showdata', component:ShowdataComponent},
   {path:'doctordata', component:DoctordataComponent},
   {path:'add-doctor', component:AddDoctordataComponent}
];
