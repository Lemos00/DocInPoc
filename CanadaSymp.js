
let CanadaSymp = CanadaSymptoms.toString();
let SymptomsList = CanadaSymp.split(" ");
let result = SymptomsList.filter(x => !["I'm","am","and","I","Have","have","feeling","fine","ok","good","do","not","no", "if"].includes(x))
SympCanadaList = result