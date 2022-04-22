import React from 'react';
import './checkb.css';
export function Checkb(thing) {    
    const done = {
        color: "#bd9ba4",
        textDecoration: "line-through"
    }  
    return (
       <div className='todo'>        
            <input type="checkbox" id='checkb'            
            onClick={() => thing.handleChange( thing.item.id)} /> 
            <label id='label' onClick={(elem) => elem.target.style.cursor='text'} contenteditable="true" style={thing.item.progress ? done : null } >
                {thing.item.task} 
            </label> 
            <span className='Del' onClick = {() => thing.Delete(thing.item.id)}>🗑</span>
        </div>
    ); 
}