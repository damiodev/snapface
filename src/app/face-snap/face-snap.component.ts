import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;
  imageDescription!: string;
  buttonText!: string;

  // Méthode appelée à l'initialisation du composant
  ngOnInit(): void {
    this.title = 'Paris';
    this.description = 'Voyage à Paris le temps de passer mon examen de développement web.';
    this.createdDate = new Date();
    this.snaps = 7;
    this.imageUrl = 'https://images.pexels.com/photos/1850619/pexels-photo-1850619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    this.imageDescription = 'Tour eiffel';
    this.buttonText = 'Oh snap!';
  }

  // Méthode appelée au clic sur le bouton "Oh snap!" ou "Oops, unSnap!"
  onSnap(): void {
    if (this.buttonText === 'Oh snap!') {
      this.snaps++; // Rajoute 1 au nombre de snaps
      this.buttonText = 'Oops, unSnap!'; // Change le texte du bouton
    } else {
      this.snaps--; // Enlève 1 au nombre de snaps
      this.buttonText = 'Oh snap!'; // Change le texte du bouton
    }
  }
}
