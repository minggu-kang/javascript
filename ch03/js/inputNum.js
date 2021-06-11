        
        var i = 1;
        var inputNum = prompt("숫자를 입력하세요");
        if(inputNum !== null){;
            while(true){
                document.write(i + "<br>");
                i += 1;
                        
                if( i > inputNum){
                break;
                }
            }
        }else{
            document.write("입력이 취소 되었습니다.")
        }   