import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { HomeComponent } from './home/home/home.component';
import { DcplannerComponent } from './login/dcplanner/dcplanner.component';
import { LoginComponent } from './login/login/login.component';
import { BookslotComponent } from './others/bookslot/bookslot.component';
import { CaredestinationsComponent } from './others/caredestinations/caredestinations.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'dcplanner',
    component: DcplannerComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'bookaslot',
    component: BookslotComponent,
  },
  {
    path: 'caredestinations',
    component: CaredestinationsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
