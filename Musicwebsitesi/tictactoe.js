// reset tuşu yap önce onu ayarla
var sil = document.getElementById("btn");



//bütün karelere etki için buraya çek
var kareler = document.querySelectorAll("td");



//bütün kareleri temizlet

function boardreset() {
    for(var i = 0; i<kareler.length ; i++){
    kareler[i].textContent= "" ;
 }
}

sil.addEventListener("click",boardreset);

function changeMarker(){
    if (this.textContent=== " "){
    this.textContent="X";
    }else if (this.textContent==="X"){
    this.textContent="O";
    }
    else{
        this.textContent=" ";
    }
}

for(var i = 0; i<kareler.length ; i++){
    kareler[i].addEventListener("click",changeMarker)
}



//marker ı ayarla işaretlemek için ve bunun için this.variable ne kullan




//------------------------------------------//
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var x = document.getElementById("x");
var y = document.getElementById("y");                // ihtiyacım olan bütün elemenleteri html den çektim buradalar
var xscore = document.getElementById("xscore");
var yscore = document.getElementById("yscore");
var xtable = document.getElementById("xtable");
var ytable = document.getElementById("ytable");
var resetsong=document.getElementById("resetsong");
var resetgame=document.getElementById("resetgame");
var xscorex = document.getElementById("xscorex");
var yscorey = document.getElementById("yscorey");
//-------------------------------------------//


//--------------------------------//
function playthree(){
    if(three.paused){
        three.play();
   }else{                 // 3.Şarkıyı ve 1.Şarkıyı oynatır 
    three.pause();
    one.play();
}
   }
//-------------------------------//
//-------------------------------//
function playfour(){
    if(two.paused){
        two.play();
   }else{              // 2.Şarkıyı ve 4.Şarkıyı oynatır
    two.pause();
    four.play();
}
   }
//-------------------------------//
//-------------------------------//
function stopmusic(){
    if(two.paused == 0){
        two.pause();
        two.currentTime=0;
    }
    else if(one.paused == 0){
        one.pause();
        one.currentTime=0;            //Müziği durduran aynı zamanda süresini 0'layan fonksiyonum
    }
    else if(three.paused == 0){
        three.pause();
        three.currentTime=0;
    }
    else {
        four.pause();
        four.currentTime=0;
    }
}
//-------------------------------//
//-------------------------------//
var xcount = 0;
xtable.innerHTML = xcount ;

const xpoint=()=>{               // X tablosunun skoru arttırmaya yarayan fonksiyonum
    xcount ++ ;
    xtable.innerHTML = xcount ;
    
}
//-------------------------------//
//-------------------------------//

var ycount = 0;
ytable.innerHTML = ycount ;
const ypoint=()=>{             // Y tablosunun skorunu arttırmaya yarayan fonksiyonum 
    ycount ++ ;
    ytable.innerHTML = ycount ;
    

}

//------------------------------//
//------------------------------//
const ypointy=()=>{
    ycount--;
    ytable.innerHTML = ycount
    if(ycount<0){
        ytable.innerHTML = 0; 
        ycount=0;               // Y tablosunun değerini düşürür ve 0'ın altına inmeyecek şekilde ayarladım
        }
        else{
            
        }
}

//------------------------------//
//------------------------------//
const xpointx=()=>{
    xcount --;
    xtable.innerHTML = xcount;
    if(xcount<0){                     // X tablosunun değerini düşürür ve 0'ın altına inmeyecek şekilde ayarladım
    xtable.innerHTML = 0;
    xcount=0;
    
    }
    else{

    }
}
//------------------------------//
//------------------------------//



//-------------------------------//
//-------------------------------//

function resetGame(){
    ytable.innerHTML = 0;
    xtable.innerHTML = 0;     // Skor tablosunu Resetleyen(0'layan) ayrıca x ve y son değerden saymasın diye x ve y değerleini de 0'lar
    ycount = 0;
    xcount = 0;
}
//-------------------------------//
//-------------------------------//








//-------------------------------//
x.addEventListener("click",playthree);
y.addEventListener("click",playfour);
resetsong.addEventListener("click",stopmusic);  // html'den çektiğim butonları EventListener yardımıyla tıklanması halinde aksiyona soktuğum yer 
xscore.addEventListener("click",xpoint);
yscore.addEventListener("click",ypoint);
resetgame.addEventListener("click",resetGame);
xscorex.addEventListener("click",xpointx);
yscorey.addEventListener("click",ypointy);
//-------------------------------//


