function toggleMenu() {
    var menu = document.querySelector('.menu');
    var menuBackground = document.querySelector('.menu-background');

    menu.classList.toggle('menu-show');
    menuBackground.classList.toggle('menu-background-show');
}

function toggleTab(tabId) {
    var allTabs = document.querySelectorAll('.tab-content');
    allTabs.forEach(function(tab) {
        tab.classList.remove('active');
    });

    
    var tabContent = document.getElementById(tabId);
    if (tabContent) {
        tabContent.classList.add('active');
    }
}

window.addEventListener('DOMContentLoaded', function() {
    toggleTab('about');
});


window.addEventListener('DOMContentLoaded', function() {
    var gallery = document.querySelector('.gallery');

    
    for (var i = 1; i <= 21; i++) {
        var photo = document.createElement('div');
        photo.classList.add('photo');
        var filename = 'Florida' + (i <= 9 ? '0' + i : i);
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
        
        });
        gallery.appendChild(photo);
    }
    
    for (var j = 1; j <= 15; j++) {
        var photo = document.createElement('div');
        photo.classList.add('photo');
        var filename = 'Tahoe' + (j<=9 ? '0' + j :j);
        photo.innerHTML = '<img src="Assets/imgs/' + filename + '.jpg" alt="Photo ' + filename + '">';
        var waveEffect = document.createElement('div');
        waveEffect.classList.add('wave-effect');
        photo.appendChild(waveEffect);
    
        photo.addEventListener('click', function() {
            var waveEffect = this.querySelector('.wave-effect');
            waveEffect.style.opacity = '1';
            setTimeout(function(){
                waveEffect.style.opacity = '0';
            }, 300);
        })
        gallery.appendChild(photo);
    }
    
    for (var k = 1; k <= 27; k++) {
        var photo = document.createElement('div');
        photo.classList.add('photo');
        var filename = 'Vietnam' + (k <= 9 ? '0' + k : k);
        photo.innerHTML = '<img src="Assets/imgs/' + filename + '.jpg" alt="Photo ' + filename + '">';
        var waveEffect = document.createElement('div');
        waveEffect.classList.add('wave-effect');
        photo.appendChild(waveEffect);
    
        photo.addEventListener('click', function() {
            var waveEffect = this.querySelector('.wave-effect');
            waveEffect.style.opacity = '1' ;
            setTimeout(function() {
                waveEffect.style.opacity = '0';
            }, 300);
        });
        gallery.appendChild(photo);
    }
    
// When a menu icon contacts imgs, the color changes.
var menuIcon = document.querySelector('.menu-icon');

window.addEventListener('scroll', function() {
  
    var scrollPosition = window.scrollY;

  
    var photos = document.querySelectorAll('.photo');


    var contact = false;

   
    photos.forEach(function(photo) {
       
        var photoBottom = photo.offsetTop + photo.offsetHeight;

       
        if (scrollPosition >= photo.offsetTop && scrollPosition <= photoBottom) {
            menuIcon.style.backgroundColor = 'silver'; 
            contact = true; 
        }
    });

    
    if (!contact) {
        menuIcon.style.backgroundColor = '#000'; 
    }

    var tahoeImages = document.querySelectorAll('img[alt^="Tahoe"}');
    if (tahoeImages.length > 0) {
        menuIcon.style.backgroundColor = 'blue';
    }

    var vietnamImages = document.querySelectorAll('img[alt^="Vietnam"}');
    if (vietnamImages.length > 0) {
        menuIcon.style.backgroundColor = 'yellow';
    }
});
});




document.querySelectorAll('.photo').forEach(item => {
    item.addEventListener('click', event => {
        const imgSrc = item.querySelector('img').src;
        openModal(imgSrc);
    });
});

function openModal(imgSrc) {
    const modal = document.getElementById('myModal');
    const modalImg = document.getElementById('modalImg');
    modalImg.src = imgSrc;
    modal.style.display = 'block';
}


function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

window.addEventListener('click', function(event) {
    const modal = document.getElementById('myModal');
    if (event.target === modal) {
        closeModal();
    }
});

//filter

function filterAndSortImages(Florida) {
    
    var filteredPhotos = Array.from(allPhotos).filter(function(photo) {
        var filename = photo.querySelector('img').src;
        return filename.includes(keyword);
    });

    
    filteredPhotos.sort(function(a, b) {
        var filenameA = a.querySelector('img').src;
        var filenameB = b.querySelector('img').src;
        return filenameA.localeCompare(filenameB);
    });

    
    gallery.innerHTML = ''; 
    filteredPhotos.forEach(function(photo) {
        gallery.appendChild(photo);
    });
}


