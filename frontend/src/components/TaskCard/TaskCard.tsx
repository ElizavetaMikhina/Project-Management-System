import { TTask } from "@/types";
import { Card } from "antd";
import { Link } from "react-router-dom";

type TTaskCardProps = {
  task: TTask;
  onClick: (task: TTask) => void;
};

const TaskCard = ({ task, onClick }: TTaskCardProps) => (
  <Card title={task.title} onClick={() => onClick(task)}>
    <p>Описание: {task.description}</p>
    <p>Статус: {task.status}</p>
    <Link to={`/board/${task.boardId}`}>Перейти к доске</Link>
  </Card>
);

export { TaskCard };
