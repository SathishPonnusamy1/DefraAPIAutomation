function fn() {
  var env = karate.env; // get system property 'karate.env'
  karate.log('karate.env system property was:', env);
  if (!env) {
    env = 'dev';
  }
  var config = {

  }
  if (env == 'dev') {
	config.Baseurl = 'https://reqres.in/'
	config.authtoken = ''
  }
  if (env == 'qa') {
	config.Baseurl = 'https://reqres.in/'

  }
  karate.configure('retry' , {count: 12, interval: 5000});
  karate.configure('connectTimeout', 10000);
  karate.configure('readTimeout', 30000);
  karate.configure('report', {showLog: true, showAllsteps: false, showCallArg: false });
  return config;
}