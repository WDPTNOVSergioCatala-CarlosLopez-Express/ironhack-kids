module.exports.home = (req, res, next) => {
    res.render("home");
};
module.exports.aboutUS = (req, res, next) => {
    res.render("aboutUs");
};
module.exports.lobby = (req, res, next) => {
    res.render("lobby");
};
module.exports.classroom = (req, res, next) => {
    res.render("classroom");
}
module.exports.gestion = (req, res, next) => {
    res.render("gestion");
}