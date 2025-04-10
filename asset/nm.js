document.addEventListener("DOMContentLoaded", function() {
    const teks = document.getElementById('nm');
    const teksList = ['Elisa', 'Kailyn', 'Natalie', 'Verdiana', 'Evangelina'];

    let lastIndex = localStorage.getItem('lastIndex');

    if (lastIndex === null) {
        
        lastIndex = 0;
    } else {
        
        lastIndex = (parseInt(lastIndex) + 1) % teksList.length;
    }

    const teksAcak = teksList[lastIndex];

    teks.textContent = teksAcak;

    localStorage.setItem('lastIndex', lastIndex);
});