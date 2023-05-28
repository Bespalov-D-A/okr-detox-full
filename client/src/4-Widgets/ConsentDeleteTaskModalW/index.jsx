import ConsentTaskDeleteModal from "../../5-Features/modals/ConsentTaskDeleteModal";
import ConsentDeleteTaskModalContent from "../../5-Features/modals/Content/ConsentDeleteTaskModalContent";

const ConsentDeleteTaskModalW = () => {
  return (
    <ConsentTaskDeleteModal
      component={() => <ConsentDeleteTaskModalContent />}
    />
  );
};

export default ConsentDeleteTaskModalW;
