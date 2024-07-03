import { useAuth } from "../../providers/AuthProvider";
import DeleteBtn from "../Buttons/DeleteBtn";
import DoneBtn from "../Buttons/DoneBtn";
interface exerciseId {
  id: any;
  onDelete: (id: any) => void;
}
function ExerciseManagement({ id, onDelete }: exerciseId) {
  const { user, loading } = useAuth();
  if (loading && !user) return <div>loading..</div>;
  if (user.roles[0].id === 3)
    return <DeleteBtn id={id} onDelete={onDelete}></DeleteBtn>;
  return <DoneBtn id={id}></DoneBtn>;
}

export default ExerciseManagement;
