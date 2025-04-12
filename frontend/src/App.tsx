import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import { Header } from '@/components';

const { Content } = Layout;

function App() {
  return (
    <Layout>
      <Header />
      <Content>
        <Outlet />
      </Content>
    </Layout>
  );
}

export default App;

