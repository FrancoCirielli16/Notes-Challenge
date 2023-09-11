import React, { useState } from 'react';
import "./SystemVerify.css"

export default function SystemVerify({id, onClose}) {
    
  
  

  
  const removeNote = async () => {



    try {
        // Realizar la solicitud POST para crear una nueva nota
        const response = await fetch(`http://localhost:3001/notes/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            // La nota se creó con éxito, puedes realizar alguna acción adicional aquí si es necesario.
            console.log('Nota creada con éxito');
            setTimeout(() => {
                window.location.reload();
            }, 1);
        } else {
            // Ocurrió un error al crear la nota, puedes manejarlo aquí.
            console.error('Error al crear la nota');
        }
    } catch (error) {
        console.error('Error al realizar la solicitud POST:', error);
    }
    onClose();

};
      
  
  

  return (
    <section>
      <h2>Are you sure you want to delete this note?</h2>
      <form onSubmit={removeNote}>
        <div className="button-group">
        <button type="button" onClick={() => onClose()}>No</button>
        <button type="submit">Yes</button>
        </div>
      </form>
    </section>
  );
}
