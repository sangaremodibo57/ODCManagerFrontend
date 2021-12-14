import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AjoutActiviteSuiteComponent } from './Activites/ajout-activite-suite/ajout-activite-suite.component';
import { AjoutActiviteComponent } from './Activites/ajout-activite/ajout-activite.component';
import { AjoutResponsableActiviteComponent } from './Activites/ajout-responsable-activite/ajout-responsable-activite.component';
import { DetailActiviteComponent } from './Activites/detail-activite/detail-activite.component';
import { ListeActiviteComponent } from './Activites/liste-activite/liste-activite.component';
import { ModifierActiviteComponent } from './Activites/modifier-activite/modifier-activite.component';
import { AjoutAdminComponent } from './Administrateurs/ajout-admin/ajout-admin.component';
import { DetailAdminComponent } from './Administrateurs/detail-admin/detail-admin.component';
import { ListeAdminComponent } from './Administrateurs/liste-admin/liste-admin.component';
import { ModifierAdminComponent } from './Administrateurs/modifier-admin/modifier-admin.component';
import { AuthGuard } from './auth/auth.guard';
import { AjoutExerciceComponent } from './Exercices/ajout-exercice/ajout-exercice.component';
import { DetailExerciceComponent } from './Exercices/detail-exercice/detail-exercice.component';
import { ListeExerciceComponent } from './Exercices/liste-exercice/liste-exercice.component';
import { ModifierExerciceComponent } from './Exercices/modifier-exercice/modifier-exercice.component';
import { LoginComponent } from './Login/login/login.component';
import { AjoutParticipantFichierComponent } from './Participants/ajout-participant-fichier/ajout-participant-fichier.component';
import { AjoutParticipantComponent } from './Participants/ajout-participant/ajout-participant.component';
import { DetailParticipantComponent } from './Participants/detail-participant/detail-participant.component';
import { ListeParticipantComponent } from './Participants/liste-participant/liste-participant.component';
import { ModifierParticipantComponent } from './Participants/modifier-participant/modifier-participant.component';
import { AjoutResponsableComponent } from './Responsables/ajout-responsable/ajout-responsable.component';
import { DetailResponsableComponent } from './Responsables/detail-responsable/detail-responsable.component';
import { ListeResponsableComponent } from './Responsables/liste-responsable/liste-responsable.component';
import { ModifierResponsableComponent } from './Responsables/modifier-responsable/modifier-responsable.component';
import { AjoutRoleComponent } from './Role/ajout-role/ajout-role.component';
import { DetailRoleComponent } from './Role/detail-role/detail-role.component';
import { ListeRoleComponent } from './Role/liste-role/liste-role.component';
import { ModifierRoleComponent } from './Role/modifier-role/modifier-role.component';
import { ProfilUserComponent } from './UserProfil/profil-user/profil-user.component';

const routes: Routes = [

  { path: '', component: LoginComponent },
  {
    path: 'accueil', component: AccueilComponent,
    canActivate: [AuthGuard]
  },

  // Gestion Administrateurs
  {
    path: 'liste-admin', component: ListeAdminComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'ajout-admin', component: AjoutAdminComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'modifier-admin/:id', component: ModifierAdminComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'detail-admin/:id', component: DetailAdminComponent,
    canActivate: [AuthGuard]
  },

   // Gestion Activités
  {
    path: 'liste-activite', component: ListeActiviteComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'ajout-activite', component: AjoutActiviteComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'modifier-activite/:id', component: ModifierActiviteComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'detail-activite/:id', component: DetailActiviteComponent,
    canActivate: [AuthGuard]
  },
  { path: 'ajout-activite-suite/:id', component: AjoutActiviteSuiteComponent },
  { path: 'ajout-activite-responsable/:id', component: AjoutResponsableActiviteComponent },

    // Gestion Excercices
  {
    path: 'liste-exercice', component: ListeExerciceComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'ajout-exercice', component: AjoutExerciceComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'modifier-exercice/:id', component: ModifierExerciceComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'detail-exercice/:id', component: DetailExerciceComponent,
    canActivate: [AuthGuard]
  },

   // Gestion Participants
   {
     path: 'liste-participant', component: ListeParticipantComponent,
    canActivate: [AuthGuard]
    },
   {
     path: 'ajout-participant/:id', component: AjoutParticipantComponent,
    canActivate: [AuthGuard]
    },
   {
     path: 'modifier-participant/:id', component: ModifierParticipantComponent,
    canActivate: [AuthGuard]
    },
   {
     path: 'detail-participant/:id', component: DetailParticipantComponent,
    canActivate: [AuthGuard]
    },
   {
     path: 'ajout-participant-fichier/:id', component: AjoutParticipantFichierComponent,
     canActivate: [AuthGuard]
    },

  // Gestion Responsables
  {
    path: 'liste-responsable', component: ListeResponsableComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'ajout-responsable', component: AjoutResponsableComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'modifier-responsable/:id', component: ModifierResponsableComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'detail-responsable/:id', component: DetailResponsableComponent,
    canActivate: [AuthGuard]
  },

   // Gestion Rôle
   {
     path: 'liste-role', component: ListeRoleComponent,
    canActivate: [AuthGuard]
    },
   {
     path: 'ajout-role', component: AjoutRoleComponent,
    canActivate: [AuthGuard]
    },
   {
     path: 'modifier-role/:id', component: ModifierRoleComponent,
    canActivate: [AuthGuard]
    },
   {
     path: 'detail-role/:id', component: DetailRoleComponent,
    canActivate: [AuthGuard]
    },

    // Gestion UserProfil
    { path: 'profil-user', component: ProfilUserComponent,
    canActivate: [AuthGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
