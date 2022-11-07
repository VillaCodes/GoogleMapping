import { User } from './User';
import { Company } from './Company';


//Instructions to every other class
//on how they can be an argument to 'addMarker'
export interface Mappable {
  location: {
    lat: number,
    lng: number
  };

  markerContent(): string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  //In typescript, a postfix ! removes null or undefined from the type of an expression
  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId)!, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      }
    });
  }

  /*
   // | pipe/or operator in the type annotation makes typescript look at both
   // and limit the number of properties you can refer to in 'mappable'
   // You can only refer to the common properties between both User and Company!
  */
  addMarker(mappable: Mappable): void {

    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }    
    });

    marker.addListener('click', function(): void {
      const infowindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });
  
      infowindow.open(this.googleMap, marker)
    });
  }
}