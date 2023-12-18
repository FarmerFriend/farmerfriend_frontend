import React, { useState, useEffect } from 'react';

const SolutionViewer = ({ solutionData, showSpeakButton }) => {
  const [solution, setSolution] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    if (solutionData) {
      setSolution(solutionData.text); // 해결 방법 설명
      setImageUrl(solutionData.imageUrl); // 이미지 URL
    }
  }, [solutionData]);

  const speakSolution = () => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(solution);
    synth.speak(utterance);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      <div style={{ marginRight: '20px', textAlign: 'center' }}>
        <p>{solution}</p>
        {showSpeakButton && (
          <button
            style={{
              backgroundColor: 'lightgreen',
              border: 'none',
              padding: '8px 16px', // 크기 조절
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '14px', // 작은 폰트 크기
              fontWeight: 'bold',
              color: 'black',
              marginLeft: '10px', // 옆으로 이동
            }}
            onClick={speakSolution}
          >
            음성으로 듣기
          </button>
        )}
      </div>
      {/* 이미지 출력 */}
      {imageUrl && (
        <div style={{ textAlign: 'center' }}>
          <img src={imageUrl} alt="해결 방법 이미지" style={{ maxWidth: '300px' }} />
        </div>
      )}
    </div>
  );
};

export default SolutionViewer;
