import React from 'react';
import renderer from "react-test-renderer";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { render } from 'react-testing-library';
import Footer from '../../components/footer';

Enzyme.configure({ adapter: new Adapter() });

global.shallow = shallow;
global.render = render;
global.mount = mount;

describe('Footer component', () => {

    // it('displays an h1', () => {
    //     let component = mount(<Footer />);
    //     expect(component.find('h1').exists()).toBeTruthy();
    // });
});

