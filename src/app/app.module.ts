import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ServiceComponent } from './service/service.component';
import { MecanicienComponent } from './mecanicien/mecanicien.component';
import { CongeComponent } from './conge/conge.component';
import { ListeServiceComponent } from './liste-service/liste-service.component';
import { EvenementComponent } from './evenement/evenement.component';
import { PromotionComponent } from './promotion/promotion.component';
import { PlanningComponent } from './planning/planning.component';
import { RendezvousComponent } from './rendezvous/rendezvous.component';
import { TableaubordComponent } from './tableaubord/tableaubord.component';





@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ServiceComponent,
    MecanicienComponent,
    CongeComponent,
    ListeServiceComponent,
    EvenementComponent,
    PromotionComponent,
    PlanningComponent,
    RendezvousComponent,
    TableaubordComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
