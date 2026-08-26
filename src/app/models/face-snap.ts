export class FaceSnap {

    location?: string;
    constructor(
        public title: string,
        public description: string,
        public imageUrl: string,
        public createAt: Date,
        public snaps: number,
    ) {}
    addSnap(){
        this.snaps++;
    }

    removeSnap(){
        this.snaps--;
    }
    setLocation(location:string) : void {
        this.location = location ; 
    }

}