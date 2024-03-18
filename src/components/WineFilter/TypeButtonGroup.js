import React from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";

const radios = [
    { name: 'Wines', value: '0' },
    { name: 'Spirits', value: '1' },
];

function TypeButtonGroup(props) {
    const { radioValue, setRadioValue } = props;
    const randomID = Math.random() * 100;

    return (
        <ButtonGroup className="p-4 filter-button-group">
            {radios.map((radio, idx) => (
                <ToggleButton
                    key={idx}
                    id={`radio-${randomID}-${idx}`}
                    name={`radio-${randomID}-${idx}`}
                    className="filter-button"
                    type="radio"
                    variant={'outline-success'}
                    value={radio.value}
                    checked={radioValue === radio.value}
                    onChange={(e) => setRadioValue(e.currentTarget.value)}
                >
                    {radio.name}
                </ToggleButton>
            ))}
        </ButtonGroup>
    )
}

export default TypeButtonGroup;