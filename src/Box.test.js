import React from 'react';
import {shallow} from 'enzyme';
import Box from './Box';

describe('Box', () => {
  it('renders component properly',()=> {
    const wrapper = shallow(<Box value='2'/>);
    expect(wrapper.text()).toBe('2');
  });
});
