import React, { useState } from 'react';

const ImageUpload = ({ onImageUpload }) => { // onImageUpload prop 추가
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploaded, setUploaded] = useState(false);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
    setUploaded(true);
    onImageUpload(event); // 이미지를 선택한 후에 onImageUpload 함수 호출
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
      {!uploaded && (
        <label htmlFor="imageUpload" style={{ fontSize: '70px', cursor: 'pointer', backgroundColor: 'white', border: '4px solid green', borderRadius: '5px', padding: '50px', width: '50px', textAlign: 'center', marginBottom: '20px' }}>
          +
          <input id="imageUpload" type="file" accept="image/*" onChange={handleImageChange} style={{ display: 'none' }} />
        </label>
      )}

      {selectedImage && uploaded && (
        <div>
          <img
            src={URL.createObjectURL(selectedImage)}
            alt="Selected Image"
            style={{ maxWidth: '130px' }}
          />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;


