import React, { useState } from 'react';
import StickyNoteContainer from '../Sticky/StickyNote';
import "./card.css"
import PopUp from '../../components/Popup';
import SystemForm from '../../components/SystemForm';
import SystemEdit from '../SystemEdit';
import SystemVerify from '../SystemVerify';

export default function Card({ id, edited, title, description, category ,buttonIcon}) {
    const [showRemove, setShowRemove] = useState(false);
    const [showFormulary, setShowFormulary] = useState(false);
    const [formData, setFormData] = useState({ name: '', description: '' });
    const [isFormOpen, setIsFormOpen] = useState(false);
    const closeForm = () => {
        setShowFormulary(false);
    };

    const closeVerify = () => {
        setShowRemove(false);
    };

    

    const Archived = async (e) => {

        e.preventDefault();


        const newNote = {
            archived: true
        };

        try {
            // Realizar la solicitud POST para crear una nueva nota
            const response = await fetch(`http://localhost:3001/notes/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newNote),
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

    };

    const UnArchive = async (e) => {

        e.preventDefault();


        const newNote = {
            archived: false
        };

        try {
            // Realizar la solicitud POST para crear una nueva nota
            const response = await fetch(`http://localhost:3001/notes/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newNote),
            });

            if (response.ok) {
                // La nota se creó con éxito, puedes realizar alguna acción adicional aquí si es necesario.
                console.log('Nota creada con éxito');
                setTimeout(() => {
                    window.location.reload();
                }, 100);
            } else {
                // Ocurrió un error al crear la nota, puedes manejarlo aquí.
                console.error('Error al crear la nota');
            }
        } catch (error) {
            console.error('Error al realizar la solicitud POST:', error);
        }

    };

    const mainStyle = {
        marginTop: '3rem',
        maxWidth: '32ch',
        textAlign: 'center',
    };

    return (

        <StickyNoteContainer title={title} edition={edited}>


            <PopUp isDisplayed={showFormulary}>
                <SystemEdit
                    title={title}
                    initialDescription={description}
                    initialcategory={category}
                    id={id}
                    onClose={closeForm}
                    submit={() => {
                        //newSystem();
                        setShowFormulary(false);
                    }}
                    onNameChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    onDescriptionChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
            </PopUp>


            <PopUp isDisplayed={showRemove}>
                <SystemVerify 
                    id={id}
                    onClose={closeVerify}
                    submit={() => {
                        setShowRemove(false);
                    }}
                
                />
            </PopUp>


            <div className='content-action'>
                <button className='edit' onClick={() => setShowFormulary(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M7 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-1" /><path d="M20.385 6.585a2.1 2.1 0 0 0-2.97-2.97L9 12v3h3l8.385-8.415zM16 5l3 3" /></g></svg>
                </button>
                <button className='edit' onClick={buttonIcon === "archive" ?  Archived : UnArchive}>
                    {buttonIcon === "archive" ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256"><path fill="currentColor" d="M224 48H32a16 16 0 0 0-16 16v24a16 16 0 0 0 16 16v88a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-88a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16Zm-16 144H48v-88h160Zm16-104H32V64h192v24ZM96 136a8 8 0 0 1 8-8h48a8 8 0 0 1 0 16h-48a8 8 0 0 1-8-8Z" /></svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="14" stroke-dashoffset="14" d="M6 19h12"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.4s" values="14;0" /></path><path stroke-dasharray="18" stroke-dashoffset="18" d="M12 15 h2 v-6 h2.5 L12 4.5M12 15 h-2 v-6 h-2.5 L12 4.5"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="18;0" /><animate attributeName="d" calcMode="linear" dur="1.5s" keyTimes="0;0.7;1" repeatCount="indefinite" values="M12 15 h2 v-6 h2.5 L12 4.5M12 15 h-2 v-6 h-2.5 L12 4.5;M12 15 h2 v-3 h2.5 L12 7.5M12 15 h-2 v-3 h-2.5 L12 7.5;M12 15 h2 v-6 h2.5 L12 4.5M12 15 h-2 v-6 h-2.5 L12 4.5" /></path></g></svg>
                    )}

                </button>
                <button className='edit' onClick={() => setShowRemove(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><path fill="currentColor" d="M96 472a23.82 23.82 0 0 0 23.579 24h272.842A23.82 23.82 0 0 0 416 472V152H96Zm32-288h256v280H128Z" /><path fill="currentColor" d="M168 216h32v200h-32zm72 0h32v200h-32zm72 0h32v200h-32zm16-128V40c0-13.458-9.488-24-21.6-24H205.6C193.488 16 184 26.542 184 40v48H64v32h384V88ZM216 48h80v40h-80Z" /></svg>
                </button></div>

        </StickyNoteContainer>

    );
}
