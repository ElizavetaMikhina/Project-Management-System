import { getTasks } from "@/api/tasks";
import { TaskCard, TaskModal } from "@/components";
import { TTask } from "@/types";
import { Row, Col, Button } from "antd";
import { useState, useEffect } from "react";

// const { Option } = Select;

const Issues = () => {
  const [tasks, setTasks] = useState<TTask[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Row gutter={[16, 16]} style={{ marginBottom: "20px" }}>
        <Col span={6}>
          <Button type="primary" onClick={openModal}>
            Создать задачу
          </Button>
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        {tasks.map((task) => (
          <Col span={8} key={task.id}>
            <TaskCard task={task} />
          </Col>
        ))}
      </Row>

      <TaskModal open={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export { Issues };
