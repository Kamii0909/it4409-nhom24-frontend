import { Money } from "./Money"

export type HotelSummary = {
    hotelId: number,
    name: string,
    description: string,
    images: string[]
    minimalCost: Money
}