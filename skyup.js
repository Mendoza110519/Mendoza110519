window.onscroll = function() {mySticky()};
var myHeader = document.getElementById('myHeader');
var sticky = myHeader.offsetTop;

const mySticky = () => {
if (window.scrollY > sticky) {
    myHeader.classList.add('sticky');
} else {
    myHeader.classList.remove('sticky');
}
};

