import { Component, Input, OnInit } from '@angular/core';
// Importe la classe FaceSnap
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  // Propriété permettant de récupérer un objet de type FaceSnap
  @Input() faceSnap!: FaceSnap;

  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;
  imageDescription!: string;
  buttonText!: string;

  // Méthode appelée à l'initialisation du composant
  // void: veut dire que la méthode ne retourne rien
  ngOnInit(): void{
    this.buttonText = 'Oh snap!';
  }

  // Méthode appelée au clic sur le bouton "Oh snap!" ou "Oops, unSnap!"
  onSnap(): void {
    if (this.buttonText === 'Oh snap!') {
      this.faceSnap.snaps++; // Rajoute 1 au nombre de snaps
      this.buttonText = 'Oops, unSnap!'; // Change le texte du bouton
    } else {
      this.faceSnap.snaps--; // Enlève 1 au nombre de snaps
      this.buttonText = 'Oh snap!'; // Change le texte du bouton
    }
  }
}
