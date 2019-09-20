import React from 'react';
import { render } from '../../../enzyme';

import App from './app';

describe('Our test suite', () => {
    it('App', () => {
        const wrapper = render(<App />);
        expect(wrapper.find('.App')).toBeDefined();
    });
});