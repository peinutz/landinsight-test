/* eslint-disable no-undef */
import {
    shallowMount
} from '@vue/test-utils'

import Map from './Map.vue';
import Square from './Square.vue'

describe('Map component', () => {
    test('renders correct amount of squares', () => {
        const squaresNumber = 10000;

        const wrapper = shallowMount(Map);

        expect(wrapper.findAll(Square).length).toBe(squaresNumber);
    });

    test('finds the correct house on price map array', () => {
        const priceMap = [{
                x: 1,
                y: 1,
                price: 1,
                percentile: 10
            },
            {
                x: 2,
                y: 2,
                price: 2,
                percentile: 20
            }
        ];

        const expected = {
            x: 2,
            y: 2,
            price: 2,
            percentile: 20
        };

        const wrapper = shallowMount(Map, {
            propsData: {
                priceMap: priceMap
            }
        });

        expect(wrapper.vm.findHouseData(2, 2)).toStrictEqual(expected);
    })
})