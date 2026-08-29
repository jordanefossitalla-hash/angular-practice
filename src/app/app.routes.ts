import { Routes } from '@angular/router';
import { FaceSnapList } from './face-snap-list/face-snap-list';
import { LandingPage } from './landing-page/landing-page';
import { SingleFaceSnapComponent } from './single-face-snap copy/single-face-snap';

export const routes: Routes = [
    { path: '', component: LandingPage },
    { path: 'face-snaps', component: FaceSnapList },
    { path: 'face-snap/:id', component: SingleFaceSnapComponent }
];
