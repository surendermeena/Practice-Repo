import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUsers } from "../store/slices/UserSlice";

export const DeleteAllUser = () => {
  const dispatch = useDispatch();

  const clearUser = () => {
    dispatch(deleteUsers());
  };

  return <button onClick={() => clearUser()}>Clear User</button>;
};
