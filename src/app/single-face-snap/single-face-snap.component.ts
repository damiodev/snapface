import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit{
    // Propriété permettant de récupérer un objet de type FaceSnap
    faceSnap!: FaceSnap;
    buttonText!: string; // Déclare une propriété buttonText de type string

// Ici le constructeur permet d'injecter le service FaceSnapsService
constructor(private faceSnapService: FaceSnapsService, // On injecte le service FaceSnapsService
            private route:ActivatedRoute) { } // On injecte ActivatedRoute pour récupérer l'id du FaceSnap dans l'URL
  // Méthode appelée à l'initialisation du composant
  // void: veut dire que la méthode ne retourne rien
  ngOnInit(): void
  {
  this.buttonText = 'Oh snap!';
  // +: permet de convertir une chaîne de caractères en nombre
  const faceSnapId = +this.route.snapshot.params['id']; // On récupère l'id du FaceSnap dans l'URL
  this.faceSnap = this.faceSnapService.getFaceSnapById(faceSnapId); // On récupère le FaceSnap correspondant à l'id
  }

  // Méthode appelée au clic sur le bouton "Oh snap!" ou "Oops, unSnap!"
  onSnap(): void
  {
    // Si le texte du bouton est "Oh snap!"
    if (this.buttonText === 'Oh snap!') {
    this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'snap'); // Appelle la méthode snapFaceById du service FaceSnapsService
    this.buttonText = 'Oops, unSnap!'; // Change le texte du bouton
    // Sinon si le texte du bouton est "Oops, unSnap!"
    } else {
    this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'unsnap'); // Appelle la méthode unSnapFaceById du service FaceSnapsService
    this.buttonText = 'Oh snap!'; // Change le texte du bouton
    }
  }
}