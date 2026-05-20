import { Routes } from '@angular/router';
import { AppLayoutComponent } from './components/app-layout/app-layout';
import { HomeComponent } from './components/home/home';
import { AboutComponent } from './components/about/about';
import { ContactComponent } from './components/contact/contact';
import { OrderComponent } from './components/order/order';
import { NotFoundComponent } from './components/not-found/not-found';
import { CourseDetailsComponent } from './components/course-details/course-details';
import { LoginComponent } from './components/login/login';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '', component: AppLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent, title: 'Home' },
      { path: 'about', component: AboutComponent, title: 'About Us' },
      { path: 'contact', component: ContactComponent, title: 'Contact Us' },
      { path: 'login', component: LoginComponent, title: 'Login' },
      // guarded routes
      { path: 'courses', component: OrderComponent, title: 'Courses', canActivate: [authGuard] },
      { path: 'course/:id', component: CourseDetailsComponent, title: 'Course Details', canActivate: [authGuard] },
    ]
  },
  { path: '**', component: NotFoundComponent }
];
