import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RegisterComponent } from './register/register.component';
import { AdminGuard } from './shared/admin.guard';
import { AuthGuard } from './shared/auth.guard';
import { StoryDetailComponent } from './story-detail/story-detail.component';
import { UserpageComponent } from './userpage/userpage.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' }, // redirect to main
  { path: 'main', component: MainComponent },
  { path: 'story-detail/:id/:username', component: StoryDetailComponent },

  //   { path: 'register', component: RegisterComponent },
  { path: 'userpage', component: UserpageComponent },
  //   { path: 'login', component: LoginComponent },
  {
    path: 'adminpage',
    component: AdminpageComponent,
    canActivate: [AuthGuard, AdminGuard],
  },
  //   { path: '**', component: PagenotfoundComponent },  //   404 page
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
