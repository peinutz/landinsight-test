/* eslint-disable no-undef */
import {
    shallowMount
} from '@vue/test-utils'

import Map from './Map.vue';
import House from './House.vue'

describe('Map component', () => {
    let wrapper;

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

    beforeEach(() => {
        wrapper = shallowMount(Map, {
            propsData: {
                priceMap: priceMap
            }
        });
    });

    test('renders correct amount of houses', () => {
        const houseNumber = 10000;

        expect(wrapper.findAll(House).length).toBe(houseNumber);
    });

    test('finds the correct house on price map array', () => {

        const expected = {
            x: 2,
            y: 2,
            price: 2,
            percentile: 20
        };

        expect(wrapper.vm.findHouseDataInPriceMap(2, 2)).toStrictEqual(expected);
    })
});