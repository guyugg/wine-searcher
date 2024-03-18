import React, { useState } from "react";
import { Container } from "react-bootstrap";
import TypeButtonGroup from "./TypeButtonGroup";
import TypeSection from "./TypeSection";
import PriceRangeSlider from "../../components/PriceRangeSlider/PriceRangeSlider";

function WineFilter() {
    const [radioValue, setRadioValue] = useState('0');

    return (
        <Container className="filter-section">
            <TypeButtonGroup radioValue={radioValue} setRadioValue={setRadioValue} />
            <Container className="d-flex flex-lg-row flex-column">
                <TypeSection typeIdx={radioValue} />
                <PriceRangeSlider />
            </Container>
        </Container>
    )
}

export default WineFilter;