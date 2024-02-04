const $logo = document.querySelector('header>.logo');
const $top = document.querySelector('.item-footer>a>img');
const $topBox = document.querySelector('footer>a>img');
const $btnPrev = document.querySelector('.slides>.prev');
const $btnNext = document.querySelector('.slides>.next');
const $container = document.querySelector('.slides>.slides-container');


const $indicators = document.querySelectorAll('.slide-thmbs>ul>li>a');
const $indicator = document.querySelector('.slide-thmbs>ul>li>a');


let nowIdx = 1;//현재 보여지고 있는 슬라이드의 인덱스 번호
let oldIdx = nowIdx;//직전

//공통 함수
const pageAni = function () {


    //스크롤바의 top값에 변화를 줘서 smooth하게 움직이게 설정
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: 'smooth'
    });
};


//로고에 대한 클릭이벤트
$logo.addEventListener('click', function (evt) {
    evt.preventDefault();

    pageAni();//클릭이벤트만 강제발생 가능 
});

//화살표, 화살표 박스에 대한 클릭이벤트
$top.addEventListener('click', function (evt) {
    evt.preventDefault();

    pageAni();
});

$topBox.addEventListener('click', function (evt) {
    evt.preventDefault();

    pageAni();


});

//이전버튼
$btnPrev.addEventListener('click', function (evt) {
    evt.preventDefault();

    oldIdx = nowIdx;
    nowIdx--;

    $container.style.left = -(100 * nowIdx) + '%';

    if (nowIdx === 0) {
        setTimeout(function () {
            $container.style.transition = 'none';
            $container.style.left = '-1000%';
        }, 400);
        nowIdx = 10;
    }

    $container.style.transition = 'all 0.4s ease-in-out';

});

// 다음버튼
$btnNext.addEventListener('click', function (evt) {
    evt.preventDefault();

    oldIdx = nowIdx;
    nowIdx++;

    $container.style.left = -(100 * nowIdx) + '%';

    if (nowIdx === 11) {
        setTimeout(function () {
            $container.style.transition = 'none';
            $container.style.left = '-100%';
        }, 400);
        nowIdx = 1;
    }

    $container.style.transition = 'all 0.4s ease-in-out';

});


// 스크롤바 이동 시 화살표 박스 이벤트

document.addEventListener("scroll", () => {
  if (window.pageYOffset > 50) {
    $topBox.classList.add("none");
   } else {
    $topBox.classList.remove("none");
   }
});