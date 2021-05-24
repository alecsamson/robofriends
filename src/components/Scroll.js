import React from 'react';
//we want to keep the search box at the top of the page even when scrolling through the generated list
const Scroll = (props) => {
    return (
        <div style={ {height: 'auto'} }>
            {props.children}
        </div>
    );
};

export default Scroll;