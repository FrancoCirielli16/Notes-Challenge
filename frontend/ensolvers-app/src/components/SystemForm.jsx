import React, { useState } from 'react';
import "./SystemForm.css"
export default function SystemForm({ onClose }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleRemoveCategory = (indexToRemove) => {
    const updatedCategories = categories.filter((_, index) => index !== indexToRemove);
    setCategories(updatedCategories);
  };
  

  const handleAddCategory = () => {
    if (newCategory.trim() === '') {
      return; 
    }
  
   
    setCategories([...categories, newCategory]);

    setNewCategory('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    const newNote = {
      title: name,
      description: description,
      category: categories.join(","),
    };
    
    try {
      
      const response = await fetch('http://localhost:3001/notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newNote),
      });

      if (response.ok) {
       
        console.log('Nota creada con éxito');
        setTimeout(() => {
          window.location.reload();
        }, 1);
      } else {
        
        console.error('Error al crear la nota');
      }
    } catch (error) {
      console.error('Error al realizar la solicitud POST:', error);
    } finally {
      setIsSubmitting(false); // Habilita el botón nuevamente después de completar la solicitud
    }
   
    setName('');
    setDescription('');
    setCategories([])
    
    onClose();
  };



  return (
    <section>
      <h2>New Note</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="name">Title</label>
          <input
            required
            type="text"
            name="name"
            placeholder="Title of the note"
            autoComplete="off"
            minLength="4"
            maxLength="20"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="description">Description</label>
          <textarea
            required
            name="description"
            placeholder="Description of the note"
            autoComplete="off"
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="description">Category</label>
          <ul className="category-list">
            {categories.map((category, index) => (
              <li key={index}>{category}<button onClick={() => handleRemoveCategory(index)}>x</button></li>
            ))}
          </ul>
          <div className="category-input">
            <input
              name="category"
              placeholder="Add a category"
              autoComplete="off"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
            />
            <button type="button" onClick={handleAddCategory}>Add</button>
          </div>
        </div>
        <div className="button-group">
          <button type="button" onClick={() => onClose()}>Close</button>
          <button type="submit" disabled={isSubmitting}>Create</button>
        </div>
      </form>
    </section>
  );
}
