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
        { name: 'Florida', count: 21 },
        { name: 'Tahoe', count: 15 },
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

function filterImages(keyword) {
    var allPhotos = document.querySelectorAll('.photo');
    var filteredPhotos = [];
    
    allPhotos.forEach(function(photo) {
        var filename = photo.querySelector('img').getAttribute('alt');
        if (keyword === 'All' || filename.includes(keyword)) {
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
    }, filteredPhotos.length * 50); // setTimeout 딜레이 값은 필요에 따라 조정 가능
}

window.addEventListener('DOMContentLoaded', function() {
    // 이미지 요소들을 선택합니다.
    var photos = document.querySelectorAll('.photo');

    // 스크롤 이벤트 리스너 등록
    window.addEventListener('scroll', function() {
        // 뷰포트의 상단과 하단 위치 가져오기
        var viewportTop = window.scrollY;
        var viewportBottom = viewportTop + window.innerHeight;

        // 각 이미지의 위치 가져오기
        photos.forEach(function(photo, index) {
            var photoRect = photo.getBoundingClientRect();

            // 이미지의 중심을 기준으로 처리합니다.
            var photoCenterY = photoRect.top + photoRect.height / 2;

            // 이미지가 뷰포트 안에 있고, 보이지 않는 경우에만 처리
            if (photoCenterY > viewportTop && photoCenterY < viewportBottom && !photo.classList.contains('visible')) {
                photo.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                photo.style.opacity = '1';
                photo.style.transform = 'translateY(0)';

                setTimeout(function() {
                    photo.classList.add('visible');
                    photo.style.opacity = '1';
                    photo.style.transform = 'translateY(0)';
                }, index * 50); // 각 이미지마다 0.05초 간격으로 애니메이션을 적용
            }
        });
    });
});
