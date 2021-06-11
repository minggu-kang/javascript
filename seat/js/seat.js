var customer = prompt("입장객은 몇 명인가요?");
        
var colNum = prompt("한 줄에 몇 명씩 앉나요?");

var rowNum;

//입장객 수에 따른 행과 열 계산

if(customer % colNum === 0){
    rowNum = parseInt(customer / colNum );
}else{
    rowNum = parseInt(customer / colNum + 1);
}
// document.write(rowNum + " 개의 줄이 필요합니다.");

//좌석 번호 배치

var i , j ;
document.write("<table>");
for(i = 0; i < rowNum ; i++){
    document.write("<tr>");
    for(j = 1; j <=colNum ; j++ ){
        seatNo = i * colNum + j;
        if(seatNo > customer) break;
        document.write("<td>좌석" + seatNo + " </td>");
    }
    document.write("</tr>");
}
document.write("</table>")