//lista de peças
let peça01 = "teclado"
let peça02 = "mouse"
let peça03 = "tela"
let peça04 = "hd"
let peça05 = "fio"
let peça06 = "wifi"
//lista de peso por peças 
var peso_peça01 = 250
var peso_peça02 = 5
let peso_peça03 = 354
let peso_peça04 = 500
let peso_peça05 = 98
let peso_peça06 = 491
//quantidade maxima por caixa

let listapeças = [peça01, peça02, peça03, peça04, peça05, peça06];
let limite_maximo_caixa = [10];
let quantidade_de_peças_lista = [10];
 
//verificar peso peças
if(peso_peça01 <= 100) {
    console.log("error, peça fora do padrão!!")
}else{
    console.log("cadastro com sucesso!")
}
if(peso_peça02 <= 100) {
    console.log("error, peça fora do padrão!!")
}else{
    console.log("cadastro com sucesso!")
}
if(peso_peça03 <= 100) {
    console.log("error, peça fora do padrão!!")
}else{
    console.log("cadastro com sucesso!")
}
if(peso_peça04 <= 100) {
    console.log("error, peça fora do padrão!!")
}else{
    console.log("cadastro com sucesso!")
}
if(peso_peça05 <= 100) {
    console.log("error, peça fora do padrão!!")
}else{
    console.log("cadastro com sucesso!")
}
if(peso_peça06 <= 100) {
    console.log("error, peça fora do padrão!!")
}else{
    console.log("cadastro com sucesso!")
}
//verificar quantidades maximo caixas
if (limite_maximo_caixa <= 10) {
    console.log("quantidade de caixas ok !!");
}
else {
    console.log("error, não ter capacidade suficiente!!");
}

//verificar peças com 3 caracteres
if(peça01.length < 3) {
    console.log("error, peça fora do padrão!!")
}else{
    console.log("cadastro com sucesso!")
}
if(peça02.length < 3) {
    console.log("error, peça fora do padrão!!")
}else{
    console.log("cadastro com sucesso!")
}
if(peça03.length < 3) {
    console.log("error, peça fora do padrão!!")
}else{
    console.log("cadastro com sucesso!")
}
if(peça04.length < 3) {
    console.log("error, peça fora do padrão!!")
}else{
    console.log("cadastro com sucesso!")
}
if(peça05.length < 3) {
    console.log("error, peça fora do padrão!!")
}else{
    console.log("cadastro com sucesso!")
}
if(peça06.length < 3) {
    console.log("error, peça fora do padrão!!")
}else{
    console.log("cadastro com sucesso!")
}