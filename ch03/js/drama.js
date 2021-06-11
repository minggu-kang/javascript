        // 나이가 15세 이상이면 '드라마 관람가' 이고, 아니면 "드라마 관람 불가" 출력
        //var age = 16;
        var age = prompt("나이를 입력해주세요.");
        if(age !== null){
            if(age >= 15){
                document.write("드라마 관람가 입니다 <br>");
            }
            else{
                document.write("드라마 관람 불가 <br> ");
            }
                document.write("나이는 <span class='accent'>" + age + "</span>세 입니다.");
        }else{
            document.write("입력이 최소되었습니다.")
        }