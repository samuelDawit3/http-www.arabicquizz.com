let arabicAlphabet = ["Alif (A)","Ba (B)","Ta (T)","Tha (Th)","Jim (J)","Ha (H)","Kha (Kh)","Dal (D)","Thal (Th)","Ra (R)","Zay (Z)","Seen (S)","Sheen (Sh)","Sad (S)","Dad (D)","Ta (T)","Da (D)","'Ayn ('A)","Ghayn (Gh)","Fa (F)","Qaf (Q)","Kaf (K)","Lam (L)","Meem (M)","Noon (N)","Ha (H)","Waw (W)","Ya (Y)"];

let arabicIndividualForms = ["ا","ب", "ت", "ث", "ج", "ح", "خ", "د", "ذ", "ر", "ز", "س", "ش", "ص", "ض", "ط", "ظ", "ع", "غ", "ف", "ق", "ك", "ل", "م", "ن", "ه", "و", "ي"];

let arabicInitialForms = ["ا","بـ", "تـ", "ثـ", "جـ", "حـ", "خـ", "دـ", "ذـ", "رـ", "زـ", "سـ", "شـ", "صـ", "ضـ", "طـ", "ظـ", "عـ", "غـ", "فـ", "قـ", "كـ", "لـ", "مـ", "نـ", "هـ", "وـ", "يـ"];

let arabicMedialForms = ["ـا","ـبـ", "ـتـ", "ـثـ", "ـجـ", "ـحـ", "ـخـ", "ـدـ", "ـذـ", "ـرـ", "ـزـ", "ـسـ", "ـشـ", "ـصـ", "ـضـ", "ـطـ", "ـظـ", "ـعـ", "ـغـ", "ـفـ", "ـقـ", "ـكـ", "ـلـ", "ـمـ", "ـنـ", "ـهـ", "ـوـ", "ـيـ"];

let arabicFinalForms = ["ـا", "ـب", "ـت", "ـث", "ـج", "ـح", "ـخ", "ـد", "ـذ", "ـر", "ـز", "ـس", "ـش", "ـص", "ـض", "ـط", "ـظ", "ـع", "ـغ", "ـف", "ـق", "ـك", "ـل", "ـم", "ـن", "ـه", "ـو", "ـي"];

console.log(arabicAlphabet.length, arabicIndividualForms.length, arabicInitialForms.length, arabicMedialForms.length, arabicFinalForms.length);
console.log(arabicAlphabet)
  
let everything = [arabicIndividualForms,arabicInitialForms,arabicMedialForms,arabicFinalForms]
//console.log(everything)

  document.getElementById("myButton1").onclick = function () {
    const inp = document.getElementById("def1");
    const inp1 = document.getElementById("def2");
    const inp2 = document.getElementById("def3");
    const inp3 = document.getElementById("def4");

    if (inp.checked && index === 0) {
        document.getElementById("correct").innerHTML = "You are correct!";
    } else if (inp1.checked && index === 1) {
        document.getElementById("correct").innerHTML = "You are correct!";
    } else if (inp2.checked && index === 2) {
        document.getElementById("correct").innerHTML = "You are correct!";
    } else if (inp3.checked && index === 3) {
        document.getElementById("correct").innerHTML = "You are correct!";
    } else {
        document.getElementById("correct").innerHTML = `You are wrong! The right answer is ${arabicAlphabet[x5]}`;
    }

    if (!inp.checked && !inp1.checked && !inp2.checked && !inp3.checked) {
        document.getElementById("correct").innerHTML = "You haven't selected anything, try again";
    }
};

document.getElementById("myButton2").onclick = function(){
    document.getElementById("correct").innerHTML = "";
    x5 = Math.floor(Math.random() * arabicInitialForms.length); // random number between 0 and l.length - 1
    y5 = Math.floor(Math.random() * arabicInitialForms.length);
    z5 = Math.floor(Math.random() * arabicInitialForms.length);
    a5 = Math.floor(Math.random() * arabicInitialForms.length);
    b5 = Math.floor(Math.random() * everything.length);
    console.log([b5],"b5");

    let liste = [y5, z5, a5];
    liste.splice(Math.floor(Math.random() * (liste.length + 1)), 0, x5);
    index = liste.indexOf(x5);
    console.log(index);

    document.getElementById("Words").innerHTML = everything[b5][x5];
    document.getElementById("definition1").innerHTML = arabicAlphabet[liste[0]];
    document.getElementById("definition2").innerHTML = arabicAlphabet[liste[1]];
    document.getElementById("definition3").innerHTML = arabicAlphabet[liste[2]];
    document.getElementById("definition4").innerHTML = arabicAlphabet[liste[3]];

   // console.log(k1[x5]);
   // console.log(l[y5]);
    //console.log(l[z5]);
    //console.log(l[a5]);
};