"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Project: ghana-regions
 * File: hi
 * Author: wanpeninsula
 * Author URI: https://www.pennycodes.dev
 * Created: 23/09/2023 at 10:17 am.
 *
 * Copyright (c) 2023 ghana-regions. All rights reserved.
 */
var interface_1 = require("./src/interface");
function getDuplicateKeys(obj) {
    var valueMap = {};
    for (var key in obj) {
        if (valueMap[obj[key]]) {
            valueMap[obj[key]].push(key);
        }
        else {
            valueMap[obj[key]] = [key];
        }
    }
    var duplicates = [];
    for (var key in valueMap) {
        if (valueMap[key].length > 1) {
            duplicates = duplicates.concat(valueMap[key]);
        }
    }
    return duplicates;
}
var modifiedEnum = getDuplicateKeys(interface_1.DISTRICT_CODES);
console.log(modifiedEnum);
