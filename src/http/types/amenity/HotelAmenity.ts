import { BreakfastAmenity } from "./BreakfastAmenity";
import { GuestService } from "./GuestService";
import { InternetAmenity } from "./InternetAmenity";
import { ParkingAmenity } from "./ParkingAmenity";
import { PoolAmenity } from "./PoolAmenity";

export type HotelAmenity = {
    internetAmenity: InternetAmenity;
    parkingAmenity: ParkingAmenity;
    breakfastAmenity: BreakfastAmenity;
    poolAmenity: PoolAmenity;
    guestService: GuestService;
    additionalAmenity: any[];
};
