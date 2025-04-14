export type TBoard = {
  id: number;
  name: string;
  description: string;
  taskCount: number;
};

export type TBoardCardProps = {
  board: TBoard;
};

export type TTask = {
  id: number;
  title: string;
  description: string;
  priority: "Low" | "Medium" | "High";
  status: "Backlog" | "InProgress" | "Done";
  assignee: {
    id: number;
    fullName: string;
    email: string;
    avatarUrl: string;
  };
  boardId: number;
  boardName: string;
};

export type TUser = {
  id: number;
  fullName: string;
};
