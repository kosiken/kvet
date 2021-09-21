import Searchable from './Searchable';

const mockUsers = `[
    {
      "id": "6w5b981ktlgwby9",
      "name": "Alize Reichert",
      "email": "Alize19@yahoo.com",
      "password": "fpKULhEpLH1n",
      "phone": "992.780.9636",
      "address": "0932 Robel Lock North Corrine Saint Barthelemy",
      "isCleaner": false
    },
    {
      "id": "6w5b981ktlgwby8",
      "name": "Eulalia Ziemann",
      "email": "Eulalia.Ziemann@hotmail.com",
      "password": "MXSLFC67Xa0k",
      "phone": "740-330-6781 x80468",
      "address": "88729 Boyd Neck Marvinside Iceland",
      "isCleaner": true
    },
    {
      "id": "6w5b981ktlgwby7",
      "name": "Icie Windler",
      "email": "Icie.Windler@gmail.com",
      "password": "BaKCPkMAtI8x",
      "phone": "(409) 772-2678 x4348",
      "address": "74691 Schultz Parkways Garrettport Kiribati",
      "isCleaner": false
    },
    {
      "id": "6w5b981ktlgwby6",
      "name": "Arvilla Ondricka",
      "email": "Arvilla.Ondricka47@hotmail.com",
      "password": "EKTlcVFHQR9Z",
      "phone": "520-578-5225 x3073",
      "address": "627 Junior Row Round Rock Palau",
      "isCleaner": true
    },
    {
      "id": "6w5b981ktlgwby5",
      "name": "Garrison Bernhard",
      "email": "Garrison19@hotmail.com",
      "password": "7XM98UqCqQ7N",
      "phone": "(510) 654-1060",
      "address": "014 Wiza Vista Steubermouth Poland",
      "isCleaner": false
    },
    {
      "id": "6w5b981ktlgwby4",
      "name": "Yasmin Bahringer",
      "email": "Yasmin_Bahringer@yahoo.com",
      "password": "wkqxvhZNj62K",
      "phone": "862.387.5805 x8521",
      "address": "56364 Clay Street Port Murphy Eritrea",
      "isCleaner": true
    },
    {
      "id": "6w5b981ktlgwby3",
      "name": "Lilla O'Reilly",
      "email": "Lilla_OReilly@gmail.com",
      "password": "8ffQpgFldiRG",
      "phone": "519.726.5585 x867",
      "address": "3920 Ferry Plains Lake Havasu City Italy",
      "isCleaner": false
    },
    {
      "id": "6w5b981ktlgwby2",
      "name": "Kenyatta Christiansen",
      "email": "Kenyatta76@yahoo.com",
      "password": "D227vtBWstq1",
      "phone": "296.512.1716 x316",
      "address": "030 Jacobs Point New Hertha Monaco",
      "isCleaner": true
    },
    {
      "id": "6w5b981ktlgwby1",
      "name": "Freeman Bergstrom",
      "email": "Freeman_Bergstrom41@gmail.com",
      "password": "jND0NvwmpUsd",
      "phone": "(349) 247-3742 x9516",
      "address": "778 Camylle Hill Gideonmouth Lithuania",
      "isCleaner": false
    },
    {
      "id": "6w5b981ktlgwby0",
      "name": "Barney Legros",
      "email": "Barney.Legros@hotmail.com",
      "password": "A3nlQnKR5Ofn",
      "phone": "1-343-850-3481 x34557",
      "address": "39538 Donny Crossroad North Kaylinhaven South Africa",
      "isCleaner": true
    },
    {
      "id": "6w5b981ktlgwbxz",
      "name": "Kylie Collins",
      "email": "Kylie_Collins@gmail.com",
      "password": "Z3lLMjhJVgbF",
      "phone": "471.349.3253",
      "address": "506 Dangelo Rapid North Ivafurt Micronesia",
      "isCleaner": false
    },
    {
      "id": "6w5b981ktlgwbxx",
      "name": "Iva Smitham",
      "email": "Iva.Smitham86@yahoo.com",
      "password": "hXerTOAnP49c",
      "phone": "549-413-5262 x6431",
      "address": "49653 Renner Row New Isobelborough Bosnia and Herzegovina",
      "isCleaner": true
    }
  ]`;

export class User implements Searchable {
  id: string;
  name: string;
  password: string;
  email: string;
  phone: string;
  address: string;

  constructor(
    id: string,
    name: string,
    password: string,
    email: string,
    phone: string,
    address: string,
  ) {
    this.address = address;
    this.phone = phone;
    this.email = email;
    this.password = password;
    this.name = name;
    this.id = id;
  }

  static init(): User[] {
    let userStringArray: any[];
    let users: User[];
    userStringArray = JSON.parse(mockUsers) as any[];
    users = userStringArray.map((v, i) => {
      if (i % 2 === 0) {
        return new User(v.id, v.name, v.password, v.email, v.phone, v.address);
      } else {
        return new Cleaner(
          v.id,
          v.name,
          v.password,
          v.email,
          v.phone,
          v.address,
        );
      }
    });
    return users;
  }

  toString() {
    return this.name;
  }
}

export class Cleaner extends User {
  isCleaner = true;
}

export const DefaultUser = new User(
  'ir22',
  'Frank Sinatra',
  '0000',
  '00000',
  'lion',
  'address',
);

export const DefaultCleaner = new Cleaner(
  'ir22',
  'Frank Sinatra',
  '0000',
  '00000',
  'lion',
  'address',
);
