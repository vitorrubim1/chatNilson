import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";

import { Container } from "./styles";

interface Props {
  name: string;
  value: number;
}

const Rating: React.FC<Props> = ({ name }) => {
  const { handleSetEvaluationState } = useContext(GlobalContext);

  const [valueEvaluation, setValueEvaluation] = useState(0);

  useEffect(() => {
    if (valueEvaluation) {
      handleSetEvaluationState(Number(valueEvaluation));
    }
  }, [valueEvaluation, handleSetEvaluationState]);

  return (
    <Container>
      <div>
        <input
          type="radio"
          name={name}
          id="1"
          value={5}
          onChange={(event) => setValueEvaluation(Number(event.target.value))}
        />
        <label htmlFor="1"></label>

        <input
          type="radio"
          name={name}
          id="2"
          value={4}
          onChange={(event) => setValueEvaluation(Number(event.target.value))}
        />
        <label htmlFor="2"></label>

        <input
          type="radio"
          name={name}
          id="3"
          value={3}
          onChange={(event) => setValueEvaluation(Number(event.target.value))}
        />
        <label htmlFor="3"></label>

        <input
          type="radio"
          name={name}
          id="4"
          value={2}
          onChange={(event) => setValueEvaluation(Number(event.target.value))}
        />
        <label htmlFor="4"></label>

        <input
          type="radio"
          name={name}
          id="5"
          value={1}
          onChange={(event) => setValueEvaluation(Number(event.target.value))}
        />
        <label htmlFor="5"></label>
      </div>
    </Container>
  );
};

export default Rating;
