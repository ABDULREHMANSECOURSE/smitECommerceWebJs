function displayNoneOrOther(element, currentDisplay) {
    const el = document.querySelector(element)
    el.style.display = el.style.display === currentDisplay ? "none" : currentDisplay
}
localStorage.setItem('a',"aaa")