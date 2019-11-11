const Storage = {
    _defaults: {
        "onlyCurrent": true,
        "previousTabsNumber": browser.sessions.MAX_SESSIONS_RESULTS,

        "showMoveAllRightForDisable": false,
        "showMoveAllRightForTab": true,
        "showMoveAllRightForPage": true,
        "showMoveAllRightForBrowser": true,

        "showMoveAllLeftForDisable": false,
        "showMoveAllLeftForTab": true,
        "showMoveAllLeftForPage": true,
        "showMoveAllLeftForBrowser": true,

        "showPrintPageForDisable": false,
        "showPrintPageForTab": true,
        "showPrintPageForPage": true,
        "showPrintPageForBrowser": true,

        "showPrintPreviewForDisable": false,
        "showPrintPreviewForTab": true,
        "showPrintPreviewForPage": true,
        "showPrintPreviewForBrowser": true,

        "showSortTabsUrlAscForDisable": false,
        "showSortTabsUrlAscForTab": true,
        "showSortTabsUrlAscForPage": true,
        "showSortTabsUrlAscForBrowser": true,

        "showSortTabsUrlDesForDisable": false,
        "showSortTabsUrlDesForTab": true,
        "showSortTabsUrlDesForPage": true,
        "showSortTabsUrlDesForBrowser": true,

        "showSortTabsTitleAscForDisable": false,
        "showSortTabsTitleAscForTab": true,
        "showSortTabsTitleAscForPage": true,
        "showSortTabsTitleAscForBrowser": true,

        "showSortTabsTitleDesForDisable": false,
        "showSortTabsTitleDesForTab": true,
        "showSortTabsTitleDesForPage": true,
        "showSortTabsTitleDesForBrowser": true,

        "showSortTabsAccessedAscForDisable": false,
        "showSortTabsAccessedAscForTab": true,
        "showSortTabsAccessedAscForPage": true,
        "showSortTabsAccessedAscForBrowser": true,

        "showSortTabsAccessedDesForDisable": false,
        "showSortTabsAccessedDesForTab": true,
        "showSortTabsAccessedDesForPage": true,
        "showSortTabsAccessedDesForBrowser": true,

        "showSavePdfForDisable": false,
        "showSavePdfForTab": true,
        "showSavePdfForPage": true,
        "showSavePdfForBrowser": true,

        "showCloseDuplicateTabsForDisable": false,
        "showCloseDuplicateTabsForTab": true,
        "showCloseDuplicateTabsForPage": true,
        "showCloseDuplicateTabsForBrowser": true,

        "showClearPreviousTabsForDisable": true,
        "showClearPreviousTabsForTab": false,
        "showClearPreviousTabsForPage": false,
        "showClearPreviousTabsForBrowser": false,

        "showClosePinnedTabs": false,
        "showCloseAllLeftForDisable": false,
        "showCloseAllLeftForTab": true,
        "showCloseAllLeftForPage": true,
        "showCloseAllLeftForBrowser": true,

        "showCombineAllForDisable": false,
        "showCombineAllForTab": true,
        "showCombineAllForPage": true,
        "showCombineAllForBrowser": true,

        "showCombineAllRightForDisable": false,
        "showCombineAllRightForTab": true, 
        "showCombineAllRightForPage": true,
        "showCombineAllRightForBrowser": true,

        "showCombineAllLeftForDisable": false,
        "showCombineAllLeftForTab": true,
        "showCombineAllLeftForPage": true,
        "showCombineAllLeftForBrowser": true,

        "showDiscardAllForDisable": false,
        "showDiscardAllForTab": true,
        "showDiscardAllForPage": true,
        "showDiscardAllForBrowser": true,

        "showDiscardAllRightForDisable": false,
        "showDiscardAllRightForTab": true,
        "showDiscardAllRightForPage": true,
        "showDiscardAllRightForBrowser": true,

        "showDiscardAllLeftForDisable": false,
        "showDiscardAllLeftForTab": true,
        "showDiscardAllLeftForPage": true,
        "showDiscardAllLeftForBrowser": true,

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