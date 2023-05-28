import DeleteTaskTypeBtn from "../../5-Features/menuComponents/DeleteTaskTypesBtn";
import ExitBtn from "../../5-Features/menuComponents/ExitBtn";
import Menu from "../../5-Features/menuComponents/Menu";
import ProfileBlock from "../../5-Features/menuComponents/ProfileBlock";
import TasklistsList from "../../5-Features/menuComponents/TasklistsList";

const MenuW = () => {
  return (
    <Menu ProfileBlock={() => <ProfileBlock />} ExitBtn={() => <ExitBtn />}>
      <TasklistsList />
      <DeleteTaskTypeBtn />
    </Menu>
  );
};

export default MenuW;
