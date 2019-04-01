import React from 'react';
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { render } from 'react-testing-library';
import Header from '../../components/header';
import Layout from '../../components/layout';
import { Provider } from 'react-redux';
import createStore from '../../store/index';

Enzyme.configure({ adapter: new Adapter() });

global.shallow = shallow;
global.render = render;
global.mount = mount;

describe('Header component', () => {

    let store;

    beforeEach(() => {
      store = createStore();

    });
});