import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import './PriceRangeSlider.css';

function PriceRangeSlider() {
  const costMap = [ 0, 400, 810, 1200, 1600, 2400, 3200, 4000, 6000, 8100, 12000, 20000, 30000, 40000, 'max'];
  const tickNum = costMap.length;
  const [value, setValue] = useState({ min: 0, max: 14 });

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const handleLabel = () => {
    const currency = 'NT$';
    const isAny = value.min === 0 && value.max === costMap.length - 1;
    if (isAny) {
      return 'Any';
    }
    const isUpTo = value.min === 0;
    if (isUpTo) {
      return `up to ${costMap[value.max]} ${currency}`;
    }
    const isOver = value.max === costMap.length - 1;
    if (isOver) {
      return `over ${costMap[value.min]} ${currency}`;
    }
    return `${costMap[value.min]} ${currency} - ${costMap[value.max]} ${currency}`;
  }

  return (
    <Container className="p-3">
      <Form.Group controlId="priceRangeSlider">
        <Form.Label className="slider-title d-flex justify-content-between">
          <div>Price Range</div>
          <div>{handleLabel()}</div>
        </Form.Label>
        <InputRange
          minValue={0}
          maxValue={14}
          step={1}
          value={value}
          onChange={handleChange}
          formatLabel={() => ''}
        />
        <div className="slider-ticks">
          {[...Array(tickNum).keys()].map((tick) => (
            <div key={tick} className="slider-tick">|</div>
          ))}
        </div>
      </Form.Group>
    </Container>
  );
}

export default PriceRangeSlider;