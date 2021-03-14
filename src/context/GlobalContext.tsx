import {
  createContext,
  useState,
  useCallback,
  ReactNode,
  useEffect,
} from "react";

import AlertMessage from "../components/Alert";

interface ContextGlobalData {
  //dados
  evaluationValue: number;
  dataNascimento: string;
  nomeSobrenome: string;
  cidadeEstado: string;
  email: string;

  //funções
  handleSetEvaluationState(value: number): void;
  handleChangeStateValue(value: string, type: string): void; //função que seta os valores dos states
  handleShowAlertMessage: () => void;
}

interface ContextProps {
  children: ReactNode;
}

export const GlobalContext = createContext({} as ContextGlobalData);

export function GlobalContextProvider({ children }: ContextProps) {
  const [dataNascimento, setDataNascimento] = useState("");
  const [nomeSobrenome, setNomeSobrenome] = useState("");
  const [cidadeEstado, setCidadeEstado] = useState("");
  const [email, setEmail] = useState("");
  const [evaluationValue, setEvaluationValue] = useState(0); //Avaliação do chat

  function handleSetEvaluationState(value: number) {
    setEvaluationValue(value);
  }

  const handleChangeStateValue = useCallback((value: string, type: string) => {
    if (!value) return;

    switch (type) {
      case "nomeSobrenome":
        setNomeSobrenome(value);
        break;

      case "dataNascimento":
        setDataNascimento(value);
        break;

      case "cidadeEstado":
        setCidadeEstado(value);
        break;

      case "email":
        setEmail(value);
        break;

      default:
        throw new Error("This type does not exist in the function");
    }
  }, []);

  const handleShowAlertMessage = useCallback(() => {
    if (
      dataNascimento &&
      nomeSobrenome &&
      cidadeEstado &&
      email &&
      evaluationValue
    ) {
      AlertMessage({ evaluationValue, nomeSobrenome });
      // AlertMessage(nomeSobrenome, evaluationValue);
    }
  }, [dataNascimento, nomeSobrenome, cidadeEstado, email, evaluationValue]);

  useEffect(() => {
    console.log({
      dataNascimento,
      nomeSobrenome,
      cidadeEstado,
      email,
      evaluationValue,
    });
  }, [dataNascimento, nomeSobrenome, cidadeEstado, email, evaluationValue]);

  return (
    <GlobalContext.Provider
      value={{
        //dados
        evaluationValue,
        dataNascimento,
        nomeSobrenome,
        cidadeEstado,
        email,

        //funções
        handleSetEvaluationState,
        handleChangeStateValue,
        handleShowAlertMessage,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
