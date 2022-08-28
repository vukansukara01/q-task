import React from "react";
import { ClipLoader } from "react-spinners";
import {SpinnerWrapper} from "./SpinnerUi";

const Spinner: React.FC = () => {
  return (
    <SpinnerWrapper>
      <ClipLoader color="#66defb" />
    </SpinnerWrapper>
  );
};

export default Spinner;
