export class Detail{
  id?: number;
  name: string;
  age: string;
  location: string;
  doorNO: string;
  streetName: string;
  city: string;
  officeAddress: string;

  constructor(detail?: Detail) {
      this.id = detail?.id;
      this.name = detail?.name;
      this.age = detail?.age;
      this.location = detail?.location;
      this.doorNO = detail?.doorNO;
      this.streetName = detail?.streetName;
      this.city = detail?.city;
      this.officeAddress = detail?.officeAddress;
    }
}
