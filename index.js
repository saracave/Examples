import('launchdarkly-node-server-sdk').LDUser
var LaunchDarkly = require('launchdarkly-node-server-sdk');

// Set sdkKey to your LaunchDarkly SDK key.
const sdkKey = "";

// Set featureFlagKey to the feature flag key you want to evaluate.
const featureFlagKey = "";

ldclient = LaunchDarkly.init(sdkKey);
firstUserKey = "Imthesharedkey"
secondUserKey = "gidehjrigotuheriougth"
ldclient.once('ready', async function() {

  const userA = {key:firstUserKey};

  const userB = {key:secondUserKey};

  await ldclient.variation(featureFlagKey, userA);

  ldclient.alias(userB, userA);
  console.log("I RAN")
  await ldclient.flush();
  await ldclient.close();
});