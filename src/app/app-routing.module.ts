import { NgModule } from '@angular/core'; // On importe la classe NgModule
import { RouterModule, Routes } from '@angular/router'; // On importe la classe RouterModule et Routes
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component'; // On importe le composant FaceSnapListComponent

const routes: Routes = [ // On définit les routes de l'application
    { path: 'facesnaps', component: FaceSnapListComponent }, // Route vers la liste des FaceSnaps
];

@NgModule({ // On décore la classe AppModule avec @NgModule
    imports: [RouterModule.forRoot(routes)], // On importe les routes
    exports: [RouterModule] // On exporte les routes
}) 
export class AppRoutingModule { }