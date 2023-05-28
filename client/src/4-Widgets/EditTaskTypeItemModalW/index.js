import SelectTaskTypeF from "../../5-Features/filters/SelectTaskTypeF";
import EditTaskTypeItemModalContent from "../../5-Features/modals/Content/EditTaskTypeItemModalContent";
import EditTaskTypeItemModal from "../../5-Features/modals/EditTaskTypeItemModal";

const EditTaskTypeItemModalW = () => {
  return (
    <EditTaskTypeItemModal
      component={() => (
        <EditTaskTypeItemModalContent
          SelectTypeTaskF={(selectTaskType, setSelectedTaskType) => (
            <SelectTaskTypeF
              selectedTaskType={selectTaskType}
              setSelectedTaskType={setSelectedTaskType}
            />
          )}
        />
      )}
    />
  );
};

export default EditTaskTypeItemModalW;
