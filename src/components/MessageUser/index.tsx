import React from "react";
import { FormikContext, Form, useFormik } from "formik";

import { SendIcon } from "../../styles/Icons";
import { Container, MessageContainer } from "./styles";

const MessageUser: React.FC = ({ children }) => {
  const methods = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: "",
      nome: "",
      dataNascimento: "",
    },
    // validationSchema: ValidationForm,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Container>
      <MessageContainer>
        <div>
          <FormikContext.Provider value={methods}>
            <Form>
              {children} {/*input*/}
              
              <button type="submit">
                Enviar <SendIcon />
              </button>
            </Form>
          </FormikContext.Provider>
        </div>
      </MessageContainer>
    </Container>
  );
};

export default MessageUser;
