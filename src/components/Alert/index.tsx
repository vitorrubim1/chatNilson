import { Link } from "react-router-dom";
import Swal from "sweetalert2";

interface Props {
  name: string;
  value: string;
}

function AlertMessage() {
  Swal.fire({
    title: "Olá {Nome}, muito obrigado pela avaliação!",
    text: "Caso nota menor que 3 uma mensagem, caso maior outra mensagem",
    icon: "success",
    confirmButtonText: '<a href="/">Fechar</a> ',
    confirmButtonColor: "#544bf7",
  });
}

export default AlertMessage;
