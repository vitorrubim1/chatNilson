import React from "react";

import AnimatedChat from "../../components/AnimatedChat";
import MessageBot from "../../components/MessageBot";
import MessageUser from "../../components/MessageUser";
import InputField from "../../components/Input";

import { Container, ChatMessages } from "./styles";

const Chat: React.FC = () => {
  return (
    <AnimatedChat>
      <Container>
        <ChatMessages>
          <MessageBot message="Olá, eu sou Chatnilson, tudo bem? Para começarmos, preciso saber seu nome." />

          <MessageUser>
            <InputField name="nomeSobrenome" placeholder="Digite seu nome:" />
          </MessageUser>

          <MessageBot message="Que satisfação, Lorem. Agora que sei seu nome, qual a cidade e estado que você mora?" />

          <MessageUser>
            <InputField
              name="cidadadeEstado"
              placeholder="Digite sua cidade:"
            />
          </MessageUser>

          <MessageBot message="Legal, agora que sabemos sua cidade e estado. Quando foi que você nasceu?" />

          <MessageUser>
            <InputField name="dataNascimento" placeholder="00/00/0000" />
          </MessageUser>

          <MessageBot message="Agora me fala teu e-mail, por gentileza." />

          <MessageUser>
            <InputField name="email" placeholder="Email:" />
          </MessageUser>

          <MessageBot message="Você finalizou o teste Faça uma avaliação sobre o processo que realizou até chegar aqui. Nós agradecemos!" />
        </ChatMessages>
      </Container>
    </AnimatedChat>
  );
};

export default Chat;
