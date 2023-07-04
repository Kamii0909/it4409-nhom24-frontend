export type GuestService = {
    smoking?: any;
    hasLuggageStorage: boolean;
    hasLaundryService: boolean;
    hasConciergeService: boolean;
    hasComputerStation: boolean;
    hasHairSalon: boolean;
    hasMultilingualStaff: boolean;
    hasPorterOrBellhop: boolean;
    hasWeddingService: boolean;
};

export function parseGuestServiceAmenityJson(json: GuestService): string[] {
    const result: string[] = [];
    if (json.hasComputerStation) {
        result.push('Computer station');
    }
    if (json.hasConciergeService) {
        result.push('Concierge service');
    }
    if (json.hasHairSalon) {
        result.push('Hair salon');
    }
    if (json.hasLaundryService) {
        result.push('Laundry service');
    }
    if (json.hasLuggageStorage) {
        result.push('Luggage storage');
    }
    if (json.hasMultilingualStaff) {
        result.push('Multilingual staffs available');
    }
    if (json.hasPorterOrBellhop) {
        result.push('Porter/bellhop');
    }
    if (json.hasWeddingService) {
        result.push('Wedding service');
    }
    // TODO ignore smoking
    return result;
}