import { Layout, Menu, message, Spin } from "antd";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { CreateTaskButton } from "@/components";
import { getBoards, getUsers } from "@/api/tasks";
import { useState, useEffect } from "react";
import { TBoard, TUser } from "@/types";

const { Header: AntdHeader } = Layout;

const Header = () => {
  const [users, setUsers] = useState<TUser[]>([]);
  const [boards, setBoards] = useState<TBoard[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersData = await getUsers();
        const boardsData = await getBoards();
        setUsers(usersData);
        setBoards(boardsData.data);
      } catch {
        message.error("Не удалось загрузить пользователей или проекты");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <AntdHeader className={styles.header}>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        className={styles.menu}
        items={[
          {
            key: "1",
            label: <Link to="/issues">Все задачи</Link>,
          },
          {
            key: "2",
            label: <Link to="/boards">Проекты</Link>,
          },
        ]}
      />
      {loading ? (
        <Spin className={styles.button} />
      ) : (
        <CreateTaskButton users={users} boards={boards} />
      )}
    </AntdHeader>
  );
};

export { Header };
