import React, { useState } from 'react';
import ImageUpload from './ImageUpload';
import DiagnosisButton from './DiagnosisButton';
import DiagnosisResult from './DiagnosisResult';
import SolutionButton from './SolutionButton';
import SolutionViewer from './SolutionViewer';

function App() {
  const [textFromBackend, setTextFromBackend] = useState('');
  const [solutionData, setSolutionData] = useState({ text: '', imageUrl: '' });
  const [showSpeakButton, setShowSpeakButton] = useState(false); // 음성 버튼 표시 여부 상태

  const handleDiagnose = () => {
    const fakeBackendResponse = "토마토잎에 곰팡이가 생김";
    setTextFromBackend(fakeBackendResponse);
  };

  const handleShowSolution = () => {
    // 임시 데이터 설정
    const fakeSolutionData = {
      text: '해결 방법 설명...',
      imageUrl: '/farmerfriends.png', // 이미지 URL
    };
    setSolutionData(fakeSolutionData);
    setShowSpeakButton(true); // 해결 버튼을 눌렀을 때 음성 듣기 버튼을 보이도록 설정
  };
  

  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <header className="App-header" style={{ width: '100%', maxWidth: '800px' }}>
        <img
          src="/farmerfriends.png"
          alt="로고"
          style={{
            width: '300px',
            marginBottom: '20px',
            display: 'block',
            margin: '0 auto', // 가운데 정렬
          }}
        />

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ marginRight: '20px' }}>
            <ImageUpload />
          </div>
          <div>
            <DiagnosisResult textFromBackend={textFromBackend} />
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
          <DiagnosisButton handleDiagnose={handleDiagnose} />
          <SolutionButton handleShowSolution={handleShowSolution} />
        </div>

        <div>
          <SolutionViewer solutionData={solutionData} showSpeakButton={showSpeakButton} />
        </div>
      </header>
    </div>
  );
}

export default App;





