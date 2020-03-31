function mesajBtnFikrimVar(){
    alert("\"new issue\" butonu ile yeni bir issue oluşturarak fikrini paylaşabilirsin");
}
function mesajBtnCokYakinda(){
    var r = confirm("Orman GitHub üzerinde geliştirilmeye devam ediyor. Proje sayfasını ziyeret etmek ister misin?");
    if (r == true) {
        window.open('https://github.com/muaz742/cok-guzel-bir-orman/tree/gh-pages', '_blank');
    }
}

function blabla(){
    alert("bla bla bla");
}