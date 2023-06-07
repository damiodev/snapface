// Classe qui représente un FaceSnap
export class FaceSnap {
    // Constructeur: permet d'initialiser les propriétés
    // Public: permet de créer automatiquement les propriétés et les passer en paramètres du constructeur
    constructor(public title: string,
                public description: string,
                public imageUrl: string, 
                public createdDate: Date, 
                public snaps: number) {
    }
}