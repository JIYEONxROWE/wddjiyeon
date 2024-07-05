// 성능을 측정할 함수
function exampleFunction() {
    let sum = 0;
    for (let i = 0; i < 1000000; i++) {
        sum += i;
    }
    return sum;
}

// 성능 측정 시작
console.time('exampleFunction');

// 함수 실행
exampleFunction();

// 성능 측정 종료
console.timeEnd('exampleFunction');


function startLoader() {
    let counterElement = document.querySelector(".count p");
    let currentValue = 0;

    function updateCounter() {
        if (currentValue < 100) {
            let increment = Math.floor(Math.random()*10) + 1;
            currentValue = Math.min(currentValue + increment, 100);
            counterElement.textContent = currentValue;

            let delay = Math.floor(Math.random() * 200) + 25;
            setTimeout(updateCounter, delay);
        }
    }

    updateCounter();
}

window.addEventListener('DOMContentLoaded', function() {
startLoader();
gsap.to(".count", {opacity: 0, delay: 3.5, duration: 0.5});

let textWrapper = document.querySelector(".ml16");
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>" );

anime.timeline({loop : false})
.add({
    targets: '.ml16 .letter',
    translateY: [-100, 0],
    easing: "easeOutExpo" ,
    duration: 1500,
    delay: (el, i) => 30 * i
})

.add({
    targets: '.ml16 .letter',
    translateY: [0,100],
    easing: "easeOutExpo",
    duration: 3000,
    delay: (el, i) => 2000 + 30 * i
})

gsap.to(".pre-loader", {
    scale: 0.5,
    ease: "power4.inOut",
    duration: 2,
    delay: 3
});

gsap.to(".loader", {
    height: "0",
    ease: "power4.inOut",
    duration: 1.5,
    delay: 3.75
});

gsap.to(".loader-bg",{
    height: "0",
    ease: "power4.inOut",
    duration: 1.5,
    delay: 4,
});

gsap.to(".loader-2", {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
    ease: "power4.inOut",
    duration: 1.5,
    delay: 3.5
});

gsap.from(".header-text", {
    y: 200,
    ease: "power4.inOut",
    duration: 1.5,
    delay: 3.75,
    stagger: 0.05
});

gsap.to(".gallery", {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    ease: "power4.inOut",
    duration: 1.5,
    delay: 4.5,
    stagger: 0.25
});

});

function toggleMenu() {
    var menu = document.querySelector('.menu');
    var menuBackground = document.querySelector('.menu-background');

    menu.classList.toggle('menu-show');
    menuBackground.classList.toggle('menu-background-show');
}

function toggleTab(tabId) {
    const allTabs = document.querySelectorAll('.tab-content');
    const allDetails = document.querySelectorAll('.nav-details');

    allDetails.forEach(detail => {
        if (detail.id === tabId) {
            detail.classList.toggle('active');
        } else {
            detail.classList.remove('active');
        }
    });
}

window.addEventListener('DOMContentLoaded', function() {
    var initial = document.querySelector('.header-text');
    var image = document.querySelector('.gallery');

    window.addEventListener('scroll', function() {
        var initialRect = initial.getBoundingClientRect();
        var imageRect = image.getBoundingClientRect();

        // 이미지가 화면에 들어왔을 때 "J"의 색상 변경
        if (imageRect.top <= initialRect.bottom) {
            initial.style.color = 'white'; // 원하는 색상으로 변경
        } else {
            initial.style.color = 'black'; // 이미지가 화면에 없으면 원래 색상으로 복원
        }
    });
});

window.addEventListener('DOMContentLoaded', function() {
    var initial = document.querySelector('.footer');
    var image = document.querySelector('.gallery');

    window.addEventListener('scroll', function() {
        var initialRect = initial.getBoundingClientRect();
        var imageRect = image.getBoundingClientRect();

        // 이미지가 화면에 들어왔을 때 저작권표시 색 변경
        if (imageRect.bottom <= initialRect.top) {
            initial.style.color = 'grey'; // 원하는 색상으로 변경
        } else {
            initial.style.color = 'white'; // 이미지가 화면에 없으면 원래 색상으로 복원
        }
    });
});

