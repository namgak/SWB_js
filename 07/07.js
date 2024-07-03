document.addEventListener('DOMContentLoaded', ()=>{
    //DOM요소 가져오기
    const txt1 = document.querySelector('#txt1');
    const txt2 = document.querySelector('#txt2');
    const bt1 = document.querySelector('#bt1');
    const bt2 = document.querySelector('#bt2');

    //회문 확인
    bt1.addEventListener('click',(e)=>{
        e.preventDefault();

        if(txt1.value == '') return;

        //콘솔에 문자열 순서대로 한글자씩 출력하기
        console.log(txt1.value);               //문자열 내용 가져오기
        console.log(txt1.value.length);        //문자열 글자 수 확인
        console.log(txt1.value[1])             //문자열 접근 (2번쨰 글자)
        console.log(txt1.value.charAt(0));     //문자열 첫번째 글자
        for(let c of txt1.value){              //문자열 모두 순회
            console.log(c)
        }

        //문자열 거꾸로 콘솔에 출력해보기
        let tm='';
        for(let i = txt1.value.length -1; i>=0; i--){
            tm = tm + txt1.value[i];
        } 
        console.log(tm);
        
        tm=txt1.value.split('').reverse().join('') //join을 써서 배열안에 있는것들을 묶어줬다.
        console.log(tm)

        //문자열 변경 => 공백 제거로 사용
        let txt = txt1.value.replaceAll(' ','');

        //회문인지 확인
        if(txt1.value === tm){
            txt2.value = '회문입니다.';
        }
        else{
            txt2.value = '회문이 아닙니다.'
        }
        
        //숫자 합계
        bt2.addEventListener('click', (e)=>{
            e.preventDefault();

            if(txt1.value ==''){
                alert('글자를 입력하세요.');
                txt1.focus();
                return;
            }

            let sum=0;
            for(let c of txt1.value){ 
                //isNan은 숫자인 경우 false를 뱉어서, 앞에 !를 붙여 사용해 준다.
                if(!isNaN(c)){
                    sum = sum + parseInt(c);
                }
            }

            txt2.value=sum;

        });
    });
    
});