export function createElement(tag, innerText) {
    let ele = document.createElement(tag);
    ele.innerText = innerText
    document.body.appendChild(ele)
}