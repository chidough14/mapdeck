import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

/* [
  {"start":[-1.9225,50.6593,6477],"end":[-1.8939,50.6591,6416.04],"name":"UAL924"}, 
  {"start":[-1.8939,50.6591,6416.04],"end":[-1.866,50.659,6362.7],"name":"UAL924"},
  {"start":[-1.866,50.659,6362.7],"end":[-1.8377,50.6592,6301.74],"name":"UAL924"},
  {"start":[-1.8377,50.6592,6301.74],"end":[-1.8066,50.6595,6233.16],"name":"UAL924"}, 
  {"start":[-1.8066,50.6595,6233.16],"end":[-1.7881,50.6596,6202.68],"name":"UAL924"},  
  {"start":[-1.7881,50.6596,6202.68],"end":[-1.7588,50.6599,6141.72],"name":"UAL924"},   
  {"start":[-1.7588,50.6599,6141.72],"end":[-1.728,50.6601,6073.14],"name":"UAL924"}, 
  {"start":[-1.728,50.6601,6073.14],"end":[-1.7058,50.6603,6027.42],"name":"UAL924"},
  {"start":[-1.7058,50.6603,6027.42],"end":[-1.6727,50.6606,5958.84],"name":"UAL924"},
  {"start":[-1.6727,50.6606,5958.84],"end":[-1.648,50.6608,5905.5],"name":"UAL924"}
] */
