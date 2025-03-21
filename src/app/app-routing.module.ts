import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceComponent } from './service/service.component';
import { MecanicienComponent } from './mecanicien/mecanicien.component';
import { CongeComponent } from './conge/conge.component';
import { ListeServiceComponent } from './liste-service/liste-service.component';
import { EvenementComponent } from './evenement/evenement.component';
import { PromotionComponent } from './promotion/promotion.component';
import { PlanningComponent } from './planning/planning.component';
import { RendezvousComponent } from './rendezvous/rendezvous.component';
import { TableaubordComponent } from './tableaubord/tableaubord.component';





const routes: Routes = [
{ path: 'service', component: ServiceComponent },
{ path: 'mecanicien', component: MecanicienComponent},
{ path: 'conge', component: CongeComponent},
{ path: 'listService', component: ListeServiceComponent},
{ path: 'evenement', component: EvenementComponent },
{ path: 'promotion', component : PromotionComponent},
{ path: 'planning', component: PlanningComponent},
{ path: 'rendezvous', component: RendezvousComponent},
{ path: 'dashboard', component: TableaubordComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
