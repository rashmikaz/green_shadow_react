import { Cards } from "../components/Cards";
import { Addbutton } from "../components/AddButton";
export function Log() {
    const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.modal.isModalOpen);

  const handleAddLog = () => {
    dispatch(openModal());
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Log added!");
    dispatch(closeModal());
  };
  return (
    <>
      <h1>Log</h1>
      <Cards />
      <div className="flex justify-end mt-8 mr-56">
        <Addbutton>Log</Addbutton>
      </div>
    </>
  );
}