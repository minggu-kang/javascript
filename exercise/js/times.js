var count = 0;
var num =parseInt(prompt("몇 까지 3의 배수를 찾을까요?"));
var i;
for( i = 1; i <= num ; i++){
    if( i % 3 === 0){
        count++;
        document.write(i + '. ');
    }
}
document.write('<Br>');
document.write("<p>3의 배수의 개수 :" + count + "</p>");