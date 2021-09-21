
import { shallow } from 'enzyme';
import React from 'react';

import { GifGrid } from "../../component/GifGrid";
import { useFecthGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Test Suit para GifGrid', ()=>{
    const category = 'OnePunch';
   
   

    test('Debe de mostrar el component', () => {

        useFecthGifs.mockReturnValue({
            data: [],
            loading: true
        });
        const wrapper = shallow(< GifGrid  category={ category }/>);
        expect(wrapper).toMatchSnapshot();
    });
    



    test('Debe de mostrar items cuando se cargan imagenes con useFetchGifs', () => {
     
        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualquiercosa.jpg',
            title: 'Cualquier Cosa'
    
        },{
            id: 'ABCD',
            url: 'https://localhost/cualquiercosa.jpg',
            title: 'Cualquier Cosa'
    
        }
    
    ];

         useFecthGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(< GifGrid  category={ category }/>);

          //  expect( wrapper ).toMatchSnapshot();
            expect( wrapper.find('p').exists() ).toBe(false);
            expect( wrapper.find('GifGridItem').length ).toBe( gifs.length);

    });
    



});
