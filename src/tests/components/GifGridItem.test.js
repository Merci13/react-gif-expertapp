
import React from 'react'

import { shallow } from 'enzyme';

import { GifGridItem } from "../../component/GifGridItem";



describe('Test suit for GifGridItem', () => {
    const data = {
        id: "1",
        title: "Test",
        url: 'https://media0.giphy.com/media/frSfC5NcmyF7q/giphy.gif?cid=06e8b66c72sm7qbmymoflqopm25mpd9kjc5or58kdq34eljb&rid=giphy.gif&ct=g'
    };

    const wrapper = shallow(< GifGridItem id={data.id} title={data.title} url={data.url} />);


    test('El GifGridItem tiene que verse', () => {



        expect(wrapper).toMatchSnapshot();


    });

    test('Debe de tener un parrafo con el titulo', () => {

        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(data.title);

    });

    test('Debe de tener la image igual al url y alt de los props', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(data.url);
        expect(img.prop('alt')).toBe(data.title);



    });


    test('Debe de tener animate__fadeIn', () => {

        const div = wrapper.find('div');
        expect(div.prop('className').includes("animate__fadeIn")).toBe(true);

    })




});