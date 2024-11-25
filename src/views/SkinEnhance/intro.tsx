
import { Typography, Card } from 'antd';

const { Title, Paragraph } = Typography;

const SkinEnhanceIntro = () => {
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
          maxWidth: '800px',
          padding: '20px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          borderRadius: '10px',
        }}
      >
        <Title level={2} style={{ textAlign: 'center', marginBottom: '20px' }}>
          人体美肤功能介绍
        </Title>
        <section style={{ marginBottom: '20px' }}>
          <Title level={4}>功能简介</Title>
          <Paragraph>
            人体美肤模型可用于对图像中的人体皮肤进行处理，实现匀肤（处理痘印、肤色不均等）、去瑕疵（脂肪粒、斑点、痣等）以及美白等功能。模型仅对裸露的皮肤进行修饰美化，不影响其他区域。
          </Paragraph>
        </section>

        <section style={{ marginBottom: '20px' }}>
          <Title level={4}>使用方式</Title>
          <Paragraph>
            直接推理：用户上传一张包含人像的图像，模型将自动对裸露皮肤区域进行修复和美化处理，并返回增强后的结果。
          </Paragraph>
        </section>

        <section style={{ marginBottom: '20px' }}>
          <Title level={4}>适用范围</Title>
          <Paragraph>
            模型适用于包含人脸的人像照片，要求图像中人脸分辨率大于 100x100，且图像整体分辨率小于 5000x5000。支持各种拍摄场景下的人像修复任务。
          </Paragraph>
        </section>

        <section style={{ marginBottom: '20px' }}>
          <Title level={4}>目标场景</Title>
          <Paragraph>
            该模型适用于需要皮肤美化的场景，例如：
          </Paragraph>
          <ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
            <li>
              <strong>摄影修图：</strong>帮助专业摄影师快速处理大量人像照片。
            </li>
            <li>
              <strong>图像直播：</strong>在直播环境下为用户提供实时的皮肤美化效果。
            </li>
            <li>
              <strong>美容领域：</strong>辅助美容软件开发，为用户展示更佳的形象。
            </li>
          </ul>
        </section>

        <section>
          <Title level={4}>模型局限性及可能的偏差</Title>
          <Paragraph>
            真实图片的降质形式复杂多样，本模型基于模拟降质数据进行训练，可能会存在处理不佳的情况。此外，本模型可能出现轻微的色偏或其他细节瑕疵。
          </Paragraph>
        </section>
      </Card>
    </div>
  );
};

export default SkinEnhanceIntro;
