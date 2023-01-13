const body = document.getElementsByTagName('body');
const header = document.createElement('header');
header.className = "nav";
const nav = document.createElement('nav');

const homeDiv = document.createElement('div');
homeDiv.className = "home";
const homeBtn = document.createElement('a');
homeBtn.href = "../../";
homeBtn.innerText = "Home";

const pagingDiv = document.createElement('div');
pagingDiv.className = "paging";

if (prev != null) {
    const prevBtn = document.createElement('a');
    prevBtn.href = prev.href;
    prevBtn.innerText = prev.label;
    prevBtn.className = "prev";
    pagingDiv.append(prevBtn);
}
if (next != null) {
    const nextBtn = document.createElement('a');
    nextBtn.href = next.href;
    nextBtn.innerText = next.label;
    nextBtn.className = "next";
    pagingDiv.append(nextBtn);
}

homeDiv.append(homeBtn);
nav.append(homeDiv);
nav.append(pagingDiv);
header.append(nav);
window.onload = () => {
    document.body.prepend(header);
}
