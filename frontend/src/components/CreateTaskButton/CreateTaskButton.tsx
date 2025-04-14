import { Button } from "antd";
import { FC, useState } from "react";
import { TBoard, TUser } from "@/types";
import { TaskFormModal } from "@/components";

type TCreateTaskButton = {
  users: TUser[];
  boards: TBoard[];
};

const CreateTaskButton: FC<TCreateTaskButton> = ({ users, boards }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button type="primary" onClick={() => setIsOpen(true)}>
        Создать задачу
      </Button>

      <TaskFormModal
        open={isOpen}
        mode="create"
        users={users}
        boards={boards}
        onClose={() => setIsOpen(false)}
        onSubmit={() => {
          setIsOpen(false);
        }}
      />
    </>
  );
};

export { CreateTaskButton };
