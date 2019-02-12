import React from 'react';
import './Notelist.css'


export default function Notelist (props){
    // console.log(props.notes);
    // const variable = props.fid===''? note: note.folderId === props.fId ;
    return (
        <ul className='note'>
            {props.notes.filter(note => props.fId ? note.folderId === props.fId :note).map((el,index)=>{
              return (
              <li>
                <h2>{el.name}</h2>
                <p>{el.modified}</p>
                <p>{el.content}</p>
                <input type='button' name="deleteNote" value="Delete Note"/>
              </li>
              )}
              )}
        </ul>
    )
}