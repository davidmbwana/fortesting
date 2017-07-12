/*Get 'home page' */
module.exports.homelist = function(req, res){
  res.render('index', { title: 'Home' });
};

/*Get 'Locations-list' */
module.exports.locationslist = function(req, res){
  res.render('locations-list', { title: 'Loc8tr - find a place to work with wifi',
  pageHeader: { title: 'Loc8tr',strapline: 'Find places to work with wifi near you!'},
  locations: [{
    name: 'starcups',
    address: '125 High Street, Reading, RG6 1PS',
    rating: 3,
    facilities: ['Hot drinks','Food','Premium wifi'],
    distance: '100m'
  },{
    name: 'starcups2',
    address: '125 High Street, Reading, RG6 1PS',
    rating: 3,
    facilities: ['Hot drinks','Food','Premium wifi'],
    distance: '100m'
  },{
    name: 'starcups3',
    address: '125 High Street, Reading, RG6 1PS',
    rating: 3,
    facilities: ['Hot drinks','Food','Premium wifi'],
    distance: '100m'
  },{
    name: 'starcups4',
    address: '125 High Street, Reading, RG6 1PS',
    rating: 3,
    facilities: ['Hot drinks','Food','Premium wifi'],
    distance: '100m'
  }]
});
};

/*Get 'locations page' */
module.exports.locationsInfo = function(req, res){
  res.render('locations-info', { title: 'Location info' });
};

/*Get 'Add review page' */
module.exports.addReview = function(req, res){
  res.render('location-review-form', { title: 'Add review' });
};