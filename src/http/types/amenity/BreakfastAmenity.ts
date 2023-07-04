import { lowercaseFirstLetter, uppercaseFirstLetter } from "../../internal/StringUtility";
import { Money } from "../Money"

type BreakfastAvailability = {
    charge: {
        perAdult: Money;
        perChild: Money;
        free: boolean;
    };
    type: string;
    time: {
        timeUnit: string;
        start: string;
        end: string;
    }
}

export type BreakfastAmenity = {
    availability: BreakfastAvailability[];
}

export function parseBreakfastAmenity(breakfast: BreakfastAmenity): string[] {
    if (breakfast.availability.length === 0) {
        return [];
    }
    const result: string[] = [];
    breakfast.availability.forEach(element => {
        result.push(parseBreakfastAvailability(element));
    });
    return result;
}

function parseBreakfastAvailability(availability: BreakfastAvailability): string {
    // Vietnamese breakfast (Free) from 05:30:00 to 10:00:00 on a daily basis.
    const result: string = ` ${uppercaseFirstLetter(availability.type.toLowerCase())} `
        + `breakfast ${availability.charge.free ? '(Free)' : '(Surcharged)'}`
        + ` from ${availability.time.start} to ${availability.time.end}`
        + ` on a ${lowercaseFirstLetter(availability.time.timeUnit)} basis.`;

    return result;
}