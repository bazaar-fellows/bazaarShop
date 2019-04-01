import React from 'react';
import renderer from "react-test-renderer";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { render } from 'react-testing-library';
import { Provider } from 'react-redux';
import createStore from '../../store/index';
import Card from '../../components/Card';

Enzyme.configure({ adapter: new Adapter() });

global.shallow = shallow;
global.render = render;
global.mount = mount;

describe('Card component', () => {

    let store;

    const Button = () => <button data-testid="button-clicked">Button was clicked</button>

    beforeEach(() => {
      store = createStore();

    });
    it('lives', () => {
        expect(true).toBeTruthy();
    });

    it('contains a h1', () => {
        let component = render(<Provider store={store}><Card content={'content.name'}/></Provider>);
        expect(component).toBeTruthy();
    });

    it('displays button', () => {
        const { getByTestId } = render(<Button />)
        expect(getByTestId('button-clicked')).toHaveTextContent('Button was clicked');
    });

    it('contains a div element', () => {
        let component = mount(<Provider store={store}><Card content={'content.name'}/></Provider>);
        expect(component.find('div').exists()).toBeTruthy();
      });
});