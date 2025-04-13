import { TTask } from "@/types";
import { Card } from "antd";
import { Link } from "react-router-dom";

type TTaskCardProps = {
  task: TTask;
};

const TaskCard = ({ task }: TTaskCardProps) => (
  <Card title={task.title}>
    <p>Описание: {task.description}</p>
    <p>Статус: {task.status}</p>
    <Link to={`/board/${task.boardId}`}>Перейти к доске</Link>
  </Card>
);

export { TaskCard };
