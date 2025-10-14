/**
 * A collection of type-safe sorting helper functions
 */
/**
 * Sort numbers in ascending or descending order
 */
export declare function sortNumbers(numbers: number[], descending?: boolean): number[];
/**
 * Sort strings alphabetically, with optional case sensitivity and direction
 */
export declare function sortStrings(strings: string[], options?: {
    caseSensitive?: boolean;
    descending?: boolean;
}): string[];
/**
 * Sort objects by a specific key
 */
export declare function sortByKey<T extends object>(items: T[], key: keyof T, descending?: boolean): T[];
/**
 * Sort by multiple keys with custom sorting options for each key
 */
export declare function sortByMultipleKeys<T extends object>(items: T[], sortKeys: Array<{
    key: keyof T;
    descending?: boolean;
    caseSensitive?: boolean;
}>): T[];
/**
 * Sort dates in ascending or descending order
 */
export declare function sortDates(dates: (Date | string)[], descending?: boolean): Date[];
//# sourceMappingURL=example.d.ts.map