/**
 * Project: ghana-regions
 * File: regions
 * Created by pennycodes on 02/09/2023.
 * Copyright ghana-regions
 */
import {District, Region} from "../interface";


class Regions {
    private static _instance: Regions;
    private _regions: Region[];

    private constructor() {
        this._regions = [];
    }

    public static get instance(): Regions {
        if (!this._instance) {
            this._instance = new Regions();
        }
        return this._instance;
    }

    public get regions(): Region[] {
        return this._regions;
    }

    public set regions(regions: Region[]) {
        this._regions = regions;
    }

    public getRegionByCode(code: string): Region {
        return this._regions.find((region: Region) => region.code === code);
    }

    public getDistrictByCode(regionCode: string, districtCode: string): District {
        const region = this.getRegionByCode(regionCode);
        return region.districts.find((district: District) => district.code === districtCode);
    }
}

const regions = Regions.instance;
regions.regions = require('../assets/regions.json');
export default regions;
