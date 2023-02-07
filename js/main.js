const searchEl = document.querySelector('.search');
const searchInput = searchEl.querySelector('input');
// const searchInput = document.querySelector('.search input');

searchEl.addEventListener('click', function(){
    searchInput.focus();
});

searchInput.addEventListener('focus', function(){
    searchEl.classList.add('focused');
    searchInput.setAttribute('placeholder','통합검색');
});

// blur : focus의 반대말, 비포커스
searchInput.addEventListener('blur', function(){
    searchEl.classList.remove('focused');
    searchInput.setAttribute('placeholder','');
});

const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function(){
    /*_.throttle(함수, 시간ms) : 시간마다 함수를 실행 (과부하 방지) */
    console.log(window.scrollY);
    /* window.scrollY : (Window 객체 이용) 스크롤 좌표 추출하기  */
    if(window.scrollY>500){
        gsap.to(badgeEl, .6, { // gsap.to(요소, 지속시간, 옵션)
            opacity:0,
            display:'none'
        });
        /* badgeEl.style.opacity=0;
        badgeEl.style.display='none';
        style로 구현을 하면 자연스럽게 사라지는 구현을 하기 어렵다
        >> gsap 라이브러리 이용*/
        
    }else{
        // badgeEl.style.display = 'block';
        gsap.to(badgeEl, .6, {
            opacity:1,
            display:'block'
        });
        // badgeEl.style.opacity=1;
        // badgeEl.style.display='block';
    }
}, 300));


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){
    // fadeEls는 배열로 받아들이기 때문에 forEach로 반복실행해줘야 함
    gsap.to(fadeEl, 1, { // gsap.to(요소, 시간ms, {옵션})
        opacity:1, // 요소 보이기
        delay:(index + 1) * .7  // 0.7, 1.4, 2.1, 2.7
        /* delay는 지연 시간이다.
           index는 0으로 시작하기 때문에 (index + 1) 1을 더하여
           1부터 시작하게 하고,
           fadeEls[0] : (1)*0.7 = 0.7초 지연 시간 후 시작,
           fadeEls[1] : (2)*0.7 = 1.4초 지연 시간 후 시작,
           fadeEls[2] : (3)*0.7 = 2.1초 지연 시간 후 시작,
           fadeEls[3] : (4)*0.7 = 2.7초 지연 시간 후 시작으로
           동작하게 된다.*/           
    });
});

// new Swiper (선택자, 옵션)
new Swiper(".notice-line .swiper",{
    direction:'vertical',
    autoplay:true,
    loop:true
});

new Swiper(".promotion .swiper",{
    // direction:'horizontal', 기본 값
    slidesPerView : 3, // 한번에 보여줄 수 있는 슬라이드 개수
    spaceBetween : 10, // 슬라이드 사이 여백 (px)
    centerSlides:true,   // 1번 슬라이드가 가운데 보이기
    loop:true,
    autoplay:{
        display:5000
    },
    pagination:{
        el:".notice .swiper-pagination",
        clickable:true
    },
    navigation:{
        nextEl: '.notice .swiper-button-next',
        prevEl: '.notice .swiper-button-prev',
    },
    scrollbar: {
        el: '.notice .swiper-scrollbar',
      }
});


new Swiper('.awards .swiper', {
    // direction: 'horizontal',     // 수평 슬라이드
    autoplay: true,                 // 자동 재생 여부
    loop: true,                     // 반복 재생 여부
    spaceBetween: 30,               // 슬라이드 사이 여백
    slidesPerView: 5,               // 한 번에 보여줄 슬라이드 개수
    // slidesPerGroup: 5,           // 한 번에 슬라이드 할 개수(전체 개수로 나뉘어야 함)
    navigation: {                       // 슬라이드 이전/다음 버튼 사용 여부
      prevEl: '.awards .swiper-button-prev',   // 이전 버튼 선택자
      nextEl: '.awards .swiper-button-next'    // 다음 버튼 선택자
    }
  })
  


  /**
 * 올해가 몇 년도인지 계산
 */
const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear()