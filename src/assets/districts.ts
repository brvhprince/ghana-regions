/**
 * Project: ghana-regions
 * File: districts
 * Created by pennycodes on 02/09/2023.
 * Copyright ghana-regions
 */
import {ADMINISTRATIVE_LEVELS, District, DISTRICT_CODES, REGION_CODES } from "../interface";

const districts: District[] = [
    {
        code: DISTRICT_CODES.ASUNAFO_NORTH_MUNICIPAL,
        label: "Asunafo North",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Goaso",
        regionCode: REGION_CODES.AHAFO_REGION,
    },
    {
        code: DISTRICT_CODES.ASUNAFO_SOUTH_DISTRICT,
        label: "Asunafo South",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Kukuom",
        regionCode: REGION_CODES.AHAFO_REGION
    },
    {
        code: DISTRICT_CODES.ASUTIFI_NORTH_DISTRICT,
        label: "Asutifi North",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Kenyasi",
        regionCode: REGION_CODES.AHAFO_REGION
    },
    {
        code: DISTRICT_CODES.ASUTIFI_SOUTH_DISTRICT,
        label: "Asutifi South",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Hwidiem",
        regionCode: REGION_CODES.AHAFO_REGION
    },
    {
        code: DISTRICT_CODES.TANO_NORTH_MUNICIPAL,
        label: "Tano North",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Duayaw Nkwanta",
        regionCode: REGION_CODES.AHAFO_REGION
    },
    {
        code: DISTRICT_CODES.TANO_SOUTH_MUNICIPAL,
        label: "Tano South",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Bechem",
        regionCode: REGION_CODES.AHAFO_REGION
    },
    {
        code: DISTRICT_CODES.ADANSI_ASOKWA_DISTRICT,
        label: "Adansi Asokwa",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Adansi Asokwa",
        regionCode: REGION_CODES.ASHANTI_REGION
    },
    {
        code: DISTRICT_CODES.ADANSI_NORTH_DISTRICT,
        label: "Adansi North",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Fomena",
        regionCode: REGION_CODES.ASHANTI_REGION
    },
    {
        code: DISTRICT_CODES.ADANSI_SOUTH_DISTRICT,
        label: "Adansi South",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "New Edubiase",
        regionCode: REGION_CODES.ASHANTI_REGION
    },
    {
        code: DISTRICT_CODES.AFIGYA_KWABRE_NORTH_DISTRICT,
        label: "Afigya-Kwabre North",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Boamang",
        regionCode: REGION_CODES.ASHANTI_REGION
    },
    {
        code: DISTRICT_CODES.AFIGYA_KWABRE_SOUTH_DISTRICT,
        label: "Afigya-Kwabre South",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Kodie",
        regionCode: REGION_CODES.ASHANTI_REGION
    },
    {
        code: DISTRICT_CODES.AHAFO_ANO_NORTH_DISTRICT,
        label: "Ahafo-Ano North",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Tepa",
        regionCode: REGION_CODES.ASHANTI_REGION
    },
    {
        code: DISTRICT_CODES.AHAFO_ANO_SOUTH_EAST_DISTRICT,
        label: "Ahafo-Ano South East",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Adugyama",
        regionCode: REGION_CODES.ASHANTI_REGION
    },
    {
        code: DISTRICT_CODES.AHAFO_ANO_SOUTH_WEST_DISTRICT,
        label: "Ahafo-Ano South West",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Mankranso",
        regionCode: REGION_CODES.ASHANTI_REGION
    },
    {
        code: DISTRICT_CODES.AKROFUOM_DISTRICT,
        label: "Akrofuom",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Akrofuom",
        regionCode: REGION_CODES.ASHANTI_REGION
    },
    {
        code: DISTRICT_CODES.AMANSIE_CENTRAL_DISTRICT,
        label: "Amansie Central",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Jacobu",
        regionCode: REGION_CODES.ASHANTI_REGION
    },
    {
        code: DISTRICT_CODES.AMANSIE_WEST_DISTRICT,
        label: "Amansie West",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Manso Nkwanta",
        regionCode: REGION_CODES.ASHANTI_REGION
    },
    {
        code: DISTRICT_CODES.AMANSIE_SOUTH_DISTRICT,
        label: "Amansie South",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Manso Adubia",
        regionCode: REGION_CODES.ASHANTI_REGION
    },
    {
        code: DISTRICT_CODES.ASANTE_AKIM_CENTRAL_MUNICIPAL,
        label: "Asante-Akim Central",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Konongo",
        regionCode: REGION_CODES.ASHANTI_REGION
    },
    {
        code: DISTRICT_CODES.ASANTE_AKIM_NORTH_DISTRICT,
        label: "Asante-Akim North",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Agogo",
        regionCode: REGION_CODES.ASHANTI_REGION
    },
    {
        code: DISTRICT_CODES.ASANTE_AKIM_SOUTH_MUNICIPAL,
        label: "Asante-Akim South",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Juaso",
        regionCode: REGION_CODES.ASHANTI_REGION
    },
    {
        code: DISTRICT_CODES.ASOKORE_MAMPONG_MUNICIPAL,
        label: "Asokore-Mampong",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Asokore-Mampong",
        regionCode: REGION_CODES.ASHANTI_REGION
    },
    {
        code: DISTRICT_CODES.ASOKWA_MUNICIPAL,
        label: "Asokwa",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Asokwa",
        regionCode: REGION_CODES.ASHANTI_REGION
    },
    {
        code: DISTRICT_CODES.ATWIMA_KWANWOMA_DISTRICT,
        label: "Atwima-Kwanwoma",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Twedie",
        regionCode: REGION_CODES.ASHANTI_REGION
    },
    {
        code: DISTRICT_CODES.ATWIMA_MPONUA_DISTRICT,
        label: "Atwima-Mponua",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Nyinahin",
        regionCode: REGION_CODES.ASHANTI_REGION
    },
    {
        code: DISTRICT_CODES.ATWIMA_NWABIAGYA_MUNICIPAL,
        label: "Atwima-Nwabiagya",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Nkawie",
        regionCode: REGION_CODES.ASHANTI_REGION
    },
    {
        code: DISTRICT_CODES.ATWIMA_NWABIAGYA_NORTH_DISTRICT,
        label: "Atwima-Nwabiagya North",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Barekese",
        regionCode: REGION_CODES.ASHANTI_REGION
    },
    {
        code: DISTRICT_CODES.BEKWAI_MUNICIPAL,
        label: "Bekwai",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Bekwai",
        regionCode: REGION_CODES.ASHANTI_REGION
    },
    {
        code: DISTRICT_CODES.BOSOME_FREHO_DISTRICT,
        label: "Bosome Freho",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Asiwa",
        regionCode: REGION_CODES.ASHANTI_REGION
    },
    {
        code: DISTRICT_CODES.BOSOMTWE_DISTRICT,
        label: "Bosomtwe",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Kuntanase",
        regionCode: REGION_CODES.ASHANTI_REGION
    },
    {
        code: DISTRICT_CODES.EJISU_MUNICIPAL,
        label: "Ejisu",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Ejisu",
        regionCode: REGION_CODES.ASHANTI_REGION
    },
    {
        code: DISTRICT_CODES.EJURA_SEKYEDUMASE_MUNICIPAL,
        label: "Ejura-Sekyedumase",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Ejura",
        regionCode: REGION_CODES.ASHANTI_REGION
    },
    {
        code: DISTRICT_CODES.JUABEN_MUNICIPAL,
        label: "Juaben",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Juaben",
        regionCode: REGION_CODES.ASHANTI_REGION
    },
    {
        code: DISTRICT_CODES.KUMASI_METROPOLITAN,
        label: "Kumasi",
        administrativeLevel: ADMINISTRATIVE_LEVELS.METROPOLITAN,
        capital: "Kumasi",
        regionCode: REGION_CODES.ASHANTI_REGION
    },
    {
        code: DISTRICT_CODES.KWABRE_EAST_DISTRICT,
        label: "Kwabre East",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Mamponteng",
        regionCode: REGION_CODES.ASHANTI_REGION
    },
    {
        code: DISTRICT_CODES.KWADASO_MUNICIPAL,
        label: "Kwadaso",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Kwadaso",
        regionCode: REGION_CODES.ASHANTI_REGION
    },
    {
        code: DISTRICT_CODES.MAMPONG_MUNICIPAL,
        label: "Mampong",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Mampong",
        regionCode: REGION_CODES.ASHANTI_REGION
    },
    {
        code: DISTRICT_CODES.OBUASI_EAST_MUNICIPAL,
        label: "Obuasi East",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Tutuka",
        regionCode: REGION_CODES.ASHANTI_REGION
    },
    {
        code: DISTRICT_CODES.OBUASI_MUNICIPAL,
        label: "Obuasi",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Obuasi",
        regionCode: REGION_CODES.ASHANTI_REGION
    },
    {
        code: DISTRICT_CODES.OFFINSO_MUNICIPAL,
        label: "Offinso",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Offinso",
        regionCode: REGION_CODES.ASHANTI_REGION
    },
    {
        code: DISTRICT_CODES.OFFINSO_NORTH_DISTRICT,
        label: "Offinso North",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Akomadan",
        regionCode: REGION_CODES.ASHANTI_REGION
    },
    {
        code: DISTRICT_CODES.OFORIKROM_MUNICIPAL,
        label: "Oforikrom",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Oforikrom",
        regionCode: REGION_CODES.ASHANTI_REGION
    },
    {
        code: DISTRICT_CODES.OLD_TAFO_MUNICIPAL,
        label: "Old Tafo",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Old Tafo",
        regionCode: REGION_CODES.ASHANTI_REGION
    },
    {
        code: DISTRICT_CODES.SEKYERE_AFRAM_PLAINS_DISTRICT,
        label: "Sekyere Afram Plains",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Drobonso",
        regionCode: REGION_CODES.ASHANTI_REGION
    },
    {
        code: DISTRICT_CODES.SEKYERE_CENTRAL_DISTRICT,
        label: "Sekyere Central",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Nsuta",
        regionCode: REGION_CODES.ASHANTI_REGION
    },
    {
        code: DISTRICT_CODES.SEKYERE_EAST_DISTRICT,
        label: "Sekyere East",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Effiduase",
        regionCode: REGION_CODES.ASHANTI_REGION
    },
    {
        code: DISTRICT_CODES.SEKYERE_KUMAWU_DISTRICT,
        label: "Sekyere Kumawu",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Kumawu",
        regionCode: REGION_CODES.ASHANTI_REGION
    },
    {
        code: DISTRICT_CODES.SEKYERE_SOUTH_DISTRICT,
        label: "Sekyere South",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Agona",
        regionCode: REGION_CODES.ASHANTI_REGION
    },
    {
        code: DISTRICT_CODES.SUAME_MUNICIPAL,
        label: "Suame",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Suame",
        regionCode: REGION_CODES.ASHANTI_REGION
    },
    {
        code: DISTRICT_CODES.BANDA_DISTRICT,
        label: "Banda",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Banda Ahenkro",
        regionCode: REGION_CODES.BONO_REGION
    },
    {
        code: DISTRICT_CODES.BEREKUM_EAST_MUNICIPAL,
        label: "Berekum East",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Berekum",
        regionCode: REGION_CODES.BONO_REGION
    },
    {
        code: DISTRICT_CODES.BEREKUM_WEST_DISTRICT,
        label: "Berekum West",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Jinijini",
        regionCode: REGION_CODES.BONO_REGION
    },
    {
        code: DISTRICT_CODES.DORMAA_CENTRAL_MUNICIPAL,
        label: "Dormaa Central",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Dormaa Ahenkro",
        regionCode: REGION_CODES.BONO_REGION
    },
    {
        code: DISTRICT_CODES.DORMAA_EAST_DISTRICT,
        label: "Dormaa East",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Wamfie",
        regionCode: REGION_CODES.BONO_REGION
    },
    {
        code: DISTRICT_CODES.DORMAA_WEST_DISTRICT,
        label: "Dormaa West",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Nkrankwanta",
        regionCode: REGION_CODES.BONO_REGION
    },
    {
        code: DISTRICT_CODES.JAMAN_NORTH_DISTRICT,
        label: "Jaman North",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Sampa",
        regionCode: REGION_CODES.BONO_REGION
    },
    {
        code: DISTRICT_CODES.JAMAN_SOUTH_MUNICIPAL,
        label: "Jaman South",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Drobo",
        regionCode: REGION_CODES.BONO_REGION
    },
    {
        code: DISTRICT_CODES.SUNYANI_MUNICIPAL,
        label: "Sunyani",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Sunyani",
        regionCode: REGION_CODES.BONO_REGION
    },
    {
        code: DISTRICT_CODES.SUNYANI_WEST_DISTRICT,
        label: "Sunyani West",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Odumase",
        regionCode: REGION_CODES.BONO_REGION
    },
    {
        code: DISTRICT_CODES.TAIN_DISTRICT,
        label: "Tain",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Nsawkaw",
        regionCode: REGION_CODES.BONO_REGION
    },
    {
        code: DISTRICT_CODES.WENCHI_MUNICIPAL,
        label: "Wenchi",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Wenchi",
        regionCode: REGION_CODES.BONO_REGION
    },
    {
        code: DISTRICT_CODES.ATEBUBU_AMANTIN_MUNICIPAL,
        label: "Atebubu-Amantin",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Atebubu",
        regionCode: REGION_CODES.BONO_EAST_REGION
    },
    {
        code: DISTRICT_CODES.KINTAMPO_NORTH_MUNICIPAL,
        label: "Kintampo North",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Kintampo",
        regionCode: REGION_CODES.BONO_EAST_REGION
    },
    {
        code: DISTRICT_CODES.KINTAMPO_SOUTH_DISTRICT,
        label: "Kintampo South",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Jema",
        regionCode: REGION_CODES.BONO_EAST_REGION
    },
    {
        code: DISTRICT_CODES.NKORANZA_NORTH_DISTRICT,
        label: "Nkoranza North",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Busunya",
        regionCode: REGION_CODES.BONO_EAST_REGION
    },
    {
        code: DISTRICT_CODES.NKORANZA_SOUTH_MUNICIPAL,
        label: "Nkoranza South",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Nkoranza",
        regionCode: REGION_CODES.BONO_EAST_REGION
    },
    {
        code: DISTRICT_CODES.PRU_EAST_DISTRICT,
        label: "Pru East",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Yeji",
        regionCode: REGION_CODES.BONO_EAST_REGION
    },
    {
        code: DISTRICT_CODES.PRU_WEST_DISTRICT,
        label: "Pru West",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Prang",
        regionCode: REGION_CODES.BONO_EAST_REGION
    },
    {
        code: DISTRICT_CODES.SENE_EAST_DISTRICT,
        label: "Sene East",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Kajaji",
        regionCode: REGION_CODES.BONO_EAST_REGION
    },
    {
        code: DISTRICT_CODES.SENE_WEST_DISTRICT,
        label: "Sene West",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Kwame Danso",
        regionCode: REGION_CODES.BONO_EAST_REGION
    },
    {
        code: DISTRICT_CODES.TECHIMAN_MUNICIPAL,
        label: "Techiman",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Techiman",
        regionCode: REGION_CODES.BONO_EAST_REGION
    },
    {
        code: DISTRICT_CODES.TECHIMAN_NORTH_DISTRICT,
        label: "Techiman North",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Tuobodom",
        regionCode: REGION_CODES.BONO_EAST_REGION
    },
    {
        code: DISTRICT_CODES.ABURA_ASEBU_KWAMANKESE_DISTRICT,
        label: "Abura/Asebu/Kwamankese",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Abura-Dunkwa",
        regionCode: REGION_CODES.CENTRAL_REGION

    },
    {
        code: DISTRICT_CODES.AGONA_EAST_DISTRICT,
        label: "Agona East",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Nsaba",
        regionCode: REGION_CODES.CENTRAL_REGION
    },
    {
        code: DISTRICT_CODES.AGONA_WEST_MUNICIPAL,
        label: "Agona West Municipal",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Agona Swedru",
        regionCode: REGION_CODES.CENTRAL_REGION
    },
    {
        code: DISTRICT_CODES.AJUMAKO_ENYAN_ESIAM_DISTRICT,
        label: "Ajumako/Enyan/Essiam",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Ajumako",
        regionCode: REGION_CODES.CENTRAL_REGION
    },
    {
        code: DISTRICT_CODES.ASIKUMA_ODOBEN_BRAKWA_DISTRICT,
        label: "Asikuma Odoben Brakwa",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Breman Asikuma",
        regionCode: REGION_CODES.CENTRAL_REGION
    },
    {
        code: DISTRICT_CODES.ASSIN_CENTRAL_MUNICIPAL,
        label: "Assin Central",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Assin Foso",
        regionCode: REGION_CODES.CENTRAL_REGION
    },
    {
        code: DISTRICT_CODES.ASSIN_NORTH_DISTRICT,
        label: "Assin North",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Assin Bereku",
        regionCode: REGION_CODES.CENTRAL_REGION
    },
    {
        code: DISTRICT_CODES.ASSIN_SOUTH_DISTRICT,
        label: "Assin South",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Nsuaem Kyekyewere",
        regionCode: REGION_CODES.CENTRAL_REGION
    },
    {
        code: DISTRICT_CODES.AWUTU_SENYA_EAST_MUNICIPAL,
        label: "Awutu Senya East",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Kasoa",
        regionCode: REGION_CODES.CENTRAL_REGION
    },
    {
        code: DISTRICT_CODES.AWUTU_SENYA_WEST_DISTRICT,
        label: "Awutu Senya West",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Awutu Breku",
        regionCode: REGION_CODES.CENTRAL_REGION
    },
    {
        code: DISTRICT_CODES.CAPE_COAST_METROPOLITAN,
        label: "Cape Coast",
        administrativeLevel: ADMINISTRATIVE_LEVELS.METROPOLITAN,
        capital: "Cape Coast",
        regionCode: REGION_CODES.CENTRAL_REGION
    },
    {
        code: DISTRICT_CODES.EFFUTU_MUNICIPAL,
        label: "Effutu",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Winneba",
        regionCode: REGION_CODES.CENTRAL_REGION
    },
    {
        code: DISTRICT_CODES.EKUMFI_DISTRICT,
        label: "Ekumfi",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Esakyir",
        regionCode: REGION_CODES.CENTRAL_REGION
    },
    {
        code: DISTRICT_CODES.GOMOA_EAST_DISTRICT,
        label: "Gomoa East",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Potsin",
        regionCode: REGION_CODES.CENTRAL_REGION
    },
    {
        code: DISTRICT_CODES.GOMOA_CENTRAL_DISTRICT,
        label: "Gomoa Central",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Afransi",
        regionCode: REGION_CODES.CENTRAL_REGION
    },
    {
        code: DISTRICT_CODES.GOMOA_WEST_DISTRICT,
        label: "Gomoa West",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Apam",
        regionCode: REGION_CODES.CENTRAL_REGION
    },
    {
        code: DISTRICT_CODES.KOMENDA_EDINA_EGUAFO_ABIREM_MUNICIPAL,
        label: "Komenda/Edina/Eguafo/Abirem",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Elmina",
        regionCode: REGION_CODES.CENTRAL_REGION
    },
    {
        code: DISTRICT_CODES.MFANTSIMAN_MUNICIPAL,
        label: "Mfantsiman",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Saltpond",
        regionCode: REGION_CODES.CENTRAL_REGION
    },
    {
        code: DISTRICT_CODES.TWIFO_ATTI_MORKWA_DISTRICT,
        label: "Twifo Atti Morkwa",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Twifo Praso",
        regionCode: REGION_CODES.CENTRAL_REGION
    },
    {
        code: DISTRICT_CODES.TWIFO_HEMANG_LOWER_DENKYIRA_DISTRICT,
        label: "Twifo/Hemang/Lower Denkyira",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Hemang",
        regionCode: REGION_CODES.CENTRAL_REGION
    },
    {
        code: DISTRICT_CODES.UPPER_DENKYIRA_EAST_MUNICIPAL,
        label: "Upper Denkyira East",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Dunkwa-on-Offin",
        regionCode: REGION_CODES.CENTRAL_REGION
    },
    {
        code: DISTRICT_CODES.UPPER_DENKYIRA_WEST_DISTRICT,
        label: "Upper Denkyira West",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Diaso",
        regionCode: REGION_CODES.CENTRAL_REGION
    },
    {
        code: DISTRICT_CODES.ABUAKWA_NORTH_MUNICIPAL,
        label: "Abuakwa North",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Kukurantumi",
        regionCode: REGION_CODES.EASTERN_REGION
    },
    {
        code: DISTRICT_CODES.ABUAKWA_SOUTH_MUNICIPAL,
        label: "Abuakwa South",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Kibi",
        regionCode: REGION_CODES.EASTERN_REGION
    },
    {
        code: DISTRICT_CODES.ACHIASE_DISTRICT,
        label: "Achiase",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Achiase",
        regionCode: REGION_CODES.EASTERN_REGION
    },
    {
        code: DISTRICT_CODES.AKUAPEM_NORTH_MUNICIPAL,
        label: "Akuapim North",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Akropong",
        regionCode: REGION_CODES.EASTERN_REGION
    },
    {
        code: DISTRICT_CODES.AKUAPEM_SOUTH_DISTRICT,
        label: "Akuapim South",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Aburi",
        regionCode: REGION_CODES.EASTERN_REGION
    },
    {
        code: DISTRICT_CODES.AKYEMANSA_DISTRICT,
        label: "Akyemansa",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Ofoase",
        regionCode: REGION_CODES.EASTERN_REGION
    },
    {
        code: DISTRICT_CODES.ASENE_MANSO_AKROSO_DISTRICT,
        label: "Asene Manso Akroso",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Manso",
        regionCode: REGION_CODES.EASTERN_REGION
    },
    {
        code: DISTRICT_CODES.ASUOGYAMAN_DISTRICT,
        label: "Asuogyaman",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Atimpoku",
        regionCode: REGION_CODES.EASTERN_REGION
    },
    {
        code: DISTRICT_CODES.ATIWA_EAST_DISTRICT,
        label: "Atiwa East",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Anyinam",
        regionCode: REGION_CODES.EASTERN_REGION
    },
    {
        code: DISTRICT_CODES.ATIWA_WEST_DISTRICT,
        label: "Atiwa West",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Kwabeng",
        regionCode: REGION_CODES.EASTERN_REGION
    },
    {
        code: DISTRICT_CODES.AYENSUANO_DISTRICT,
        label: "Ayensuano",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Coaltar",
        regionCode: REGION_CODES.EASTERN_REGION
    },
    {
        code: DISTRICT_CODES.BIRIM_CENTRAL_MUNICIPAL,
        label: "Birim Central",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Akim Oda",
        regionCode: REGION_CODES.EASTERN_REGION
    },
    {
        code: DISTRICT_CODES.BIRIM_NORTH_DISTRICT,
        label: "Birim North",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "New Abirem",
        regionCode: REGION_CODES.EASTERN_REGION
    },
    {
        code: DISTRICT_CODES.BIRIM_SOUTH_DISTRICT,
        label: "Birim South",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Akim Swedru",
        regionCode: REGION_CODES.EASTERN_REGION
    },
    {
        code: DISTRICT_CODES.DENKYEMBUOR_DISTRICT,
        label: "Denkyembour",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Akwatia",
        regionCode: REGION_CODES.EASTERN_REGION
    },
    {
        code: DISTRICT_CODES.FANTEAKWA_NORTH_DISTRICT,
        label: "Fanteakwa North",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Begoro",
        regionCode: REGION_CODES.EASTERN_REGION
    },
    {
        code: DISTRICT_CODES.FANTEAKWA_SOUTH_DISTRICT,
        label: "Fanteakwa South",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Osino",
        regionCode: REGION_CODES.EASTERN_REGION
    },
    {
        code: DISTRICT_CODES.KWAEBIBIREM_MUNICIPAL,
        label: "Kwaebibirem",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Kade",
        regionCode: REGION_CODES.EASTERN_REGION
    },
    {
        code: DISTRICT_CODES.KWAHU_AFRAM_PLAINS_NORTH_DISTRICT,
        label: "Kwahu Afram Plains North",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Donkorkrom",
        regionCode: REGION_CODES.EASTERN_REGION
    },
    {
        code: DISTRICT_CODES.KWAHU_AFRAM_PLAINS_SOUTH_DISTRICT,
        label: "Kwahu Afram Plains South",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Tease",
        regionCode: REGION_CODES.EASTERN_REGION
    },
    {
        code: DISTRICT_CODES.KWAHU_EAST_DISTRICT,
        label: "Kwahu East",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Abetifi",
        regionCode: REGION_CODES.EASTERN_REGION
    },
    {
        code: DISTRICT_CODES.KWAHU_SOUTH_DISTRICT,
        label: "Kwahu South",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Mpraeso",
        regionCode: REGION_CODES.EASTERN_REGION
    },
    {
        code: DISTRICT_CODES.KWAHU_WEST_MUNICIPAL,
        label: "Kwahu West",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Nkawkaw",
        regionCode: REGION_CODES.EASTERN_REGION
    },
    {
        code: DISTRICT_CODES.LOWER_MANYA_KROBO_MUNICIPAL,
        label: "Lower Manya Krobo",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Krobo Odumase",
        regionCode: REGION_CODES.EASTERN_REGION
    },
    {
        code: DISTRICT_CODES.NEW_JUABEN_NORTH_MUNICIPAL,
        label: "New Juaben North",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Effiduase",
        regionCode: REGION_CODES.EASTERN_REGION
    },
    {
        code: DISTRICT_CODES.NEW_JUABEN_SOUTH_MUNICIPAL,
        label: "New Juaben South",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Koforidua",
        regionCode: REGION_CODES.EASTERN_REGION
    },
    {
        code: DISTRICT_CODES.NSAWAM_ADOAGYIRI_MUNICIPAL,
        label: "Nsawam Adoagyire",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Nsawam",
        regionCode: REGION_CODES.EASTERN_REGION
    },
    {
        code: DISTRICT_CODES.OKERE_DISTRICT,
        label: "Okere",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Adukrom",
        regionCode: REGION_CODES.EASTERN_REGION
    },
    {
        code: DISTRICT_CODES.SUHUM_MUNICIPAL,
        label: "Suhum",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Suhum, Ghana",
        regionCode: REGION_CODES.EASTERN_REGION
    },
    {
        code: DISTRICT_CODES.UPPER_MANYA_KROBO_MUNICIPAL,
        label: "Upper Manya Krobo",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Asesewa",
        regionCode: REGION_CODES.EASTERN_REGION
    },
    {
        code: DISTRICT_CODES.UPPER_WEST_AKIM_DISTRICT,
        label: "Upper West Akim",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Adeiso",
        regionCode: REGION_CODES.EASTERN_REGION
    },
    {
        code: DISTRICT_CODES.WEST_AKIM_MUNICIPAL,
        label: "West Akim",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Asamankese",
        regionCode: REGION_CODES.EASTERN_REGION
    },
    {
        code: DISTRICT_CODES.YILO_KROBO_MUNICIPAL,
        label: "Yilo-Krobo",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Somanya",
        regionCode: REGION_CODES.EASTERN_REGION
    },
    {
        code: DISTRICT_CODES.ABLEKUMA_CENTRAL_MUNICIPAL,
        label: "Ablekuma Central",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Lartebiokorshie",
        regionCode: REGION_CODES.GREATER_ACCRA_REGION
    },
    {
        code: DISTRICT_CODES.ABLEKUMA_NORTH_MUNICIPAL,
        label: "Ablekuma North",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Darkuman",
        regionCode: REGION_CODES.GREATER_ACCRA_REGION
    },
    {
        code: DISTRICT_CODES.ABLEKUMA_WEST_MUNICIPAL,
        label: "Ablekuma West",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Dansoman",
        regionCode: REGION_CODES.GREATER_ACCRA_REGION
    },
    {
        code: DISTRICT_CODES.ACCRA_METROPOLITAN,
        label: "Accra",
        administrativeLevel: ADMINISTRATIVE_LEVELS.METROPOLITAN,
        capital: "Accra",
        regionCode: REGION_CODES.GREATER_ACCRA_REGION
    },
    {
        code: DISTRICT_CODES.ADA_EAST_DISTRICT,
        label: "Ada East",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Ada Foah",
        regionCode: REGION_CODES.GREATER_ACCRA_REGION
    },
    {
        code: DISTRICT_CODES.ADA_WEST_DISTRICT,
        label: "Ada West",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Sege",
        regionCode: REGION_CODES.GREATER_ACCRA_REGION
    },
    {
        code: DISTRICT_CODES.ADENTA_MUNICIPAL,
        label: "Adenta",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Adenta",
        regionCode: REGION_CODES.GREATER_ACCRA_REGION
    },
    {
        code: DISTRICT_CODES.ASHAIMAN_MUNICIPAL,
        label: "Ashaiman",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Ashaiman",
        regionCode: REGION_CODES.GREATER_ACCRA_REGION
    },
    {
        code: DISTRICT_CODES.AYAWASO_CENTRAL_MUNICIPAL,
        label: "Ayawaso Central",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Kokomlemle",
        regionCode: REGION_CODES.GREATER_ACCRA_REGION
    },
    {
        code: DISTRICT_CODES.AYAWASO_EAST_MUNICIPAL,
        label: "Ayawaso East",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Nima",
        regionCode: REGION_CODES.GREATER_ACCRA_REGION
    },
    {
        code: DISTRICT_CODES.AYAWASO_NORTH_MUNICIPAL,
        label: "Ayawaso North",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Accra New Town",
        regionCode: REGION_CODES.GREATER_ACCRA_REGION
    },
    {
        code: DISTRICT_CODES.AYAWASO_WEST_MUNICIPAL,
        label: "Ayawaso West",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Dzorwulu",
        regionCode: REGION_CODES.GREATER_ACCRA_REGION
    },
    {
        code: DISTRICT_CODES.GA_CENTRAL_MUNICIPAL,
        label: "Ga Central",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Sowutuom",
        regionCode: REGION_CODES.GREATER_ACCRA_REGION
    },
    {
        code: DISTRICT_CODES.GA_EAST_MUNICIPAL,
        label: "Ga East",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Abokobi",
        regionCode: REGION_CODES.GREATER_ACCRA_REGION
    },
    {
        code: DISTRICT_CODES.GA_NORTH_MUNICIPAL,
        label: "Ga North",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Amomole",
        regionCode: REGION_CODES.GREATER_ACCRA_REGION
    },
    {
        code: DISTRICT_CODES.GA_SOUTH_MUNICIPAL,
        label: "Ga South",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Ngleshie Amanfro",
        regionCode: REGION_CODES.GREATER_ACCRA_REGION
    },
    {
        code: DISTRICT_CODES.GA_WEST_MUNICIPAL,
        label: "Ga West",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Amasaman",
        regionCode: REGION_CODES.GREATER_ACCRA_REGION
    },
    {
        code: DISTRICT_CODES.KORLEY_KLOTTEY_MUNICIPAL,
        label: "Korle-Klottey",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Osu",
        regionCode: REGION_CODES.GREATER_ACCRA_REGION
    },
    {
        code: DISTRICT_CODES.KPONE_KATAMANSO_MUNICIPAL,
        label: "Kpone-Katamanso",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Kpone",
        regionCode: REGION_CODES.GREATER_ACCRA_REGION
    },
    {
        code: DISTRICT_CODES.KROWOR_MUNICIPAL,
        label: "Krowor",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Nungua",
        regionCode: REGION_CODES.GREATER_ACCRA_REGION
    },
    {
        code: DISTRICT_CODES.LA_DADE_KOTOPON_MUNICIPAL,
        label: "La-Dade-Kotopon",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "La",
        regionCode: REGION_CODES.GREATER_ACCRA_REGION
    },
    {
        code: DISTRICT_CODES.LA_NKWANTANANG_MADINA_MUNICIPAL,
        label: "La-Nkwantanang-Madina",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Madina",
        regionCode: REGION_CODES.GREATER_ACCRA_REGION
    },
    {
        code: DISTRICT_CODES.LEDZOKUKU_MUNICIPAL,
        label: "Ledzokuku",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Teshie",
        regionCode: REGION_CODES.GREATER_ACCRA_REGION
    },
    {
        code: DISTRICT_CODES.NINGO_PRAMPRAM_DISTRICT,
        label: "Ningo-Prampram",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Prampram",
        regionCode: REGION_CODES.GREATER_ACCRA_REGION
    },
    {
        code: DISTRICT_CODES.OKAIKWEI_NORTH_MUNICIPAL,
        label: "Okaikwei North",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Tesano",
        regionCode: REGION_CODES.GREATER_ACCRA_REGION
    },
    {
        code: DISTRICT_CODES.SHAI_OSU_DOKU_DISTRICT,
        label: "Shai-Osudoku",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Dodowa",
        regionCode: REGION_CODES.GREATER_ACCRA_REGION
    },
    {
        code: DISTRICT_CODES.TEMA_METROPOLITAN,
        label: "Tema Metropolitan",
        administrativeLevel: ADMINISTRATIVE_LEVELS.METROPOLITAN,
        capital: "Tema",
        regionCode: REGION_CODES.GREATER_ACCRA_REGION
    },
    {
        code: DISTRICT_CODES.TEMA_WEST_MUNICIPAL,
        label: "Tema West",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Tema Community 18",
        regionCode: REGION_CODES.GREATER_ACCRA_REGION
    },
    {
        code: DISTRICT_CODES.WEIJA_GBAWE_MUNICIPAL,
        label: "Weija Gbawe",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Weija",
        regionCode: REGION_CODES.GREATER_ACCRA_REGION
    },
    {
        code: DISTRICT_CODES.GUSHEGU_MUNICIPAL,
        label: "Gushegu Municipal",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Gushegu",
        regionCode: REGION_CODES.NORTHERN_REGION
    },
    {
        code: DISTRICT_CODES.KARAGA_DISTRICT,
        label: "Karaga",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Karaga",
        regionCode: REGION_CODES.NORTHERN_REGION
    },
    {
        code: DISTRICT_CODES.KPANDAI_DISTRICT,
        label: "Kpandai",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Kpandai",
        regionCode: REGION_CODES.NORTHERN_REGION
    },
    {
        code: DISTRICT_CODES.KUMBUNGU_DISTRICT,
        label: "Kumbungu",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Kumbungu",
        regionCode: REGION_CODES.NORTHERN_REGION
    },
    {
        code: DISTRICT_CODES.MION_DISTRICT,
        label: "Mion",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Sang",
        regionCode: REGION_CODES.NORTHERN_REGION
    },
    {
        code: DISTRICT_CODES.NANTON_DISTRICT,
        label: "Nanton",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Nanton",
        regionCode: REGION_CODES.NORTHERN_REGION
    },
    {
        code: DISTRICT_CODES.NANUMBA_NORTH_MUNICIPAL,
        label: "Nanumba North Municipal",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Bimbilla",
        regionCode: REGION_CODES.NORTHERN_REGION
    },
    {
        code: DISTRICT_CODES.NANUMBA_SOUTH_DISTRICT,
        label: "Nanumba South",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Wulensi",
        regionCode: REGION_CODES.NORTHERN_REGION
    },
    {
        code: DISTRICT_CODES.SABOBA_DISTRICT,
        label: "Saboba",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Saboba",
        regionCode: REGION_CODES.NORTHERN_REGION
    },
    {
        code: DISTRICT_CODES.SAGNARIGU_MUNICIPAL,
        label: "Sagnarigu Municipal",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Sagnarigu",
        regionCode: REGION_CODES.NORTHERN_REGION
    },
    {
        code: DISTRICT_CODES.SAVELUGU_MUNICIPAL,
        label: "Savelugu Municipal",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Savelugu",
        regionCode: REGION_CODES.NORTHERN_REGION
    },
    {
        code: DISTRICT_CODES.TAMALE_METROPOLITAN,
        label: "Tamale Metropolitan",
        administrativeLevel: ADMINISTRATIVE_LEVELS.METROPOLITAN,
        capital: "Tamale",
        regionCode: REGION_CODES.NORTHERN_REGION
    },
    {
        code: DISTRICT_CODES.TATALE_SANGULI_DISTRICT,
        label: "Tatale Sanguli",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Tatale",
        regionCode: REGION_CODES.NORTHERN_REGION
    },
    {
        code: DISTRICT_CODES.TOLON_DISTRICT,
        label: "Tolon",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Tolon",
        regionCode: REGION_CODES.NORTHERN_REGION
    },
    {
        code: DISTRICT_CODES.YENDI_MUNICIPAL,
        label: "Yendi Municipal",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Yendi",
        regionCode: REGION_CODES.NORTHERN_REGION
    },
    {
        code: DISTRICT_CODES.ZABZUGU_DISTRICT,
        label: "Zabzugu",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Zabzugu",
        regionCode: REGION_CODES.NORTHERN_REGION
    },
    {
        code: DISTRICT_CODES.BUNKPURUGU_NYANKPANDURI_DISTRICT,
        label: "Bunkpurugu Nyankpanduri",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Bunkpurugu",
        regionCode: REGION_CODES.NORTH_EAST_REGION
    },
    {
        code: DISTRICT_CODES.CHEREPONI_DISTRICT,
        label: "Chereponi",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Chereponi",
        regionCode: REGION_CODES.NORTH_EAST_REGION
    },
    {
        code: DISTRICT_CODES.EAST_MAMPRUSI_MUNICIPAL,
        label: "East Mamprusi",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Nalerigu",
        regionCode: REGION_CODES.NORTH_EAST_REGION
    },
    {
        code: DISTRICT_CODES.MAMPRUGU_MOAGDURI_DISTRICT,
        label: "Mamprugu Moagduri",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Yagaba",
        regionCode: REGION_CODES.NORTH_EAST_REGION
    },
    {
        code: DISTRICT_CODES.WEST_MAMPRUSI_MUNICIPAL,
        label: "West Mamprusi",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Walewale",
        regionCode: REGION_CODES.NORTH_EAST_REGION
    },
    {
        code: DISTRICT_CODES.YUNYOO_NASUAN_DISTRICT,
        label: "Yunyoo-Nasuan",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Yunyoo",
        regionCode: REGION_CODES.NORTH_EAST_REGION
    },
    {
        code: DISTRICT_CODES.BIAKOYE_DISTRICT,
        label: "Biakoye",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Nkonya Ahenkro",
        regionCode: REGION_CODES.OTI_REGION
    },
    {
        code: DISTRICT_CODES.JASIKAN_DISTRICT,
        label: "Jasikan",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Jasikan",
        regionCode: REGION_CODES.OTI_REGION
    },
    {
        code: DISTRICT_CODES.KADJEBI_DISTRICT,
        label: "Kadjebi",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Kadjebi",
        regionCode: REGION_CODES.OTI_REGION
    },
    {
        code: DISTRICT_CODES.KRACHI_EAST_MUNICIPAL,
        label: "Krachi East",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Dambai",
        regionCode: REGION_CODES.OTI_REGION
    },
    {
        code: DISTRICT_CODES.KRACHI_NCHUMURU_DISTRICT,
        label: "Krachi Nchumuru",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Chinderi",
        regionCode: REGION_CODES.OTI_REGION
    },
    {
        code: DISTRICT_CODES.KRACHI_WEST_DISTRICT,
        label: "Krachi West",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Kete Krachi",
        regionCode: REGION_CODES.OTI_REGION
    },
    {
        code: DISTRICT_CODES.NKWANTA_NORTH_DISTRICT,
        label: "Nkwanta North",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Kpassa",
        regionCode: REGION_CODES.OTI_REGION
    },
    {
        code: DISTRICT_CODES.NKWANTA_SOUTH_MUNICIPAL,
        label: "Nkwanta South",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Nkwanta",
        regionCode: REGION_CODES.OTI_REGION
    },
    {
        code: DISTRICT_CODES.BOLE_DISTRICT,
        label: "Bole",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Bole",
        regionCode: REGION_CODES.SAVANNAH_REGION
    },
    {
        code: DISTRICT_CODES.CENTRAL_GONJA_DISTRICT,
        label: "Central Gonja",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Buipe",
        regionCode: REGION_CODES.SAVANNAH_REGION
    },
    {
        code: DISTRICT_CODES.EAST_GONJA_MUNICIPAL,
        label: "East Gonja Municipal",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Salaga",
        regionCode: REGION_CODES.SAVANNAH_REGION
    },
    {
        code: DISTRICT_CODES.NORTH_GONJA_DISTRICT,
        label: "North Gonja",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Daboya",
        regionCode: REGION_CODES.SAVANNAH_REGION
    },
    {
        code: DISTRICT_CODES.NORTH_EAST_GONJA_DISTRICT,
        label: "North East Gonja",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Kpalbe",
        regionCode: REGION_CODES.SAVANNAH_REGION
    },
    {
        code: DISTRICT_CODES.SAWLA_TUNA_KALBA_DISTRICT,
        label: "Sawla-Tuna-Kalba",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Sawla",
        regionCode: REGION_CODES.SAVANNAH_REGION
    },
    {
        code: DISTRICT_CODES.WEST_GONJA_MUNICIPAL,
        label: "West Gonja",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Damongo",
        regionCode: REGION_CODES.SAVANNAH_REGION
    },
    {
        code: DISTRICT_CODES.BAWKU_MUNICIPAL,
        label: "Bawku Municipal",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Bawku",
        regionCode: REGION_CODES.UPPER_EAST_REGION
    },
    {
        code: DISTRICT_CODES.BAWKU_WEST_DISTRICT,
        label: "Bawku West",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Zebilla",
        regionCode: REGION_CODES.UPPER_EAST_REGION
    },
    {
        code: DISTRICT_CODES.BINDURI_DISTRICT,
        label: "Binduri",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Binduri",
        regionCode: REGION_CODES.UPPER_EAST_REGION
    },
    {
        code: DISTRICT_CODES.BOLGATANGA_EAST_DISTRICT,
        label: "Bolgatanga East",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Zuarungu",
        regionCode: REGION_CODES.UPPER_EAST_REGION
    },
    {
        code: DISTRICT_CODES.BOLGATANGA_MUNICIPAL,
        label: "Bolgatanga Municipal",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Bolgatanga",
        regionCode: REGION_CODES.UPPER_EAST_REGION
    },
    {
        code: DISTRICT_CODES.BONGO_DISTRICT,
        label: "Bongo",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Bongo",
        regionCode: REGION_CODES.UPPER_EAST_REGION
    },
    {
        code: DISTRICT_CODES.BUILSA_NORTH_MUNICIPAL,
        label: "Builsa North Municipal",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Sandema",
        regionCode: REGION_CODES.UPPER_EAST_REGION
    },
    {
        code: DISTRICT_CODES.BUILSA_SOUTH_DISTRICT,
        label: "Builsa South",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Fumbisi",
        regionCode: REGION_CODES.UPPER_EAST_REGION
    },
    {
        code: DISTRICT_CODES.GARU_DISTRICT,
        label: "Garu",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Garu",
        regionCode: REGION_CODES.UPPER_EAST_REGION
    },
    {
        code: DISTRICT_CODES.KASSENA_NANKANA_MUNICIPAL,
        label: "Kassena-Nankana Municipal",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Navrongo",
        regionCode: REGION_CODES.UPPER_EAST_REGION
    },
    {
        code: DISTRICT_CODES.KASSENA_NANKANA_WEST_DISTRICT,
        label: "Kassena-Nankana West",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Paga",
        regionCode: REGION_CODES.UPPER_EAST_REGION
    },
    {
        code: DISTRICT_CODES.NABDAM_DISTRICT,
        label: "Nabdam",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Nangodi",
        regionCode: REGION_CODES.UPPER_EAST_REGION
    },
    {
        code: DISTRICT_CODES.PUSIGA_DISTRICT,
        label: "Pusiga",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Pusiga",
        regionCode: REGION_CODES.UPPER_EAST_REGION
    },
    {
        code: DISTRICT_CODES.TALENSI_DISTRICT,
        label: "Talensi",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Tongo",
        regionCode: REGION_CODES.UPPER_EAST_REGION
    },
    {
        code: DISTRICT_CODES.TEMPANE_DISTRICT,
        label: "Tempane",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Tempane",
        regionCode: REGION_CODES.UPPER_EAST_REGION
    },
    {
        code: DISTRICT_CODES.DAFFIAMA_BUSSIE_ISSA_DISTRICT,
        label: "Daffiama Bussie Issa",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Issa",
        regionCode: REGION_CODES.UPPER_WEST_REGION
    },
    {
        code: DISTRICT_CODES.JIRAPA_MUNICIPAL,
        label: "Jirapa Municipal",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Jirapa",
        regionCode: REGION_CODES.UPPER_WEST_REGION
    },
    {
        code: DISTRICT_CODES.LAMBUSSIE_KARNI_DISTRICT,
        label: "Lambussie Karni",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Lambussie",
        regionCode: REGION_CODES.UPPER_WEST_REGION
    },
    {
        code: DISTRICT_CODES.LAWRA_MUNICIPAL,
        label: "Lawra Municipal",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Lawra",
        regionCode: REGION_CODES.UPPER_WEST_REGION
    },
    {
        code: DISTRICT_CODES.NADOWLI_KALEO_DISTRICT,
        label: "Nadowli-Kaleo",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Nadowli",
        regionCode: REGION_CODES.UPPER_WEST_REGION
    },
    {
        code: DISTRICT_CODES.NANDOM_MUNICIPAL,
        label: "Nandom Municipal",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Nandom",
        regionCode: REGION_CODES.UPPER_WEST_REGION
    },
    {
        code: DISTRICT_CODES.SISSALA_EAST_MUNICIPAL,
        label: "Sissala East Municipal",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Tumu",
        regionCode: REGION_CODES.UPPER_WEST_REGION
    },
    {
        code: DISTRICT_CODES.SISSALA_WEST_DISTRICT,
        label: "Sissala West",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Gwollu",
        regionCode: REGION_CODES.UPPER_WEST_REGION
    },
    {
        code: DISTRICT_CODES.WA_EAST_DISTRICT,
        label: "Wa East",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Funsi",
        regionCode: REGION_CODES.UPPER_WEST_REGION
    },
    {
        code: DISTRICT_CODES.WA_MUNICIPAL,
        label: "Wa Municipal",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Wa",
        regionCode: REGION_CODES.UPPER_WEST_REGION
    },
    {
        code: DISTRICT_CODES.WA_WEST_DISTRICT,
        label: "Wa West",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Wechiau",
        regionCode: REGION_CODES.UPPER_WEST_REGION
    },
    {
        code: DISTRICT_CODES.ADAKLU_DISTRICT,
        label: "Adaklu District",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Adaklu Waya",
        regionCode: REGION_CODES.VOLTA_REGION
    },
    {
        code: DISTRICT_CODES.AFADZATO_SOUTH_DISTRICT,
        label: "Afadzato South",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Ve Golokwati",
        regionCode: REGION_CODES.VOLTA_REGION
    },
    {
        code: DISTRICT_CODES.AGOTIME_ZIOPE_DISTRICT,
        label: "Agotime Ziope",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Kpetoe",
        regionCode: REGION_CODES.VOLTA_REGION
    },
    {
        code: DISTRICT_CODES.AKATSI_NORTH_DISTRICT,
        label: "Akatsi North",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Ave-Dakpa",
        regionCode: REGION_CODES.VOLTA_REGION
    },
    {
        code: DISTRICT_CODES.AKATSI_SOUTH_DISTRICT,
        label: "Akatsi South",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Akatsi",
        regionCode: REGION_CODES.VOLTA_REGION
    },
    {
        code: DISTRICT_CODES.ANLOGA_DISTRICT,
        label: "Anloga",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Anloga",
        regionCode: REGION_CODES.VOLTA_REGION
    },
    {
        code: DISTRICT_CODES.CENTRAL_TONGU_DISTRICT,
        label: "Central Tongu",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Adidome",
        regionCode: REGION_CODES.VOLTA_REGION
    },
    {
        code: DISTRICT_CODES.HO_MUNICIPAL,
        label: "Ho Municipal",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Ho",
        regionCode: REGION_CODES.VOLTA_REGION
    },
    {
        code: DISTRICT_CODES.HO_WEST_DISTRICT,
        label: "Ho West",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Dzolokpuita",
        regionCode: REGION_CODES.VOLTA_REGION
    },
    {
        code: DISTRICT_CODES.HOHOE_MUNICIPAL,
        label: "Hohoe Municipal",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Hohoe",
        regionCode: REGION_CODES.VOLTA_REGION
    },
    {
        code: DISTRICT_CODES.KETA_MUNICIPAL,
        label: "Keta Municipal",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Keta",
        regionCode: REGION_CODES.VOLTA_REGION
    },
    {
        code: DISTRICT_CODES.KETU_NORTH_MUNICIPAL,
        label: "Ketu North Municipal",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Dzodze",
        regionCode: REGION_CODES.VOLTA_REGION
    },
    {
        code: DISTRICT_CODES.KETU_SOUTH_MUNICIPAL,
        label: "Ketu South Municipal",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Denu",
        regionCode: REGION_CODES.VOLTA_REGION
    },
    {
        code: DISTRICT_CODES.KPANDO_MUNICIPAL,
        label: "Kpando Municipal",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Kpando",
        regionCode: REGION_CODES.VOLTA_REGION
    },
    {
        code: DISTRICT_CODES.NORTH_DAYI_DISTRICT,
        label: "North Dayi",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Anfoega",
        regionCode: REGION_CODES.VOLTA_REGION
    },
    {
        code: DISTRICT_CODES.NORTH_TONGU_DISTRICT,
        label: "North Tongu",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Battor Dugame",
        regionCode: REGION_CODES.VOLTA_REGION
    },
    {
        code: DISTRICT_CODES.SOUTH_DAYI_DISTRICT,
        label: "South Dayi",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "South Dayi",
        regionCode: REGION_CODES.VOLTA_REGION
    },
    {
        code: DISTRICT_CODES.SOUTH_TONGU_DISTRICT,
        label: "South Tongu",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Sogakopei",
        regionCode: REGION_CODES.VOLTA_REGION
    },
    {
        code: DISTRICT_CODES.AHANTA_WEST_MUNICIPAL,
        label: "Ahanta West",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Agona Ahanta",
        regionCode: REGION_CODES.WESTERN_REGION
    },
    {
        code: DISTRICT_CODES.AMENFI_CENTRAL_DISTRICT,
        label: "Amenfi Central",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Manso Amenfi",
        regionCode: REGION_CODES.WESTERN_REGION
    },
    {
        code: DISTRICT_CODES.AMENFI_WEST_MUNICIPAL,
        label: "Amenfi West",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Asankragua",
        regionCode: REGION_CODES.WESTERN_REGION
    },
    {
        code: DISTRICT_CODES.EFFIA_KWESIMINTSIM_MUNICIPAL,
        label: "Effia Kwesimintsim Municipal",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Kwesimintsim",
        regionCode: REGION_CODES.WESTERN_REGION
    },
    {
        code: DISTRICT_CODES.ELLEMBELLE_DISTRICT,
        label: "Ellembelle",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Nkroful",
        regionCode: REGION_CODES.WESTERN_REGION
    },
    {
        code: DISTRICT_CODES.JOMORO_MUNICIPAL,
        label: "Jomoro",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Half Assini",
        regionCode: REGION_CODES.WESTERN_REGION
    },
    {
        code: DISTRICT_CODES.MPOHOR_DISTRICT,
        label: "Mpohor",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Mpohor",
        regionCode: REGION_CODES.WESTERN_REGION
    },
    {
        code: DISTRICT_CODES.NZEMA_EAST_MUNICIPAL,
        label: "Nzema East Municipal",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Axim",
        regionCode: REGION_CODES.WESTERN_REGION
    },
    {
        code: DISTRICT_CODES.PRESTEA_HUNI_VALLEY_MUNICIPAL,
        label: "Prestea-Huni Valley Municipal",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Prestea",
        regionCode: REGION_CODES.WESTERN_REGION
    },
    {
        code: DISTRICT_CODES.SEKONDI_TAKORADI_METROPOLITAN,
        label: "Sekondi Takoradi Metropolitan",
        administrativeLevel: ADMINISTRATIVE_LEVELS.METROPOLITAN,
        capital: "Sekondi-Takoradi",
        regionCode: REGION_CODES.WESTERN_REGION
    },
    {
        code: DISTRICT_CODES.SHAMA_DISTRICT,
        label: "Shama",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Shama",
        regionCode: REGION_CODES.WESTERN_REGION
    },
    {
        code: DISTRICT_CODES.TARKWA_NSUAYEM_MUNICIPAL,
        label: "Tarkwa-Nsuaem Municipal",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Tarkwa",
        regionCode: REGION_CODES.WESTERN_REGION
    },
    {
        code: DISTRICT_CODES.WASSA_AMENFI_EAST_MUNICIPAL,
        label: "Wassa Amenfi East",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Wassa-Akropong",
        regionCode: REGION_CODES.WESTERN_REGION
    },
    {
        code: DISTRICT_CODES.WASSA_EAST_DISTRICT,
        label: "Wassa East",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Daboase",
        regionCode: REGION_CODES.WESTERN_REGION
    },
    {
        code: DISTRICT_CODES.AOWIN_MUNICIPAL,
        label: "Aowin",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Enchi",
        regionCode: REGION_CODES.WESTERN_NORTH_REGION
    },
    {
        code: DISTRICT_CODES.BIA_EAST_DISTRICT,
        label: "Bia East",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Sefwi Adabokrom",
        regionCode: REGION_CODES.WESTERN_NORTH_REGION
    },
    {
        code: DISTRICT_CODES.BIA_WEST_DISTRICT,
        label: "Bia West",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Essam-Debiso",
        regionCode: REGION_CODES.WESTERN_NORTH_REGION
    },
    {
        code: DISTRICT_CODES.BIBIANI_ANHWIASO_BEKWAI_MUNICIPAL,
        label: "Bibiani Anhwiaso Bekwai",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Bibiani",
        regionCode: REGION_CODES.WESTERN_NORTH_REGION
    },
    {
        code: DISTRICT_CODES.BODI_DISTRICT,
        label: "Bodi",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Sefwi Bodi",
        regionCode: REGION_CODES.WESTERN_NORTH_REGION
    },
    {
        code: DISTRICT_CODES.JUABOSO_DISTRICT,
        label: "Juaboso",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Juaboso",
        regionCode: REGION_CODES.WESTERN_NORTH_REGION
    },
    {
        code: DISTRICT_CODES.SEFWI_AKONTOMBRA_DISTRICT,
        label: "Sefwi Akontombra",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Sefwi Akontombra",
        regionCode: REGION_CODES.WESTERN_NORTH_REGION
    },
    {
        code: DISTRICT_CODES.SEFWI_WIAWSO_MUNICIPAL,
        label: "Sefwi-Wiawso",
        administrativeLevel: ADMINISTRATIVE_LEVELS.MUNICIPAL,
        capital: "Sefwi-Wiawso",
        regionCode: REGION_CODES.WESTERN_NORTH_REGION
    },
    {
        code: DISTRICT_CODES.SUAMAN_DISTRICT,
        label: "Suaman",
        administrativeLevel: ADMINISTRATIVE_LEVELS.DISTRICT,
        capital: "Dadieso",
        regionCode: REGION_CODES.WESTERN_NORTH_REGION
    }
]

module.exports = districts
