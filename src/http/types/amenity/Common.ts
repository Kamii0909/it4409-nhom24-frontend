export type Recognizable = {
    recognizableName?: string;
}

export type Providable = {
    isProvided?: boolean;
}

// Backend will understands these amenity queries
// Backend will silently ignore others
export enum AmenityKey {
    BREAKFAST = "breakfast",
    INTERNET = "internet",
    PARKING = "parking",
    POOL = "pool",
    GUEST_SERVICE = "service",
    OTHERS = "others"
}