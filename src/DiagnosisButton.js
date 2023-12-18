import React from 'react';

const DiagnosisButton = ({ handleDiagnose }) => {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      {/* 버튼 스타일 및 마진 조정 */}
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
        onClick={handleDiagnose}
      >
        진단하기
      </button>
    </div>
  );
};

export default DiagnosisButton;
