import React, { useState, useEffect } from 'react';

// 영어 단어와 한국어 단어를 매핑한 객체
const wordMap = {
  'Apple : Scab': '사과 : 딱지',
  'Apple : Black Rot': '사과 : 검은 썩은병',
  'Apple : Cedar rust':'사과 : 붉은 별 무늬병',
  'Apple : Healthy' : '사과 : 건강한 잎',
  'Background Without Leaves' : '잎에 대한 정보가 없습니다',
  'Cherry : Powdery Mildew' : '체리 : 흰가루병',
  'Blueberry : Healthy' : '블루베리 : 건강한 잎',
  'Cherry : Healthy' : '체리 : 건강한 잎',
  'Corn : Cercospora Leaf Spot | Gray Leaf Spot': '옥수수 : 갈색 점무늬병',
  'Corn : Common Rust' : '옥수수 : 녹병',
  'Corn : Northern Leaf Blight' : '옥수수 : 잎마름병',
  'Corn : Healthy' : '옥수수 : 건강한 잎',
  'Grape : Black Rot' : '포도 : 검은 썩은 병',
  'Grape : Esca | Black Measles' : '포도 : 흑색홍역',
  'Grape : Leaf Blight | Isariopsis Leaf Spot' : '포도 : 잎마름병',
  'Grape : Healthy' : '포도 : 건강한 잎',
  'Orange : Haunglongbing | Citrus Greening' : '오렌지 : 감귤 녹화병',
  'Peach : Bacterial Spot' : '복숭아 : 세균성구멍병',
  'Peach : Healthy' : '복숭아 : 건강한 잎',
  'Pepper bell : Bacterial Spot' : '고추 : 세균성점무늬병',
  'Pepper bell : Healthy' : '고추 : 건강한 잎',
  'Potato : Early Blight' : '감자 : 겹둥근무늬병',
  'Potato : Late Blight' : '감자 : 역병',
  'Potato : Healthy' : '감자 : 건강한 잎',
  'Raspberry : Healthy' : '라즈베리 : 건강한 잎',
  'Soybean : Healthy' : '콩 : 건강한 잎',
  'Squash : Powdery Mildew' : '호박 : 흰가루병',
  'Strawberry : Leaf Scorch' : '딸기 : 붉은 무늬병',
  'Strawberry : Healthy' : '딸기 : 건강한 잎',
  'Tomato : Bacterial Spot' : '토마토 : 세균성 구멍병',
  'Tomato : Early Blight' : '토마토 : 겹무늬병',
  'Tomato : Late Blight' : '토마토 : 잎마름역병',
  'Tomato : Leaf Mold' : '토마토 : 잎곰팡이병',
  'Tomato : Septoria Leaf Spot' : '토마토 : 흰무늬병',
  'Tomato : Spider Mites | Two-Spotted Spider Mite' : '토마토 : 진드기',
  'Tomato : Target Spot' : '토마토 : 무늬병',
  'Tomato : Yellow Leaf Curl Virus' : '토마토 : 황화잎말림바이러스',
  'Tomato : Mosaic Virus' : '토마토 : 모자이크병',
  'Tomato : Healthy' : '토마토 : 건강한 잎'

  

  // 여기에 필요한 단어를 계속 추가하면 됩니다.
};

// 영어 단어를 한국어로 변환하는 함수
function translate(word) {
  return wordMap[word] || word; // 매핑된 단어가 없으면 원래 단어를 그대로 반환
}

const DiagnosisResult = ({ textFromBackend }) => {
  const [diagnosisText, setDiagnosisText] = useState('');

  useEffect(() => {
    if (textFromBackend && textFromBackend.prediction) {
      const predictionText = typeof textFromBackend.prediction === 'object' 
        ? JSON.stringify(textFromBackend.prediction) 
        : textFromBackend.prediction;
      setDiagnosisText(predictionText);
    }
  }, [textFromBackend]);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h3 style={{ fontSize: '1.5em' }}>피해 작물 종류</h3>
      // 사용자에게 보여주기 전에 diagnosisText를 한국어로 번역
      <p style={{ fontSize: '1em' }}>{translate(diagnosisText)}</p>
    </div>
  );
};

export default DiagnosisResult;
