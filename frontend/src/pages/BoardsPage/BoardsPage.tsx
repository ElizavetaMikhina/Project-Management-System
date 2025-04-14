import { getBoards } from "@/api/tasks";
import { BoardCard } from "@/components";
import { TBoard } from "@/types";
import { Row, Col } from "antd";
import { useEffect, useState } from "react";

const BoardsPage = () => {
  const [boards, setBoards] = useState<TBoard[]>([]);

  const fetchBoards = async () => {
    try {
      const response = await getBoards();
      const boardsData = response.data;
      setBoards(boardsData);
    } catch (error) {
      console.error("Ошибка при загрузке проектов:", error);
    }
  };

  useEffect(() => {
    fetchBoards();
  }, []);

  return (
    <Row gutter={[16, 16]}>
      {Array.isArray(boards) &&
        boards.map((board) => (
          <Col span={12} key={board.id}>
            <BoardCard board={board} />
          </Col>
        ))}
    </Row>
  );
};

export { BoardsPage };
