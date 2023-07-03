import { Money } from "./Money";
import { Recognizable } from "./amenity/Common";


type Bed = Recognizable & {
    image?: null;
    numberOfBed: number;
}
type BedAmenity = Recognizable & {
    extraBedPolicy?: any;
    numberOfAdult: number;
    beds: Bed[];
}

export type HotelRoom = {
    id: number;
    type: string;
    tier: string;
    roomName: string;
    view: string;
    bed: BedAmenity;
    size: string;
    costPerNight: Money;
}