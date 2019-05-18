export class EmptyHotelDetail {

    name: string;
    hotelCode: string;
    descripion: any;
    images: any;
    facilities: any;
    stars: any;
    destination: any;
    countryCode: any;
    price: any;
    supportsCancellation:  any;
    nonRefundable: any;
    address: any;

    constructor(name: any, hotelCode: any, description: any, images: any,
        facilities: any, stars: any, destination: any,
        country_code: any, price: null, supportsCancellation: null, address: null, nonRefundable: null ) {
            this.name = name;
            this.hotelCode = hotelCode;
            this.descripion = description;
            this.images = images;
            this.facilities = facilities;
            this.destination = destination;
            this.countryCode = country_code ;
            this.price = price;
            this.supportsCancellation = supportsCancellation;
            this.address = address;
            this.nonRefundable = nonRefundable;
        }

}
