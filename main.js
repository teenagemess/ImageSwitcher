function ubah(){
    let displayImage = document.getElementById('gambar')
    if(displayImage.src.match('gunung.jpg')){
        displayImage.src = 'gunung3.jpg'
    } else {
        displayImage.src = 'gunung.jpg'
    }
}