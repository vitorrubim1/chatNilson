import React from "react";

import AnimatedChat from "../../components/AnimatedChat";
import MessageBot from "../../components/MessageBot";
import MessageUser from "../../components/MessageUser";

import { Container, ChatMessages } from "./styles";

const Chat: React.FC = () => {
  return (
    <AnimatedChat>
      <Container>
        <ChatMessages>
          <MessageBot message="Olá, eu sou Chatnilson, tudo bem? Para começarmos, preciso saber seu nome." />

          <MessageUser message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, nihil! Vitae officiis, eligendi laborum odit eius adipisci minima doloribus dolores ipsa, praesentium qui unde quod placeat, dignissimos enim dolore? Totam." />

          <MessageBot message="Olá, eu sou Chatnilson, tudo bem? Para começarmos, preciso saber seu nome." />

          <MessageUser message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, nihil! Vitae officiis, eligendi laborum odit eius adipisci minima doloribus dolores ipsa, praesentium qui unde quod placeat, dignissimos enim dolore? Totam." />

          <MessageBot message="Olá, eu sou Chatnilson, tudo bem? Para começarmos, preciso saber seu nome." />
        </ChatMessages>
      </Container>
    </AnimatedChat>
  );
};

export default Chat;
