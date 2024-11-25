import { AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

// 菜单配置
const items: MenuItem[] = [
  {
    key: 'sub1',
    label: '人脸功能',
    icon: <AppstoreOutlined />,
    children: [
      {
        label: '人脸检测',
        key: 'g1',
        type: 'group',
        children: [
          { key: '/directory/FaceDetection-intro', label: '文字介绍' },
          { key: '/directory/FaceDetection', label: '使用' },
        ],
      },
      {
        label: '人脸图像修复',
        key: 'g2',
        type: 'group',
        children: [
          { key: '/directory/FaceRepair-intro', label: '文字介绍' },
          { key: '/directory/FaceRepair', label: '使用' },
        ],
      },
      {
        label: '人体美肤',
        key: 'g3',
        type: 'group',
        children: [
          { key: '/directory/SkinEnhance-intro', label: '文字介绍' },
          { key: '/directory/SkinEnhance', label: '使用' },
        ],
      },
      {
        label: '人脸表情识别',
        key: 'g4',
        type: 'group',
        children: [
          { key: '/directory/FaceExpression-intro', label: '文字介绍' },
          { key: '/directory/FaceExpression', label: '使用' },
        ],
      },
      {
        label: '人脸活体检测',
        key: 'g5',
        type: 'group',
        children: [
          { key: '/directory/FaceLiveness-intro', label: '文字介绍' },
          { key: '/directory/FaceLiveness', label: '使用' },
        ],
      },
    ],
  },
  {
    key: 'sub2',
    label: '反馈建议',
    icon: <SettingOutlined />,
    children: [{ key: '/directory/feedback', label: '反馈' }],
  },
];

const Directory: React.FC = () => {
  const navigate = useNavigate();

  const onClick: MenuProps['onClick'] = (e) => {
    navigate(e.key);
  };

  
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* 左侧菜单 */}
      <Menu
        onClick={onClick}
        defaultOpenKeys={['sub1']}
        mode="inline"
        items={items}
        style={{ width: 256 }}
      />
      {/* 右侧内容 */}
      <div style={{ flex: 1, padding: 24, backgroundColor: '#fff' }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Directory;
