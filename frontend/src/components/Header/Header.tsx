import { Button, Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const { Header: AntdHeader } = Layout;

const Header = () => (
  <AntdHeader className={styles.header}>
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['1']}
      className={styles.menu}
    >
      <Menu.Item key="1">
        <Link to="/issues">Все задачи</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/boards">Проекты</Link>
      </Menu.Item>
    </Menu>
    <Button
      type="primary"
      className={styles.button}
    >
      Создать задачу
    </Button>
  </AntdHeader>
);

export { Header };
