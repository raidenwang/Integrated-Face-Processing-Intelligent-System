

const FaceDetectionIntro = () => {
  return (
    <div style={{ padding: '20px', fontSize: '18px', lineHeight: '1.6', color: '#333' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>人脸检测功能介绍</h1>
      
      <section style={{ marginBottom: '20px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>功能简介</h2>
        <p>人脸检测是一种计算机视觉技术，用于检测输入图片中是否存在人脸，并返回人脸的具体位置。此功能可同时检测多张人脸。</p>
      </section>
      
      <section style={{ marginBottom: '20px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>使用方式</h2>
        <ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
          <li>推理：上传输入图片，系统将自动检测图片中是否存在人脸。</li>
          <li>输出：若存在人脸，返回检测到的人脸位置及坐标信息。</li>
          <li>支持：同时检测多张人脸，满足多样化场景需求。</li>
        </ul>
      </section>

      <section>
        <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>目标场景</h2>
        <p>人脸检测是人脸相关技术的基础能力，广泛应用于以下场景：</p>
        <ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
          <li><b>人像美颜：</b>基于人脸定位进行智能美化处理。</li>
          <li><b>互动娱乐：</b>支持多种人脸交互体验，如面部滤镜。</li>
          <li><b>人脸比对：</b>为身份认证提供精准的基础数据。</li>
        </ul>
      </section>
    </div>
  );
};

export default FaceDetectionIntro;
