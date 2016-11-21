function crisscross() {
$('down-left').style.bottom = '-' + window.scrollY + 'px';
$('down-right').style.bottom = '-' + window.scrollY + 'px';
$('left').style.left = '-' + window.scrollY + 'px';
$('right').style.right = '-' + window.scrollY + 'px';
}