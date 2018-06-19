var makeMovingDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps, $('<img class="banana" src="http://images5.fanpop.com/image/photos/30600000/Banana-gif-bananas-30667445-100-100.gif">'));

};
makeMovingDancer.prototype = Object.create(makeDancer.prototype);
makeMovingDancer.prototype.constructor = makeMovingDancer;

makeMovingDancer.prototype.step = function () {};
