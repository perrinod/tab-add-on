/*
Copyright (C) 2020 Domenick Perrino <perrinod@outlook.com>

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.
This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

function onError(e){
    console.log(`${e}`);
}

function contexts(type, prefs){
    let context = [];
    switch(type){
        case "CloseAllLeft":
            if(prefs.showCloseAllLeftForTab)
                context.push("tab");
            if(prefs.showCloseAllLeftForBrowser)
                context.push("browser_action");
            if(prefs.showCloseAllLeftForPage)
                context.push("page");
            break;

        case "CloseAllRight":
            if(prefs.showCloseAllRightForTab)
                context.push("tab");
            if(prefs.showCloseAllRightForBrowser)
                context.push("browser_action");
            if(prefs.showCloseAllRightForPage)
                context.push("page");
            break;

        case "CloseAllOther":
            if(prefs.showCloseAllRightForTab)
                context.push("tab");
            if(prefs.showCloseAllRightForBrowser)
                context.push("browser_action");
            if(prefs.showCloseAllRightForPage)
                context.push("page");
            break;      

        case "MoveMenu":
            if(prefs.showMoveAllRightForTab || prefs.showMoveAllLeftForTab)
                context.push("tab");
            if(prefs.showMoveAllRightForBrowser || prefs.showMoveAllLeftForBrowser)
                context.push("browser_action");
            if(prefs.showMoveAllRightForPage || prefs.showMoveAllLeftForPage)
                context.push("page");
            break;

        case "MoveAllRight":
            if(prefs.showMoveAllRightForTab)
                context.push("tab");
            if(prefs.showMoveAllRightForBrowser)
                context.push("browser_action");
            if(prefs.showMoveAllRightForPage)
                context.push("page");
            break;

        case "MoveAllLeft":
            if(prefs.showMoveAllLeftForTab)
                context.push("tab");
            if(prefs.showMoveAllLeftForBrowser)
                context.push("browser_action");
            if(prefs.showMoveAllLeftForPage)
                context.push("page");
            break;

        case "PrintMenu":
            if(prefs.showPrintPageForTab || prefs.showPrintPreviewForTab)
                context.push("tab");
            if(prefs.showPrintPageForBrowser || prefs.showPrintPreviewForBrowser)
                context.push("browser_action");
            if(prefs.showPrintPageForPage || prefs.showPrintPageForPage)
                context.push("page");
            break;

        case "PrintPage":
            if(prefs.showPrintPageForTab)
                context.push("tab");
            if(prefs.showPrintPageForBrowser)
                context.push("browser_action");
            if(prefs.showPrintPageForPage)
                context.push("page");
            break;

        case "PrintPreview":
            if(prefs.showPrintPreviewForTab)
                context.push("tab");
            if(prefs.showPrintPreviewForBrowser)
                context.push("browser_action");
            if(prefs.showPrintPreviewForPage)
                context.push("page");
            break;

        case "SortTabs":
            if(prefs.showSortTabsUrlAscForTab || prefs.showSortTabsUrlDesForTab ||
                prefs.showSortTabsTitleAscForTab || prefs.showSortTabsTitleDesForTab ||
                prefs.showSortTabsAccessedAscForTab || prefs.showSortTabsAccessedDesForTab)
                context.push("tab");
            if(prefs.showSortTabsUrlAscForBrowser || prefs.showSortTabsUrlDesForBrowser || 
                prefs.showSortTabsTitleAscForBrowser || prefs.showSortTabsTitleDesForBrowser ||
                prefs.showSortTabsAccessedAscForBrowser || prefs.showSortTabsAccessedDesForBrowser)
                context.push("browser_action");
            if(prefs.showSortTabsUrlAscForPage || prefs.showSortTabsUrlDesForPage || 
                prefs.showSortTabsTitleAscForPage || prefs.showSortTabsTitleDesForPage ||
                prefs.showSortTabsAccessedAscForPage || prefs.showSortTabsAccessedDesForPage)
                context.push("page");
            break;

        case "SortAccessedDes":
            if(prefs.showSortTabsAccessedDesForTab)
                context.push("tab");
            if(prefs.showSortTabsAccessedDesForBrowser)
                context.push("browser_action");
            if(prefs.showSortTabsAccessedDesForPage)
                context.push("page");
            break;

        case "SortAccessedAsc":
            if(prefs.showSortTabsAccessedAscForTab)
                context.push("tab");
            if(prefs.showSortTabsAccessedAscForBrowser)
                context.push("browser_action");
            if(prefs.showSortTabsAccessedAscForPage)
                context.push("page");
            break;

        case "SortTitleDes":
            if(prefs.showSortTabsTitleDesForTab)
                context.push("tab");
            if(prefs.showSortTabsTitleDesForBrowser)
                context.push("browser_action");
            if(prefs.showSortTabsTitleDesForPage)
                context.push("page");
            break;

        case "SortTitleAsc":
            if(prefs.showSortTabsTitleAscForTab)
                context.push("tab");
            if(prefs.showSortTabsTitleAscForBrowser)
                context.push("browser_action");
            if(prefs.showSortTabsTitleAscForPage)
                context.push("page");
            break;

        case "SortUrlDes":
            if(prefs.showSortTabsUrlDesForTab)
                context.push("tab");
            if(prefs.showSortTabsUrlDesForBrowser)
                context.push("browser_action");
            if(prefs.showSortTabsUrlDesForPage)
                context.push("page");
            break;

        case "SortUrlAsc":
            if(prefs.showSortTabsUrlAscForTab)
                context.push("tab");
            if(prefs.showSortTabsUrlAscForBrowser)
                context.push("browser_action");
            if(prefs.showSortTabsUrlAscForPage)
                context.push("page");
            break;

        case "SavePdf":
            if(prefs.showSavePdfForTab)
                context.push("tab");
            if(prefs.showSavePdfForBrowser)
                context.push("browser_action");
            if(prefs.showSavePdfForPage)
                context.push("page");
            break;

        case "ClearAll":
            if(prefs.showClearPreviousTabsForTab)
                context.push("tab");
            if(prefs.showClearPreviousTabsForBrowser)
                context.push("browser_action");
            if(prefs.showClearPreviousTabsForPage)
                context.push("page");
            break;

        case "CombineAll":
            if(prefs.showCombineAllForTab)
                context.push("tab");
            if(prefs.showCombineAllForBrowser)
                context.push("browser_action");
            if(prefs.showCombineAllForPage)
                context.push("page");
            break;

        case "CombineAllRight":
            if(prefs.showCombineAllRightForTab)
                context.push("tab");
            if(prefs.showCombineAllRightForBrowser)
                context.push("browser_action");
            if(prefs.showCombineAllRightForPage)
                context.push("page");
            break;

        case "CombineAllLeft":
            if(prefs.showCombineAllLeftForTab)
                context.push("tab");
            if(prefs.showCombineAllLeftForBrowser)
                context.push("browser_action");
            if(prefs.showCombineAllLeftForPage)
                context.push("page");
            break;

        case "CloseDuplicate":
            if(prefs.showCloseDuplicateTabsForTab)
                context.push("tab");
            if(prefs.showCloseDuplicateTabsForBrowser)
                context.push("browser_action");
            if(prefs.showCloseDuplicateTabsForPage)
                context.push("page");
            break;

        case "CloseMenu":
            if(prefs.showCloseAllOtherForTab || prefs.showCloseAllLeftForTab || prefs.showCloseDuplicateTabsForTab || prefs.showCloseAllRightForTab)
                context.push("tab");
            if(prefs.showCloseAllOtherForBrowser || prefs.showCloseAllLeftForBrowser || prefs.showCloseDuplicateTabsForBrowser || prefs.showCloseAllRightForBrowser)
                context.push("browser_action");
            if(prefs.showCloseAllOtherForPage || prefs.showCloseAllLeftForPage || prefs.showCloseDuplicateTabsForPage || prefs.showCloseAllRightForPage)
                context.push("page");
            break;

        case "CombineMenu":
            if(prefs.showCombineAllForTab || prefs.showCombineAllRightForTab || prefs.showCombineAllLeftForTab)
                context.push("tab");
            if(prefs.showCombineAllForBrowser || prefs.showCombineAllRightForBrowser || prefs.showCombineAllLeftForBrowser)
                context.push("browser_action");
            if(prefs.showCombineAllForPage || prefs.showCombineAllRightForBrowser || prefs.showCombineAllLeftForBrowser)
                context.push("page");
            break;

        case "DiscardMenu":
            if(prefs.showDiscardAllForTab || prefs.showDiscardAllRightForTab || prefs.showDiscardAllLeftForTab || prefs.showDiscardTabForTab)
                context.push("tab");
            if(prefs.showDiscardAllForBrowser || prefs.showDiscardAllRightForBrowser || prefs.showDiscardAllLeftForBrowser)
                context.push("browser_action");
            if(prefs.showDiscardAllForPage || prefs.showDiscardAllRightForPage || prefs.showDiscardAllLeftForPage)
                context.push("page");
            break;

        case "DiscardAll":
            if(prefs.showDiscardAllForTab)
                context.push("tab");
            if(prefs.showDiscardAllForBrowser)
                context.push("browser_action");
            if(prefs.showDiscardAllForPage)
                context.push("page");
            break;

        case "DiscardAllRight":
            if(prefs.showDiscardAllRightForTab)
                context.push("tab");
            if(prefs.showDiscardAllRightForBrowser)
                context.push("browser_action");
            if(prefs.showDiscardAllRightForPage)
                context.push("page");
            break;

        case "DiscardAllLeft":
            if(prefs.showDiscardAllLeftForTab)
                context.push("tab");
            if(prefs.showDiscardAllLeftForBrowser)
                context.push("browser_action");
            if(prefs.showDiscardAllLeftForPage)
                context.push("page");
            break;
    }
    
    return context;
}

async function sort(type){
    let tabs = await browser.tabs.query({ currentWindow:true });

    switch(type){
        case "SortUrlAsc":
            tabs.sort(function(a, b){return a.url > b.url});
            break;

        case "SortUrlDes":
            tabs.sort(function(a, b){return a.url < b.url});
            break;

        case "SortTitleAsc":
            tabs.sort(function(a, b){return a.title > b.title});
            break;
        case "SortTitleDes":
            tabs.sort(function(a, b){return a.title < b.title});
            break;

        case "SortAccessedAsc":
            tabs.sort(function(a, b){return a.lastAccessed > b.lastAccessed});
            break;

        case "SortAccessedDes":
            tabs.sort(function(a, b){return a.lastAccessed < b.lastAccessed});
            break;
    }

    let tabIds = tabs.map(tabInfo => tabInfo.id);
    browser.tabs.move(tabIds, {index: -1});
}

async function restoreAll(window){
    try{
        const prefs = await Storage.get();
        const tabs = await getLastClosedTabs(prefs.previousTabsNumber, prefs.onlyCurrent);
        if(!window){
            tabs.forEach((tab) => {
                if(typeof tab !== 'undefined' && typeof tab.url !== 'undefined'){
                    browser.tabs.create({ url: tab.url });
                }
            });
        } else {
            await browser.windows.create(function(windowId){
                tabs.forEach((tab) => {
                    if(typeof tab !== 'undefined' && typeof tab.url !== 'undefined'){
                        browser.tabs.create({ windowId: windowId.id, url: tab.url});
                    }
                });

                browser.tabs.remove(windowId.tabs[0].id);
            });
        }
    } catch(e) { console.log(`${e}`); }
}

async function savePdf(){
    try{
        await browser.tabs.saveAsPDF({});
    } catch(e) { console.log(`${e}`); }
}

async function printPreview(){
    try{
        await browser.tabs.printPreview();
    } catch(e) { console.log(`${e}`); }
}

async function print(){
    try{
        await browser.tabs.print();
    } catch(e) { console.log(`${e}`); }
}

async function closeDuplicateTabs(id, pageUrl){
    try{
        const tabs = await browser.tabs.query({currentWindow: true, url: pageUrl});
        let tabsToClose = [];
        if(tabs.length >= 1){
            for(let i = 0; i < tabs.length; i++){
                if(id != tabs[i].id)
                    tabsToClose.push(tabs[i].id);
            }
            browser.tabs.remove(tabsToClose);
        }
    } catch(e) { console.log(`${e}`); }
}

async function discardTab(id){
    try{ browser.tabs.discard(id); } catch(e){ console.log(`${e}`); }
}

async function move(index, side){
    try{
        const tabs = await browser.tabs.query({currentWindow: true});
        let tabsToMove = [];
        if(side){
            for(let i = index + 1; i < tabs.length; i++)
                tabsToMove.push(tabs[i]);
        }
        else{
            for(let i = 0; i < index; i++)
                tabsToMove.push(tabs[i]);
        }
 
        let tabIds = tabsToMove.map(tabInfo => tabInfo.id);

        if(tabIds.length){
            await browser.windows.create(function(windowId){
                browser.tabs.move(tabIds, {windowId: windowId.id, index: -1});
                if(windowId.tabs.length >= 1)
                    browser.tabs.remove(windowId.tabs[0].id);
            });
        }

    } catch(e) { console.log(`${e}`); }
}

async function closeLeft(index){
    try{
        const prefs = await Storage.get();
        const tabs = await browser.tabs.query({currentWindow: true});
        let tabsToClose = [];
        for(let i = 0; i < index; i++){
            if(prefs.showClosePinnedTabs){
                    tabsToClose.push(tabs[i].id);
            } else{
                if(!tabs[i].pinned)
                    tabsToClose.push(tabs[i].id);
            }
        }
        await browser.tabs.remove(tabsToClose);
    } catch(e) { console.log(`${e}`); }
}

async function closeRight(index){
    try{
        const prefs = await Storage.get();
        const tabs = await browser.tabs.query({currentWindow: true});
        let tabsToClose = [];
        for(let i = index; i < tabs.length; i++){
            if(prefs.showClosePinnedTabs){
                    tabsToClose.push(tabs[i].id);
            } else{
                if(!tabs[i].pinned)
                    tabsToClose.push(tabs[i].id);
            }
        }
        await browser.tabs.remove(tabsToClose);
    } catch(e) { console.log(`${e}`); }
}

async function closeAllOthers(id){
    try{
        const prefs = await Storage.get();
        const tabs = await browser.tabs.query({currentWindow: true});

        let tabsToClose = [];
        tabs.forEach((tab) => {
            if(tab.id != id){
                if(prefs.showClosePinnedTabs){
                    tabsToClose.push(tab.id);
                } else{
                    if(!tabs.pinned)
                        tabsToClose.push(tab.id);
                }
            }
        });

        await browser.tabs.remove(tabsToClose);

    } catch(e) { console.log(`${e}`); }
}

async function clearAll(){
    try{
        const prefs = await Storage.get();
        const tabs = await getLastClosedTabs(false, prefs.onlyCurrent);
        tabs.forEach((tab) => {
            browser.sessions.forgetClosedTab(tab.windowId, tab.sessionId);
        });
    } catch(e){ console.log(`${e}`); }
}

async function discardAll(id){
    try{
        const tabs = await browser.tabs.query({currentWindow: true, active: false});
        tabs.forEach((tab) => {
            if(id != tab.id)
                browser.tabs.discard(tab.id);
        });
    } catch(e){ console.log(`${e}`); }
}

async function discardRight(index){
    try{
        const rightTabs = await browser.tabs.query({currentWindow: true, active: false});
        for(let i = index; i < rightTabs.length; i++){
            browser.tabs.discard(rightTabs[i].id);
        }
    } catch(e){ console.log(`${e}`); }
}

async function discardLeft(index){
    try{
        const leftTabs = await browser.tabs.query({currentWindow: true, active: false});
        for(let i = 0; i < index; i++){
            browser.tabs.discard(leftTabs[i].id);
        }
     } catch(e){ console.log(`${e}`); }
}

async function getLastClosedTabs(maxResults , onlyCurrent){
    try{
        const currentWindow = await browser.windows.getCurrent();
        const sessions = await browser.sessions.getRecentlyClosed();
        let tabs = sessions.filter((s) => (s.tab && (!onlyCurrent || s.tab.windowId === currentWindow.id)));
        if(maxResults && tabs.length > maxResults)
            tabs = tabs.splice(0, maxResults);
        
        tabs.forEach((o, i, a) => {a[i] = a[i].tab});

        return tabs;

    } catch(e){ console.log(`${e}`);}
}

async function combineAllTabs(){
    try{
        const prefs = await Storage.get();
        const tabs = await browser.tabs.query({currentWindow: true});
        let combineTabs = prefs.previousTabs;

        var today = new Date();
        let day = String(today.getDate()).padStart(2, '0');
        let month = String(today.getMonth() + 1).padStart(2, '0');
        var year = today.getFullYear(); 

        let next = {
            title: month + '/' + day + '/' + year,
            url: '',
            favIconUrl: '',
        }

        for(let i = 0; i < tabs.length; i++){
            var tab = {
                title: tabs[i].title,
                url: tabs[i].url,
                favIconUrl: tabs[i].favIconUrl
            }
            combineTabs.unshift(tab);
        }

        combineTabs.unshift(next);

        if(combineTabs.length > 1001){
            combineTabs.splice(1001, combineTabs.length - 1001);
        }

        await Storage.set({ 
            previousTabs: combineTabs
        });

    } catch(e){ console.log(`${e}`); }
}

async function combineAllTabsLeft(index){
    try{
        const prefs = await Storage.get();
        const tabs = await browser.tabs.query({currentWindow: true});
        let combineTabs = prefs.previousTabs;

        var today = new Date();
        let day = String(today.getDate()).padStart(2, '0');
        let month = String(today.getMonth() + 1).padStart(2, '0');
        var year = today.getFullYear(); 

        let next = {
            title: month + '/' + day + '/' + year,
            url: '',
            favIconUrl: '',
        }

        for(let i = 0; i < index; i++){
            var tab = {
                title: tabs[i].title,
                url: tabs[i].url,
                favIconUrl: tabs[i].favIconUrl
            }
            combineTabs.unshift(tab);
        }

        combineTabs.unshift(next);

        if(combineTabs.length > 1001){
            combineTabs.splice(1001,combineTabs.length - 1001);
        }

        await Storage.set({ 
            previousTabs: combineTabs
        });

    } catch(e) { console.log(`${e}`); }
}

async function combineAllTabsRight(index){
    try{
        const prefs = await Storage.get();
        const tabs = await browser.tabs.query({currentWindow: true});
        let combineTabs = prefs.previousTabs;

        var today = new Date();
        let day = String(today.getDate()).padStart(2, '0');
        let month = String(today.getMonth() + 1).padStart(2, '0');
        var year = today.getFullYear(); 

        let next = {
            title: month + '/' + day + '/' + year,
            url: '',
            favIconUrl: '',
        }

        for(let i = index; i < tabs.length; i++){
            var tab = {
                title: tabs[i].title,
                url: tabs[i].url,
                favIconUrl: tabs[i].favIconUrl
            }
            combineTabs.unshift(tab);
        }

        combineTabs.unshift(next);

        if(combineTabs.length > 1001){
            combineTabs.splice(1001,combineTabs.length - 1001);
        }

        await Storage.set({ 
            previousTabs: combineTabs
        });

    } catch(e) { console.log(`${e}`); }
}

async function closedTabsListChanged(){
    await browser.contextMenus.removeAll();
    const prefs = await Storage.get();
    const tabs = await getLastClosedTabs(prefs.previousTabsNumber, prefs.onlyCurrent);

    let context = contexts("MoveMenu", prefs)

    if(context.length){
        let moveMenu = browser.contextMenus.create({
            contexts: context,
            id: "MoveMenu",
            title: browser.i18n.getMessage("moveMenuLabel")
        });

        if(!prefs.showMoveAllRightForDisable){
            let context = contexts("MoveAllRight", prefs);

            browser.contextMenus.create({
                contexts: context,
                id: "MoveAllRight",
                title: browser.i18n.getMessage("moveAllRightMenuLabel"),
                parentId: moveMenu
            });
        }

        if(!prefs.showMoveAllLeftForDisable){
            let context = contexts("MoveAllLeft", prefs);

            browser.contextMenus.create({
                contexts: context,
                id: "MoveAllLeft",
                title: browser.i18n.getMessage("moveAllLeftMenuLabel"),
                parentId: moveMenu
            });
        }
    }

    context = contexts("PrintMenu", prefs);

    if(context.length){
        let printMenu = browser.contextMenus.create({
            contexts: context,
            id: "PrintMenu",
            title: browser.i18n.getMessage("printMenuLabel"),
        });

        if(!prefs.showPrintPageForDisable){
            let context = contexts("PrintPage", prefs);

            browser.contextMenus.create({
                contexts: context,
                id: "PrintPage",
                title: browser.i18n.getMessage("printPageMenuLabel"),
                parentId: printMenu
            });
        }

        if(!prefs.showPrintPreviewForDisable){
            let context = contexts("PrintPreview", prefs);

            browser.contextMenus.create({
                contexts: context,
                id: "PrintPreview",
                title: browser.i18n.getMessage("printPreviewMenuLabel"),
                parentId: printMenu
            });
        }
    }

    context = contexts("SortTabs", prefs);

    if(context.length){

        let sortTabsMenu = browser.contextMenus.create({
            contexts: context,
            id: "SortTabs",
            title: browser.i18n.getMessage("sortTabsMenuLabel")
        });

        if(!prefs.showSortTabsUrlAscForDisable){
            let context = contexts("SortUrlAsc", prefs);

            browser.contextMenus.create({
                contexts: context,
                id: "SortUrlAsc",
                title: browser.i18n.getMessage("sortTabsUrlAscMenuLabel"),
                parentId: sortTabsMenu
            });
        }

        if(!prefs.showSortTabsUrlDesForDisable){
            let context = contexts("SortUrlDes", prefs);

            browser.contextMenus.create({
                contexts: context,
                id: "SortUrlDes",
                title: browser.i18n.getMessage("sortTabsUrlDesMenuLabel"),
                parentId: sortTabsMenu
            });
        }

        if(!prefs.showSortTabsTitleAscForDisable){
            let context = contexts("SortTitleAsc", prefs);

            browser.contextMenus.create({
                contexts: context,
                id: "SortTitleAsc",
                title: browser.i18n.getMessage("sortTabsTitleAscMenuLabel"),
                parentId: sortTabsMenu
            });
        }

        if(!prefs.showSortTabsTitleDesForDisable){
            let context = contexts("SortTitleDes", prefs);

            browser.contextMenus.create({
                contexts: context,
                id: "SortTitleDes",
                title: browser.i18n.getMessage("sortTabsTitleDesMenuLabel"),
                parentId: sortTabsMenu
            });
        }

        if(!prefs.showSortTabsAccessedAscForDisable){
            let context = contexts("SortAccessedAsc", prefs);

            browser.contextMenus.create({
                contexts: context,
                id: "SortAccessedAsc",
                title: browser.i18n.getMessage("sortTabsAccessedAscMenuLabel"),
                parentId: sortTabsMenu
            });
        }

        if(!prefs.showSortTabsAccessedDesForDisable){
            let context = contexts("SortAccessedDes", prefs);

            browser.contextMenus.create({
                contexts: context,
                id: "SortAccessedDes",
                title: browser.i18n.getMessage("sortTabsAccessedDesMenuLabel"),
                parentId: sortTabsMenu
            });
        }
    }

    if(!prefs.showSavePdfForDisable){
        let context = contexts("SavePdf", prefs);

        browser.contextMenus.create({
            contexts: context,
            id: "SavePdf",
            title: browser.i18n.getMessage("savePdfMenuLabel")
        });
    }

    context = contexts("CloseMenu", prefs);

    if(context.length){

        let closeMenu = browser.contextMenus.create({
            contexts: context,
            id: "CloseMenu",
            title: browser.i18n.getMessage("closeMenuLabel")
        });

        if(!prefs.showCloseDuplicateTabsForDisable){
            let context = contexts("CloseDuplicate", prefs);

            browser.contextMenus.create({
                contexts: context,
                id: "CloseDuplicate",
                title: browser.i18n.getMessage("closeDuplicateTabsMenuLabel"),
                parentId: closeMenu
            });
        }

        if(!prefs.showCloseAllOtherForDisable){
            let context = contexts("CloseAllOther", prefs);

            browser.contextMenus.create({
                contexts: context,
                id: "CloseOther",
                title: browser.i18n.getMessage("closeAllOtherMenuLabel"),
                parentId: closeMenu
            });
        }

        if(!prefs.showCloseAllLeftForDisable){
            let context = contexts("CloseAllLeft", prefs);

            browser.contextMenus.create({
                contexts: context,
                id: "CloseLeft",
                title: browser.i18n.getMessage("closeAllLeftMenuLabel"),
                parentId: closeMenu
            });
        }

        if(!prefs.showCloseAllRightForDisable){
            let context = contexts("CloseAllRight", prefs);

            browser.contextMenus.create({
                contexts: context,
                id: "CloseRight",
                title: browser.i18n.getMessage("closeAllRightMenuLabel"),
                parentId: closeMenu
            });
        }
    }

    context = contexts("DiscardMenu", prefs);

    if(context.length){

        let discardMenu = browser.contextMenus.create({
            contexts: context,
            id: "DiscardMenu",
            title: browser.i18n.getMessage("discardMenu")
        });

        if(prefs.showDiscardTabForTab){
            browser.contextMenus.create({
                contexts: ["tab"],
                id: "DiscardTab",
                title: browser.i18n.getMessage("discardTabMenuLabel"),
                parentId: discardMenu
            });
        }

        if(!prefs.showDiscardAllForDisable){
            
            let context = contexts("DiscardAll", prefs);
        
            browser.contextMenus.create({
                contexts: context,
                id: "DiscardAll",
                title: browser.i18n.getMessage("discardAllMenuLabel"),
                parentId: discardMenu
            });
        }

        if(!prefs.showDiscardAllRightForDisable){

            let context = contexts("DiscardAllRight", prefs);
    
            browser.contextMenus.create({
                contexts: context,
                id: "DiscardRight",
                title: browser.i18n.getMessage("discardRightMenuLabel"),
                parentId: discardMenu
            });
        }
    
        if(!prefs.showDiscardAllLeftForDisable){
    
            let context = contexts("DiscardAllLeft", prefs);
    
            browser.contextMenus.create({
                contexts: context,
                id: "DiscardLeft",
                title: browser.i18n.getMessage("discardLeftMenuLabel"),
                parentId: discardMenu
            });
        }
    }

    if(!prefs.showClearPreviousTabsForDisable){

        let context = contexts("ClearAll", prefs);

        browser.contextMenus.create({
            contexts: context,
            id: "ClearAll",
            title: browser.i18n.getMessage("clearListMenuLabel"),
        });
    }

    context = contexts("CombineMenu", prefs);

    if(context.length){

        let combineMenu = browser.contextMenus.create({
            contexts: context,
            id: "CombineMenu",
            title: browser.i18n.getMessage("combineMenuLabel")
        });

        if(!prefs.showCombineAllForDisable){
            
            let context = contexts("CombineAll", prefs);

            browser.contextMenus.create({
                contexts: context,
                id: "CombineAll",
                parentId: combineMenu,
                title: browser.i18n.getMessage("combineAllMenuLabel")
            });

        }

        if(!prefs.showCombineAllRightForDisable){

            let context = contexts("CombineAllRight", prefs);

            browser.contextMenus.create({
                contexts: context,
                id: "CombineRight",
                parentId: combineMenu,
                title: browser.i18n.getMessage("combineRightMenuLabel")
            });
        }

        if(!prefs.showCombineAllLeftForDisable){
            
            let context = contexts("CombineAllLeft", prefs);

            browser.contextMenus.create({
                contexts: context,
                id: "CombineLeft",
                parentId: combineMenu,
                title: browser.i18n.getMessage("combineLeftMenuLabel")
            });
        }
    }

    if(tabs.length){
        let previousMenu = browser.contextMenus.create({
            contexts: ["browser_action", "page", "tab"],
            id: "PreviousMenu",
            title: browser.i18n.getMessage("previousMenuLabel")
        });

        browser.contextMenus.create({
            contexts: ["browser_action", "page", "tab"],
            id: "RestoreAll",
            title: browser.i18n.getMessage("restoreAllTabsLabel"),
            parentId: previousMenu
        });

        browser.contextMenus.create({
            contexts: ["browser_action", "page", "tab"],
            id: "RestoreAllWindow",
            title: browser.i18n.getMessage("restoreAllTabsWindowLabel"),
            parentId: previousMenu
        });

        tabs.forEach((tab) => {
            if(typeof tab !== 'undefined'){
                browser.contextMenus.create({
                    contexts: ["browser_action", "page", "tab"],
                    icons: {18: tab.favIconUrl || ""},
                    id: tab.sessionId,
                    title: tab.title,
                    parentId: previousMenu
                });
            }
        });

    }
}

async function contextMenuClicked(c, t){
    if(c.menuItemId.endsWith("RestoreAllWindow")){
        await restoreAll(true);
        return;
    }
    
    if(c.menuItemId.endsWith("RestoreAll")){
        await restoreAll(false);
        return;
    }

    if(c.menuItemId.endsWith("MoveAllRight")){
        await move(t.index, true);
        return;
    }

    if(c.menuItemId.endsWith("MoveAllLeft")){
        await move(t.index, false);
        return;
    }

    if(c.menuItemId.endsWith("CloseLeft")){
        closeLeft(t.index);
        return;
    }

    if(c.menuItemId.endsWith("CloseRight")){
        closeRight(t.index + 1);
        return;
    }

    if(c.menuItemId.endsWith("CloseOther")){
        closeAllOthers(t.id);
        return;
    }

    if(c.menuItemId.endsWith("PrintPage")){
        await print();
        return;
    }

    if(c.menuItemId.endsWith("PrintPreview")){
        await printPreview();
        return;
    }

    if(c.menuItemId.endsWith("CloseDuplicate")){
        await closeDuplicateTabs(t.id, c.pageUrl);
        return;
    }

    if(c.menuItemId.endsWith("DiscardTab")){
        await discardTab(t.id);
        return;
    }

    if(c.menuItemId.endsWith("DiscardRight")){
        await discardRight(t.index);
        return;
    }

    if(c.menuItemId.endsWith("DiscardLeft")){
        await discardLeft(t.index); 
        return;
    }

    if(c.menuItemId.endsWith("DiscardAll")){
        await discardAll(t.id);
        return;
    }

    if(c.menuItemId.endsWith("SavePdf")){
        await savePdf();
        return;
    }

    if(c.menuItemId.endsWith("CombineAll")){
        await combineAllTabs();

        browser.tabs.create({
            url: 'combine.html'
        });

        const prefs = await Storage.get();

        if(prefs.showCloseTabsWhenCombine){
            let tabs = await browser.tabs.query({ currentWindow:true });
            await closeLeft(tabs.length - 1);
        }

        return;
    }

    if(c.menuItemId.endsWith("SortAccessedAsc")){
        sort(c.menuItemId);
        return;
    }

    if(c.menuItemId.endsWith("SortAccessedDes")){
        sort(c.menuItemId);
        return;
    }

    if(c.menuItemId.endsWith("SortTitleAsc")){
        sort(c.menuItemId);
        return;
    }

    if(c.menuItemId.endsWith("SortTitleDes")){
        sort(c.menuItemId);
        return;
    }

    if(c.menuItemId.endsWith("SortUrlAsc")){
        sort(c.menuItemId);
        return;
    }

    if(c.menuItemId.endsWith("SortUrlDes")){
        sort(c.menuItemId);
        return;
    }

    if(c.menuItemId.endsWith("CombineRight")){
        await combineAllTabsRight(t.index + 1);
        const prefs = await Storage.get();

        if(prefs.showCloseTabsWhenCombine){
            await closeRight(t.index + 1);
        }

        browser.tabs.create({
            url: 'combine.html'
        });

        return;
    }

    if(c.menuItemId.endsWith("CombineLeft")){
        await combineAllTabsLeft(t.index);
        const prefs = await Storage.get();

        if(prefs.showCloseTabsWhenCombine){
            await closeLeft(t.index);
        }

        browser.tabs.create({
            url: 'combine.html'
        });

        return;
    }

    if(c.menuItemId.endsWith("ClearAll")){
        await clearAll();
        return;
    }

    const sessionid = c.menuItemId.substring(c.menuItemId.indexOf(":") + 1);
    const session = await browser.sessions.restore(sessionid);
    const currentWindow = await browser.windows.getCurrent();
    if (session.tab.windowId != currentWindow.id)
      browser.windows.update(session.tab.windowId, {focused: true});
}

browser.sessions.onChanged.addListener(closedTabsListChanged);
closedTabsListChanged();
browser.contextMenus.onClicked.addListener(contextMenuClicked);