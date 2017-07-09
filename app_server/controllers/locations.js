/*Get 'home page' */
module.exports.homelist = function(req, res){
  res.render('index', { title: 'Home' });
};

/*Get 'Locations-list' */
module.exports.locationslist = function(req, res){
  res.render('locations-list', { title: 'Home' });
};

/*Get 'locations page' */
module.exports.locationsInfo = function(req, res){
  res.render('locations-info', { title: 'Location info' });
};

/*Get 'Add review page' */
module.exports.addReview = function(req, res){
  res.render('location-review-form', { title: 'Add review' });
};