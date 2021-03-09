import { createContext, ReactNode, useState } from "react";

interface MessageContextData {
  //dados
  nomeSobrenome: string;
  cidadeEstado: string;
  dataNascimento: string;
  email: string;

  //funções
  handleChangeNomeSobrenome: () => void;
  handleCidadeEstado: () => void;
  handleEmail: () => void;
  handleDataNascimento: () => void;
}

interface MessagesProviderProps {
  children: ReactNode;
}

export const MessageContext = createContext({} as MessageContextData);

export function MessagesProvider({ children }: MessagesProviderProps) {
  const [nomeSobrenome, setNomeSobrenome] = useState("");
  const [cidadeEstado, setCidadeEstado] = useState("");
  const [email, setEmail] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");

  function handleChangeNomeSobrenome() {
    const storageInfo = localStorage.getItem("nomeSobrenome");

    setNomeSobrenome(() => {
      if (storageInfo) {
        return storageInfo;
      } else {
        return "";
      }
    });
  }

  function handleCidadeEstado() {
    const storageInfo = localStorage.getItem("cidadeEstado");
    
    setCidadeEstado(() => {
      if (storageInfo) {
        return storageInfo;
      } else {
        return "";
      }
    });
  }

  function handleEmail() {
    setEmail(() => {
      const storageInfo = localStorage.getItem("email");

      if (storageInfo) {
        return storageInfo;
      } else {
        return "";
      }
    });
  }

  function handleDataNascimento() {
    setDataNascimento(() => {
      const storageInfo = localStorage.getItem("dataNascimento");

      if (storageInfo) {
        return storageInfo;
      } else {
        return "";
      }
    });
  }

  return (
    <MessageContext.Provider
      value={{
        //dados
        nomeSobrenome,
        cidadeEstado,
        dataNascimento,
        email,

        //funções
        handleChangeNomeSobrenome,
        handleCidadeEstado,
        handleEmail,
        handleDataNascimento,
      }}
    >
      {children}
    </MessageContext.Provider>
  );
}
