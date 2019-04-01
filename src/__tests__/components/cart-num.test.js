import React from 'react';
import renderer from "react-test-renderer";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { render } from 'react-testing-library';
import { Provider } from 'react-redux';
import createStore from '../../store/index';
import CartNum from '../../components/cart-num';

Enzyme.configure({ adapter: new Adapter() });

global.shallow = shallow;
global.render = render;
global.mount = mount;


describe('CartNum component', () => {
    let store;

    beforeEach(() => {
      store = createStore();

    });

    it('exists', () => {
        let component = render(<Provider store={store}><CartNum/></Provider>);
        expect(component).toBeTruthy();
    });

    it('contains a div', () => {
        let component = mount(<Provider store={store}><CartNum/></Provider>);
        expect(component.find('div').exists()).toBeTruthy();
    });
});





