import TaskList from "../../5-Features/lists/TasksList";
import TaskCompleteBtn from "../../5-Features/taskItemComponents/TaskCompleteBtn";
import TaskEditBtn from "../../5-Features/taskItemComponents/TaskEditBtn";
import TaskItem from "../../5-Features/taskItemComponents/TaskItem";
import TaskItemMenu from "../../5-Features/taskItemComponents/TaskItemMenu";
import PaginationUI from "../../7-Shared/ui/PaginationUI";

const TaskListW = ({ children }) => {
  return (
    <div>
      <TaskList
        Filters={() => children}
        Pagination={(page, setPage, pageCount) => (
          <PaginationUI page={page} setPage={setPage} pageCount={pageCount} />
        )}
        TaskItem={(task) => (
          <TaskItem
            key={task.id}
            id={task.id}
            completed={task.attributes.completed}
            time={task.attributes.time}
            date={task.attributes.date}
            title={task.attributes.title}
            taskType={task.attributes.task_type && task.attributes.task_type}
            taskList={task.attributes.task_list && task.attributes.task_list}
            description={task.attributes.description}
            SetCompleteBtn={(completed, id) => (
              <TaskCompleteBtn completed={completed} taskId={id} />
            )}
            EditTaskBtn={(id) => <TaskEditBtn taskId={id} />}
            TaskItemMenu={(id, open, handleClose, anchorEl) => (
              <TaskItemMenu
                id={id}
                open={open}
                handleClose={handleClose}
                anchorEl={anchorEl}
              />
            )}
          />
        )}
      />
    </div>
  );
};

export default TaskListW;
