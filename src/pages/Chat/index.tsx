import React, { useCallback, useState } from "react";
import { Formik, Form } from "formik";

import AnimatedChat from "../../components/AnimatedChat";
import MessageBot from "../../components/MessageBot";
import MessageUser from "../../components/MessageUser";
import InputField from "../../components/Input";
import Button from "../../components/Button";

// import ValidationForm from "../../validations/ValidationSchema";

import { Container, ChatMessages } from "./styles";

const Chat: React.FC = () => {
  const [nomeSobrenome, setNomeSobrenome] = useState("");
  const [cidadeEstado, setCidadeEstado] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [email, setEmail] = useState("");

  const initialValues = {
    nomeSobrenome: "",
    cidadeEstado: "",
    dataNascimento: "",
    email: "",
  };

  const handleSubmitForm = useCallback((values) => {
    setNomeSobrenome(values.nomeSobrenome);
    setCidadeEstado(values.cidadeEstado);
    setDataNascimento(values.dataNascimento);
    setEmail(values.email);
  }, []);

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
                  value={nomeSobrenome}
                />
                <Button />
              </MessageUser>

              {nomeSobrenome && (
                <AnimatedChat>
                  <MessageBot
                    message={`Que satisfação, ${
                      nomeSobrenome[0].toUpperCase() + nomeSobrenome.substr(1)
                    }. Agora que sei seu nome, qual a cidade e estado que você mora?`}
                  />

                  <MessageUser>
                    <InputField
                      name="cidadeEstado"
                      placeholder="Digite sua cidade:"
                      value={cidadeEstado}
                    />
                    <Button />
                  </MessageUser>
                </AnimatedChat>
              )}

              {cidadeEstado && (
                <AnimatedChat>
                  <MessageBot message="Legal, agora que sabemos sua cidade e estado. Quando foi que você nasceu?" />

                  <MessageUser>
                    <InputField
                      name="dataNascimento"
                      placeholder="00/00/0000"
                      value={dataNascimento}
                      mask="date"
                    />
                    <Button />
                  </MessageUser>
                </AnimatedChat>
              )}

              {dataNascimento && (
                <AnimatedChat>
                  <MessageBot message="Agora me fala teu e-mail, por gentileza." />

                  <MessageUser>
                    <InputField
                      name="email"
                      placeholder="Email:"
                      value={email}
                    />
                    <Button />
                  </MessageUser>
                </AnimatedChat>
              )}

              {false && (
                <MessageBot message="Você finalizou o teste Faça uma avaliação sobre o processo que realizou até chegar aqui. Nós agradecemos!" />
              )}
            </Form>
          </Formik>
        </ChatMessages>
      </Container>
    </AnimatedChat>
  );
};

export default Chat;
