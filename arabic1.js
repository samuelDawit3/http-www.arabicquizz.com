let l = ["السَّلامُ عَلَيكُم","أَهلاً","أَنا","اسمي","مِن","مدينة","في","باب","اِسم","ما؟","أهلاً بكَ","وعليكم السلام","تَشَرَّفنا","أَنتَ","أَنتِ","اِسمَك","اِسمِك","وين","من وين","نَعَم","لا","و","حجاب","بيت","شارِع","وَظيفة","أَخْبار","كتاب","حَبيبي","حَبيبتي","صَباح الْخَير","صَباح النّور","كيف","كيفك","الْحَمدُ لِلّه","تَمام","ماشي","هَيدا","هَيدي","منيحة ,منيح","مِش","تفَضَّل","تفَضَّلي","تفَضَّلوا","صاحبي","صاحِبتي","هو","هي","طالِب","طالبة","أُسْتاذ","أُستاذة","جامِعة","خُبز","دَجاج","جار","جارة","أَخ","أُخت","جديد","جَديدة","مَساء الخَير","مساء النّور","عندي","ما عندي","سُؤال","أُحِبّ","تُحِبّ","بِتحِبّي","نِمرة تليفون","أوتوبـيـس","دَرس","شاي","شـَباب","طَيِّب","عن إذنَك","عن إذنَك","صَف","مَعَ السَّلامة","اللّه يسَلّمك","صَحّ","أَبْـيَـض","أسْوَد","أَخْضر","شُكراً","عَفواً","مِن فَضلك","آسِف/ة","فيه","ما فيه","شي","شي تاني","جاهِز/ة","قَهْوة","حَليب","سُكَّر","سُكّر وَسَط","عَصير","مَيّ","يَللا","اَروح","تروحي","اِشرَب","سَيّارة","ساعة","شَجَرة","غَريب/ة","صغير/ة","كبير/ة","سَهل/ة","صَعب/ة","واسِع/ة","صَفحة","وَرَقة","اوضة","شِبّاك","كِرسي","طاولة","كَلب"];
let m = [" assalaamu alaykum "," ahlan "," ana "," ismii "," min "," madiinat "," fii "," baab "," ism "," maa? "," ahlan fiik "," wa alaykumu s-salaam "," tasharrafnaa "," anta "," anti "," ismak "," ismik "," ween "," min ween "," naam "," laa "," wa "," hijab "," bayt "," sharia "," waZiifa "," akhbaar "," kitaab "," habibi "," habibti "," SabaaH al-khayr "," SabaaH an-nuur "," kiif "," kiifak "," al-Hamdu lillaah "," tamaam "," maashi "," haada "," haadi "," mniiH, mniiHa "," mish "," tfaDDal "," tfaDDli "," tfaDDlu "," SaaHbi "," SaaHibti "," huwwe "," hiyye "," Taalib "," Taalbe ","ustaadh"," ustaadha "," jaamiat "," khubz "," dejaj "," jarr "," jaara "," akh "," urth "," jadid "," jadiida "," masaa al-khayr "," masaa an-nuur "," andi "," maa andi "," suaal "," ouhib "," tuhib ","tuHibbii ","nimrit tilifuun "," autobiss "," deriss "," shay "," shabab ","Tayyib ","ayn iznak ","ayn iznik ","Saff ","maa s-salaama ","alla ysallm -ak/ -ik ","sahh ","abyat ","aswat ","akhdhar ","shukran ","afwan ","min faDlak/ik ","aasif/ aasifa ","fii ","maa fii ","shii ","shi taani ","jaahiz/jaahze ","qahwa ","Haliib ","sukkar ","sukkar wasaT ","aSiir ","mayy ","yalla ","arouh ","trouhii ","ushrab ","seyara ","seaah ","shejra ","ghariib/e ","zakhir/e ","kbiir/e ","sahl/e ","saab/e ","wasseah/wassah ","sefha ","wara a ","oudha ","shubbak ","kursii ","tauleh ","kelb "];
//let k = ["greetings","hello","i","my name","from","The city of","in","door","name","what","hello","hello","nice to meet you","you","you","your name","your name","where","from where","yes","no","and","head covering","house","street","homework","news","book","my dear","my dear","good morning","good morning","how","how are you","thank god","great","ok","this","this","good","not","come in","come in","come in","my friend","my friend","he","she","student","your student","teacher","teacher","university","bread","chicken","neighbor","neighbor","brother","sister","new","new","good evening","good evening","i have","i don't have","question","i love","you love","you love","telephone number","bus","lesson","tea","young people","good","may i be excused","may i be excused","class","goodbye","goodbye","correct","white","black","green","thank you","you're welcome","please","sorry","there is","there isn't","something","something else","ready","coffee","milk","sugar","medium sugar","juice","water","let's go","you go","you go","i drink","car","hour","tree","strange","small","large","easy","difficult","wide","page","paper","room","window","chair","table","dog"];
let k1 = ["Greetings","Hello","I","My name","From","The city of …","In","door","name","what?","(reply) to ahlan wa sahlan","(reply to) assalaamu alaykum","Nice to meet you!","you (masculine)","you (feminine)","your name (masculine)","your name (feminine)","where","from where","yes","no","and","veil, head covering","house","street","homework","news","book","my (male) dear, darling","my (female) dear, darling","Good morning!","(response to) Good morning!","How","How are you?","(response to) How are you?","great, fine","OK","this (masc.)","(this (fem.)","good (masc.) / good (fem.)","(am/are/is) not"," please come in, go ahead (to a male) "," please come in, go ahead (to a female) "," please come in, go ahead (plural) ","my (male) friend","my (female) friend","he/it (masc.)","she/it (fem.)","student (male)","your student (female)","professor, teacher(male)","professor, teacher(female)","university of...","bread","chicken","neighbor (male)","neighbor (female)","brother","sister","new (masc.)","new (fem.)","Good evening!","(response to) Good evening!","I have","I don't have","question","I love","you (masc.) love","you (fem.) love","telephone number","bus","lesson","tea","young people; guys (including mixed gender)","good, kind-hearted (as adjective); OK (as an interjection) ","may I be excused?  (what to say when you have to leave)(masculin)","may I be excused?  (what to say when you have to leave) (fem.) ","class; classroom","good-bye","(reply to) maa s-salaama (masc./fem.) ","right! correct!","white","black","green","thank you","you're welcome","please(masc/fem.)","sorry!(masc/fem)","there is","there isn't","something","something else","ready(masc/fem)","coffee","milk","sugar","medium sugar","juice","water","Let's go!","you (masc.) go","you (fem.) go","I drink","car, automobile","watch, clock; hour","tree","strange(masc/fem)","small; young (masc/fem)","large, old(masc/fem)","easy(masc/fem)","difficult; hard(masc/fem)","wide; spacious","page","(piece of) paper","room","window","chair","table","dog"];

