import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('Component: App', () => {

  it('renders without crashing', () => {
    expect(
      shallow(<App />)
      .length
    ).toEqual(1);
  });

  //1. Содержит LoginComponent если текущий роут /
  //2. Содержит ChatComponent если текущий роут /chat
});


