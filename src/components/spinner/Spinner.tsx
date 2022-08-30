import React from "react";
import { ClipLoader } from "react-spinners";
import {SpinnerWrapper} from "./SpinnerStyled";

const Spinner: React.FC = () => {
  return (
    <SpinnerWrapper>
      <ClipLoader color="#66defb" />
    </SpinnerWrapper>
  );
};

export default Spinner;
