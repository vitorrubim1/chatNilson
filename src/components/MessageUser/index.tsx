import { Container, MessageContainer } from "./styles";

const MessageUser: React.FC = ({ children }) => {
  return (
    <Container>
      <MessageContainer>
        {children} {/*input e botão*/}
      </MessageContainer>
    </Container>
  );
};

export default MessageUser;
