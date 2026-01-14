import React, { type FC } from "react";
import { useDeletePlace } from "../../../service";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface Props {
  id: string;
}
const Button: FC<Props> = ({ id }) => {
  const { mutate, isPending, isSuccess } = useDeletePlace();
  const navigate = useNavigate();

  if (isSuccess) {
    toast.success("Place deleted successfully");
    navigate("/"); // Navigate to home page after successful deletion
  }

  return (
    <div className="flex justify-end my-5">
      <button type="button" onClick={() => mutate(id)}>
        {isPending ? (
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-900"></div>
        ) : (
          <span className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 transition">
            Delete Place
          </span>
        )}
      </button>
    </div>
  );
};

export default Button;
