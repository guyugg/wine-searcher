import React from "react";
import CommonSelect from "./CommonSelect";
import CommonInput from "./CommonInput";
import ResetButton from "./ResetButton";
import Countries from './CountriesData';

function DiscoverFilter() {
    return (
        <>
            <CommonSelect title="Shop Location" options={Countries} placeholder="Select country" />
            <CommonInput title="Name or Keyword" />
            <CommonSelect title="Grape" options={Countries} placeholder="Select grape" />
            <CommonSelect title="Country" options={Countries} placeholder="Select country" />
            <CommonSelect title="Region" options={Countries} placeholder="Select region" />
            <CommonSelect title="Food Pairing" options={Countries} placeholder="Select food pairing" />
            <CommonSelect title="Vintage" options={Countries} placeholder="Select vintage" />
            <ResetButton />
        </>
    )
}

export default DiscoverFilter;
