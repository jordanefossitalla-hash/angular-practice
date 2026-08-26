import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap as FaceSnapModel } from '../models/face-snap';
import {NgStyle, NgClass, UpperCasePipe, DatePipe,DecimalPipe,TitleCasePipe} from '@angular/common';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    UpperCasePipe,
    DatePipe,
    DecimalPipe,
    TitleCasePipe
  ],
  templateUrl: './face-snap.html',
  styleUrl: './face-snap.scss',
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap! : FaceSnapModel;
  snapButtonText! : string; 
  userHasSnapped! : boolean; 

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
      this.faceSnap.removeSnap();
      this.snapButtonText = "oh snap!";
      this.userHasSnapped = false;
  }

  snap(){
      this.faceSnap.addSnap();
      this.snapButtonText = "Oops, unSnap!";
      this.userHasSnapped = true ; 
  }
}
