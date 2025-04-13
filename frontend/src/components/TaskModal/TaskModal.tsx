import { Select, Form, Modal, Input } from "antd";

type TTaskModalProps = {
  open: boolean;
  onClose: () => void;
};

const { Option } = Select;

const TaskModal = ({ open, onClose }: TTaskModalProps) => {
  const [form] = Form.useForm();

  const handleSave = () => {
    const values = form.getFieldsValue();
    console.log("Задача сохранена:", values);
    onClose();
  };

  return (
    <Modal
      title="Создание задачи"
      open={open}
      onCancel={onClose}
      onOk={handleSave}
    >
      <Form form={form} layout="vertical">
        <Form.Item
          name="title"
          label="Название задачи"
          rules={[{ required: true }]}
        >
          <Input placeholder="Введите название задачи" />
        </Form.Item>
        <Form.Item name="description" label="Описание задачи">
          <Input.TextArea placeholder="Введите описание задачи" />
        </Form.Item>
        <Form.Item name="status" label="Статус" rules={[{ required: true }]}>
          <Select placeholder="Выберите статус">
            <Option value="pending">Ожидает</Option>
            <Option value="in-progress">В процессе</Option>
            <Option value="done">Завершено</Option>
          </Select>
        </Form.Item>
        <Form.Item name="boardId" label="Доска" rules={[{ required: true }]}>
          <Select placeholder="Выберите доску">
            <Option value="board1">Доска 1</Option>
            <Option value="board2">Доска 2</Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export { TaskModal };
