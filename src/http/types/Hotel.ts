import { parseAdditionalAmenity } from "./amenity/AdditionalAmenity";
import { parseBreakfastAmenity } from "./amenity/BreakfastAmenity";
import { parseGuestServiceAmenityJson as parseGuestServiceAmenity } from "./amenity/GuestService";
import { HotelAmenity } from "./amenity/HotelAmenity";
import { parseInternetAmenity } from "./amenity/InternetAmenity";
import { parseParkingAmenity } from "./amenity/ParkingAmenity";
import { parsePoolAmenity } from "./amenity/PoolAmenity";
import { HotelRoom } from "./HotelRoom";
import { HotelSummary } from "./HotelSummary";

// A group of amenities
export enum AmenityKey {
    BREAKFAST = "breakfast",
    INTERNET = "internet",
    PARKING = "parking",
    POOL = "pool",
    GUEST_SERVICE = "service",
    OTHERS = "others"
}


export type Hotel = Omit<HotelSummary, "minimalCost" | "hotelId"> & {
    id: number;
    starRating: number;
    location: string;
    hotelAmenity: HotelAmenity;
    rooms: HotelRoom[];
}

export function parseHotelAmenity(hotel: Hotel): ParsedHotel {
    return new ParsedHotel(hotel);
}

export class ParsedHotel {
    id: number;
    name: string;
    description: string;
    starRating: number;
    images: string[];
    location: string;
    amenities: Map<AmenityKey, string[]>;
    rooms: HotelRoom[];

    constructor(hotelJson: Hotel) {
        this.id = hotelJson.id;
        this.name = hotelJson.name;
        this.starRating = hotelJson.starRating;
        this.description = hotelJson.description;
        this.images = hotelJson.images;
        this.location = hotelJson.location;
        this.amenities = this.parseAmenities(hotelJson.hotelAmenity);
        this.rooms = hotelJson.rooms;
    }

    private parseAmenities(json: HotelAmenity): Map<AmenityKey, string[]> {
        const result: Map<AmenityKey, string[]> = new Map();
        result.set(AmenityKey.BREAKFAST, parseBreakfastAmenity(json.breakfastAmenity));
        result.set(AmenityKey.POOL, parsePoolAmenity(json.poolAmenity));
        result.set(AmenityKey.INTERNET, parseInternetAmenity(json.internetAmenity))
        result.set(AmenityKey.PARKING, parseParkingAmenity(json.parkingAmenity));
        result.set(AmenityKey.GUEST_SERVICE, parseGuestServiceAmenity(json.guestService));
        result.set(AmenityKey.OTHERS, parseAdditionalAmenity(json.additionalAmenity));
        return result;
    }

}