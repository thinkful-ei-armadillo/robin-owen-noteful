import React from 'react';

export default function Folders (props){
    return (
        <div>
            {props.folders.map((el,index) => {
                return (<div>{el.name}</div>);
            })}
        </div>
    )
}