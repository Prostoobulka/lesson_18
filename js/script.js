// "use strict"
// var myMobile = {
// 	Android: function () {
// 		return navigator.userAgent.match(/Android/i);
// 	},
// 	BlackBerry: function () {
// 		return navigator.userAgent.match(/BlackBerry/i);
// 	},
// 	iOS: function () {
// 		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
// 	},
// 	Opera: function () {
// 		return navigator.userAgent.match(/Opera Mini/i);
// 	},
// 	Windows: function () {
// 		return navigator.userAgent.match(/IEMobile/i);
// 	},
// 	any: function () {
// 		return (myMobile.Android() ||
// 			myMobile.BlackBerry() ||
// 			myMobile.iOS() ||
// 			myMobile.Opera() ||
// 			myMobile.Windows());
// 	}
// };

// if (myMobile.any()) {
// 	document.body.classList.add("_touch");
// 	let menu = document.querySelectorAll(".menu-burger");
// 	if (menu.length > 0) {
// 		for (let index = 0; index < menu.length; index++) {
// 			const menus = menu[index];
// 			menus.addEventListener("click", function (e) {
// 				menus.parentElement.classList.toggle("_active");
// 			});
// 		}
// 	}
// } else {
// 	document.body.classList.add("_pc");
// }

// Бургер
const iconMenu = document.querySelector(".menu-burger");
if (iconMenu) {
	// const menuBody = document.querySelector(".header__menu");
	iconMenu.addEventListener("click", function (e) {
		// document.body.classList.toggle("_lock")
		iconMenu.classList.toggle("_active");
		// menuBody.classList.toggle("_active");
	});
}