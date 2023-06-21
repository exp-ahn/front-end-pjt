import React from 'react';

const TrafficLocationName = (props) => {
    return (
        <div className={props.class}>
            <p>{props.name}</p>
            {props.location === undefined ? (
                <input
                    className="traffic-input-value"
                    type="text"
                    placeholder={`${props.name}를 눌러주세요`}
                    readOnly
                />
            ) : (
                <input className="traffic-input-value" type="text" value={props.location.name} readOnly />
            )}
        </div>
    );
};

export default TrafficLocationName;
