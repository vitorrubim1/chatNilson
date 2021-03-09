export function date(
  event: React.FormEvent<HTMLFormElement>,
  maxLength: number
) {
  event.currentTarget.maxLength = maxLength; //limitador do campo

  let value = event.currentTarget.value;
  value = value.replace(/\D/g, ""); //caso encontre alguma string, poe um ""
  value = value.replace(/(\d)(\d)(\d{2})/, "$1$2/");
  value = value.replace(/(\d)(\d)(\d{2})/, "$1$2/");
  value = value.replace(/(\d)(\d)(\d)(\d)(\d{2})/, "$1$2$3$4");

  return (event.currentTarget.value = value);
}
