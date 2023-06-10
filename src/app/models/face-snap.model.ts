// Classe FaceSnap: permet de créer un objet de type FaceSnap
export class FaceSnap 
{
    // "!" permet de dire que la propriété sera initialisée plus tard
    id!: number;
    title!: string;
    description!: string;
    imageUrl!: string;
    imageDescription!: string;
    createdDate!: Date;
    snaps!: number;
    // ? permet de rendre la propriété optionnelle
    location?: string;
}