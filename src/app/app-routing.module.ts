import { NgModule } from '@angular/core'; // On importe la classe NgModule
import { RouterModule, Routes } from '@angular/router'; // On importe la classe RouterModule et Routes
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component'; // On importe le composant FaceSnapListComponent
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleFaceSnapComponent } from './single-face-snap/single-face-snap.component';

const routes: Routes = [ // On définit les routes de l'application
    { path: 'facesnaps/:id', component: SingleFaceSnapComponent }, // Route vers la liste des FaceSnaps
    { path: 'facesnaps', component: FaceSnapListComponent }, // Route vers la liste des FaceSnaps
    { path: '', component: LandingPageComponent } // Route vers la page d'accueil
];

@NgModule({ // On décore la classe AppModule avec @NgModule
    imports: [RouterModule.forRoot(routes)], // On importe les routes
    exports: [RouterModule] // On exporte les routes
}) 
export class AppRoutingModule { }