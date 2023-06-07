import { Component, OnInit } from '@angular/core';
// Importe la classe FaceSnap
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
// Implémente l'interface OnInit
export class AppComponent implements OnInit{

  // Propriété permettant de récupérer un objet de type FaceSnap
  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;

  // Méthode appelée à l'initialisation du composant
  ngOnInit() { 
    this.mySnap = new FaceSnap(
      'Paris', 
      'Voyage à Paris le temps de passer mon examen de développement web.', 
      'https://images.pexels.com/photos/1850619/pexels-photo-1850619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
      'Tour eiffel',
      new Date(), 
      0
    );
    this.myOtherSnap = new FaceSnap(
      'Toulouse',
      'Promenade dans les rues de Toulouse',
      'https://content.r9cdn.net/rimg/dimg/ba/d5/ffb7cae0-city-24030-164c8407d2c.jpg?width=1366&height=768&xhint=2006&yhint=1666&crop=true',
      'Rue piétonne',
      new Date(),
      0
    );
    this.myLastSnap = new FaceSnap(
      'Lac d\'Oô',
      'Randonnée au lac d\'Oô',
      'https://res.cloudinary.com/easymountain/image/upload/v1630638223/decathlon-outdoor/prod/hikes/60301228c14d4/60301228c14d4-1630586744.jpg',
      'Lac d\'Oô et sa cascade',
      new Date(),
      0
    );
  };
}
