import { getBoards, getTasks, getUsers, updateTask } from "@/api/tasks";
import { CreateTaskButton, TaskCard, TaskFormModal } from "@/components";
import type { TBoard, TFormValues, TTask, TUser } from "@/types";
import { Row, Col, message } from "antd";
import { useState, useEffect } from "react";

const IssuesPage = () => {
  const [users, setUsers] = useState<TUser[]>([]);
  const [boards, setBoards] = useState<TBoard[]>([]);
  const [tasks, setTasks] = useState<TTask[]>([]);
  const [selectedTask, setSelectedTask] = useState<TTask | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

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

  const handleTaskClick = (task: TTask) => {
    setSelectedTask(task);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setSelectedTask(null);
  };

  const handleEditSubmit = async (values: TFormValues) => {
    if (!selectedTask) return;

    try {
      await updateTask(String(selectedTask.id), { ...selectedTask, ...values });
      message.success("Задача обновлена");
      handleCloseModal();
      fetchTasks();
    } catch {
      message.error("Не удалось обновить задачу");
    }
  };

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
            <TaskCard task={task} onClick={() => handleTaskClick(task)} />
          </Col>
        ))}
      </Row>

      <TaskFormModal
        open={isModalVisible}
        mode="edit"
        initialValues={selectedTask ?? undefined}
        users={users}
        boards={boards}
        onClose={handleCloseModal}
        onSubmit={handleEditSubmit}
      />
    </div>
  );
};

export { IssuesPage };
