import CreateTaskListForm from "../../5-Features/forms/CreateTaskListForm";
import DateTimeForm from "../../5-Features/forms/DateTimeForm";
import AddTaskListItemModal from "../../5-Features/modals/AddTaskListItemModal";
import AddTaskListItemModalContent from "../../5-Features/modals/Content/AddTaskListItemModalContent";

const AddTaskListItemModalW = () => {
  return (
    <AddTaskListItemModal
      component={() => (
        <AddTaskListItemModalContent
          CreateListForm={(closeCreateForm) => (
            <CreateTaskListForm
              DateTime={(title, time, setTime, date, setDate) => (
                <DateTimeForm
                  title={title}
                  time={time}
                  setTime={setTime}
                  date={date}
                  setDate={setDate}
                />
              )}
              closeCreateForm={closeCreateForm}
            />
          )}
        ></AddTaskListItemModalContent>
      )}
    />
  );
};

export default AddTaskListItemModalW;
