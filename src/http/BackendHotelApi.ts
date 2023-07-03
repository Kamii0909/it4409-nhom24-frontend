import { BackendHttpClient } from "./internal/BackendHttpClient";
import { Hotel, ParsedHotel } from "./types/Hotel";
import { HotelSummary } from "./types/HotelSummary";

export async function getHotelById(id: number): Promise<ParsedHotel> {
    return BackendHttpClient
        .get<Hotel>('/hotel/' + id)
        .then(response => new ParsedHotel(response.data))
}

export async function getMultipleHotels(page?: number, pageSize?: number): Promise<ParsedHotel[]> {
    return BackendHttpClient
        .get<Hotel[]>('/hotel', {
            params: {
                page: page === undefined ? 0 : page,
                pageSize: pageSize === undefined ? 20 : pageSize
            }
        }).then(response => response.data.map(h => new ParsedHotel(h)))
}

// Backend will understands these amenity queries
// Backend will silently ignore others
export enum FilterableAmenity {
    BREAKFAST = "breakfast",
    INTERNET = "internet",
    PARKING = "parking",
    POOL = "pool"
}

export type BackendQueryFilter = {
    page?: number;
    pageSize?: number;
    minPrice?: number;
    maxPrice?: number;
    stars?: number[];
    amenities?: FilterableAmenity[];
}

export async function filterHotels(filter: BackendQueryFilter): Promise<HotelSummary[]> {
    return BackendHttpClient.get<HotelSummary[]>('/hotel/filter', {
        params: {
            page: filter.page === undefined ? 0 : filter.page,
            pageSize: filter.pageSize === undefined ? 20 : filter.pageSize,
            minPrice: filter.minPrice,
            maxPrice: filter.maxPrice,
            star: filter.stars,
            amenity: filter.amenities
        },
        paramsSerializer: {
            indexes: null
        }
    }).then(res => res.data)
}

export type { ParsedHotel, HotelSummary }