import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './core/layout/auth-layout/auth-layout.component';
import { LoginComponent } from './core/components/login/login.component';
import { MainLayoutComponent } from './core/layout/main-layout/main-layout.component';
import { HomeComponent } from './feature/components/home/home.component';
import { NotfoundComponent } from './feature/components/notfound/notfound.component';
import { RegisterComponent } from './core/components/register/register.component';
import { BrandsComponent } from './feature/components/brands/brands.component';
import { CardComponent } from './feature/components/cart/card.component';
import { CategoriesComponent } from './feature/components/categories/categories.component';
import { ProductComponent } from './feature/components/product/product.component';

export const routes: Routes = [
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:"", component:AuthLayoutComponent, children:[
    {path:"login", component:LoginComponent, title:"Login"},
    {path:"register", component:RegisterComponent, title:"Register"},

  ]},
  {path:"", component:MainLayoutComponent, children:[
    {path:"home", component:HomeComponent, title:"Home"},
    {path:"brands", component:BrandsComponent, title:"Brands"},
    {path:"cart", component:CardComponent, title:"Cart"},
    {path:"products", component:ProductComponent, title:"Products"},
    {path:"categories", component:CategoriesComponent, title:"Categories"},
  ]},
  {path:"**", component:NotfoundComponent, title:"Not Found 404 "},
];
