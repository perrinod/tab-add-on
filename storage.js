const Storage = {
    _defaults: {
        "onlyCurrent": true,
        "previousTabsNumber": browser.sessions.MAX_SESSION_RESULTS,  
        "showClosePinnedTabs": false,
        "showCloseTabsWhenCombine": false,

        "previousTabs": [],

        "showMoveAllRightForDisable": false,
        "showMoveAllRightForTab": true,
        "showMoveAllRightForPage": true,

        "showMoveAllLeftForDisable": false,
        "showMoveAllLeftForTab": true,
        "showMoveAllLeftForPage": true,

        "showPrintPageForDisable": false,
        "showPrintPageForTab": true,
        "showPrintPageForPage": true,

        "showPrintPreviewForDisable": false,
        "showPrintPreviewForTab": true,
        "showPrintPreviewForPage": true,

        "showSortTabsUrlAscForDisable": false,
        "showSortTabsUrlAscForTab": true,
        "showSortTabsUrlAscForPage": true,

        "showSortTabsUrlDesForDisable": false,
        "showSortTabsUrlDesForTab": true,
        "showSortTabsUrlDesForPage": true,

        "showSortTabsTitleAscForDisable": false,
        "showSortTabsTitleAscForTab": true,
        "showSortTabsTitleAscForPage": true,

        "showSortTabsTitleDesForDisable": false,
        "showSortTabsTitleDesForTab": true,
        "showSortTabsTitleDesForPage": true,

        "showSortTabsAccessedAscForDisable": false,
        "showSortTabsAccessedAscForTab": true,
        "showSortTabsAccessedAscForPage": true,

        "showSortTabsAccessedDesForDisable": false,
        "showSortTabsAccessedDesForTab": true,
        "showSortTabsAccessedDesForPage": true,

        "showSavePdfForDisable": false,
        "showSavePdfForTab": true,
        "showSavePdfForPage": true,

        "showCloseDuplicateTabsForDisable": false,
        "showCloseDuplicateTabsForTab": true,
        "showCloseDuplicateTabsForPage": true,

        "showClearPreviousTabsForDisable": true,
        "showClearPreviousTabsForTab": false,
        "showClearPreviousTabsForPage": false,

        "showCloseAllOtherForDisable": false,
        "showCloseAllOtherForTab": true,
        "showCloseAllOtherForPage": true,

        "showCloseAllLeftForDisable": false,
        "showCloseAllLeftForTab": true,
        "showCloseAllLeftForPage": true,

        "showCloseAllRightForDisable": false,
        "showCloseAllRightForTab": true,
        "showCloseAllRightForPage": true,

        "showCombineAllForDisable": false,
        "showCombineAllForTab": true,
        "showCombineAllForPage": true,

        "showCombineAllRightForDisable": false,
        "showCombineAllRightForTab": true, 
        "showCombineAllRightForPage": true,

        "showCombineAllLeftForDisable": false,
        "showCombineAllLeftForTab": true,
        "showCombineAllLeftForPage": true,

        "showDiscardAllForDisable": false,
        "showDiscardAllForTab": true,
        "showDiscardAllForPage": true,

        "showDiscardAllRightForDisable": false,
        "showDiscardAllRightForTab": true,
        "showDiscardAllRightForPage": true,

        "showDiscardAllLeftForDisable": false,
        "showDiscardAllLeftForTab": true,
        "showDiscardAllLeftForPage": true,

        "showDiscardTabForTab": true
    },

    get: async function() {
        const prefs = await browser.storage.local.get();
        
        for(let name in this._defaults)
            if(prefs[name] === undefined)
                prefs[name] = this._defaults[name];
        return prefs;
    },

    set: async function(o){
        return browser.storage.local.set(o);
    }
}