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
    /*
      with stateless component Jest can't test wrapper.instance().searchHandler() and it will always return
      null unless the <Header/> component is changed to
      class component (read: https://airbnb.io/enzyme/docs/api/ReactWrapper/instance.html).

      To get around it is to test the effect after searchHandler is called which is the .header will be changed to different class.
    */
    const wrapper = shallow(
      <Header location={{pathname: '/'}} />
    );

    wrapper.find('.header__search').simulate('onKeyDown', {key: 'Enter', target: {value: 'tent'}});

    expect(wrapper.find('.header').hasClass('header--full')).toEqual(true);
    expect(wrapper.find('.header').hasClass('random-class')).toEqual(false);
  })
});