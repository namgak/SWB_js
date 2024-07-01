const convert = (sel1, sel2, lb1,lb2,txt1,txt2) =>{
    if (sel1.value === '℃') { //섭씨 온도 => 화씨 온도
        sel2.value = '℉';
        lb1.textContent = '℃';
        lb2.textContent = '℉';
       
    }
    else { //화씨 온도 => 섭씨 온도
        sel2.value = '℃';
        lb2.textContent = '℃';
        lb1.textContent = '℉';
       
    }
}



document.addEventListener('DOMContentLoaded', () => {
    const sel1 = document.querySelector('#sel1');
    const sel2 = document.querySelector('#sel2');
    //input
    const txt1 = document.querySelector('#txt1');
    const txt2 = document.querySelector('#txt2');

    //label
    const lb1 = document.querySelector('#lb1');
    const lb2 = document.querySelector('#lb2');

    sel1.addEventListener('change', () => {
        convert(sel1, sel2, lb1,lb2,txt1,txt2);
        if (txt1.value != '' && lb1.textContent == '℃') {
            txt2.value = (9 / 5) * txt1.value + 32;
        } //txt가 공백이 아니면, 계산한다.
        else if(txt1.value != '' && lb1.textContent == '℉'){
            txt2.value = (txt1.value - 32) * (5 / 9);
        }
    });

    sel2.addEventListener('change', () => {
        convert(sel2, sel1, lb2,lb1,txt1,txt2);
        if (txt1.value != '') {
            txt2.value = (txt1.value - 32) * (5 / 9);
        } //txt가 공백이 아니면, 계산한다.
        
    });

});