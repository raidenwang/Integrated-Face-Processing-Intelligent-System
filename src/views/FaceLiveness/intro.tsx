import { Typography, Card } from 'antd';

const { Title, Paragraph } = Typography;

const FaceLivenessIntro = () => {
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
          人脸活体检测功能介绍
        </Title>
        <section style={{ marginBottom: '20px' }}>
          <Title level={4}>功能简介</Title>
          <Paragraph>
            本模型可以用来判断图片中的人为真人或者是假体，分数越高则假体的可能性越高。
          </Paragraph>
        </section>

        <section style={{ marginBottom: '20px' }}>
          <Title level={4}>使用方式</Title>
          <Paragraph>
            用户上传一张包含人脸的图片，模型会自动检测并判断该人脸是否为假体，并返回假体的可能性分数。
          </Paragraph>
        </section>

        <section style={{ marginBottom: '20px' }}>
          <Title level={4}>适用场景</Title>
          <Paragraph>
            人脸活体检测广泛应用于以下场景：
          </Paragraph>
          <ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
            <li>
              <strong>认证设备端：</strong> 适用于手机、门禁机、考勤机、PC 等智能终端，提供基于裸拍人脸的认证服务。
            </li>
            <li>
              <strong>裸拍活体：</strong> 用于真人未经重度 PS、风格化、人工合成等后处理的正面人脸照片验证。
            </li>
            <li>
              <strong>防伪检测：</strong> 识别非真人人脸，如纸张、电子屏或动漫人脸等。
            </li>
          </ul>
        </section>

        <section style={{ marginBottom: '20px' }}>
          <Title level={4}>模型局限性及可能的偏差</Title>
          <Paragraph>
            本模型在以下情况下可能存在性能限制：
          </Paragraph>
          <ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
            <li>
              <strong>3D 头模拦截率一般：</strong> 在检测 3D 头模时，可能出现误判。
            </li>
            <li>
              <strong>光线条件：</strong> 强光环境可能影响通过率和拦截率。
            </li>
          </ul>
        </section>
      </Card>
    </div>
  );
};

export default FaceLivenessIntro;
