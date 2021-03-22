import React from 'react';

import CardInfo from '../components/CardInfo';

function Card(props) {
    return(
        <div className="d-inline-block t-card">
            <img className="t-card-image" src={props.item.imgSource} alt={props.item.imgSource}/>
            { props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} />}
        </div>
    );
}

export default Card;