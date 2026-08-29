import {Injectable} from  '@angular/core';
import {FaceSnap as FaceSnapModel} from '../models/face-snap';
import { SnapType } from '../models/snap-type.type';

@Injectable({
    providedIn: 'root'
})

export class FaceSnapsService {

    private faceSnaps: FaceSnapModel[] = [
      new FaceSnapModel(
      'Archibal',
      'mon meilleur ami dépuis toujours!',
      'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQBDgMBIgACEQEDEQH/xAAcAAEBAQACAwEAAAAAAAAAAAABAAIFBgMEBwj/xAA3EAACAQMCBAIHBwMFAAAAAAAAAQIDBBEFEgYhMUEiUQcTFGFxgZEVIzJyobHBYtHwM0JDUlP/xAAbAQEAAwEBAQEAAAAAAAAAAAABAAIDBAUGB//EACQRAQEAAgIBBAIDAQAAAAAAAAABAhEDBDEFEiFBE1EGMmEU/9oADAMBAAIRAxEAPwDuqNIBPyp9KRAQCJESBGhAQVQgKIiHsRECEiIERERELIsEAQsWCQ6QYLBpgTSAmJMNFkmJMiMkxYAQwEGJDBiDEhgxISyhBCJIgIAiAgEaAQCIhAJCRIQhLApFtBYIcDgvMQCHBDpGSNFgmk2CwaSJj7U2wTQsitibZJjgGVspDA0ZKWEImIMhZYGmAlkDQEhZIhQrISJACKIkQESJAqkJCkTQSQ4LAl5AUJITWRVE0JYLaAHBETSLAGiwOkCIsETSIGJMNIwyNNAylhYwTNAUuKzLBmjJSwhgzTBgWCEBWYFAKFYkiIA0KAQVIghICh7gaRaBCiE0kVWBRIUaSKoSItAhIi2kRDgh0AwNATRBCRNIyEjTArYWQZpmTPLEhmWaBoysWYJiwKLQMBBgXjFAKLLk0ZNAqhJEAKEEaIKjQIS8VIoEaXU1kVpEiRpICRCXkAwJF2LyBEREREWRHSAGPXoeOpWpU195VhH4yRJjlbqQbk8th0OOudd0y2TdW8pLHvOLrcb6SnijL1kvikdHH0OzyeMVby4T7dkMvqdNuONqmH6i2il5t5TPJcX+pzjB1dTtqEasYtOnzwnjm/csps68PQu1n51Gd7WEdsk0lmTSXmzwq6t5VFSjXpOb6RU02fPru8s/+bV7y5cqbe2PhjGWItR+eWs9sHQuErn7O45t5yfL1+2T88m2f8euHFlnln8yKzt7ykj9BYMmsoGfLWO+MgzQMqY8aEyaFdIQQgChJEAKNGUaRFaV0FAhRpA0hAUbRUoUSI0kBEEJeKoQQ5wW+krjdW1zS9GiparfUrZS6Kb5v5HHy4z0mdKNW1nOtCSymlhNHTfTlaZtdPu0lmLlBvy7/wAnV+F67qaRSWf9NuJ9F0PTODn4ZyZb25Obmyxy073xD6Q69pSj9l6TK4qTzHxZaj8Uu3U4alxnxXXvqTVOjCykoOrvpRjJPHNLnnqenvbS5vORi39T1+P07q4TUwjmvLnftytTV9Yr5qXF63CU2ti5YWOp4bSU9Rq4ddwox5Srzecv+nP7nCapeKko0d3iqPxPvGJxs9Vc3GlTeKUeW1dDpx4sMfiTSlyt819Lsquh2jUbWyV3cLrWqPLz8X/Bx3EN855lK0t4xfZI6hHWoW1PHtdGm/zJtfQ4+64ktZN769at+Vf3NNK7b1LUPZ577eLoyb/2vwnl03WaWoP1dVKNddEukvgcBeX1G8eaSnBLvN9fkcZNzp1P+k4vouzIjvtepCn4pzhFZ6t4Oq3dWEOIade3nGWJRlmL5ZycxpF5QrWsKkLW1hWisSnGmt2fPJxXE051KtCrJ9mumCuU3NGXVlfoPSb6lf6fQuaMt0ZwTzjv3PdR1TgC89q4aspZztjtfyO1rofmfZ4/x8uWH6te9j84yohBnOXhNGRQNChAQVKNGTQBGkAjFaTSMijXENCjJpGkVaIBRrAUIIS8VRNogl0H6R0T0t06dfhnZKSVRVU4Z88Pl+h8q4UqXG24oUYUZYalmrV2Jfoz7bxjbe1aJeUsZbpvH7/wfBeH5+p1d030knHB9P6By+7hyx/Vcfcx1ZXb1Su5LFe9taMvKnRlUePzZx+hOlS61rq8r9nFyjTT+cIpnj38lgzOXI99xut61cRhqNWFGM4QisJSqSm/fzbZ6NOs4wlLd092WmzWsN/alVtcpdMjK2VOzo1Iy3qvHny/DJPoCPVlCFRznPwxhHLx3b6I81SwVPTaN4qkZSnUcZUsdD16ilFNSfKSWfkW97du1NZ3dOaIEtu5bF4ZLkn2fl8DzQt5XTpJNRlLMVvy88k10788fJHr0otzW3motv5+X1OZ0unsu4PdtjRjKUpZXRLb3+f0Ijw6LWdOU44w28M3rvjoRflLJx9lOSuFJvm3z+J79/HfQn3eMkL6T6Ibv1ukToOWfVz6e4+kQ6Hxj0PXezUbi2csKccpfA+z034T4L1ni9ncy/35ez18vdxRoGIHlWNnhEyhKNGiAQDQgKYKkUZFEgaRoyhRfFWtGkZQrqbYitCAmkVSECLwNAyIuHHarS9Zbzj2ccH5xvYyseIpRfLZWa+WT9L3UN0JfA/PXpFtna8TXDSwpS3r9z2fQM/bzZYfuMe3N4SuSVQZS8LPUp1N1KEl3ijXrGfWR5zg9bpffOXfHItPuaFagrS4k6eXmM3+GMuzf7Hu6nSjWpNr8S6HX5xak8cn3TK0OajYesquhXnGjV7OX4ZL3eZ7UeHbZPnUqNY5qJw9pqdW3bVTxxcdrU/Fy/xnLWOu2lFfeKeMdNuRSx7kdLtLSnGbo7nHnGMpHG6tUhY2sreEoyrV0t6j0jFP8P8Anmbv+JFWW2zoOP8AVPscC3KUnOo90359iWh5LZfer3c2cxOlSVDPtaqVGuUYwePqcPRls6rr1PZnezaSTUUuyNOPkwxl90S421yvo+u/Y+KrfL8MpODP0DR5wTPzxwnRpT1qjUm5pqakmuR+g7KW63g/cfF/yGS82Nn6et09zj09kCyWT56x1PAhyZTFMzaNCZFAGkyAQDSYoyKfMgaNGSTLxVtGjApmsqraY5Mpjk0lDRB2JFw0QZIvAzUWYs+JemKzcNSoXCTxOGM+8+3y6HRPSNpFHULJTq0t8qeXHmdnp/NOHtY5VTkx93HY+TWF0lZU976LB5JXcH0ln8vM9WpZXFGpsp0ksd8ZNR0y+qvnvZ9l/wBGGt7ed+Kqtc5i8J/PkcZX2yecp/l5nPUuGbqrzcH9D26fCldLnTfzMsu7xT7XnBXUUvi/iO1/+aO3VOHHTWZRPUnpe14wwncwy8H8LrypzfJcvgjzU7KrUaSiznKWmrd0Oa0+wiprMTPl7kxm4tjwus22hV6rWKbefcczacG3FXGYHfNJsqaSzFfQ7Ja0KcYrwr6Hh9j1nkl1i68OvjXSdB4MdtXhUm8Y9x9EtqfqqSh5FShFYweXoeL2Ozyc+W83TjjMJqIiJnNS8CFERm0aQkQAiiIASIgDRIiLKtD2IjTEFGuxEaxQoQIvEIoCLwHuj0NTtqVxQcascoiDO6OPl1n7DsHNt0c8zkLfR7GK8NFIiHPlz1PlpJNvbVhbRjhU0epc21JR5QREYY55e7yvZNOvX1Cnz5HBXNGG7oRHtdfK6cXJ5eGFGG7ocpZU47lyIjXlt0MfLsmnRXhOaorkiI8Tm/s68PD2odDTEjNYBkSKo//Z',
      new Date(),
      10,

    ),
    new FaceSnapModel(
      'Cameroun',
      'Drapeau du Cameroun',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV7L7PwpSQBla7Udv2cEzFZlBGFi0xe94TUS71DOb5dw&s=10',
      new Date(),
      5, 
    ).withLocation('à la montagne'),
    new FaceSnapModel(
        'Un bon repas',
        'Mmmh que c\'est bon !',
        'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
        new Date(),
        156
      )
  
  ];

  getFaceSnaps(): FaceSnapModel[]{
    return [...this.faceSnaps]; 
  }
  snapfaceSnapById( faceSnapId: string, snapType: SnapType): void{
    const foundFaceSnap = this.faceSnaps.find((faceSnap: FaceSnapModel) => faceSnap.id === faceSnapId);
    if(!foundFaceSnap){
      throw new Error('FaceSnap not found!');
    }
    foundFaceSnap.snap(snapType);
  }
}