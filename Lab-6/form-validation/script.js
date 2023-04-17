const welcomePage = document.getElementById('welcome-page');
const secondPage = document.getElementById('second-page');

nextPages = [secondPage, welcomePage];
backPages = [];

function showDiv() {
    const toRemove = nextPages.pop();
    toRemove.style.display = 'none';
    backPages.push(toRemove);
    const onScreen = nextPages.pop();
    onScreen.style.display = 'inline-block';
    nextPages.push(onScreen);
}
