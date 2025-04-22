import { Modal } from "antd";
import ArticleForm from "./ArticleForm";

export default function ArticleModal(props) {
  return (
    <Modal
      title="Basic Modal"
      open={props.isOpen}
      onOk={props.handleOk}
      onCancel={props.handleCancel}
    >
      <ArticleForm></ArticleForm>
    </Modal>
  );
}
