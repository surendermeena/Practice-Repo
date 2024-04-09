import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const DisplayUsers = () => {
  const data = useSelector((state) => {
    return state.users;
  });

  console.log(data);
  return (
    <Wrapper>
      {data.map((user, id) => {
        return <li key={id}>{user}</li>;
      })}
    </Wrapper>
  );
};

export default DisplayUsers;
const Wrapper = styled.section``;
