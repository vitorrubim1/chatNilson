import React from "react";

import { Container, Avatar, TextMessage } from "./styles";

interface PropsMessage {
  message: string;
}

const MessageBot: React.FC<PropsMessage> = ({ message }) => {
  return (
    <Container>
      <Avatar />
      <TextMessage>
        <span>
          {message}
        </span>
      </TextMessage>
    </Container>
  );
};

export default MessageBot;
