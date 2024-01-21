import React from 'react';
import './App.css';
import Header from './components/common/header/Header';
// 他の必要なコンポーネントをインポート

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      {/* 他のセクションやコンポーネント */}
    </div>
  );
}

export default App;
