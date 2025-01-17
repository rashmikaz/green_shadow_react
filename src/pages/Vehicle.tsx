import { Savebutton } from "../components/Savebutton";
import { Savebutton } from "../components/Updatebutton";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, openModal } from "../components/reducers/Modalslice";

import { Cards } from "../components/Cards";
import { Addbutton } from "../components/AddButton";
export function Vehicle() {
    const dispatch = useDispatch();
    const isModalOpen = useSelector((state) => state.modal.isModalOpen);
  
    const handleAddVehicle = () => {
      dispatch(openModal());
    };
  
    const handleCloseModal = () => {
      dispatch(closeModal());
    };
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log("Vehicle added!");
      dispatch(closeModal());
    };
  return (
    <>
      <h1>Vehicle</h1>
      <Cards />
      <div className="flex justify-end mt-8 mr-56">
        <Addbutton>Vehicle</Addbutton>
      </div>
    </>
  );
}