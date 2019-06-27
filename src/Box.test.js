import React from 'react';
import {shallow} from 'enzyme';
import Box from './Box';

describe('Box', () => {
  it('renders component properly',()=> {
    const wrapper = shallow(<Box />)
    console.log(wrapper.text());
    expect(wrapper.html()).to.contain('div');
  });
});