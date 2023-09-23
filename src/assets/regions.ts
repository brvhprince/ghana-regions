/**
 * Project: ghana-regions
 * File: regions
 * Created by pennycodes on 02/09/2023.
 * Copyright ghana-regions
 */
import {Region, REGION_CODES} from "../interface";

const regions: Region[] = [
    {
        code: REGION_CODES.AHAFO_REGION,
        label: "Ahafo Region",
        capital: "Goaso",
        population: {
            total: 564536,
            male: {
                total: 285251,
                percentage: 50.5
            },
            female: {
                total: 279285,
                percentage: 49.5
            },
            year: 2021,
            source: "GSS",
            full: "564,536 (2021)",
            percentage: 1.8
        },
        landArea: {
            total: 5196,
            unit: "km2",
            full: "5,196 km2",
            source: "GSS"
        }

    },
    {
        code: REGION_CODES.ASHANTI_REGION,
        label: "Ashanti Region",
        capital: "Kumasi",
        population: {
            total: 5432485,
            male: {
                total: 2676394,
                percentage: 49.3
            },
            female: {
                total: 2756091,
                percentage: 50.7
            },
            year: 2021,
            source: "GSS",
            full: "5,432,485 (2021)",
            percentage: 17.6
        },
        landArea: {
            total: 24389,
            unit: "km2",
            full: "24,389 km2",
            source: "GSS"
        }
    },
    {
        code: REGION_CODES.BONO_REGION,
        label: "Bono Region",
        capital: "Sunyani",
        population: {
            total: 1208965,
            male: {
                total: 596841,
                percentage: 49.4
            },
            female: {
                total: 612124,
                percentage: 50.6
            },
            year: 2021,
            source: "GSS",
            full: "1,208,965 (2021)",
            percentage: 3.9
        },
        landArea: {
            total: 11113,
            unit: "km2",
            full: "11,113 km2",
            source: "GSS"
        }
    },
    {
        code: REGION_CODES.BONO_EAST_REGION,
        label: "Bono East Region",
        capital: "Techiman",
        population: {
            total: 1203306,
            male: {
                total: 603095,
                percentage: 50.1
            },
            female: {
                total: 600211,
                percentage: 49.9
            },
            year: 2021,
            source: "GSS",
            full: "1,203,306 (2021)",
            percentage: 3.9
        },
        landArea: {
            total: 23248,
            unit: "km2",
            full: "23,248 km2",
            source: "GSS"
        }
    },
    {
        code: REGION_CODES.CENTRAL_REGION,
        label: "Central Region",
        capital: "Cape Coast",
        population: {
            total: 2859821,
            male: {
                total: 1390985,
                percentage: 48.7
            },
            female: {
                total: 1468836,
                percentage: 51.3
            },
            year: 2021,
            source: "GSS",
            full: "2,859,821 (2021)",
            percentage: 9.3
        },
        landArea: {
            total: 9826,
            unit: "km2",
            full: "9,826 km2",
            source: "GSS"
        }
    },
    {
        code: REGION_CODES.EASTERN_REGION,
        label: "Eastern Region",
        capital: "Koforidua",
        population: {
            total: 2917039,
            male: {
                total: 1434021,
                percentage: 49.2
            },
            female: {
                total: 1483018,
                percentage: 50.8
            },
            year: 2021,
            source: "GSS",
            full: "2,917,039 (2021)",
            percentage: 9.5
        },
        landArea: {
            total: 19323,
            unit: "km2",
            full: "19,323 km2",
            source: "GSS"
        }
    },
    {
        code: REGION_CODES.GREATER_ACCRA_REGION,
        label: "Greater Accra Region",
        capital: "Accra",
        population: {
            total: 5446237,
            male: {
                total: 2674192,
                percentage: 49.1
            },
            female: {
                total: 2772045,
                percentage: 50.9
            },
            year: 2021,
            source: "GSS",
            full: "5,446,237 (2021)",
            percentage: 17.7
        },
        landArea: {
            total: 3245,
            unit: "km2",
            full: "3,245 km2",
            source: "GSS"
        }
    },
    {
        code: REGION_CODES.NORTHERN_REGION,
        label: "Northern Region",
        capital: "Tamale",
        population: {
            total: 2310943,
            male: {
                total: 1141708,
                percentage: 49.4
            },
            female: {
                total: 1169235,
                percentage: 50.6
            },
            year: 2021,
            source: "GSS",
            full: "2,310,943 (2021)",
            percentage: 7.5
        },
        landArea: {
            total: 26524,
            unit: "km2",
            full: "26,524 km2",
            source: "GSS"
        }
    },
    {
        code: REGION_CODES.NORTH_EAST_REGION,
        label: "North East Region",
        capital: "Nalerigu",
        population: {
            total: 658903,
            male: {
                total: 322139,
                percentage: 48.9
            },
            female: {
                total: 336764,
                percentage: 51.1
            },
            year: 2021,
            source: "GSS",
            full: "658,903 (2021)",
            percentage: 2.1
        },
        landArea: {
            total: 9070,
            unit: "km2",
            full: "9,070 km2",
            source: "GSS"
        }
    },
    {
        code: REGION_CODES.OTI_REGION,
        label: "Oti Region",
        capital: "Dambai",
        population: {
            total: 747227,
            male: {
                total: 377380,
                percentage: 50.5
            },
            female: {
                total: 369847,
                percentage: 49.5
            },
            year: 2021,
            source: "GSS",
            full: "747,227 (2021)",
            percentage: 2.4
        },
        landArea: {
            total: 11066,
            unit: "km2",
            full: "11,066 km2",
            source: "GSS"
        }
    },
    {
        code: REGION_CODES.SAVANNAH_REGION,
        label: "Savannah Region",
        capital: "Damongo",
        population: {
            total: 649627,
            male: {
                total: 325973,
                percentage: 50.2
            },
            female: {
                total: 323654,
                percentage: 49.8
            },
            year: 2021,
            source: "GSS",
            full: "649,627 (2021)",
            percentage: 2.1
        },
        landArea: {
            total: 34790,
            unit: "km2",
            full: "34,790 km2",
            source: "GSS"
        }
    },
    {
        code: REGION_CODES.UPPER_EAST_REGION,
        label: "Upper East Region",
        capital: "Bolgatanga",
        population: {
            total: 1301221,
            male: {
                total: 631258,
                percentage: 48.5
            },
            female: {
                total: 669963,
                percentage: 51.5
            },
            year: 2021,
            source: "GSS",
            full: "1,301,221 (2021)",
            percentage: 4.2
        },
        landArea: {
            total: 8842,
            unit: "km2",
            full: "8,842 km2",
            source: "GSS"
        }
    },
    {
        code: REGION_CODES.UPPER_WEST_REGION,
        label: "Upper West Region",
        capital: "Wa",
        population: {
            total: 904695,
            male: {
                total: 441799,
                percentage: 48.8
            },
            female: {
                total: 462896,
                percentage: 51.2
            },
            year: 2021,
            source: "GSS",
            full: "904,695 (2021)",
            percentage: 2.9
        },
        landArea: {
            total: 18476,
            unit: "km2",
            full: "18,476 km2",
            source: "GSS"
        }
    },
    {
        code: REGION_CODES.VOLTA_REGION,
        label: "Volta Region",
        capital: "Ho",
        population: {
            total: 1649523,
            male: {
                total: 786112,
                percentage: 47.7
            },
            female: {
                total: 863411,
                percentage: 52.3
            },
            year: 2021,
            source: "GSS",
            full: "1,649,523 (2021)",
            percentage: 5.4
        },
        landArea: {
            total: 9504,
            unit: "km2",
            full: "9,504 km2",
            source: "GSS"
        }
    },
    {
        code: REGION_CODES.WESTERN_NORTH_REGION,
        label: "Western North Region",
        capital: "Sekondi-Takoradi",
        population: {
            total: 880855,
            male: {
                total: 451911,
                percentage: 51.3
            },
            female: {
                total: 428944,
                percentage: 48.7
            },
            year: 2021,
            source: "GSS",
            full: "880,855 (2021)",
            percentage: 2.9
        },
        landArea: {
            total: 10079,
            unit: "km2",
            full: "10,079 km2",
            source: "GSS"
        }
    },
    {
        code: REGION_CODES.WESTERN_REGION,
        label: "Western Region",
        capital: "Sefwi Wiawso",
        population: {
            total: 2057225,
            male: {
                total: 1043400,
                percentage: 50.7
            },
            female: {
                total: 1013825,
                percentage: 49.3
            },
            year: 2021,
            source: "GSS",
            full: "2,057,225 (2021)",
            percentage: 6.7
        },
        landArea: {
            total: 13842,
            unit: "km2",
            full: "13,842 km2",
            source: "GSS"
        }
    }
]

module.exports = regions
