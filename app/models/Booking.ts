import Searchable from './Searchable';
import {Cleaner} from './User';
const mockBookings = `[
    {
      "id": "a31s8gbktn9lbmg",
      "postalCode": "04394-0554",
      "bedroomNumber": 381,
      "buildingAccess": "spare",
      "task": ["General Cleaning", "Oven Cleaning"],
      "dateStart": "2019-11-13T23:00:00.000Z",
      "frequency": "month",
      "status": "In progress"
    },
    {
      "id": "a31s8gbktn9lbms",
      "postalCode": "97204",
      "bedroomNumber": 683,
      "buildingAccess": "spare",
      "task": ["General Cleaning", "Window Cleaning", "Fridge Cleaning"],
      "dateStart": "2019-09-30T23:00:00.000Z",
      "frequency": "month",
      "status": "Pending"
    },
    {
      "id": "a31s8gbktn9lbmt",
      "postalCode": "45498-9879",
      "bedroomNumber": 792,
      "buildingAccess": "spare",
      "task": ["General Cleaning", "Window Cleaning", "Fridge Cleaning"],
      "dateStart": "2019-09-30T23:00:00.000Z",
      "frequency": "once",
      "status": "Cancelled"
    },
    {
      "id": "a31s8gbktn9lbmu",
      "postalCode": "91192",
      "bedroomNumber": 482,
      "buildingAccess": "spare",
      "task": ["General Cleaning", "Window Cleaning", "Fridge Cleaning"],
      "dateStart": "2019-09-30T23:00:00.000Z",
      "frequency": "day",
      "status": "Completed"
    }
  ]
  `;

type BuildingAcess = 'spare' | 'conceirge';
type BookingStatus = 'In progress' | 'Pending' | 'Completed' | 'Cancelled';
type CleaningFrequency = 'daily' | 'weekly' | 'monthly';

// function enumerable(value: boolean) {
//   return function (
//     target: any,
//     propertyKey: string,
//     descriptor: PropertyDescriptor,
//   ) {
//     descriptor.enumerable = value;
//   };
// }

export default class Booking implements Searchable {
  id: string;
  postalCode: string;
  bedroomNumber: number;
  cleaner: Cleaner;
  buildingAccess: BuildingAcess;
  dateStart: Date;
  frequency: CleaningFrequency;
  status: BookingStatus;

  constructor(
    id: string,
    postalCode: string,
    bedroomNumber: number,
    cleaner: Cleaner,
    buildingAccess: BuildingAcess,
    dateStart: Date,
    frequency: CleaningFrequency,
    status: BookingStatus,
  ) {
    this.id = id;
    this.bedroomNumber = bedroomNumber;
    this.postalCode = postalCode;
    this.cleaner = cleaner;
    this.buildingAccess = buildingAccess;
    this.dateStart = dateStart;
    this.frequency = frequency;
    this.status = status;
  }

  static fromJson(json: any, cleaner: Cleaner): Booking {
    return new Booking(
      json.id,
      json.postalCode,
      json.bedroomNumber,
      cleaner,
      json.buildingAccess,
      new Date(json.dateStart),
      json.frequency,
      json.status,
    );
  }
  static createRandom(cleaner: Cleaner): Booking[] {
    let bookingStr: any[] = JSON.parse(mockBookings);
    return bookingStr.map(booking => {
      return Booking.fromJson(booking, cleaner);
    });
  }

  toString(): string {
    return this.cleaner.toString();
  }
}
