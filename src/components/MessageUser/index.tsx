import React from "react";

import { Container, TextMessage } from "./styles";

interface PropsMessage {
  message: string;
}

const MessageUser: React.FC<PropsMessage> = ({ message }) => {
  return (
    <Container>
      <TextMessage>
        <span>
          {message}
        </span>
      </TextMessage>
    </Container>
  );
};

export default MessageUser;
