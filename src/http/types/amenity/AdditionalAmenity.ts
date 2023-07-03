export function parseAdditionalAmenity(json: any): string[] {
    if (Array.isArray(json)
        && json.length > 0) {
        return json.filter(any => {
            if (typeof any === 'string') return true;
            else {
                console.log(`Unrecognized additional amenity ${any}`);
                return false;
            }
        });
    }
    return [];
}