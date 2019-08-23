"use strict";
const { expect } = require('chai');
const sinon = require("sinon");
const { add }= require("./redirect");


describe('add', () => {
	it('should return a number', () => {
		expect(add(2,3)).to.equal(5);
	});
});



describe('redirect', () => {
	let sut;
	let res;
	let config;
	let req;

	before(() => {
		sut = require("./redirect");
		res = {
			redirect: sinon.stub()
		};

		config = {
			news: {
				url: '/hello'
			}
		};
		req = {
			path: '/hello'
		};

	});

	afterEach(() => {
		res.redirect.reset();
	});

	it('should redirect to given URL', () => {
		sut.refresh(config).get(req, res);
		expect(res.redirect.calledOnce).to.equal(true);
		expect(res.redirect.firstCall.args[0]).to.equal(config.news.url);
	});
});