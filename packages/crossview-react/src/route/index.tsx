import { Spin, Menu } from 'antd';
import {
  createBrowserRouter,
  Link,
  Outlet,
  useNavigation,
} from "react-router-dom";
import 'antd/dist/reset.css';

import styles from './kwr.module.css';

import Wc from '../pages/wc';

import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';

const items: MenuProps['items'] = [
  {
    label: <Link to="wc">web components</Link>,
    key: 'wc',
    icon: <MailOutlined />,
  },
  {
    label: <Link to="react18">react18</Link>,
    key: 'react18',
    icon: <AppstoreOutlined />,
  },
  {
    label: <Link to="vue3">vue3</Link>,
    key: 'vue3',
    icon: <SettingOutlined />,
  },
];
function Root() {
  const navigation = useNavigation();
  return <div className={styles.kwrWrapper}>
    {navigation.state === "loading" && <Spin />}
    <Menu mode="horizontal" items={items} selectedKeys={['wc']}/>
    <div className={styles.kwrApp}><Outlet /></div>
  </div>
}

const router =
  createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/wc",
          element: <Wc />,
        },
        {
          path: "/react18",
          element: <div>
            <crossview-ui-abstract abstract="react18"></crossview-ui-abstract>
          </div>,
        },
        {
          path: "/vue3",
          element: <div>
            <div>我是wc组件</div>
            <crossview-ui-image src="https://inews.gtimg.com/newsapp_bt/0/13843563168/641"></crossview-ui-image>
          </div>,
        },
      ],
    },
  ]);
export default router;

