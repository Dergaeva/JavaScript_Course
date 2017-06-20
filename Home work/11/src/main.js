/*
 *
 * Сделайте 4 объекта - не усложняйте, просто наследование
 * через __proto__
 *
 - Пользователь
 - Верифицированный пользователь
 - Гость
 - База данных

 - База хранит информацию о пользователях
 - Пользователи знают мыло админа
 - админ знает пароль от базы данных
 - Гости могут зарегистрироваться в базе данных
 *
 *
 * */
var users = {
	login: "name",
	icon: "img",
	password: "vvv"
};
var admin = {
	login: "nik",
	icon: "img",
	password: "zzz",
	emailAdmin: "admin@gmail.com"
};
var guest = {
	register: true
};
var database =  {
	login: "name",
	icon: "img",
	passwordDataBase: "sss"
};
users.__proto__=admin;
admin.__proto__=database;
database.__proto__=guest;

//console.log(users);
// console.log(admin);
// console.log(guest);


