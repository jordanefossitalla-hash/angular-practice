import { Component, signal } from '@angular/core';
import { FaceSnap } from './face-snap/face-snap';    


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FaceSnap
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  
}
