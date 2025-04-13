import { TBoardCardProps } from "@/types";
import { Card } from "antd";
import { Link } from "react-router-dom";

const BoardCard = ({ board }: TBoardCardProps) => {
  return (
    <Card title={board.name}>
      <p>Описание: {board.description}</p>
      <p>Количество задач: {board.taskCount}</p>
      <Link to={`/board/${board.id}`}>Перейти к доске</Link>
    </Card>
  );
};

export { BoardCard };
