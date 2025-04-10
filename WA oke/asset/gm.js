document.addEventListener("DOMContentLoaded", function () {
    const gambar = document.getElementById('img-1');
    const gambarList = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];

    let lastIndex = localStorage.getItem('lastIndex');

    if (lastIndex === null) {
        
        lastIndex = 0;
    } else {
        
        lastIndex = (parseInt(lastIndex) + 1) % gambarList.length;
    }

    const gambarAcak = gambarList[lastIndex];

    gambar.src = 'image/1/' + gambarAcak;

    localStorage.setItem('lastIndex', lastIndex);
});