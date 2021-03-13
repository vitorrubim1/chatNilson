import React, { useState } from "react";
import { OptionTypeBase, Props as SelectProps } from "react-select";

import { Container, ReactSelect } from "./styles";

import IIBGEResponseDTO from "../../../dtos/IIBGEResponseDTO";


interface Props {
  name: string;
  defaultValue: IIBGEResponseDTO;
  options: IIBGEResponseDTO[];
}

function onChangeSelect(value: OptionTypeBase) {
  // setValue(value)
  console.log(value);
}
const Select: React.FC<Props> = ({ name, options, defaultValue }) => {
  return (
    <Container>
      <ReactSelect
        classNamePrefix="react-select"
        placeholder="Digite sua cidade:"
        name={name}
        options={options}
        defaultValue={defaultValue}
        onChange={onChangeSelect}
      />
    </Container>
  );
};

export default Select;
