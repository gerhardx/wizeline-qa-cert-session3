'use strict';

module.exports = {
  generateRandomTask
};

var faker = require('faker');

function generateRandomTask(userContext, events, done) {
  const task = `${faker.lorem.sentence()}`;
  userContext.vars.task = task;
  console.log(task);
  return done();
}