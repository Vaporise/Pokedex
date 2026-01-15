import { text } from "node:stream/consumers";

export function cleanInput(input:string): string[] {
    return input.trim().split(/\s+/);
}