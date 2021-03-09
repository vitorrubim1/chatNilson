import * as Yup from 'yup';

import IDadosMessageData from "../dtos/IDadosChat";

export default class ValidationForm {
  async execute(data: IDadosMessageData): Promise<boolean> {
    const formSchema = Yup.object().shape({
      nomeSobrenome: Yup.string().required('Nome e sobrenome é obrigatório'),
      cidadeEstado: Yup.string().required('Cidade é obrigatório'),
      dataNascimento: Yup.string().required('Data de nascimento é obrigatório'),
      email: Yup.string().required('Email é obrigatório'),
    });

    const validation = await formSchema.validate(data, {
      abortEarly: false,
    });

    return !!validation;
  }
}