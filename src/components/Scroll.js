import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{
            overflow: 'scroll', borderTop: '4px solid rgba(4, 17, 17, 0.884)', height: '800px', overflowX: 'hidden'
        }}>
            {props.children}
        </div >
    );
}

export default Scroll;