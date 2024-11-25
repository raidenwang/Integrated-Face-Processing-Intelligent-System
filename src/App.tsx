import React from 'react';
import './App.css'; // 导入样式文件
import logo from './assets/logo.png'; // 导入图片
import { useNavigate } from 'react-router-dom';
import { Image, Button } from 'antd';

const App: React.FC = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/directory'); // 跳转到目录页
  };

  return (
    <div className="app-container">
      <div className="app-content">
        <Image src={logo} alt="Logo" className="app-logo" preview={false} />
        <h1 className="app-title">智能图像处理系统</h1>
        <p className="app-description">
          欢迎使用智能图像处理系统！我们的应用提供多项先进的图像处理功能，包括人脸检测、图像修复、美肤增强、表情识别以及活体检测等。点击下方按钮开始体验。
        </p>
        <Button type="primary" size="large" className="app-start-button" onClick={handleStart}>
          开始体验
        </Button>
      </div>
    </div>
  );
};

export default App;
