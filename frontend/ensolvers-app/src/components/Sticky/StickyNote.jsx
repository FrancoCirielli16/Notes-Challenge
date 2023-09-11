import React from 'react';
import "./Note.css"
export default function StickyNoteContainer({ title,edition,children }) {


  return (
    <div className='container'>
      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path stroke-dasharray="64" stroke-dashoffset="64" stroke-width="2" d="M13 3L19 9V21H5V3H13"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"/></path><path stroke-dasharray="14" stroke-dashoffset="14" d="M12.5 3V8.5H19"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="14;0"/></path></g></svg>
      <div className='container-info'>

        <span className='Title'>{title}</span>
        <span className="edition">Edited: {new Date(edition).toLocaleString()}</span>

      </div>

      {children}


    </div>
  );
}
