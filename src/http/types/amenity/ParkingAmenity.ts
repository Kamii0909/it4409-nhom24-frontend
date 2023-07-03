import { Providable, Recognizable } from "./Common";

export type ParkingAmenity = Recognizable & Providable & {
    hasSelfParking: boolean;
    hasValetParking: boolean;
    hasLongTermParking: boolean;
    hasOnSiteParking: boolean;
}

export function parseParkingAmenity(json: ParkingAmenity): string[] {
    if (json.isProvided !== undefined) {
        if (!json.isProvided) {
            return ['Parking is not available'];
        }
    }
    // sanity check
    if (!json.hasSelfParking && !json.hasValetParking) {
        throw new Error('Backend issues, contact Ha Trung Kien');
    }
    let result: string[] = [];
    if (json.hasOnSiteParking) {
        result.push(`Onsite ${json.hasSelfParking ? json.hasValetParking ? 'self/valet' : 'valet' : 'self'} parking`);
    }
    if (json.hasLongTermParking) {
        result.push('Provides long term parking facilities');
    }

    return result;
}