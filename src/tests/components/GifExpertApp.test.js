import React from 'react';
import { shallow } from "enzyme";
import GifExpertApp from '../../component/GifExpertApp'





describe('Test Suit para GifExpertApp',() =>{


    test('Debe de mostrar el componente GifExpertApp', () => {
        
        const wrapper = shallow(<GifExpertApp />);

        expect(wrapper).toMatchSnapshot();


    });

    test('Debe de mostrar una lista de categorias', () => {
        

            const categories = ['One Punch', 'Dragon Ball'];
            const wrapper = shallow(<GifExpertApp defaultCategories= { categories }/>);

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.find('GifGrid').length ).toBe(categories.length);

        });
        
    


    



});