console.log(l.length)
console.log(m.length)
console.log(k1.length)
//for(i=0;l.length;i++){
    //console.log(l);
//}
let x5;//random number between 1 and 20
let y5;
let z5;
let a5;
let liste;
let rand;
let resp;
let resp1;
let resp2;
let resp3;
let index;



//x5 = Math.floor(Math.random() * l.length)+0;//random number between 1 and 20
//y5 = Math.floor(Math.random() * l.length)+0;//random number between 1 and 20
//z5 = Math.floor(Math.random() * l.length)+0;//random number between 1 and 20
//a5 = Math.floor(Math.random() * l.length)+0;//random number between 1 and 20

console.log(x5)
console.log(y5)
console.log(z5)
console.log(a5)

//document.getElementById("Words").innerHTML = l[x5];

document.getElementById("myButton2").onclick = function(){
    x5 = Math.floor(Math.random() * l.length)+0;//random number between 1 and 20
    return x5
}


//function randomm(){
  //  x5 = Math.floor(Math.random() * l.length)+0;//random number between 1 and 20
    //return x5
//}
//let wrong = [];

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
        document.getElementById("correct").innerHTML = `You are wrong! The right answer is ${k1[x5]}`;
      //  wrong.push(index);
    }

    if (!inp.checked && !inp1.checked && !inp2.checked && !inp3.checked) {
        document.getElementById("correct").innerHTML = "You haven't selected anything, try again";
    }
    //displayIncorrectAnswers();
};

//function displayIncorrectAnswers() {
   // const body = document.body;

    // Loop to display incorrect answers
   // for (let i = 0; i < wrong.length; i++) {
      //  const labelElement = document.createElement("h2");
    //    const incorrectIndex = wrong[i];

        //labelElement.textContent = `Incorrect Answer ${i + 1}: ${k1[wrong[i]]}`;
      //  body.appendChild(labelElement);

        // Add a line break between labels for better spacing
    //    body.appendChild(document.createElement("br"));
  //  }
//}


document.getElementById("myButton2").onclick = function(){
    document.getElementById("correct").innerHTML = "";
    x5 = Math.floor(Math.random() * l.length); // random number between 0 and l.length - 1
    y5 = Math.floor(Math.random() * l.length);
    z5 = Math.floor(Math.random() * l.length);
    a5 = Math.floor(Math.random() * l.length);

    let liste = [y5, z5, a5];
    liste.splice(Math.floor(Math.random() * (liste.length + 1)), 0, x5);
    index = liste.indexOf(x5);
    console.log(index);

    document.getElementById("Words").innerHTML = m[x5];
    document.getElementById("definition1").innerHTML = k1[liste[0]];
    document.getElementById("definition2").innerHTML = k1[liste[1]];
    document.getElementById("definition3").innerHTML = k1[liste[2]];
    document.getElementById("definition4").innerHTML = k1[liste[3]];

    //console.log(l[x5]);
    //console.log(m[y5]);
    //console.log(m[z5]);
    //console.log(m[a5]);
};

document.getElementById("myButton3").onclick = function(){
    document.getElementById("Words").innerHTML = l[x5];
};
document.getElementById("myButton4").onclick = function(){
    document.getElementById("Words").innerHTML = m[x5];
};