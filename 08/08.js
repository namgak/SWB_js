document.addEventListener("DOMContentLoaded", () => {
    //DOM 요소 가져오기
    const txt1 = document.querySelector('#txt1');
    const btAdds = document.querySelectorAll('.btAdds');

    //배열 만들기
    let arr = [];

    for (let bt of btAdds) {
        bt.addEventListener("click", () => {
            console.log(bt.textContent)

            if (bt.textContent == '사과') {
                arr.push('🍎')
            }
            else if (bt.textContent == '바나나') {
                arr.push('🍌')
            }
            else if (bt.textContent == '오렌지') {
                arr.push('🍊')
            }
            else if (bt.textContent == '수박') {
                arr.push('🍉')
            }
            console.log(arr)

            txt1.value = arr.join(' ')
        });
    }


});