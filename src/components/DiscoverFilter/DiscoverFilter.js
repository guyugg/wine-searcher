import React from "react";
import CommonSelect from "./CommonSelect";
import CommonInput from "./CommonInput";
import ResetButton from "./ResetButton";
import LocationOptions from './LocationData';
import GrapeOptions from './GrapeData';
import CountriesOptions from './CountriesData';
import RegionOptions from './RegionData';
import PairingOptions from './PairingData';
import VintageOptions from './VintageData';

function DiscoverFilter() {
    return (
        <>
            <CommonSelect title="Shop Location" options={LocationOptions} placeholder="Select country" />
            <CommonInput title="Name or Keyword" />
            <CommonSelect title="Grape" options={GrapeOptions} placeholder="Select grape" />
            <CommonSelect title="Country" options={CountriesOptions} placeholder="Select country" />
            <CommonSelect title="Region" options={RegionOptions} placeholder="Select region" />
            <CommonSelect title="Food Pairing" options={PairingOptions} placeholder="Select food pairing" />
            <CommonSelect title="Vintage" options={VintageOptions} placeholder="Select vintage" />
            <ResetButton />
        </>
    )
}

export default DiscoverFilter;
