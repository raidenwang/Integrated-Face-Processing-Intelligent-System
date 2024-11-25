import { Typography, Card } from 'antd';

const { Title, Paragraph } = Typography;

const FaceExpressionIntro = () => {
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
          人脸表情识别功能介绍
        </Title>

        <section style={{ marginBottom: '20px' }}>
          <Title level={4}>功能简介</Title>
          <Paragraph>
            本模型可以通过输入的图像检测人脸并输出对应的表情类别。支持的表情类别包括：生气、厌恶、害怕、高兴、悲伤、惊讶以及中立。
          </Paragraph>
        </section>

        <section style={{ marginBottom: '20px' }}>
          <Title level={4}>使用方式</Title>
          <Paragraph>
            直接推理：上传一张带有人脸的图片，模型将自动检测人脸并输出识别到的表情类别。
          </Paragraph>
        </section>

        <section style={{ marginBottom: '20px' }}>
          <Title level={4}>目标场景</Title>
          <Paragraph>
            该模型可应用于以下场景：
          </Paragraph>
          <ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
            <li>
              <strong>人脸分析：</strong>在人机交互中分析用户的表情以提升体验。
            </li>
            <li>
              <strong>情绪监测：</strong>应用于教育、医疗等领域，分析用户的情绪变化。
            </li>
            <li>
              <strong>视频娱乐：</strong>为直播、短视频平台提供表情分析服务。
            </li>
          </ul>
        </section>

        <section>
          <Title level={4}>模型局限性及可能的偏差</Title>
          <Paragraph>
            本模型当前仅支持单人脸表情识别，对于包含多张人脸的图像，模型可能无法正常工作。此外，由于训练数据的限制，某些复杂或罕见的表情可能无法准确识别。
          </Paragraph>
        </section>
      </Card>
    </div>
  );
};

export default FaceExpressionIntro;
