var makeDancer = function (top, left, timeBetweenSteps, dancer) {
  this.$node = dancer || $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;

  this.step();

  this.setPosition(top, left);

};

makeDancer.prototype.step = function () {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function (top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};
