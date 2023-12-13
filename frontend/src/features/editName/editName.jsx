import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { usePutUserNameMutation } from "../../services/userApi";
import { updateProfile } from "../auth/authSlice";
import { handleForm } from "./editNameSlice";
// {
//     "firstName": "string",
//     "lastName": "string"
//   }
export const EditForm = () => {
  const dispatch = useDispatch();
  const displayForm = useSelector((state) => state.editName.display);
  const [putUserName] = usePutUserNameMutation();
  const token = useSelector((state) => state.auth.token);
  const namesRegex = `^[A-Za-zÀ-ÖØ-öø-ÿ]+([ '-][A-Za-zÀ-ÖØ-öø-ÿ]+)*$`;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (firstName.match(namesRegex) && lastName.match(namesRegex)) {
      const user = {
        firstName: firstName,
        lastName: lastName,
      };
      console.log(token, user);
      try {
        const response = await putUserName({ user, token }).unwrap();
        dispatch(updateProfile({ user: response.body }));
      } catch (error) {
        console.error(error);
      }
    }
    dispatch(handleForm());
  };
  return (
    <>
      {displayForm === true && (
        <form action="" onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            placeholder="First Name"
            onChange={(e) => handleFirstName(e)}
          />
          <input
            type="text"
            placeholder="Last Name"
            onChange={(e) => handleLastName(e)}
          />
          <button>Edit</button>
        </form>
      )}
    </>
  );
};
