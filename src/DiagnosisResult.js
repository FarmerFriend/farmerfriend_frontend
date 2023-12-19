import React, { useState, useEffect } from 'react';

const DiagnosisResult = ({ textFromBackend }) => {
  const [diagnosisText, setDiagnosisText] = useState('');

  useEffect(() => {
    if (textFromBackend && textFromBackend.prediction) {
      // textFromBackend.prediction이 객체라면, 이를 문자열로 변환하여 저장
      const predictionText = typeof textFromBackend.prediction === 'object' 
        ? JSON.stringify(textFromBackend.prediction) 
        : textFromBackend.prediction;
      setDiagnosisText(predictionText);
    }
  }, [textFromBackend]);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h3 style={{ fontSize: '1.5em' }}>피해 작물 종류</h3>
      <p style={{ fontSize: '1em' }}>{diagnosisText}</p>
    </div>
  );
};

export default DiagnosisResult;
