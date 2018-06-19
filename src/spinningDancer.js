var makeSpinningDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps, $('<img class="kitten dancer" src="https://placekitten.com/80/80">'));

};
makeSpinningDancer.prototype = Object.create(makeDancer.prototype);
makeSpinningDancer.prototype.constructor = makeSpinningDancer;

makeSpinningDancer.prototype.step = function () {};
