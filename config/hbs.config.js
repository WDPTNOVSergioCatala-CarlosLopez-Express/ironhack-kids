const hbs = require("hbs");

hbs.registerPartials(`${__dirname}/../views/partials`);

hbs.registerHelper("ifCond", function (v1, v2, options) {
  if (v1 === v2) {
    return options.fn(this);
  }
  return options.inverse(this);
});

hbs.registerHelper("date", (date) => {
  const minDiff = (Date.now() - date.getTime()) / 1000 / 60;

  if (minDiff > 60 * 24) {
    return `${Math.round(minDiff / 60 / 24)}d ago`;
  }

  if (minDiff > 60) {
    return `${Math.round(minDiff / 60)}h ago`;
  }

  return `${Math.round(minDiff)}m ago`;
});

hbs.registerHelper("lookup", function (obj, key) {
  return obj[key];
});

