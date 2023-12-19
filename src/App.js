import React, { useState } from 'react';
import ImageUpload from './ImageUpload';
import DiagnosisButton from './DiagnosisButton';
import DiagnosisResult from './DiagnosisResult';
import SolutionButton from './SolutionButton';
import SolutionViewer from './SolutionViewer';
import axios from 'axios';

function App() {
  const [textFromBackend, setTextFromBackend] = useState('');
  const [solutionData, setSolutionData] = useState({ data : '', text: '', imageUrl: '' });
  const [showSpeakButton, setShowSpeakButton] = useState(false); // 음성 버튼 표시 여부 상태
  const [imageFile, setImageFile] = useState(null); // 이미지 파일 상태 추가
  


  const handleImageUpload = (event) => {
    console.log("3");
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      setImageFile(file);
      console.log("start");
      console.log(file); // 로그 출력
    } else {
      console.log('No file selected');
    }
    console.log("4");
  };

  const handleDiagnose = () => {
    console.log("1");
    console.log(imageFile);
    const backendUrl = 'http://172.30.1.99:8080/disease'; 

    const formData = new FormData();
    formData.append('image', imageFile);
  
    axios.post(backendUrl, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(response => {
        setTextFromBackend(response.data);
    })
    .catch(error => console.error('Error:', error));
    console.log("2");
    
  };
  

  // const handleShowSolution = () => {
  //   const fakeSolutionData = {
  //     data: "질병 설명...",
  //     text: '해결 방법 설명 ...',
  //     imageUrl: '/farmerfriends.png',
  //   };
  //   setSolutionData(fakeSolutionData);
  //   setShowSpeakButton(true);
  // };
  const handleShowSolution = async (diseaseName) => {
    try {
      const response = await axios.get('http://172.30.1.99:8080/disease/search', {
        params: {
          diseaseName: diseaseName
        }
      });
  
      console.log(response.data);

      // const imageUrls = ['/farmerfriend_frontend/src/solution/fertilizer1.png', '/farmerfriend_frontend/src/solution/fertilizer2.png', '/farmerfriend_frontend/src/solution/insecticide1.png', '/farmerfriend_frontend/src/solution/insecticide2.png', '/farmerfriend_frontend/src/solution/moisture1.png', '/farmerfriend_frontend/src/solution/moisture2.png', '/farmerfriend_frontend/src/solution/pruning1.png', '/farmerfriend_frontend/src/solution/pruning2.png', '/farmerfriend_frontend/src/solution/removal1.png', '/farmerfriend_frontend/src/solution/removal2.png'];
      const imageUrls = ['C:/Users/ganks/OneDrive/사진/plantsgrape_black_rot.JPG','/farmerfriends.png','/farmerfriends.png','/farmerfriends.png'];

      const randomImageUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)];

      const fetchedSolutionData = {
        data: response.data.description,
        text: response.data.steps,
        imageUrl: randomImageUrl  
      };
      console.log(randomImageUrl);
      setSolutionData(fetchedSolutionData);
      setShowSpeakButton(true);

    } catch (error) {
      console.error('Failed to fetch disease info', error);
    }
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
            margin: '0 auto',
          }}
        />

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ marginRight: '20px' }}>
            <ImageUpload onImageUpload={handleImageUpload} />
            
          </div>
          <div>
            {/* <DiagnosisResult textFromBackend={textFromBackend} handleShowSolution={handleDiagnose} /> */}
            <DiagnosisResult textFromBackend={textFromBackend} handleShowSolution={handleShowSolution} />


          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
          <DiagnosisButton handleDiagnose={handleDiagnose} />
          {/* <SolutionButton handleShowSolution={handleShowSolution} /> */}
        </div>

        <div>
          <SolutionViewer solutionData={solutionData} showSpeakButton={showSpeakButton} />
        </div>
      </header>
    </div>
  );
}

export default App;



