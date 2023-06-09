import { Component, Input, OnInit } from '@angular/core';
// Importe la classe FaceSnap
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component
({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit 
{
  // Propriété permettant de récupérer un objet de type FaceSnap
  @Input() faceSnap!: FaceSnap;
           buttonText!: string; // Déclare une propriété buttonText de type string

  // Ici le constructeur permet d'injecter le service FaceSnapsService
  constructor(private faceSnapService: FaceSnapsService) {}

  // Méthode appelée à l'initialisation du composant
  // void: veut dire que la méthode ne retourne rien
  ngOnInit(): void 
  {
    this.buttonText = 'Oh snap!';
  }

  // Méthode appelée au clic sur le bouton "Oh snap!" ou "Oops, unSnap!"
  onSnap(): void
  {
    // Si le texte du bouton est "Oh snap!"
    if (this.buttonText === 'Oh snap!') {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id); // Appelle la méthode snapFaceById du service FaceSnapsService
      this.buttonText = 'Oops, unSnap!'; // Change le texte du bouton
      // Sinon si le texte du bouton est "Oops, unSnap!"
    } else {
      this.faceSnap.snaps--; // Enlève 1 au nombre de snaps
      this.buttonText = 'Oh snap!'; // Change le texte du bouton
    }
  }
}
