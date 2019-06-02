import React from 'react';
import { Route } from 'react-router-dom';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router';

import App from '../App';
import Chat from '../containers/Chat';
import LoginForm from '../containers/LoginForm';

describe('Component: App', () => {

  it('renders without crashing', () => {
    expect(
      shallow(<App />)
      .length
    ).toEqual(1);
  });

  it('should show Chat component for /chat route (getting array of routes)', () => {
    //I use pathMap (instead of MemoryRouter) object here, 
    //because into App -> Chat container -> componentDidMount() function I have redirect if in state not exist property 'loginUserName'.
    //And I don't sure how will be right to path state into <MemoryRouter>'s children.

    const wrapper = shallow(<App/>);
    let pathMap = wrapper.find(Route).reduce((pathMap, route) => {
      const routeProps = route.props();
      pathMap[routeProps.path] = routeProps.component;
      return pathMap;
    }, {});

    expect(pathMap['/chat']).toEqual(Chat);
  });

  it('should show Login component for / route (using memory router)', () => {
    const wrapper = mount(<MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>);

    expect(wrapper.find(LoginForm).length).toEqual(1);
  });

});


