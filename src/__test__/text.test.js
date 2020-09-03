import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

//components
import {Text} from '../components/Text';

describe('Text.js', () => {
  //set up
  const imageObj= {
    title: 'image title',
    explanation: 'This is our test explanation for the this test image object.'
  }//end imageObj

  const explanationLength= imageObj.explanation.length;
  const titleLength= imageObj.title.length;

  // *********
  it('should render in the Document', () => {
    const {getByTestId}= render(<Text imageObj= {imageObj} />);
    expect(getByTestId('textTitle')).toBeInTheDocument();
  })

  // ********
  it('should render text title of image obj passed as props', () => {

    const {getByTestId} = render(<Text imageObj= {imageObj} />);
    //renders title of an imageObj passed as props
    expect(getByTestId('textTitle').innerHTML).toEqual('image title');
    //check explanation length
    expect(getByTestId('textTitle').innerHTML.length).toEqual(titleLength);
  });

  // ********
  it('should render the explanation of the image obj passed as props', () => {
    const {getByTestId} = render(<Text imageObj= {imageObj} />);
    //renders title of an imageObj passed as props
    expect(getByTestId('textExplanation').innerHTML).toEqual('This is our test explanation for the this test image object.');
    //check explanation length
    expect(getByTestId('textExplanation').innerHTML.length).toEqual(explanationLength);
  })

})//end Text.js

