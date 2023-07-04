export type PoolAmenity = {
    indoorPool: number;
    outdoorPool: number;
    seasonalPool: any[];
    poolHour: {
        openFrom: string;
        openTo: string;
    };
    nearbyPool: {
        hasNearbyIndoorPool: boolean;
        hasNearbyOutdoorPool: boolean;
    };
    others: {
        hasSteamRoom: boolean;
        hasSauna: boolean;
        hasFenceAround: boolean;
        hasOnsiteLifeguard: boolean;
        hasPoolUmbrellas: boolean;
        hasPoolSunLoungers: boolean;
        hasPoolToys: boolean;
    }
}

export function parsePoolAmenity(json: PoolAmenity): string[] {
    const result: string[] = [];
    if (json.indoorPool >= 1) {
        result.push(`${Math.floor(json.indoorPool)} indoor pool(s)`);
    }
    if (json.outdoorPool >= 1) {
        result.push(`${Math.floor(json.outdoorPool)} outdoor pool(s)`);
    }
    if (json.poolHour != undefined) {
        result.push(`Pool opens from ${json.poolHour.openFrom} to ${json.poolHour.openTo}`);
    }
    // Ignore json.others and json.seasonalPools
    return result;
}