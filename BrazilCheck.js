let SympBrazilList = ["headeaches"] // element "headache" given as example
let fluSymp = ["fever", "cough", "sore throat", "headaches", "extreme fever"];
let fluCount = 0;
let c = 0;
let fluCheck = false;

while (c != SympBrazilList.length){
    for (let i = 0; i < SympBrazilList.length; i += 1){
        if (fluSymp[c] == SympBrazilList[i]){
            fluCount += 1;
            
        }
    }
    c += 1;
}

if (fluCount >= 4){
    fluCheck = true
}