window.addEventListener('DOMContentLoaded', function() {
    var gallery = document.querySelector('.gallery');

    // Add photos dynamically
    var photoSets = [
        { name: 'Bay', count: 22},
        { name: 'Tahoe', count: 15 },
        { name: 'Florida', count: 21 },
        { name: 'Newyork', count: 44},
        { name: 'La', count: 27},
        { name: 'Vietnam', count: 27 }
    ];

    photoSets.forEach(function(set) {
        for (var i = 1; i <= set.count; i++) {
            var photo = document.createElement('div');
            photo.classList.add('photo');
            var filename = set.name + (i <= 9 ? '0' + i : i);
            photo.innerHTML = '<img src="Assets/imgs/' + filename + '.jpg" alt="Photo ' + filename + '">';

            var waveEffect = document.createElement('div');
            waveEffect.classList.add('wave-effect');
            photo.appendChild(waveEffect);

            photo.addEventListener('click', function() {
                var waveEffect = this.querySelector('.wave-effect');
                waveEffect.style.opacity = '1';
                setTimeout(function() {
                    waveEffect.style.opacity = '0';
                }, 300);

                var imgSrc = this.querySelector('img').getAttribute('src');
                openModal(imgSrc);
            });

            gallery.appendChild(photo);
        }
    });

    function openModal(imgSrc) {
        const modalWrap = document.querySelector('.modal_wrap');
        const modalBg = document.querySelector('.modal_bg');
        const modalImg = modalWrap.querySelector('img');

        modalImg.setAttribute('src', imgSrc);
        modalWrap.style.display = "flex";
        modalBg.style.display = "block";

        // 모달 창을 화면 중앙에 위치시킵니다.
        modalWrap.style.top = '50%';
        modalWrap.style.left = '50%';
        modalWrap.style.transform = 'translate(-50%, -50%)';

        // 부드러운 페이드 인 효과를 추가합니다.
        setTimeout(function() {
            modalWrap.style.opacity = '1';
            modalBg.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'; // 검은 배경 추가
        }, 50); // 0.05초 후에 실행하여 부드럽게 보이도록 설정
    }

    // 모달 창 닫기 함수
    const closeModalBtn = document.querySelector('.modal_close');
    const modalBg = document.querySelector('.modal_bg');

    closeModalBtn.addEventListener('click', closeModal);
    modalBg.addEventListener('click', closeModal);

    function closeModal() {
        const modalWrap = document.querySelector('.modal_wrap');
        modalWrap.style.opacity = '0';
        modalBg.style.backgroundColor = 'rgba(0, 0, 0, 0)'; // 배경을 투명하게 만듭니다.

        setTimeout(function() {
            modalWrap.style.display = "none";
            modalBg.style.display = "none";
        }, 300); // 0.3초 후에 숨깁니다. 페이드 아웃 효과를 위해
    }
});

window.addEventListener('DOMContentLoaded', function() {
    filterImages('All'); // 페이지 로드시 모든 사진 표시
});

// 필터 버튼 클릭 이벤트 설정 (필요시 추가)
document.querySelectorAll('.filter-button').forEach(function(button) {
    button.addEventListener('click', function() {
        const keyword = this.getAttribute('data-filter').replace(/\s/g, '').toLowerCase(); // 공백 제거 후 소문자로 변환
        filterImages(keyword);
    });
});

function filterImages(keyword) {
    var allPhotos = document.querySelectorAll('.photo');
    var filteredPhotos = [];
    
    // 키워드를 소문자로 변환 및 공백 제거
    var lowerCaseKeyword = keyword.toLowerCase().replace(/\s/g, '');

    allPhotos.forEach(function(photo) {
        var filename = photo.querySelector('img').getAttribute('alt').toLowerCase().replace(/\s/g, '');
        
        console.log(`Filename: ${filename}, Keyword: ${lowerCaseKeyword}`);
        
        if (lowerCaseKeyword === 'all' || filename.includes(lowerCaseKeyword)) {
            filteredPhotos.push(photo);
            photo.style.opacity = '0';
            photo.style.transform = 'translateY(100%)'; // 초기 위치 설정 (아래에서 시작)
            photo.classList.add('active');
        } else {
            photo.style.opacity = '0';
            photo.style.transform = 'translateY(100%)';
            photo.classList.remove('active');
        }
    });

    // 필터링된 사진들을 세로로 정렬하여 나타나도록 설정
    filteredPhotos.forEach(function(photo, index) {
        setTimeout(function() {
            photo.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            photo.style.transform = 'translateY(0)';
            photo.style.opacity = '1';
        }, index * 50); // 사진별 순차 딜레이
    });

    // 모든 애니메이션이 완료된 후에 display 속성을 조정하여 표시 여부 설정
    setTimeout(function() {
        allPhotos.forEach(function(photo) {
            if (photo.classList.contains('active')) {
                photo.style.display = 'block';
            } else {
                photo.style.display = 'none';
            }
        });
    }, filteredPhotos.length * 50); // setTimeout 딜레이 값은 필요에 따라 조정 