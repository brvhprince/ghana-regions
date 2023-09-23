/**
 * Project: ghana-regions
 * File: regions
 * Created by pennycodes on 02/09/2023.
 * Copyright ghana-regions
 */
import {District, Region, REGION_CODES, RegionsQuery} from "../interface";
import RegionAssets from "../assets/regions";
import DistrictAssets from "../assets/districts";

class Regions {
    /**
     * Singleton instance
     * @type {Regions}
     * @private
     */
    private static _instance: Regions;

    /**
     * Regions
     * @type {Region[]}
     * @private
     */
    private readonly _regions: Region[];

    /**
     * Constructor
     * This is private to prevent multiple instantiation
     * @private
     */
    private constructor() {
        this._regions = RegionAssets;
    }

    /**
     * Get instance of Regions
     * @returns {Regions}
     */
    public static get instance(): Regions {
        if (!this._instance) {
            this._instance = new Regions();
        }
        return this._instance;
    }

    /**
     * Get all regions
     * @param {boolean} [includeDistricts=false] - If true, districts will be included in the result
     * @returns {Region[]}
     */
    public getRegions(includeDistricts: boolean = false): Region[] {
        if (includeDistricts) {
            return this._regions.map((region: Region) => {
                const districts = DistrictAssets.filter((district: District) => district.regionCode === region.code);
                return {...region, districts};
            });
        }
        return this._regions;
    }

    /**
     * Get region by code
     * @see REGION_CODES
     * @param {REGION_CODES} code
     * @returns {Region | undefined}
     */
    public getRegionByCode(code: REGION_CODES): Region | undefined {
        return this._regions.find((region: Region) => region.code === code);
    }

    /**
     * Search region by name or/and capital
     * @param {RegionsQuery} param - Search query interface
     * @returns {Region[]}
     */
    public searchRegion(param?: RegionsQuery): Region[] {

        const defaultParam: RegionsQuery = {
            query: "",
            includeDistricts: false,
            capital: false,
            region: true,
        }
        const options = {...defaultParam, ...param};
        const  { query, includeDistricts, capital, region } = options;

        let regions = this._regions;

        if (query) {
            if (capital && region) {
                regions = regions.filter((region: Region) => {
                    const name = region.label.toLowerCase();
                    const capital = region.capital.toLowerCase();
                    const search = query.toLowerCase();
                    return capital.includes(search) || name.includes(search);
                });
            }
            else if (capital) {
                regions = this.searchRegionsByCapital(query);
            }
            else if (region) {
                regions = this.searchRegionsByName(query);
            }
        }

        if (includeDistricts) {
            return regions.map((region: Region) => {
                const districts = DistrictAssets.filter((district: District) => district.regionCode === region.code);
                return {...region, districts};
            });
        }

        return regions;

    }

    /**
     * Search region by name only
     * @param {string} query - Search query
     * @returns {Region[]}
     */
    public searchRegionsByName(query: string): Region[] {
        return this._regions.filter((region: Region) => {
            const name = region.label.toLowerCase();
            const search = query.toLowerCase();
            return name.includes(search);
        });
    }

    /**
     * Search region by capital only
     * @param {string} query - Search query
     * @returns {Region[]}
     */
    public searchRegionsByCapital(query: string): Region[] {
        return this._regions.filter((region: Region) => {
            const capital = region.capital.toLowerCase();
            const search = query.toLowerCase();
            return capital.includes(search);
        });
    }

}

const instance = Regions.instance;
export default instance;
