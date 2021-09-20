

import React, { useState } from 'react'
import PropTypes from 'prop-types';


export const AddCategory = ( {setCategories} ) => {

let [inputValue, setImputValue] = useState('');


   const handleInputChange = ( e ) =>{
        setImputValue(e.target.value);
  
   } ;

   const handleSummit = ( e ) =>{
        e.preventDefault();
        if( inputValue.trim().length > 2){
              setCategories(categories => [inputValue, ...categories]);

        console.log('Summit Hecho!');
        setImputValue ("");
        }

      
   };

    return (
        <>
 
            <form onSubmit = {handleSummit}>
                  <input
            type= 'text'
            value = {inputValue}
            onChange ={ handleInputChange }
         />
            </form>
       
        </>
    )
}

AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired

};
