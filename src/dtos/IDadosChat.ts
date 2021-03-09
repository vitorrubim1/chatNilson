export default interface IDadosMessageData {
  nomeSobrenome: string;
  // cidadadeEstado: [
  //   cidadade: string,
  //   estado: string,
  // ]
  cidadeEstado: string,
  dataNascimento: string,
  email: string,
  avaliacao?: number;
}