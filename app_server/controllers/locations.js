/*Get 'home page' */
module.exports.homelist = function(req, res){
  res.render('locations-list', { title: 'Homets' });
};

/*Get 'locations page' */
module.exports.locationsInfo = function(req, res){
  res.render('index', { title: 'Location info' });
};

/*Get 'Add review page' */
module.exports.addReview = function(req, res){
  res.render('index', { title: 'Add review' });
};