import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
    providedIn: 'root'
})

export class FaceSnapsService {
    faceSnaps: FaceSnap[] = 
    [
        {
        id: 1,
        title: 'Panam panam', 
        description: 'Voyage à Paris le temps de passer mon examen de développement web.', 
        imageUrl: 'https://images.pexels.com/photos/1850619/pexels-photo-1850619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
        imageDescription: 'Tour eiffel',
        createdDate: new Date(),
        snaps: 58,
        location: 'Paris (75)'
        },
        {
        id: 2,
        title: 'La ville rose',
        description: 'Promenade dans les rues de Toulouse.',
        imageUrl: 'https://content.r9cdn.net/rimg/dimg/ba/d5/ffb7cae0-city-24030-164c8407d2c.jpg?width=1366&height=768&xhint=2006&yhint=1666&crop=true',
        imageDescription: 'Rue piétonne',
        createdDate: new Date(),
        snaps: 135,
        location: 'Toulouse (31)'
        },
        {
        id: 3,
        title: 'Ho ! Hisse !',
        description: 'Randonnée au lac d\'Oô.',
        imageUrl: 'https://res.cloudinary.com/easymountain/image/upload/v1630638223/decathlon-outdoor/prod/hikes/60301228c14d4/60301228c14d4-1630586744.jpg',
        imageDescription: 'Lac d\'Oô et sa cascade',
        createdDate: new Date(),
        snaps: 266,
        location: 'Vallée d\'Astau (31)'
        },
        {
        id: 4,
        title: 'Miam miam !', 
        description: 'Un dîner  ̷p̷r̷e̷s̷q̷u̷e̷ parfait au restaurant "Le 9".', 
        imageUrl: 'https://www.auch-tourisme.com/wp-content/uploads/wpetourisme/CDT32_0140627.jpg', 
        imageDescription: 'Cuisinier qui verse de la sauce sur un plat',
        createdDate: new Date(),
        snaps: 300,
        location: 'Auch (32)'
        },
        {
        id: 5,
        title: 'Je crois que je vais vom… !',
        description: 'Attraction à sensation forte au parc d\'attraction "Animaparc".',
        imageUrl: 'https://www.guide-toulouse-pyrenees.com/_bibli/annonces/6912/hd/animaparc-restauration-04.jpg',
        imageDescription: 'Attrection à sensation forte, le Twister Colorado',
        createdDate: new Date(),
        snaps: 359,
        location: 'Le Burgaud (31)'
        },
        {
        id: 6,
        title: 'Les pieds dans l\'eau',
        description: 'Promenade au bord de la plage Basque.',
        imageUrl: 'https://static.actu.fr/uploads/2023/05/hendaye-les-deux-jumeaux-20120409.jpg',
        imageDescription: 'Bord de plage et ses rochers',
        createdDate: new Date(),
        snaps: 420,
        location: 'Henaye (64)'
        },
    ];

    // Méthode permettant de récupérer tous les FaceSnaps
    getAllFaceSnaps(): FaceSnap[] {
        return this.faceSnaps;
    }

    getFaceSnapById(faceSnapId: number): FaceSnap {
        const faceSnap = this.faceSnaps.find(faceSnaps => faceSnaps.id === faceSnapId); // Récupère le FaceSnap correspondant à l'id passé en paramètre
        if (!faceSnap) { // Si le FaceSnap n'existe pas
            throw new Error('FaceSnap not found'); // Lève une erreur 
        } else { // Si le FaceSnap existe
            return faceSnap; // Retourne le FaceSnap
        }
    }

    snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void { 
        const faceSnap = this.getFaceSnapById(faceSnapId); // Récupère le FaceSnap correspondant à l'id passé en paramètre
        snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--; // Incrémente ou décrémente le nombre de snaps du FaceSnap
    }
}