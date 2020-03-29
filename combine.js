async function init(){
    const prefs = await Storage.get();

    for(var i = 0; i < prefs.previousTabs.length; i++){
        var row = '<div class="center"><div class="img" style="background-image:url(' + prefs.previousTabs[i].favIconUrl + ');"></div>' + ' ';
        if(prefs.previousTabs[i].url.length > 0)
            row += '<a href="' + prefs.previousTabs[i].url + '" target="_blank">' + prefs.previousTabs[i].title + '</a></div><br/><br/>';
        else
            row += prefs.previousTabs[i].title + '<div><br/><br/>';
            
        $('#tabs').append(row);
    }
}

init();