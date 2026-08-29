import { Component,  Input } from '@angular/core';
import { FaceSnap as FaceSnapModel } from '../models/face-snap';
import {UpperCasePipe} from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [
    UpperCasePipe

  ],
  templateUrl: './face-snap.html',
  styleUrl: './face-snap.scss',
})
export class FaceSnapComponent {
  @Input() faceSnap! : FaceSnapModel;


  constructor(private router: Router) {

  }

  onViewFaceSnap(){
    this.router.navigateByUrl(`/face-snap/${this.faceSnap.id}`);
  }
}
