import SelectTaskListF from "../../5-Features/filters/SelectTaskListF";
import EditTaskListItemModalContent from "../../5-Features/modals/Content/EditTaskListItemModalContent";
import EditTaskListItemModal from "../../5-Features/modals/EditTaskListItemModal";

const EditTaskListItemModalW = () => {
  return (
    <EditTaskListItemModal
      component={() => (
        <EditTaskListItemModalContent
          SelectTaskListF={(selectTaskList, setSelectedTaskList) => (
            <SelectTaskListF
              selectedTaskList={selectTaskList}
              setSelectedTaskList={setSelectedTaskList}
            />
          )}
        />
      )}
    />
  );
};

export default EditTaskListItemModalW;
