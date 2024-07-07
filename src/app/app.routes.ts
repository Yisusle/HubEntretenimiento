import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';

export const routes: Routes = [
    {path:'auth/login', component:LoginComponent},
    {path:'movies', component:MovieListComponent},
    {path:'',redirectTo:'/auth/login', pathMatch: 'full'}
];
