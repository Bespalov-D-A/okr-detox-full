import CreateTaskTypeForm from "../../5-Features/forms/CreateTaskTypeForm";
import AddTaskTypeItemModal from "../../5-Features/modals/AddTaskTypeItemModal";
import AddTaskTypeItemModalContent from "../../5-Features/modals/Content/AddTaskTypeItemModalContent";

const AddTaskTypeItemModalW = () => {
  return (
    <AddTaskTypeItemModal
      component={() => (
        <AddTaskTypeItemModalContent
          CreateTaskTypeForm={(closeCreateForm) => (
            <CreateTaskTypeForm closeCreateForm={closeCreateForm} />
          )}
        />
      )}
    />
  );
};

export default AddTaskTypeItemModalW;
