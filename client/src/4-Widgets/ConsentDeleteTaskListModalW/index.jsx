import ConsentTaskListDeleteModal from "../../5-Features/modals/ConsentTaskListDeleteModal";
import ConsentDeleteTaskListModalContent from "../../5-Features/modals/Content/ConsentDeleteTaskListModalContent";

const ConsentDeleteTaskListModalW = () => {
  return (
    <ConsentTaskListDeleteModal
      component={() => <ConsentDeleteTaskListModalContent />}
    />
  );
};

export default ConsentDeleteTaskListModalW;
