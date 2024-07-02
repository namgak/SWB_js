/* 
업다운게임
1. DOM 요소 가져오기
2. 확인 버튼 처리
    - 확인 버튼 내용이 '확인'이 아니면 초기화 
    - 랜덤수 생성(초기화 되기 전까지 한번만 생성) => flag 변수
    - 텍스트박스의 숫자와 비교 : 크면 -> 다운, 같으면 -> 성공, 작으면 -> 업
    - 비교 후 이미지 변경

3. 성공하면
    - 텍스트 박스를 숨김
    - 버튼의 글자를 변경

4. 초기화
    - 이미지는 what
    - 텍스트 상자가 보이게
    - 버튼의 이름을 확인으로
    - 랜덤 변수가 생성도리 수 있도록 => flag 변수

*/

document.addEventListener('DOMContentLoaded', () => {
    // 1. DOM 요소 가져오기
    const img = document.querySelector('img'); //테그 selector
    const txt1 = document.querySelector('input[type=number]') // 속성
    const btok = document.querySelector('#btok') //id

    //랜덤수 생성 제어 변수
    let flag = true; //true 이면 랜덤수 생성, false이면 랜덤수 생성하면 안 됨

    //랜덤수
    let n = 0;

    //초기화 함수
    const init =() => {
        img.setAttribute('src', './img/what.png');
        txt1.value = '';
        txt1.style.display = 'inline';
        btok.textContent ='확인';
        flag = true;
    }


    //2. 확인 버튼 처리
    btok.addEventListener('click', () => {

        //확인버튼이 아닌 경우
        if (btok.textContent != '확인'){
            init(); //초기화 함수 호출
            return
        }

        if(flag){ //랜덤수 생성
            n=Math.floor(Math.random() * 100) + 1; //1~100까지 랜덤 수 생성
            console.log((n))
            flag=false; //랜덤수를 하나 생성하면 더이상 생성하지 않도록 flag를 false로 

        }
        
        //숫자 입력 확인
        if (txt1.value == ''){ //공백이면
            alert('숫자를 입력하세요.');
            txt1.focus();
            return
        } 

        //3.비교
        let usern = parseInt(txt1.value); //사용자입력수
        if (n > usern){ //크면
            img.setAttribute('src', './img/up.png')

        }
        else if(n<usern){ //작으면
            img.setAttribute('src', './img/down.png')

        }
        else { //일치
            img.setAttribute('src', './img/good.png')
            txt1.style.display = 'none';
            btok.textContent = '번호를 다시 생성하세요.'

        }


    });

});

