import { useAuth } from "../../providers/AuthProvider";
import DeleteBtn from "../Buttons/DeleteBtn";
import DoneBtn from "../Buttons/DoneBtn";
interface exerciseId {
  id: any;
  onDelete: (id: any) => void;
  program: any;
  programexercise: any;
}
function ExerciseManagement({
  id,
  onDelete,
  program,
  programexercise,
}: exerciseId) {
  const { user, loading } = useAuth();
  if (loading && !user) return <div>loading..</div>;
  if (user.roles[0].id === 3)
    return (
      <DeleteBtn
        id={id}
        onDelete={onDelete}
        program={program}
        programexercise={programexercise}
      ></DeleteBtn>
    );
  return (
    <DoneBtn
      id={id}
      program={program}
      programexercise={programexercise}
      onDelete={onDelete}
    ></DoneBtn>
  );
}

export default ExerciseManagement;
