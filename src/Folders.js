import React from 'react';
import {NavLink} from 'react-router-dom'
import './Folders.css'

export default function Folders (props){
  const folderNav = props.folders.map((el,index) => {
    return  (
    <section className="folder">
      <NavLink to={`/folders/${el.id}`}>{el.name}</NavLink>
    </section>
    )
  });

  return folderNav
}