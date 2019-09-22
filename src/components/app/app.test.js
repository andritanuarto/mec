import React from 'react';
import { shallow } from '../../../enzyme';

import App from './app';

describe('Our test suite', () => {
  it('App', () => {
    const wrapper = shallow(<App />);
    const p = wrapper.find('.text');
    expect(p.text()).toBe('test');
  });
});