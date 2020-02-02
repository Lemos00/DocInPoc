let SympCanadaList = ["headeaches"] // element "headache" given as example
let fluSymp = ["fever", "cough", "sore throat", "headaches"];
let fluCount = 0;
let c = 0;
let fluCheck = false;

while (c != SympCanadaList.length){
    for (let i = 0; i < SympCanadaList.length; i += 1){
        if (fluSymp[c] == SympCanadaList[i]){
            fluCount += 1;
            
        }
    }
    c += 1;
}

if (fluCount >= 4){
    fluCheck = true
}