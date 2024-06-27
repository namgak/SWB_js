//  // 문서가 계속 감시하는 것. 어떤 이벤트가 발생되는지
// document.addEventListener("DOMContentLoaded", function(){
//     console.log('안녕!!')
// }); 

document.addEventListener("DOMContentLoaded",()=>{
    console.log("화살표 합수!!")

    //변수선언
    //const msg = document.getElementById('msg'); //자바스크립트에서 제어를 할 수 있는 컴포넌트를 하나 가져오는게 된다.
    const msg = document.querySelector('#msg') //css에서의 selector와 동일하게 #을 사용해서 불러온다.
    const bt = document.querySelector('button'); //태그 selector 사용함//querySelector은 한 개만 찾는거고 all은 한개 이상
    
    //msg.innerHTML = '<h1>안녕</h1>' //html이니까 html 코드가 들어가면 된다.
    //msg.textContent = '<h1>안녕</h1>'
    

    //버튼을 누르면 메시지 영역에 있는 키워드 보여주기
    bt.addEventListener("click", ()=> {
       if (msg.innerHTML == '안녕') msg.innerHTML = "잘가";
       else msg.innerHTML ="안녕" ;
    });

});



