import DeleteTaskTypeForm from "../../5-Features/forms/DeleteTaskTypeForm";
import DeleteTaskTypeModalContent from "../../5-Features/modals/Content/DeleteTaskTypeModalContent";
import DeleteTaskTypeModal from "../../5-Features/modals/DeleteTaskTypeModal";

const DeleteTaskTypeModalW = () => {
  return (
    <DeleteTaskTypeModal
      component={() => (
        <DeleteTaskTypeModalContent
          SelectTaskType={(id, formik, switcher, setSwitcher) => (
            <DeleteTaskTypeForm
              id={id}
              formik={formik}
              switcher={switcher}
              setSwitcher={setSwitcher}
            />
          )}
        />
      )}
    />
  );
};

export default DeleteTaskTypeModalW;
