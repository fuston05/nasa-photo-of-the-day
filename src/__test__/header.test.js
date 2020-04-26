import React from 'react';
import {render, fireEvent, getByTestId} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

//components
import App from '../App';
import {Header} from '../components/Header';
import {Text} from '../components/Text';
import {Media} from '../components/Media';

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


  // it('should update the DOM with a new image and text when clicked', () => {
  //   //start at 'App' lvl for state props access
  //   const imageObj= {
  //     title: 'image title'
  //   }
  //   const {getByText} = render(<App/>);
  //   const {getByTestId} = render(<Text imageObj= {imageObj} />);

  //   //get text title
  //   const title= getByTestId('textTitle');
  //   expect(title.value).toHaveLength(11)
  //   console.log('title: ', title.innerText);

  //   //click button to get a new random date
  //   fireEvent.click(getByText(/random date/i));
  // });

});//end header random date button