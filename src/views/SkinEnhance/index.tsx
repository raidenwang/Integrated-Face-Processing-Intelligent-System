import React, { useState } from 'react';
import axios from 'axios';
import { Button, Image, Input, Card, Typography, Space } from 'antd';

const { Title, Paragraph } = Typography;

const SkinEnhance = () => {
  const [image, setImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [resultImageUrl, setResultImageUrl] = useState<string | null>(null);
  const [response, setResponse] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setImage(file);
      setPreviewUrl(URL.createObjectURL(file));
      setResponse(null); // Reset response
      setResultImageUrl(null); // 清除之前的检测结果图像
    }
  };

  const handleSubmit = async () => {
    if (!image) {
      alert('请先上传图片！');
      return;
    }

    const formData = new FormData();
    formData.append('file', image);

    try {
      const response = await axios.post('http://127.0.0.1:6006/skin-enhance', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Accept': '*/*',
        },
        responseType: 'blob', // 返回二进制数据
      });

      // 将返回的图片 Blob 转换为可展示的 URL
      const imageBlob = response.data;
      const imageUrl = URL.createObjectURL(imageBlob);
      setResultImageUrl(imageUrl);

      setResponse('检测完成');
    } catch (error) {
      console.error('上传失败:', error);
      setResponse('检测失败，请稍后重试');
    }
  };

  return (
    <div
      style={{
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f7f9fc',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Card
        style={{
          width: '100%',
          maxWidth: '600px',
          padding: '20px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          borderRadius: '10px',
        }}
      >
        <Title level={3} style={{ textAlign: 'center', marginBottom: '20px' }}>
          人体美肤
        </Title>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <Input type="file" accept="image/*" onChange={handleImageChange} />
          {previewUrl && (
            <div>
              <Paragraph strong>上传的图片预览：</Paragraph>
              <Image
                src={previewUrl}
                alt="预览图片"
                style={{ maxWidth: '100%', height: 'auto', border: '1px solid #ccc', borderRadius: '8px' }}
              />
            </div>
          )}
          <Button
            type="primary"
            onClick={handleSubmit}
            block
            size="large"
            style={{ backgroundColor: '#4CAF50', borderColor: '#4CAF50', fontWeight: 'bold' }}
          >
            提交图片
          </Button>
          {response && (
            <Paragraph
              style={{
                marginTop: '10px',
                color: response.includes('失败') ? '#FF4D4F' : '#52C41A',
                textAlign: 'center',
                fontWeight: 'bold',
              }}
            >
              {response}
            </Paragraph>
          )}
          {resultImageUrl && (
            <div>
              <Paragraph strong>美肤结果：</Paragraph>
              <Image
                src={resultImageUrl}
                alt="美肤结果图像"
                style={{ maxWidth: '100%', height: 'auto', border: '1px solid #ccc', borderRadius: '8px' }}
              />
            </div>
          )}
        </Space>
      </Card>
    </div>
  );
};

export default SkinEnhance;
