import { Component, OnInit} from '@angular/core';
import { FaceSnap as FaceSnapModel } from '../models/face-snap';
import {NgStyle, NgClass, UpperCasePipe, DatePipe} from '@angular/common';
import {  FaceSnapsService} from'../services/face-snaps.service';
import { ActivatedRoute, RouterLink} from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    UpperCasePipe,
    DatePipe,
    RouterLink
    
  ],
  templateUrl: './single-face-snap.html',
  styleUrl: './single-face-snap.scss',
})
export class SingleFaceSnapComponent implements OnInit {
 faceSnap! : FaceSnapModel;
  snapButtonText! : string; 
  userHasSnapped! : boolean; 

  constructor(private faceSnapsService: FaceSnapsService , private route: ActivatedRoute) {
    

  }

  ngOnInit(): void {
    this.prepareInterface();
    this.getFaceSnap();
  }


  onSnap() : void{
    if(this.userHasSnapped){
      this.unSnap();
    }else{
      this.snap(); 
    }
  }


  unSnap(){
      this.faceSnapsService.snapfaceSnapById(this.faceSnap.id, 'unsnap'); 
      this.snapButtonText = "oh snap!";
      this.userHasSnapped = false;
  }

  snap(){
      this.faceSnapsService.snapfaceSnapById(this.faceSnap.id, 'snap');
      this.snapButtonText = "Oops, unSnap!";
      this.userHasSnapped = true ; 
  }

  private getFaceSnap(): void{
    const faceSnapId = this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
  }

  private prepareInterface(): void{
    this.snapButtonText = "oh snap!";
    this.userHasSnapped = false; 
  }

}
