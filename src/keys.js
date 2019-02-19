var keys=new Map();

keys.set('oauth_consumer_key',"W91PH0TGA050GhYhGs14ttuDd");
keys.set('consumerSecret',"cCxMwWzrllYo8ejmLoI4tUWJ5GyUX6DNTAjvfxEOAJecr6GGFA")
keys.set('oauth_token',"199282720-2GtFGAKGKldJRImx5A0V60E5ZHWWN1N6IQ1mHqa2")
keys.set('accessTokenSecret',"jtBsIGqQdApf9hnNL8fY8qXci4F26WRV2CXKhdpMHekgm")
keys.set('oauth_nonce', Math.floor(Date.now() / 1000)),
keys.set('oauth_version','1.0')
keys.set('oauth_signature_method','HMAC-SHA1'),
keys.set('oauth_timestamp', Math.floor(Date.now() / 1000))
keys.set('q','bollywood'),
keys.set('result_type','recent')

module.exports=keys
