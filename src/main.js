
chrome.tabs.query({ 'active': true,'lastFocusedWindow': true }, function (tabs) {
    var site = String(tabs[0].url).split("/");
    if(site[4] && tabs[0].url.match(/https:\/\/github.com/)){
        document.getElementById("urls").href = "https://" + site[3] + ".github.io" + "/" + site[4];
        document.getElementById("urls").innerText = "https://" +  site[3] + ".github.io" + "/" + site[4];
    }
});
