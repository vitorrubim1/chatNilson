import { SendIcon } from "../../styles/Icons";

import { FormButton } from "./styles";

function Button() {
  return (
    <FormButton type="submit">
      Enviar <SendIcon />
    </FormButton>
  );
}

export default Button;
