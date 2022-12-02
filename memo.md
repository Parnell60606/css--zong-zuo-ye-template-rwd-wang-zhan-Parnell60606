# IntersectionObserver

- `onscroll`，瀏覽器會在每一次的捲動都執行監聽的動作。  

- 而 `IntersectionObserver` 這個 API，很純悴的就是指定的目標出現在觀察器（window）中時，就傳一個 true 來告知。  

<a href="https://www.letswrite.tw/intersection-oserver-basic/">IntersectionObserver：上篇 – 基本介紹及使用</a>


## li boder重複

```css
li {
    /* 減少重複邊框 */
    margin: 0px -1px -1px 0px;
    border:1px solid red;
    z-index:1;
}

li:hover{
    border:1px solid black;
    z-index:100;
}
```

就不會有上下邊框重疊 (2px)， 調整margin之後線條被擋的問題了。