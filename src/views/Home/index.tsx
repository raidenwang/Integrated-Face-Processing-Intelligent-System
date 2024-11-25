const Description =()=>{
    return(
        <div style={{ padding: '16px', fontSize: '18px', color: '#333', lineHeight: '1.6' }}>
      <p style={{ fontWeight: 'bold', fontSize: '20px' }}>欢迎使用智能人脸处理平台</p>
      <p>我们提供以下功能模块：</p>
      <ul style={{ paddingLeft: '20px' }}>
        <li><b>人脸检测：</b>自动检测图像中的人脸位置。</li>
        <li><b>人脸图像修复：</b>修复受损或低质量的人脸图像。</li>
        <li><b>人体美肤：</b>提供自然美颜处理。</li>
        <li><b>人脸表情识别：</b>分析表情，用于情感分析。</li>
        <li><b>人脸活体检测：</b>确保验证过程的安全性。</li>
      </ul>
      <p>请通过左侧菜单选择功能模块开始使用。</p>
    </div>
    )
}

export default Description;