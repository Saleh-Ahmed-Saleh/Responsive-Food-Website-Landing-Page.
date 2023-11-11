// Toggle Search Bar
function toggleSearch() {
    const search = document.querySelector('.search');
    search.classList.toggle('active');
}

// Toggle 3D Flipping effect
function toggleFlip(){
    const imgBox = document.querySelector('.imgBox');
    const btn = document.querySelector('.btn');
    imgBox.classList.toggle('active');
    btn.classList.toggle('active');
}


// Swap the main image

function changeImg(img){
    imgBox = document.querySelector('.food-img');
    imgBox.src = `../images/${img}`;
}

