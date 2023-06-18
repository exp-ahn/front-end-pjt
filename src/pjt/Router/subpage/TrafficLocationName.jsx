import React from 'react';

const TrafficLocationName = (props) => {
    return (
        <div className={props.class}>
            <p>{props.name}</p>
            <p>{props.location === undefined ? `${props.name}를 눌러주세요` : props.location.name}</p>
        </div>
    );
};

export default TrafficLocationName;
