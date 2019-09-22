import React from 'react';
import { shallow } from '../../../enzyme';
import Header from './header';

describe('<Header/>', () => {
  it('Renders without error', () => {
    const wrapper = shallow(
      <Header location={{pathname: '/'}} />
    );

    expect(wrapper.find('.header').exists()).toBe(true);
    expect(wrapper.find('.randomClass').exists()).toBe(false);
  });

  it('Changes header class to full when user does keydown Enter on search bar', () => {
    const wrapper = shallow(
      <Header location={{pathname: '/'}} />
    );

    wrapper.find('.header__search').simulate('onKeyDown', {key: 'Enter', target: {value: 'tent'}});

    expect(wrapper.find('.header').hasClass('header--full')).toEqual(true);
    expect(wrapper.find('.header').hasClass('random-class')).toEqual(false);
  })
});