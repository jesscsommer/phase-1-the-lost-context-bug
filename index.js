const messageConfig = {
  frontContent: "Happy Birthday, Odin One-Eye!",
  insideContent: "From Asgard to Nifelheim, you're the best all-father ever.\n\nLove,",
  closing: {
      "Thor": "Admiration, respect, and love",
      "Loki": "Your son"
  },
  signatories: [
      "Thor",
      "Loki"
  ]
};

//! here thisArg (this) is passed into the forEach as another argument
const printCardThisArg = function () {
  console.log(this.frontContent);
  console.log(this.insideContent);

  this.signatories.forEach(function (signatory) {
    const message = `${this.closing[signatory]}, ${signatory}`
    console.log(message);
  }, this);
};

//! something similar would be to bind content 
// const contextBound = function (signatory) {
//   do stuff
// }.bind(this);
// this.signatories.forEach(contextBound);

// printCardThisArg.call(messageConfig);

//! here you can save this as a variable and so that you can now access it as part of function level scope 

const printCardClosure = function () {
  console.log(this.frontContent);
  console.log(this.insideContent);

  const outerContext = this;

  this.signatories.forEach(function (signatory) {
    const message = `${outerContext.closing[signatory]}, ${signatory}`;
    console.log(message);
  });
};

// printCardClosure.call(messageConfig);

//! here you can use an arrow function to absorb the parent's context

const printCardArrowFunction = function () {
  console.log(this.frontContent);
  console.log(this.insideContent);
  this.signatories.forEach((signatory) =>
    console.log(`${this.closing[signatory]}, ${signatory}`)
  );
};

printCardArrowFunction.call(messageConfig);