import React from 'react';
import { shallow } from 'enzyme';
import Logout from '../components/Logout';

describe('Component: Logout', () => {
    let minProps;

    beforeEach(() => {
        minProps = {
            logout: jest.fn()
        }
    });

    it('renders without crashing', () => {
        expect(shallow(<Logout logout={minProps.logout}/>).length).toEqual(1);
    });

    it('call logout function by clicking to button', () => {
        const wrapper = shallow(<Logout logout={minProps.logout}/>);

        wrapper.find('button').simulate('click');
        expect(minProps.logout).toHaveBeenCalled();
    });
});
