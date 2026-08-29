import { SnapType } from './snap-type.type';

export class FaceSnap {

    location?: string;
    id: string;
    constructor(
        public title: string,
        public description: string,
        public imageUrl: string,
        public createAt: Date,
        public snaps: number,) 
    {
          this.id = crypto.randomUUID().substring(0, 8);
    }

    snap(snapType: SnapType): void{
        if( snapType === 'snap'){
            this.addSnap();
        } else if( snapType === 'unsnap'){
            this.removeSnap();
        }
    }


    addSnap(){
        this.snaps++;
    }

    removeSnap(){
        this.snaps--;
    }


    setLocation(location:string) : void {
        this.location = location ; 
    }

    
    withLocation(Location: string): FaceSnap{
        this.location = Location;
        return this;
    }
}