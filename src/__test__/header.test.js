import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

//components
import App from '../App';
import {Header} from '../components/Header';

describe('header.js', () => {

  it('renders the main header: "NASA image of the day"', () => {
    const {getByText} = render(<Header />);
    getByText(/nasa image of the day/i);
  });

})//end header describe

describe('header random date button', () => {

  it('should render in the DOM', () => {
    const {getByText} = render(<Header />);
    getByText(/random date/i);
  });

  it('should produce a different date string when clicked', async () => {
    //start at 'App' lvl for state props access
    const {getByText, getByTestId} = render(<App />);
    //get initial datepicker value 
    const datePickerBefore= getByTestId('dateInput').value;
    //click button to get a new random date
    fireEvent.click(getByText(/random date/i));
    //get datepicker value 'after' button click
    const datePickerAfter= await getByTestId('dateInput').value;
    expect(datePickerAfter);
    expect(datePickerAfter).toHaveLength(10);
    // before and after value should be different
    expect(datePickerAfter).not.toEqual(datePickerBefore);
  });


  // it('should render text title of image obj passed to it as props', () => {

  //   const imageObj= {
  //     title: 'image title'
  //   }

  //   const {getByTestId} = render(<Text imageObj= {imageObj} />);
  //   //renders title of an imageObj passed as props
  //   expect(getByTestId('textTitle').innerHTML).toEqual('image title');

  //   //get text title
  //   const title= getByTestId('textTitle');
  //   // expect(title.value).toHaveLength(11)
  //   // console.log('title: ', title);

  //   //click button to get a new random date
  //   // fireEvent.click(getByText(/random date/i));
  // });

});//end header random date button