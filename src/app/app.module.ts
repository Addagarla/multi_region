import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { HomeComponent } from './home/home/home.component';
import { DashboardheaderComponent } from './dashboard/dashboardheader/dashboardheader.component';
import { SidemenuComponent } from './dashboard/sidemenu/sidemenu.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { LoginComponent } from './login/login/login.component';
import { DcplannerComponent } from './login/dcplanner/dcplanner.component';
import { CaredestinationsComponent } from './others/caredestinations/caredestinations.component';
import { BookslotComponent } from './others/bookslot/bookslot.component';
import { SlotsidemenuComponent } from './dashboard/slotsidemenu/slotsidemenu.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DashboardheaderComponent,
    SidemenuComponent,
    DashboardComponent,
    LoginComponent,
    DcplannerComponent,
    CaredestinationsComponent,
    BookslotComponent,
    SlotsidemenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
