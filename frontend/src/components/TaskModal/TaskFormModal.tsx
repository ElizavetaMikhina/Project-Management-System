import type { TTask, TBoard, TUser } from "@/types";
import { Input, Form, Modal, Select, Button } from "antd";
import { FC, useEffect } from "react";

const { TextArea } = Input;

type TFormValues = {
  title: string;
  description?: string;
  boardId?: number;
  priority: "Low" | "Medium" | "High";
  status: "Todo" | "InProgress" | "Done";
  assigneeId: number;
};

export type TTaskFormModalProps = {
  open: boolean;
  mode: "create" | "edit";
  initialValues?: Partial<TTask>;
  users: TUser[];
  boards: TBoard[];
  isBoardContext?: boolean;
  boardIdFromContext?: number;
  onClose: () => void;
  onSubmit: (values: TFormValues) => void;
};

const TaskFormModal: FC<TTaskFormModalProps> = ({
  open,
  mode,
  initialValues,
  users,
  boards,
  isBoardContext,
  boardIdFromContext,
  onClose,
  onSubmit,
}) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (open) {
      if (initialValues) {
        form.setFieldsValue(initialValues);
      } else {
        form.resetFields();
      }
    }
  }, [open, initialValues, form]);

  const handleFinish = (values: TFormValues) => {
    onSubmit({
      ...values,
      boardId: isBoardContext ? boardIdFromContext : values.boardId,
    });
  };

  return (
    <Modal
      open={open}
      title={mode === "create" ? "Создание задачи" : "Редактирование задачи"}
      onCancel={onClose}
      footer={null}
      destroyOnClose
      forceRender
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={handleFinish}
        initialValues={initialValues}
      >
        <Form.Item
          label="Название"
          name="title"
          rules={[{ required: true, message: "Введите название задачи" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Описание" name="description">
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item
          label="Проект"
          name="boardId"
          rules={[{ required: true, message: "Выберите проект" }]}
        >
          <Select disabled={isBoardContext}>
            {boards.map((board) => (
              <Select.Option key={board.id} value={board.id}>
                {board.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="Приоритет"
          name="priority"
          rules={[{ required: true, message: "Выберите приоритет" }]}
        >
          <Select>
            <Select.Option value="Low">Low</Select.Option>
            <Select.Option value="Medium">Medium</Select.Option>
            <Select.Option value="High">High</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Статус"
          name="status"
          rules={[{ required: true, message: "Выберите статус" }]}
        >
          <Select>
            <Select.Option value="Todo">Todo</Select.Option>
            <Select.Option value="InProgress">In Progress</Select.Option>
            <Select.Option value="Done">Done</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Исполнитель"
          name="assigneeId"
          rules={[{ required: true, message: "Выберите исполнителя" }]}
        >
          <Select>
            {users.map((user) => (
              <Select.Option key={user.id} value={user.id}>
                {user.fullName}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        {!isBoardContext && initialValues?.boardId && (
          <Button type="link" onClick={() => console.log("navigate to board")}>
            Перейти на доску
          </Button>
        )}

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            {mode === "create" ? "Создать" : "Обновить"}
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export { TaskFormModal };
