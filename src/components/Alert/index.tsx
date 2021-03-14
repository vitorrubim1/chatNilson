import Swal from "sweetalert2";

interface Props {
  nomeSobrenome: string;
  evaluationValue: number;
}

function AlertMessage({ evaluationValue, nomeSobrenome }: Props) {
  Swal.fire({
    title: `Olá ${nomeSobrenome}, muito obrigado pela avaliação!`,
    text: `${
      evaluationValue >= 4
        ? `agradecemos pela nota ${evaluationValue} :)`
        : `Sinto muito que não tenhamos te surpreendindo, da próxima vez a sua nota será maior do que ${evaluationValue} ;)`
    }`,
    icon: "success",
    confirmButtonText: '<a href="/">Fechar</a> ',
    confirmButtonColor: "#544bf7",
  });
}

export default AlertMessage;
