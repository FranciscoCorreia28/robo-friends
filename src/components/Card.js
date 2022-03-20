import React from 'react';

const Card = (props) => {
    const { name, email, id } = props;// Posso fazer o destructuring assim, ou mesmo dentro do paramentro da função

    return (
        <div className=" tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt="robo-images" src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p><small>{email}</small></p>
            </div>

        </div>
    );

}

export default Card;