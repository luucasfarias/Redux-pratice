import React from 'react';
import { configure , shallow } from 'enzyme';
import { Counter } from '../components/counter/Counter';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<Counter />', () => {
  it('mounts', () => {
    const props = {
      count: 10,
      increment: () => 0,
      decrement: () => 0
    }
    const wrapper = shallow(<Counter {...props} />);
    expect(wrapper.length).toEqual(1);
  });

  it('calls increment', () => {
    const props = {
      count: 10,
      increment: jest.fn(),
      decrement: jest.fn()
    }
    const wrapper = shallow(<Counter {...props} />);
    expect(props.increment.mock.calls.length).toEqual(0);
    wrapper.find('.increment').simulate('click');
    expect(props.increment.mock.calls.length).toEqual(1);

    expect(wrapper.find('.counter').text()).toEqual('10');
  })
})