
import React from 'react';


//import PropTypes from 'prop-types';
import { useState } from 'react/cjs/react.development';
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

const GifExpertApp = () =>{

    //const categories = ['One punch', 'Samura X', 'Dragon Ball'];

    const [categories, setCategories] = useState(['One punch']);


    // const handleAdd = () =>{

    //    // setCategories( [...categories, 'HunterxHunter']);
    //   //  setCategories(categories => [...categories, 'HunterxHunter']);
    
    // };

    return (
        <>
        <h2>GifExpertApp</h2>
        <hr/>
        <AddCategory setCategories = { setCategories }/>

        <hr/>

       

        <ol>
            { 
                categories.map( (category, index) => 
         ( 
         <GifGrid 
         key = {category + index}
         category = {category}/>))
            }

        </ol>

        </>
    );
};



export default GifExpertApp;