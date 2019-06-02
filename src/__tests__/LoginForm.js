import React from 'react';
import { shallow, mount } from 'enzyme';
import LoginForm from '../components/LoginForm';
import styles from '../components/LoginForm/LoginForm.module.css'

describe('Component: LoginForm', () => {
    let minProps;

    beforeEach(() => {
        minProps = {
            login: jest.fn(),
            errorMessage: "Test error message"
        }
    });

    it('renders without crashing', () => {
        expect(
        shallow(<LoginForm login={minProps.login}/>)
        .length
        ).toEqual(1);
    });

    it('dont call login function by submit if username field is empty', () => {
        const wrapper = mount(<LoginForm login={minProps.login}/>);

        wrapper.setState({username: ""});
        wrapper.find('form').simulate('submit');
        expect(minProps.login).toHaveBeenCalledTimes(0);
    });

    it('call login function by submit if username field exist', () => {
        const wrapper = mount(<LoginForm login={minProps.login}/>);

        wrapper.setState({username: "someTestWrongUsername"});
        wrapper.find('form').simulate('submit');
        expect(minProps.login).toHaveBeenCalled();
    });

    it('clicking to prepared username insert username in form field', () => {
        const wrapper = mount(<LoginForm login={minProps.login}/>);
        const firstPreparedUserName = wrapper.find('ul li').first();
        const userName = firstPreparedUserName.text();
        
        firstPreparedUserName.simulate('click');
        const formUserNameFieldValue = wrapper.find('input').props().value;

        expect(formUserNameFieldValue).toEqual(userName);
    });

    it('error message appears in right place', () => {
        const testErrorMessage = "Test error message";
        const wrapper = shallow(<LoginForm login={minProps.login} message={minProps.errorMessage}/>);
        const errorMessagePlace = wrapper.find(`form div.${styles.errorMessage}`).first();
        const formErrorMessage = errorMessagePlace.text();

        expect(formErrorMessage).toEqual(testErrorMessage);
    });
});