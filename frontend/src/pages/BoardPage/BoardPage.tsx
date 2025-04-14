import { getBoardTasks } from "@/api/tasks";
import { TTask } from "@/types";
import { Card, Col, Row, Spin, Typography } from "antd";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const { Title, Paragraph } = Typography;

const BoardPage = () => {
  const { id } = useParams<{ id: string }>();
  const [tasks, setTasks] = useState<TTask[]>([]);
  const [board, setBoard] = useState<{ boardName: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBoardData = async () => {
      try {
        setLoading(true);
        const boardTasks = await getBoardTasks(id!);
        setTasks(boardTasks);

        if (boardTasks.length > 0) {
          setBoard({ boardName: boardTasks[0].boardName });
        }
      } catch (err) {
        console.error("Ошибка при загрузке доски:", err);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchBoardData();
  }, [id]);

  if (loading) return <Spin tip="Загрузка доски..." size="large" />;

  if (!board) return <p>Доска не найдена</p>;

  const backlogTasks = tasks.filter((task) => task.status === "Backlog");
  const inProgressTasks = tasks.filter((task) => task.status === "InProgress");
  const doneTasks = tasks.filter((task) => task.status === "Done");

  return (
    <div>
      <Title level={2}>{board.boardName}</Title>
      <Paragraph>Описание доски</Paragraph>
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <Card title="Backlog">
            {backlogTasks.map((task) => (
              <Card key={task.id} title={task.title}>
                <p>{task.description}</p>
                <p>
                  <b>Исполнитель:</b> {task.assignee.fullName}
                </p>
              </Card>
            ))}
          </Card>
        </Col>

        <Col span={8}>
          <Card title="In Progress">
            {inProgressTasks.map((task) => (
              <Card key={task.id} title={task.title}>
                <p>{task.description}</p>
                <p>
                  <b>Исполнитель:</b> {task.assignee.fullName}
                </p>
              </Card>
            ))}
          </Card>
        </Col>

        <Col span={8}>
          <Card title="Done">
            {doneTasks.map((task) => (
              <Card key={task.id} title={task.title}>
                <p>{task.description}</p>
                <p>
                  <b>Исполнитель:</b> {task.assignee.fullName}
                </p>
              </Card>
            ))}
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export { BoardPage };
