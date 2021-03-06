import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Display from '../components/Display/Display';

Enzyme.configure({ adapter: new Adapter() });

describe('<Display />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Display />);
    expect(wrapper.find('.component-display')).toHaveLength(1);
  });
  it('should render the value passed in', () => {
    const compare = 'Value to check for!';
    const wrapper = shallow(<Display value={compare} />);
    expect(
      wrapper
        .find('.component-display')
        .children()
        .props().children
    ).toEqual(compare);
  });
});
