// .icon-menu - класс иконки бургера, .menu - класс меню
$('.icon-menu').click(function() {
	$(this).toggleClass('active');
	$('.bottom-header__menu').toggleClass('active');
	$('body').toggleClass('lock');
});

$('.bottom-header__link').click(function() {
	$('.icon-menu').removeClass('active');
	$('.bottom-header__menu').removeClass('active');
	$('body').removeClass('lock');
});