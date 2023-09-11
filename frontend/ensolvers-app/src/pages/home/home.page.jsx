import React, { useState, useEffect } from 'react';
import Card from '../../components/card/card';
import "./home.page.css"
import PopUp from '../../components/Popup';
import SystemForm from '../../components/SystemForm';

const HomePage = () => {
  const [showFormulary, setShowFormulary] = useState(false);
  const [formData, setFormData] = useState({ name: '', description: '' });
  const [notes, setNotes] = useState([]);
  const [pageTitle, setPageTitle] = useState("My Notes");
  const [buttonIcon, setButtonIcon] = useState("archive");


  const closeForm = () => {
    setShowFormulary(false);
  };

  const setArchived = () => {
    // Cambiar entre "Notes Archived" y "My Notes" alternativamente
    setPageTitle(pageTitle === "Notes Archived" ? "My Notes" : "Notes Archived");
    setButtonIcon(pageTitle === "Notes Archived" ? "archive" : "unarchive");
  }

  useEffect(() => {
    // Realizar la solicitud a la API aquí y actualizar el estado "notes"
    // Ejemplo de solicitud ficticia utilizando fetch:
    fetch('http://localhost:3001/notes')
      .then((response) => response.json())
      .then((data) => setNotes(data))
      .catch((error) => console.error('Error fetching data:', error));
      
  }, []);



  return (
    <article>
      <h1 style={{ marginTop: '3rem', fontSize: '2rem' }}>{pageTitle}</h1>
      <div class="new-system">
        <button onClick={() => setShowFormulary(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-dasharray="18" stroke-dashoffset="18" stroke-linecap="round" stroke-width="2"><path d="M12 5V19"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.3s" values="18;0" /></path><path d="M5 12H19"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="18;0" /></path></g></svg>

        </button>
        <button onClick={() => setArchived()}>
          {buttonIcon === "archive" ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256"><path fill="currentColor" d="M224 48H32a16 16 0 0 0-16 16v24a16 16 0 0 0 16 16v88a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-88a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16Zm-16 144H48v-88h160Zm16-104H32V64h192v24ZM96 136a8 8 0 0 1 8-8h48a8 8 0 0 1 0 16h-48a8 8 0 0 1-8-8Z" /></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17.675q.425 0 .713-.288t.287-.712v-3.2l.9.9q.275.275.7.275t.7-.275q.275-.275.275-.7t-.275-.7L12.7 10.4q-.3-.3-.7-.3t-.7.3l-2.6 2.575q-.275.275-.275.7t.275.7q.275.275.7.275t.7-.275l.9-.9v3.2q0 .425.288.713t.712.287ZM5 21q-.825 0-1.413-.588T3 19V6.525q0-.35.113-.675t.337-.6L4.7 3.725q.275-.35.687-.538T6.25 3h11.5q.45 0 .863.188t.687.537l1.25 1.525q.225.275.338.6t.112.675V19q0 .825-.588 1.413T19 21H5Zm.4-15h13.2l-.85-1H6.25L5.4 6Z" /></svg>
          )}
        </button>
      </div>
      <section className="section-notes">
        {(pageTitle === "My Notes" && notes.length > 0 && notes.some((note) => !note.archived)) ||
          (pageTitle === "Notes Archived" && (notes.length || notes.every((note) => note.archived))) ? (
          notes
            .filter((note) =>
              pageTitle === "Notes Archived" ? note.archived : !note.archived
            ) // Filtrar las notas con archived en false
            .map((note) => (
              <Card
                title={note.title}
                edited={note.last_edited}
                description={note.description}
                category={note.categories}
                id={note.id}
                buttonIcon={buttonIcon}
              />
              
            ))
            
        ) : (
          // Mostrar "Add notes" cuando no haya notas o todas estén archivadas y la página sea "My Notes"
          <div className="new-system">
            <h2>Add notes</h2>
          </div>
        )}
      </section>
      <PopUp isDisplayed={showFormulary}>
        <SystemForm
          name={formData.name}
          description={formData.description}
          onClose={closeForm}
          submit={() => {
            //newSystem();
            setShowFormulary(false);
          }}
          onNameChange={(e) => setFormData({ ...formData, name: e.target.value })}
          onDescriptionChange={(e) => setFormData({ ...formData, description: e.target.value })}
        />
      </PopUp>
    </article>
  );
};

export default HomePage;
