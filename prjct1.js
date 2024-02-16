const bener=document.getElementById("tru")
const salah=document.getElementById("fls")
let start=100
let i=1
let e=1
let a=0
let o=0
const say=["Masak kamu gamau:( ?", "Kita temen kan???", "Plssss", "Kubalikin asli", "Cuma kamu yang kupercaya", "Asli kubalikin :(",]
salah.addEventListener("click", klik)
function klik(){
    if(i<=10){
    console.log("woi")
    bener.style.width=start+20*i+"px"
    bener.style.height=start+20*i+"px"
    bener.style.marginTop=180-10*i+"px"
    bener.style.marginLeft=582-20*i+"px"
    salah.style.width=start-6*i+"px"
    salah.style.height=start-6*i+"px"
    salah.style.marginRight=582+3*i+"px"
    // salah.style.marginTop=291+3*i+"px"
    i++}
    else if(i>10 && o<=5){
        alert(say[o])
        o++
    }
    else{
        alert(say[0])
        o=1
    }
    
    if (i>=9 && i%3==0){
        salah.style.fontSize=16-6*e+"px";
        e++
    }
}
    

bener.addEventListener("click",don)
function don(){
    document.getElementById("besar").remove()
    a++
    if (a==1) {
        alert("TERIMAKASIH!")
    }
}
