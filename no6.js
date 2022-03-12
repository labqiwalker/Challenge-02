function getAngkaTerbesarKedua(dataAngka) {
  if (typeof dataAngka === "undefined" || dataAngka == 0 ||  dataAngka.length < 2) {
      return "Error: Invalid input"
  }

  dataAngka.sort()

  for (let i = dataAngka.length - 2; i >= 0; i--) {
      if (dataAngka[i] != dataAngka[dataAngka.length - 1]) {
          return dataAngka[i]
      }
    }
  return "Error: No second largest number"
}

const arrayAngka = [9,4,7,7,4,3,2,2,8,9]