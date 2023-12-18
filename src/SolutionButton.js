import React from 'react';

const SolutionButton = ({ handleShowSolution }) => {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      {/* 해결방법 보기 버튼 */}
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
        onClick={handleShowSolution} // 백엔드에서 해결 방법을 받아와 보여주는 함수
      >
        해결방법 보기
      </button>
    </div>
  );
};

export default SolutionButton;

