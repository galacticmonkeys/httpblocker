chrome.webRequest.onBeforeRequest.addListener(
	function(details) { return {cancel: true}; },
	{urls: ["*://*.googleapis.com/*", "*://*.google.com/"]},
	["blocking"]);

