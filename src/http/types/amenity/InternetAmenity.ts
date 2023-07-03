import { Recognizable } from "./Common";

type Wifi = {
    isProvided: boolean;
    isFree: boolean;
};

export type InternetAmenity = Recognizable & {
    wifiInPublicArea: Wifi;
    wifiInGuestRooms: Wifi;
};

export function parseInternetAmenity(json: InternetAmenity): string[] {
    let result: string[] = [];
    if (json.wifiInPublicArea) {
        result.push('Free WIFI in public areas');
    }
    if (json.wifiInGuestRooms) {
        result.push('Free WIFI in guest rooms');
    }

    return result;
}
