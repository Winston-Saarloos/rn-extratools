// DEV MOD <SWAPS>
const DEV_MODE: boolean = false;
var rest_url: string = '';
var graphQL_url: string = '';

if (DEV_MODE) {
    rest_url = 'http://localhost:3000/';
    graphQL_url = 'http://localhost:4000/';
} else {
    rest_url = 'https://rn-rest-api.herokuapp.com/';
    graphQL_url = 'https://lamentis-api.herokuapp.com/';
}

// Image Location
export const USER_PHOTO_FEED: number = 1;
export const USER_PHOTO_LIBRARY: number = 2;
export const GLOBAL_IMAGE_FEED: number = 3;
export const ROOM_IMAGE_FEED: number = 4;

// Display Order
export const NEWEST_TO_OLDEST: number = 1;
export const OLDEST_TO_NEWEST: number = 2;
export const LOWEST_CHEER_COUNT_FIRST: number = 3;
export const HIGHEST_CHEER_COUNT_FIRST: number = 4;
export const LOWEST_COMMENT_COUNT_FIRST: number = 5;
export const HIGHEST_COMMENT_COUNT_FIRST: number = 6;

// Filter Related
export const FILTER_DELIMITER_SYMBOL: string = '$';

// Filter Types
export const USER_ACCOUNT: number = 1;
export const ACTIVITY: number = 2;
export const EVENT: number = 3;
export const DATE: number = 4;
export const DATE_RANGE: number = 5;
export const CHEER_COUNT: number = 6;
export const COMMENT_COUNT: number = 7;

// REST API
export const BASE_URL: string = rest_url;

// GRAPHQL API
export const GRAPHQL_BASE_URL: string = graphQL_url;

// Filter Prefixes
export const ACTIVITY_PREFIX: string = 'A|';
export const ACTIVITY_NEGATE_PREFIX: string = '!A|';
export const USER_ACCOUNT_PREFIX: string = 'U|';
export const USER_ACCOUNT_NEGATE_PREFIX: string = '!U|';
export const EVENT_PREFIX: string = 'E|';
export const EVENT_NEGATE_PREFIX: string = '!E|';
export const DATE_PREFIX: string = 'D|';
export const DATE_NEGATE_PREFIX: string = '!D|';
export const DATE_RANGE_PREFIX: string = 'DR|';
export const DATE_RANGE_NEGATE_PREFIX: string = '!|DR';
export const CHEER_COUNT_PREFIX: string = 'LC|';
export const CHEER_COUNT_NEGATE_PREFIX: string = '!LC|';
export const COMMENT_COUNT_PREFIX: string = 'CC|';
export const COMMENT_COUNT_NEGATE_PREFIX: string = '!CC|';

export {};