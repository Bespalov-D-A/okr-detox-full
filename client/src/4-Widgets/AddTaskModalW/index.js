import Captcha from "../../5-Features/Captcha";
import AddTaskForm from "../../5-Features/forms/AddTaskForm";
import AddTaskListForm from "../../5-Features/forms/AddTaskListForm";
import AddTaskTypeForm from "../../5-Features/forms/AddTaskTypeForm";
import CreateTaskListForm from "../../5-Features/forms/CreateTaskListForm";
import CreateTaskTaskForm from "../../5-Features/forms/CreateTaskTaskForm";
import CreateTaskTypeForm from "../../5-Features/forms/CreateTaskTypeForm";
import DateTimeForm from "../../5-Features/forms/DateTimeForm";
import AddTaskModal from "../../5-Features/modals/AddTaskModal";
import AddTaskModalContent from "../../5-Features/modals/Content/AddTaskModalContent";

const AddTaskModalW = () => {
  const compFunc = () => {
    return (
      <AddTaskModalContent
        captchaFunc={(innerRef) => <Captcha innerRef={innerRef} />}
        addTaskForm={(captchaFunc, children) => (
          <AddTaskForm
            AddTaskTypeForm={(
              id,
              formik,
              createTaskTypeFormIsOpen,
              setCreateTaskTypeFormIsOpen
            ) => (
              <AddTaskTypeForm
                id={id}
                formik={formik}
                taskTypeFormIsOpen={createTaskTypeFormIsOpen}
                setTaskTypeFormIsOpen={setCreateTaskTypeFormIsOpen}
              />
            )}
            AddTaskListForm={(
              id,
              formik,
              isOpenCreateTaskForm,
              setIsOpenCreateTaskForm
            ) => (
              <AddTaskListForm
                id={id}
                formik={formik}
                taskListFormIsOpen={isOpenCreateTaskForm}
                setTaskListFormIsOpen={setIsOpenCreateTaskForm}
              />
            )}
            CreateTaskListForm={(closeCreateForm) => (
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
            CreateTaskTypeForm={(closeCreateForm) => (
              <CreateTaskTypeForm closeCreateForm={closeCreateForm} />
            )}
            CreateTaskTaskForm={(formik) => (
              <CreateTaskTaskForm
                formik={formik}
                DateTime={(title, time, setTime, date, setDate) => (
                  <DateTimeForm
                    title={title}
                    time={time}
                    setTime={setTime}
                    date={date}
                    setDate={setDate}
                  />
                )}
              />
            )}
            children={children}
            captchaFunc={captchaFunc}
          />
        )}
      >
        <div></div>
      </AddTaskModalContent>
    );
  };
  return <AddTaskModal component={compFunc} />;
};

export default AddTaskModalW;
