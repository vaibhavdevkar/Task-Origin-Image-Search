
import { useState } from 'react';
import Image from 'next/image';
import cat1 from '../public/images/cat1.jpg';
import cat2 from '../public/images/cat2.jpg';
import cat3 from '../public/images/cat3.jpg';
import cat4 from '../public/images/cat4.jpg';
import cat5 from '../public/images/cat4.jpg';
import dog1 from '../public/images/dog1.jpg';
import dog2 from '../public/images/dog2.jpg';
import dog3 from '../public/images/dog3.jpg';
import dog4 from '../public/images/dog4.jpg';
import horse1 from '../public/images/horse1.jpg';
import horse2 from '../public/images/horse2.jpg';
import horse3 from '../public/images/horse3.jpg';


const images = [
{ category: 'Cat', src: cat1 },
{ category: 'Cat', src: cat2 },
{ category: 'Cat', src: cat3 },
{ category: 'Cat', src: cat4 },
{ category: 'Cat', src: cat5 },
{ category: 'Dog', src: dog1 },
{ category: 'Dog', src: dog2 },
{ category: 'Dog', src: dog3 },
{ category: 'Dog', src: dog4 },
{ category: 'Horse', src: horse1 },
{ category: 'Horse', src: horse2 },
{ category: 'Horse', src: horse3 },
];

const Editadmin = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [categories, setCategories] = useState(['All']);
  const [newCategory, setNewCategory] = useState('');

  const filteredImages = selectedCategory === 'All' ? images : images.filter(image => image.category === selectedCategory);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleNewCategoryChange = (event) => {
    setNewCategory(event.target.value);
  };

  const handleAddCategory = () => {
    setCategories([...categories, newCategory]);
    setNewCategory('');

  };

  const handleDeleteCategory = (category) => {
    const updatedCategories = categories.filter(c => c !== category);
    setCategories(updatedCategories);

  };

  

  return (
    <>
      <div className="admin-page">
      <h1 style={{textAlign:"center"}}>Admin Dashboard Page</h1>
        <div className="category-buttons-container">
          {categories.map(category => (
            <div key={category}>
              {category === 'All' ? (
                <button  title="Search for All Images" className="category-button button-70" onClick={() => handleCategoryChange(category)}>{category}</button>
              ) : (
                <>
                  <button title="Clicked ME"  className="category-button button-70" onClick={() => handleCategoryChange(category)}>{category}</button>
                  <button title="It will  Delete Category" className="delete-button button-71" onClick={() => handleDeleteCategory(category)}>X</button>
                </>
              )}
            </div>
          ))}
        </div>
        <div className="new-category-input-container">
          <input   className="new-category-input"   type="text" value={newCategory} onChange={handleNewCategoryChange}   required   placeholder='Add Category ex: Dog' />
          <button className="button-70"  onClick={handleAddCategory} >Add Category</button>
        </div>
        <div className="image-container">
          {filteredImages.map(image => (
            <Image className="image" key={image.src} src={image.src} alt="image not found" height="200" width="200" />
          ))}
        </div>
      </div>
    </>
  );
};

export default Editadmin;


















































// { category: 'Cat', src: cat1 },
// { category: 'Cat', src: cat2 },
// { category: 'Cat', src: cat3 },
// { category: 'Cat', src: cat4 },
// { category: 'Cat', src: cat5 },
// { category: 'Dog', src: dog1 },
// { category: 'Dog', src: dog2 },
// { category: 'Dog', src: dog3 },
// { category: 'Dog', src: dog4 },
// { category: 'Horse', src: horse1 },
// { category: 'Horse', src: horse2 },
// { category: 'Horse', src: horse3 },

// import cat1 from '../public/images/cat1.jpg';
// import cat2 from '../public/images/cat2.jpg';
// import cat3 from '../public/images/cat3.jpg';
// import cat4 from '../public/images/cat4.jpg';
// import cat5 from '../public/images/cat4.jpg';
// import dog1 from '../public/images/dog1.jpg';
// import dog2 from '../public/images/dog2.jpg';
// import dog3 from '../public/images/dog3.jpg';
// import dog4 from '../public/images/dog4.jpg';
// import horse1 from '../public/images/horse1.jpg';
// import horse2 from '../public/images/horse2.jpg';
// import horse3 from '../public/images/horse3.jpg';






























// import { useState } from "react";
// import Card from "./cards";

// function Editadmin() {
//   const [label, setLabel] = useState("");
//   const [labels, setLabels] = useState([]);
//   const [sortOptions, setSortOptions] = useState([
//     "date",
//     "name",
//     "rating",
//     label // include input value as a sort option
//   ]);

//   const handleLabelInput = (event) => {
//     setLabel(event.target.value);
//   };

//   const handleAdd = () => {
//     // Add the label to the list of labels
//     setLabels([...labels, label]);

//     // Add the label to the sort options
//     setSortOptions([...sortOptions, label]);

//     // Clear the input field
//     setLabel("");
//   };

//   return (
//     <div style={{ display: "inline-block" }}>
//       <h1>Admin Dashboard</h1>
//       <div>
//         <label htmlFor="label">Label:</label>
//         <input
//           type="text"
//           id="label"
//           value={label}
//           onChange={handleLabelInput}
//         />
//       </div>
//       <div>
//         <button type="button" onClick={handleAdd}>
//           Add
//         </button>
//       </div>
//       <div>
//         {labels.map((label, index) => (
//           <p key={index}>{label}</p>
//         ))}
//       </div>
//       <div>
//         <Card sortOptions={sortOptions} />
//       </div>
//     </div>
//   );
// }

// export default Editadmin;






























































































// function Editadmin() {
//     return (
//         <h1>
//             Welcome to admin dashboard
//         </h1>
//     )
// }

// export default Editadmin

// import { useState } from "react";
// import Card from "./cards";

// function Editadmin() {
//   const [label, setLabel] = useState("");
//   const [labels, setLabels] = useState([]);

//   const handleLabelInput = (event) => {
//     setLabel(event.target.value);
//   };

//   const handleAdd = () => {
//     // Add the label to the list of labels
//     setLabels([...labels, label]);

//     // Clear the input field
//     setLabel("");
//   };

//   return (
//     <div style={{ display: "inline-block" }}>
//       <h1>Admin Dashboard</h1>
//       <div>
//         <label htmlFor="label">Label:</label>
//         <input
//           type="text"
//           id="label"
//           value={label}
//           onChange={handleLabelInput}
//         />
//       </div>
//       <div>
//         <button type="button" onClick={handleAdd}>
//           Add
//         </button>
//       </div>
//       <div>
//         {labels.map((label, index) => (
//           <p key={index}>{label}</p>
          
//         ))}
//       </div>
//       <div>
//         <Card lebel={label} />
//       </div>
//     </div>
//   );
// }

// export default Editadmin;

