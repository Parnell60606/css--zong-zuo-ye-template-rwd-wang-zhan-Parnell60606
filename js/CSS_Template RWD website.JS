const topSearchIcon = document.getElementById('topSearchIcon') // 搜尋btn
const topSearchInput = document.getElementById('top-search') // 搜尋input

//  函式
// topSearchIcon.onclick = function (){
// // topSearchInput.style.display="none";
// alert('hello')
// }
// console.log(topSearchInput.style.display)

// 箭頭函式
// topSearchIcon.onclick = () => {
//     topSearchInput.classList.toggle('display-none')
// }

// 事件監聽寫法
topSearchIcon.addEventListener('click', () => {
    topSearchInput.classList.toggle('display-none')
})

// 滑鼠點輸入欄位外
topSearchInput.onblur = () => {
    // topSearchInput.classList.remove('display-none')
    topSearchInput.classList.toggle('display-none')

}




