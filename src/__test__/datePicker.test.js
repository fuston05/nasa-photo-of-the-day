import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

//components
import {DatePicker} from '../components/DatePicker';


describe('date picker input', () => {

  it('renders in the DOM', () => {
    const {getByTestId}= render(<DatePicker />);
    getByTestId('dateInput');
  }); 

})//emd datepicker