import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import './PriceRangeSlider.css';

function PriceRangeSlider() {
  const [value, setValue] = useState({ min: 0, max: 10000 });

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <Container className="p-3">
      <Form.Group controlId="priceRangeSlider">
        <Form.Label className="slider-title d-flex justify-content-between">
          <div>Price Range</div>
          <div>${value.min} - ${value.max}</div>
        </Form.Label>
        <InputRange
          minValue={0}
          maxValue={10000}
          step={1000}
          value={value}
          onChange={handleChange}
          formatLabel={(value) => `$${value}`}
        />
        <div className="slider-ticks">
          {[...Array(11).keys()].map((tick) => (
            <div key={tick} className="slider-tick">|</div>
          ))}
        </div>
      </Form.Group>
    </Container>
  );
}

export default PriceRangeSlider;