import React from 'react'
import { shallow } from "enzyme";
import { AddCategory } from "../../component/AddCategory";



describe('Pruebas en AddCategory', () =>{

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories ={ setCategories} />);

    beforeEach(()=>{
        jest.clearAllMocks();
    let wrapper = shallow(<AddCategory setCategories ={ setCategories} />);

    });

    test('Debe de  mostrarse correctamente', () => {

            expect( wrapper ).toMatchSnapshot();
        
    });

    test('Debe de cambiar el texto en la caja de texto', () => {
        
        const input = wrapper.find('input');

        const value = 'Hola Mundo';
        input.simulate('change', { target: {value:value} });

    });


    // test('No debe de postear la informacion con submit', () => {
        
    //     wrapper.find('form').simulate('submit', {preventDefault(){}});
    //     expect( setCategories ).not.toHaveBeenCalled();
    // });
    
    
    
    test('Debe de llamar el setCategories y limpiar la caja de text', () => {
        //1 simular el input change
        const value = 'Hola Mundo';
        const input = wrapper.find('input');

    
        input.simulate('change', { target: {value:value} });


        //2 simular el submit del formulario
        wrapper.find('form').simulate('submit', {preventDefault(){}});

        //3 deben de llamar el setCategory

            expect(setCategories ).toHaveBeenCalledTimes(1);
            expect(setCategories ).toHaveBeenCalledWith(  expect.any(Function) );
        

        //4 el valor del input debe de estar "";

        expect(wrapper.find('input').prop('value') ).toBe(''); 

    });
    


});