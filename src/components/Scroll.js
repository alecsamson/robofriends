import React from 'react';
//we want to keep the search box at the top of the page even when scrolling through the generated list
const Scroll = (props) => {
    return (
        <div style={ {overflowY: 'scroll', border: '5px solid black', height: '500px'} }>
            {props.children}
        </div>
    );
};

export default Scroll;