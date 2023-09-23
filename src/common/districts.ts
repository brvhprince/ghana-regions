/**
 * Project: ghana-regions
 * File: districts
 * Author: wanpeninsula
 * Author URI: https://www.pennycodes.dev
 * Created: 23/09/2023 at 9:50 am.
 *
 * Copyright (c) 2023 ghana-regions. All rights reserved.
 */

import {District, Region, DISTRICT_CODES, REGION_CODES, DistrictsQuery} from "../interface";
import RegionAssets from "../assets/regions";
import DistrictAssets from "../assets/districts";

class Districts {
    /**
     * Singleton instance
     * @type {Districts}
     * @private
     */
    private static _instance: Districts;

    /**
     * Regions
     * @type {District[]}
     * @private
     */
    private readonly _districts: District[];

    /**
     * Constructor
     * This is private to prevent multiple instantiation
     * @private
     */
    private constructor() {
        this._districts = DistrictAssets;
    }

    /**
     * Get instance of Districts
     * @returns {Districts}
     */
    public static get instance(): Districts {
        if (!this._instance) {
            this._instance = new Districts();
        }
        return this._instance;
    }

    /**
     * Get all districts
     * @param {boolean} [includeRegion=false] - If true, region info will be included in the result
     * @returns {District[]}
     */
    public getDistricts(includeRegion: boolean = false): District[] {
        if (includeRegion) {
            return this._districts.map((district: District) => {
                const regionInfo = RegionAssets.find((region: Region) => region.code === district.regionCode);
                return {...district, region: regionInfo};
            });
        }
        return this._districts;
    }

    /**
     * Get district by code
     * @param {DISTRICT_CODES} code
     * @returns {District | undefined}
     */
    public getDistrictByCode(code: DISTRICT_CODES): District | undefined {
        return this._districts.find((district: District) => district.code === code);
    }

    /**
     * Get districts by region code
     * @param {REGION_CODES} regionCode
     * @returns {District[]}
     */
    public getDistrictsByRegionCode(regionCode: REGION_CODES): District[] {
        return this._districts.filter((district: District) => district.regionCode === regionCode);
    }

    /**
     * Search districts by name or/and capital
     * @param {DistrictsQuery} param
     * @returns {District[]}
     */
    public searchDistricts(param?: DistrictsQuery): District[] {

        const defaultParam: DistrictsQuery = {
            district: true,
            capital: false,
            query: "",
            includeRegion: false,
        }

        const options = {...defaultParam, ...param};

        const { district, query, capital, includeRegion } = options;
        let districts = this._districts;

        if (query) {
            if (capital && district) {
                districts = districts.filter((district: District) => {
                    const name = district.label.toLowerCase();
                    const capital = district.capital.toLowerCase();
                    const search = query.toLowerCase();
                    return capital.includes(search) || name.includes(search);
                });
            } else if (capital) {
                districts = this.searchDistrictsByCapital(query);
            } else if (district) {
                districts = this.searchDistrictsByName(query);
            }

        }

        if (includeRegion) {
            return districts.map((district: District) => {
                const regionInfo = RegionAssets.find((region: Region) => region.code === district.regionCode);
                return {...district, region: regionInfo};
            });
        }

        return districts;
    }

    /**
     * Search districts by name only
     * @param {string} query
     * @returns {District[]}
     */
    private searchDistrictsByName(query: string): District[] {
        return this._districts.filter((district: District) => district.label.toLowerCase().includes(query.toLowerCase()));
    }

    /**
     * Search districts by capital only
     * @param {string} query
     * @returns {District[]}
     */
    private searchDistrictsByCapital(query: string): District[] {
        return this._districts.filter((district: District) => district.capital.toLowerCase().includes(query.toLowerCase()));
    }

}

const instance = Districts.instance;
export default instance;
