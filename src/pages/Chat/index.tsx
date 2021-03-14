import React, { useCallback, useContext } from "react";
import { Formik, Form } from "formik";

import AnimatedChat from "../../components/AnimatedChat";
import MessageUser from "../../components/MessageUser";
import MessageBot from "../../components/MessageBot";
import InputField from "../../components/Input";
import Button from "../../components/Button";

import { Container, ChatMessages } from "./styles";
import Rating from "../../components/Rating";
import { GlobalContext } from "../../context/GlobalContext";

const Chat: React.FC = () => {
  const {
    dataNascimento,
    nomeSobrenome,
    cidadeEstado,
    email,
    handleChangeStateValue,
    handleShowAlertMessage,
  } = useContext(GlobalContext);

  const initialValues = {
    nomeSobrenome: "",
    cidadeEstado: "",
    dataNascimento: "",
    email: "",
  };

  const handleSubmitForm = useCallback(
    (values) => {
      if (values.nomeSobrenome) {
        handleChangeStateValue(values.nomeSobrenome, "nomeSobrenome");
      }

      if (values.cidadeEstado) {
        handleChangeStateValue(values.cidadeEstado, "cidadeEstado");
      }

      if (values.dataNascimento) {
        handleChangeStateValue(values.dataNascimento, "dataNascimento");
      }

      if (values.email) {
        handleChangeStateValue(values.email, "email");
      }
    },
    [handleChangeStateValue]
  );

  return (
    <AnimatedChat>
      <Container>
        <ChatMessages>
          <MessageBot message="Olá, eu sou Chatnilson, tudo bem? Para começarmos, preciso saber seu nome." />

          <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
              handleSubmitForm(values);
            }}
          >
            <Form>
              <MessageUser>
                <InputField
                  name="nomeSobrenome"
                  placeholder="Digite seu nome:"
                  maxLength={40}
                  required
                  value={nomeSobrenome}
                />
                <Button type="submit" />
              </MessageUser>

              {nomeSobrenome && ( //nomeSobrenome
                <AnimatedChat>
                  <MessageBot
                    message={`Que satisfação, ${
                      nomeSobrenome[0].toUpperCase() + nomeSobrenome.substr(1)
                    }. Agora que sei seu nome, qual a cidade e estado que você mora?`}
                  />

                  <MessageUser>
                    <InputField
                      name="cidadeEstado"
                      maxLength={40}
                      placeholder="Digite sua cidade:"
                      required
                      value={cidadeEstado}
                    />
                    <Button type="submit" />
                  </MessageUser>
                </AnimatedChat>
              )}

              {cidadeEstado && (
                <AnimatedChat>
                  <MessageBot message="Legal, agora que sabemos sua cidade e estado. Quando foi que você nasceu?" />

                  <MessageUser>
                    <InputField
                      name="dataNascimento"
                      type="date"
                      required
                      placeholder="00/00/0000"
                      value={dataNascimento}
                      mask="date"
                    />
                    <Button type="submit" />
                  </MessageUser>
                </AnimatedChat>
              )}

              {dataNascimento && (
                <AnimatedChat>
                  <MessageBot message="Agora me fala teu e-mail, por gentileza." />

                  <MessageUser>
                    <InputField
                      name="email"
                      type="email"
                      maxLength={50}  
                      required
                      placeholder="Email:"
                      value={email}
                    />
                    <Button type="submit" />
                  </MessageUser>
                </AnimatedChat>
              )}

              {nomeSobrenome && cidadeEstado && dataNascimento && email && (
                <AnimatedChat>
                  <MessageBot
                    message={`${
                      nomeSobrenome[0].toUpperCase() + nomeSobrenome.substr(1)
                    }, você finalizou o teste. Faça uma avaliação sobre o processo que realizou até chegar aqui. Nós agradecemos!`}
                  />

                  <MessageUser>
                    <Rating name="avaliacao" value={1} />
                    <div
                      style={{
                        position: "absolute",
                        right: "1.1rem",
                        bottom: "0.65rem",
                      }}
                    >
                      <Button onClick={handleShowAlertMessage} />
                    </div>
                  </MessageUser>
                </AnimatedChat>
              )}
            </Form>
          </Formik>
        </ChatMessages>
      </Container>
    </AnimatedChat>
  );
};

export default Chat;
