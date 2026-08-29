import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap as FaceSnapModel } from '../models/face-snap';
import {NgStyle, NgClass, UpperCasePipe, DatePipe,DecimalPipe} from '@angular/common';
import {  FaceSnapsService} from'../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    UpperCasePipe,
    DatePipe,
    DecimalPipe
  ],
  templateUrl: './face-snap.html',
  styleUrl: './face-snap.scss',
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap! : FaceSnapModel;
  snapButtonText! : string; 
  userHasSnapped! : boolean; 

  constructor(private faceSnapsService: FaceSnapsService){

  }

  ngOnInit(): void {
    this.snapButtonText = "oh snap!";
    this.userHasSnapped = false;
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
}
