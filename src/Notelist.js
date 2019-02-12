import React from 'react';

export default function Notelist (props){
    console.log(props.notes);
    return (
        <div>
            {/* {props.notes.map((el,index)=>{

            })} */}
            <h2>Title</h2>
            <p>Modified Date</p>
            <input type='button' name="deleteNote" value="Delete Note"/>
        </div>
    )
}