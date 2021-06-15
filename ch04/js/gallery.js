 //오른쪽 이미지 클릭 > 이미지 넘기기
 var num = 1;
 function nextGallery(){
     
     num += 1;
     if(num > 7){
         num=1;
        }
     document.getElementById('gallery').src="../images/img" + num + ".jpg";
 }
 var num = 1;
 function prevGallery(){
     num -= 1;
     if(num < 1){
         num = 7;
        }
     document.getElementById('gallery').src="../images/img" + num + ".jpg";
 }