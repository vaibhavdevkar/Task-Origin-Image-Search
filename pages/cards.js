import { useState } from "react";
import Image from "next/image";
import cat1 from "../public/images/cat1.jpg";
import cat2 from "../public/images/cat2.jpg";
import cat3 from "../public/images/cat3.jpg";
import cat4 from "../public/images/cat4.jpg";
import cat5 from "../public/images/cat5.jpg";
import dog1 from "../public/images/dog1.jpg";
import dog2 from "../public/images/dog2.jpg";
import dog3 from "../public/images/dog3.jpg";
import dog4 from "../public/images/dog4.jpg";
import horse1 from "../public/images/horse1.jpg";
import horse2 from "../public/images/horse2.jpg";
import horse3 from "../public/images/horse3.jpg";

const images = [
  { id: 1, src: cat1, label: "cat1" },
  { id: 2, src: cat2, label: "cat2" },
  { id: 3, src: cat3, label: "cat3" },
  { id: 4, src: cat4, label: "cat4" },
  { id: 5, src: cat5, label: "cat5" },
  { id: 6, src: dog1, label: "dog1" },
  { id: 7, src: dog2, label: "dog2" },
  { id: 8, src: dog3, label: "dog3" },
  { id: 9, src: dog4, label: "dog4" },
  { id: 10, src: horse1, label: "horse1" },
  { id: 11, src: horse2, label: "horse2" },
  { id: 12, src: horse3, label: "horse3" },
];

const Card = (props) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [editIndex, setEditIndex] = useState(null);
  const [newLabel, setNewLabel] = useState("");
  const [filter, setFilter] = useState("");

  const handleLabelChange = (event) => {
    setNewLabel(event.target.value);
  };

  const handleEditClick = (index) => {
    setEditIndex(index);
  };

  const handleSaveClick = (index) => {
    const updatedImages = [...images];
    updatedImages[index].label = newLabel;
    setSelectedImage(
      updatedImages.find((image) => image.id === selectedImage.id)
    );
    setNewLabel("");
    setEditIndex(null);
  };

  const handleCancelClick = () => {
    setNewLabel("");
    setEditIndex(null);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredImages = images.filter((image) =>
    image.label.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="container-1">
      <h1 style={{textAlign:"center"}}>Main Dashboard Page</h1>
      <div style={{ display: "flex" }}>
        <div style={{ margin: "10px" , marginLeft:"30rem" }}>
          <label  style={{fontSize:"30px" ,textAlign:"center" , fontSize:"45px"}}>
            Search Images
            <input
              type="text"
              value={filter}
              onChange={handleFilterChange}
              placeholder="Search here"
              // style={{marginLeft:"400px"}}

            />
          </label>
        </div>
      </div>
      <div style={{ display: "inline-block"}}>
        {filteredImages.map((image, index) => (
          <div className="img-border" key={image.id} style={{ margin: "40px" , display: "inline-block"}}>
            <Image
              src={image.src}
              alt={image.label}
              style={{ width: "350px", height: "250px", cursor: "pointer" , marginLeft: "5px" , marginTop:"10px" }}
              onClick={() => handleImageClick(image)}
            />
            <br />
            {editIndex === index ? (
              <div >
                <label className="label-2">
                  New Label:
                  <input
                    type="text"
                    value={newLabel}
                    onChange={handleLabelChange}
                    width="10"
                    placeholder="Enter the new Label"  
                  />
                </label>
                <br />
                <button className="button-70" role="button" onClick={() => handleSaveClick(index)}>Save</button>
                  <button  className="button-70" role="button" onClick={handleCancelClick}>Cancel</button> 
              </div>
            ) : (
              <div style={{ display: "flex" , margin:"20px" }}>
                <label className="label-size" >{image.label}</label>
                <button  className="button-70" role="button" onClick={() => handleEditClick(index)} >Edit Label</button>
              </div>
            )}
          </div>
        ))}
      </div>
      <br />
      <hr />
    </div>
  );
};

export default Card;
