const topSearchIcon = document.getElementById('topSearchIcon') // 搜尋btn
const topSearchInput = document.getElementById('top-search') // 搜尋input

// topSearchIcon.onclick = function (){
// // topSearchInput.style.display="none";
// alert('hello')
// }
// console.log(topSearchInput.style.display)


topSearchIcon.onclick = () => {
    // topSearchInput.style.display="none";
    // console.log(topSearchInput.style.display)

    topSearchInput.classList.toggle('display-none')
}

// console.log(topSearchIcon)




