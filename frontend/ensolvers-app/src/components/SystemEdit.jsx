import React, { useState , useEffect} from 'react';
import "./SystemForm.css"
export default function SystemEdit({ id, title, initialDescription, initialcategory, onClose }) {
  const [name, setName] = useState(title || '');
  const [description, setDescription] = useState(initialDescription || '');
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState('');



  useEffect(() => {
    initCategories();
  }, []);

  const initCategories = () => {

    if(initialcategory){
    
      const initialCategories = initialcategory.split(',');
      setCategories(initialCategories);
    }
  }

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

    const newNote = {
      title: name,
      description: description,
      categories: categories.join(","),
    };
    console.log(newNote);
    try {

      const response = await fetch(`http://localhost:3001/notes/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newNote),
      });

      if (response.ok) {

        console.log('Note update');
        setTimeout(() => {
          window.location.reload();
        }, 1);
      } else {

        console.error('Error ');
      }
    } catch (error) {
      console.error('Error POST:', error);
    }


    setName('');
    setDescription('');
    setCategories('');


    onClose();
  };




  return (
    <section>
      <h2>Edit Note</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="name">Title</label>
          <input
            type="text"
            name="name"
            autoComplete="off"
            minLength="4"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            autoComplete="off"
            rows="4"
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
          <button type="submit">Edit</button>
        </div>
      </form>
    </section>
  );
}
