var makeSpinningDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps, $('<img class="kitten" src="https://placekitten.com/50/50">'));
  
};
makeSpinningDancer.prototype = Object.create(makeDancer.prototype);
makeSpinningDancer.prototype.constructor = makeSpinningDancer;
  
makeSpinningDancer.prototype.step = function() {};