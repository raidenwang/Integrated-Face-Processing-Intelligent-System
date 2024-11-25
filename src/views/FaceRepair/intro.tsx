const FaceRepairIntro = () => {
    return (
      <div style={{ padding: '20px', fontSize: '18px', lineHeight: '1.6', color: '#333' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>人像修复功能介绍</h1>
  
        <section style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>功能简介</h2>
          <p>
            人像修复是一种先进的图像处理技术，能够对图像中的人像区域进行智能修复和增强，同时对非人像区域进行高质量的超分辨率处理，最终生成完整修复后的图像。
          </p>
        </section>
  
        <section style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>使用方式</h2>
          <ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
            <li>输入：上传一张包含人像的图像。</li>
            <li>处理：算法会检测图像中的每个人像区域并进行修复和增强处理。</li>
            <li>输出：非人像区域通过 RealESRNet 进行两倍超分辨率处理，返回最终完整修复后的图像。</li>
          </ul>
        </section>
  
        <section style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>目标场景</h2>
          <p>人像修复技术可广泛应用于以下场景：</p>
          <ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
            <li>
              <b>老旧照片修复：</b>修复低质量或受损的老照片，使人物更清晰。
            </li>
            <li>
              <b>人像增强：</b>提高人像区域的细节和质量，用于个人形象提升和艺术照片处理。
            </li>
            <li>
              <b>图像优化：</b>在包含人像和风景的图像中全面提升质量，为摄影作品带来更好的视觉效果。
            </li>
          </ul>
        </section>
  
        <section style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>模型局限性</h2>
          <ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
            <li>
              <b>真实图片的降质复杂性：</b>由于本算法是基于模拟降质数据进行训练，在处理真实降质情况时，可能会出现某些无法很好修复的案例。
            </li>
            <li>
              <b>可能的色偏现象：</b>算法在某些情况下可能会引入轻微的色偏或其他细微瑕疵。
            </li>
          </ul>
        </section>
  
        <section>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>适用范围</h2>
          <p>
            本模型适用范围较广，只要提供包含人像的图像，在设备性能允许的情况下，均可生成高质量的修复效果图，满足个人及商业需求。
          </p>
        </section>
      </div>
    );
  };
  
  export default FaceRepairIntro;
  