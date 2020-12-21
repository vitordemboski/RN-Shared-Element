const formatReal = (valor: number | string, notReal: boolean | undefined) => {
  var inteiro = null,
    decimal = null,
    c = null,
    j = null;
  var aux = new Array();
  valor = valor ? parseFloat(valor.toString()).toFixed(2) : "0";
  c = valor.indexOf(".", 0);
  if (c > 0) {
    inteiro = valor.substring(0, c);
    decimal = valor.substring(c + 1, valor.length);
  } else {
    inteiro = valor;
  }
  for (j = inteiro.length, c = 0; j > 0; j -= 3, c++) {
    aux[c] = inteiro.substring(j - 3, j);
  }
  inteiro = "";
  for (c = aux.length - 1; c >= 0; c--) {
    inteiro += aux[c] + ".";
  }
  inteiro = inteiro.substring(0, inteiro.length - 1);
  if (decimal === null) decimal = parseInt(decimal);
  if (isNaN(decimal)) {
    decimal = "00";
  } else {
    decimal = "" + decimal;
    if (decimal.length === 1) {
      decimal = decimal + "0";
    }
  }

  valor = (notReal ? "" : "R$ ") + inteiro + "," + decimal;
  return valor;
};
export default formatReal;
