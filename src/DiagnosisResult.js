import React, { useState, useEffect } from 'react';

const DiagnosisResult = ({ textFromBackend, cropDescriptionFromBackend }) => {
  const [diagnosisText, setDiagnosisText] = useState('');
  const [cropDescriptionText, setCropDescriptionText] = useState('');

  useEffect(() => {
    if (textFromBackend) {
      setDiagnosisText(textFromBackend);
    }
    if (cropDescriptionFromBackend) {
      setCropDescriptionText(cropDescriptionFromBackend);
    }
  }, [textFromBackend, cropDescriptionFromBackend]);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h3 style={{ fontSize: '1.5em' }}>피해 작물 종류</h3>
      <p style={{ fontSize: '1em' }}>{diagnosisText}</p>
      <h3 style={{ fontSize: '1.5em' }}>피해 작물 종류 설명 </h3>
      <p style={{ fontSize: '1em' }}>{cropDescriptionText}</p>
    </div>
  );
};

export default DiagnosisResult;

