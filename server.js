const getRandomAffirmation = require('./random_affirmation');

const fs = require( 'fs' ),
      path = require( 'path' ),
      Twit = require( 'twit' ),
      config = require( path.join( __dirname, 'config.js' ) );

const affirmation = getRandomAffirmation();

const T = new Twit( config );

T.post( 'statuses/update', { status: affirmation }, function( err, data, response ) {
  console.log('Posted.');
  // console.log( data )
  // TODO: try to make another tweet if it fails for any reason
} );
