import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";

//Implements keyword is used to make sure that User satisfies interface Mappable
//This lets us know if we have any errors from any missing requirements of the interface

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor () {
    this.name = faker.name.firstName();
    this.location = {
      //faker lat and lng return a string, so we must convert to num
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    }
  }

  markerContent():string {
    return `User's name is ${this.name}`
  }
}