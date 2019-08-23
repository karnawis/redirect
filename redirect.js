"use strict";
const config = require('./config');


const refresh = function(config) {
	return {
		get: function(req, res) {
			const url = config.news.url;
			res.redirect(url);
		}
	};
};


const add = (a,b) => {
	return a+b;
}

module.exports = {
	add, refresh
};