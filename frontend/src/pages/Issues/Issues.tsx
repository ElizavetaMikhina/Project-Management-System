import { getBoards, getTasks, getUsers } from "@/api/tasks";
import { CreateTaskButton, TaskCard } from "@/components";
import { TBoard, TTask, TUser } from "@/types";
import { Row, Col, message } from "antd";
import { useState, useEffect } from "react";

const Issues = () => {
  const [users, setUsers] = useState<TUser[]>([]);
  const [boards, setBoards] = useState<TBoard[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersData = await getUsers();
        const boardsData = await getBoards();
        setUsers(usersData);
        setBoards(boardsData.data);
      } catch {
        message.error("Не удалось загрузить пользователей или проекты");
      }
    };

    fetchData();
  }, []);

  const [tasks, setTasks] = useState<TTask[]>([]);

  const fetchTasks = async () => {
    try {
      const data = await getTasks();
      setTasks(data);
    } catch (error) {
      console.error("Ошибка при загрузке задач:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <Row gutter={[16, 16]} style={{ marginBottom: "20px" }}>
        <Col span={6}>
          <CreateTaskButton users={users} boards={boards} />
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        {tasks.map((task) => (
          <Col span={8} key={task.id}>
            <TaskCard task={task} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export { Issues };
