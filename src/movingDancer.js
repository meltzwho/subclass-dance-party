var makeMovingDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, 100, timeBetweenSteps, $('<img class="banana dancer" src="http://images5.fanpop.com/image/photos/30600000/Banana-gif-bananas-30667445-100-100.gif">'));

};
makeMovingDancer.prototype = Object.create(makeDancer.prototype);
makeMovingDancer.prototype.constructor = makeMovingDancer;

makeMovingDancer.prototype.step = function () {};
