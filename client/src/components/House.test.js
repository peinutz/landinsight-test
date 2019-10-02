/* eslint-disable no-undef */
import {
    shallowMount
} from '@vue/test-utils';

import House from './House.vue';

describe('House component', () => {
    test('renders correct color for percentile', () => {
        const house = {
            x: 2,
            y: 2,
            price: 2,
            percentile: 20
        };

        const expectedColorStyle = 'background-color: rgb(191, 191, 191);'

        const wrapper = shallowMount(House, {
            propsData: {
                house: house
            }
        });

        expect(wrapper.find(".house").attributes().style).toBe(expectedColorStyle);
    });
});