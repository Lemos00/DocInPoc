
let BrazilSymp = BrazilSymptoms.toString();
let SymptomsList = BrazilSymp.split(" ");
let result = SymptomsList.filter(x => !["I'm","am","and","I","Have","have","feeling","fine","ok","good","do","not","no"].includes(x)).join(", ")
SympBrazilList = result

