const hbs = require("hbs");

hbs.registerPartials(`${__dirname}/../views/partials`);

hbs.registerHelper("ifCond", function (v1, v2, options) {
  if (v1 === v2) {
    return options.fn(this);
  }
  return options.inverse(this);
});
