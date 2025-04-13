import { Layout } from "antd";
import { Outlet } from "react-router-dom";

const { Content: AntdContent } = Layout;

const Content = () => {
  return (
    <AntdContent style={{ padding: "20px" }}>
      <Outlet />
    </AntdContent>
  );
};

export { Content };
