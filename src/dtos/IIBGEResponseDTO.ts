export default interface IIBGEResponseDTO {
  id: number;
  nome: string;
  municipio: {
    microrregiao: {
      mesorregiao: {
        UF: {
          nome: string;
          sigla: string;
        }
      }
    }
  }
}
