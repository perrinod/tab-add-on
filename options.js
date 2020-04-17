const checkClosePinnedTabs = document.querySelector("#closePinnedTabsCheckBox");
const checkCloseTabsWhenCombine = document.querySelector("#closeTabsWhenCombineCheckBox");

const checkClearPreviousForDisable = document.querySelector("#clearPreviousTabsCheckBoxForDisable");
const checkClearPreviousForTab = document.querySelector("#clearPreviousTabsCheckBoxForTab");
const checkClearPreviousForPage = document.querySelector("#clearPreviousTabsCheckBoxForPage");

const checkMoveAllRightForDisable = document.querySelector("#moveAllRightCheckBoxForDisable");
const checkMoveAllRightForTab = document.querySelector("#moveAllRightCheckBoxForTab");
const checkMoveAllRightForPage = document.querySelector("#moveAllRightCheckBoxForPage");

const checkMoveAllLeftForDisable = document.querySelector("#moveAllLeftCheckBoxForDisable");
const checkMoveAllLeftForTab = document.querySelector("#moveAllLeftCheckBoxForTab");
const checkMoveAllLeftForPage = document.querySelector("#moveAllLeftCheckBoxForPage");

const checkPrintPreviewForDisable = document.querySelector("#printPreviewCheckBoxForDisable");
const checkPrintPreviewForTab = document.querySelector("#printPreviewCheckBoxForTab");
const checkPrintPreviewForPage = document.querySelector("#printPreviewCheckBoxForPage");

const checkPrintPageForDisable = document.querySelector("#printPageCheckBoxForDisable");
const checkPrintPageForTab = document.querySelector("#printPageCheckBoxForTab");
const checkPrintPageForPage = document.querySelector("#printPageCheckBoxForPage");

const checkSortTabsUrlAscForDisable = document.querySelector("#sortTabsUrlAscCheckBoxForDisable");
const checkSortTabsUrlAscForTab = document.querySelector("#sortTabsUrlAscCheckBoxForTab");
const checkSortTabsUrlAscForPage = document.querySelector("#sortTabsUrlAscCheckBoxForPage");

const checkSortTabsUrlDesForDisable = document.querySelector("#sortTabsUrlDesCheckBoxForDisable");
const checkSortTabsUrlDesForTab = document.querySelector("#sortTabsUrlDesCheckBoxForTab");
const checkSortTabsUrlDesForPage = document.querySelector("#sortTabsUrlDesCheckBoxForPage");

const checkSortTabsTitleAscForDisable = document.querySelector("#sortTabsTitleAscCheckBoxForDisable");
const checkSortTabsTitleAscForTab = document.querySelector("#sortTabsTitleAscCheckBoxForTab");
const checkSortTabsTitleAscForPage = document.querySelector("#sortTabsTitleAscCheckBoxForPage");

const checkSortTabsTitleDesForDisable = document.querySelector("#sortTabsTitleDesCheckBoxForDisable");
const checkSortTabsTitleDesForTab = document.querySelector("#sortTabsTitleDesCheckBoxForTab");
const checkSortTabsTitleDesForPage = document.querySelector("#sortTabsTitleDesCheckBoxForPage");

const checkSortTabsAccessedAscForDisable = document.querySelector("#sortTabsAccessedAscCheckBoxForDisable");
const checkSortTabsAccessedAscForTab = document.querySelector("#sortTabsAccessedAscCheckBoxForTab");
const checkSortTabsAccessedAscForPage = document.querySelector("#sortTabsAccessedAscCheckBoxForPage");

const checkSortTabsAccessedDesForDisable = document.querySelector("#sortTabsAccessedDesCheckBoxForDisable");
const checkSortTabsAccessedDesForTab = document.querySelector("#sortTabsAccessedDesCheckBoxForTab");
const checkSortTabsAccessedDesForPage = document.querySelector("#sortTabsAccessedDesCheckBoxForPage");

const checkSavePdfForDisable = document.querySelector("#savePdfCheckBoxForDisable");
const checkSavePdfForTab = document.querySelector("#savePdfCheckBoxForTab");
const checkSavePdfForPage = document.querySelector("#savePdfCheckBoxForPage");

const checkCloseAllLeftForDisable = document.querySelector("#closeAllLeftCheckBoxForDisable");
const checkCloseAllLeftForTab = document.querySelector("#closeAllLeftCheckBoxForTab");
const checkCloseAllLeftForPage = document.querySelector("#closeAllLeftCheckBoxForPage");

const checkCloseAllOtherForDisable = document.querySelector("#closeAllOtherCheckBoxForDisable");
const checkCloseAllOtherForTab = document.querySelector("#closeAllOtherCheckBoxForTab");
const checkCloseAllOtherForPage = document.querySelector("#closeAllOtherCheckBoxForPage");

const checkCloseAllRightForDisable = document.querySelector("#closeAllRightCheckBoxForDisable");
const checkCloseAllRightForTab = document.querySelector("#closeAllRightCheckBoxForTab");
const checkCloseAllRightForPage = document.querySelector("#closeAllRightCheckBoxForPage");

const checkCloseDuplicateTabsForDisable = document.querySelector("#closeDuplicateTabsCheckBoxForDisable");
const checkCloseDuplicateTabsForTab = document.querySelector("#closeDuplicateTabsCheckBoxForTab");
const checkCloseDuplicateTabsForPage = document.querySelector("#closeDuplicateTabsCheckBoxForPage");

const checkDiscardAllForDisable = document.querySelector("#discardAllCheckBoxForDisable");
const checkDiscardAllForTab = document.querySelector("#discardAllCheckBoxForTab");
const checkDiscardAllForPage = document.querySelector("#discardAllCheckBoxForPage");

const checkDiscardAllRightForDisable = document.querySelector("#discardAllRightCheckBoxForDisable");
const checkDiscardAllRightForTab = document.querySelector("#discardAllRightCheckBoxForTab");
const checkDiscardAllRightForPage = document.querySelector("#discardAllRightCheckBoxForPage");

const checkDiscardAllLeftForDisable = document.querySelector("#discardAllLeftCheckBoxForDisable");
const checkDiscardAllLeftForTab = document.querySelector("#discardAllLeftCheckBoxForTab");
const checkDiscardAllLeftForPage = document.querySelector("#discardAllLeftCheckBoxForPage");

const checkCombineAllRightForDisable = document.querySelector("#combineAllRightCheckBoxForDisable");
const checkCombineAllRightForTab = document.querySelector("#combineAllRightCheckBoxForTab");
const checkCombineAllRightForPage = document.querySelector("#combineAllRightCheckBoxForPage");

const checkCombineAllForDisable = document.querySelector("#combineAllCheckBoxForDisable");
const checkCombineAllForTab = document.querySelector("#combineAllCheckBoxForTab");
const checkCombineAllForPage = document.querySelector("#combineAllCheckBoxForPage");

const checkCombineAllLeftForDisable = document.querySelector("#combineAllLeftCheckBoxForDisable");
const checkCombineAllLeftForTab = document.querySelector("#combineAllLeftCheckBoxForTab");
const checkCombineAllLeftForPage = document.querySelector("#combineAllLeftCheckBoxForPage");

const checkDiscardTabForTab = document.querySelector("#discardTabCheckBoxForTab");

const numberText = document.querySelector("#closedTabsNumber");

async function numberChanged(n){
    let previousTabsNumber = parseInt(numberText.value);
    if(isNaN(previousTabsNumber) || previousTabsNumber > numberText.max || previousTabsNumber < numberText.min)
        previousTabsNumber = browser.sessions.MAX_SESSION_RESULTS;

    await Storage.set({ previousTabsNumber: previousTabsNumber });

    numberText.value = previousTabsNumber;
    browser.extension.getBackgroundPage().closedTabsListChanged();
}

async function checkBoxChanged(c){
    switch(c.target.id){
        case "closePinnedTabsCheckBox":
            await Storage.set({
                showClosePinnedTabs: checkClosePinnedTabs.checked,
            });
            break;

        case "closeTabsWhenCombineCheckBox":
            await Storage.set({
                showCloseTabsWhenCombine: checkCloseTabsWhenCombine.checked,
            });
            break;

        case "moveAllRightCheckBoxForDisable":
            await Storage.set({
                showMoveAllRightForDisable: checkMoveAllRightForDisable.checked,
                showMoveAllRightForTab: !checkMoveAllRightForDisable.checked,
                showMoveAllRightForPage: !checkMoveAllRightForDisable.checked,
            });
            checkMoveAllRightForTab.checked = !checkMoveAllRightForDisable.checked;
            checkMoveAllRightForPage.checked = !checkMoveAllRightForDisable.checked;
            break;

        case "moveAllRightCheckBoxForTab":
            await Storage.set({ 
                showMoveAllRightForTab: checkMoveAllRightForTab.checked,
                checkMoveAllRightForDisable: false
            });
            checkMoveAllRightForDisable.checked = false;
            break;

        case "moveAllRightCheckBoxForPage":
            await Storage.set({
                showMoveAllRightForPage: checkMoveAllRightForPage.checked,
                checkMoveAllRightForDisable: false
            });
            checkMoveAllRightForDisable.checked = false;
            break;

        case "moveAllLeftCheckBoxForDisable":
            await Storage.set({
                showMoveAllLeftForDisable: checkMoveAllLeftForDisable.checked,
                showMoveAllLeftForTab: !checkMoveAllLeftForDisable.checked,
                showMoveAllLeftForPage: !checkMoveAllLeftForDisable.checked,
            });
            checkMoveAllLeftForTab.checked =!checkMoveAllLeftForDisable.checked;
            checkMoveAllLeftForPage.checked = !checkMoveAllLeftForDisable.checked;
            break;

        case "MoveAllLeftCheckBoxForTab":
            await Storage.set({
                showMoveAllLeftForTab: checkMoveAllLeftForTab.checked,
                showMoveAllLeftForDisable: false
            });
            checkMoveAllLeftForDisable.checked = false;
            break;
        
        case "MoveAllLeftCheckBoxForPage":
            await Storage.set({
                showMoveAllLeftForPage: checkMoveAllLeftForPage.checked,
                showMOveAllLeftForDisable: false
            });
            checkMoveAllLeftForDisable.checked = false;
            break;

        case "printPageCheckBoxForDisable":
            await Storage.set({
                showPrintPageForDisable: checkPrintPageForDisable.checked,
                showPrintPageForTab: !checkPrintPageForDisable.checked,
                showPrintPageForPage: !checkPrintPageForDisable.checked,
            });
            checkPrintPageForTab.checked = !checkPrintPageForDisable.checked;
            checkPrintPageForPage.checked = !checkPrintPageForDisable.checked;
            break;

        case "printPageCheckBoxForTab":
            await Storage.set({
                showPrintPageForTab: checkPrintPageForTab.checked,
                showPrintPageForDisable: false
            });
            checkPrintPageForDisable.checked = false;
            break;

        case "printPageCheckBoxForPage":
            await Storage.set({
                showPrintPageForPage: checkPrintPageForPage.checked,
                showPrintPageForDisable: false
            });
            checkPrintPageForDisable.checked = false;
            break;

        case "printPreviewCheckBoxForDisable":
            await Storage.set({
                showPrintPreviewForDisable: checkPrintPreviewForDisable.checked,
                showPrintPreviewForTab: !checkPrintPreviewForDisable.checked,
                showPrintPreviewForPage: !checkPrintPreviewForDisable.checked,
            });
            checkPrintPreviewForTab.checked = !checkPrintPreviewForDisable.checked;
            checkPrintPreviewForPage.checked = !checkPrintPreviewForDisable.checked;
            break;

        case "printPreviewCheckBoxForTab":
            await Storage.set({
                showPrintPreviewForTab: checkPrintPreviewForTab.checked,
                showPrintPreviewForDisable: false
            });
            checkPrintPreviewForDisable.checked = false;
            break;

        case "printPreviewCheckBoxForPage":
            await Storage.set({
                showPrintPreviewForPage: checkPrintPreviewForPage.checked,
                showPrintPreviewForDisable: false
            });
            checkPrintPreviewForDisable.checked = false;
            break;

        case "sortTabsAccessedDesCheckBoxForDisable":
            await Storage.set({
                showSortTabsAccessedDesForDisable: checkSortTabsAccessedDesForDisable.checked,
                showSortTabsAccessedDesForTab: !checkSortTabsAccessedDesForDisable.checked,
                showSortTabsAccessedDesForPage: !checkSortTabsAccessedDesForDisable.checked,
            });
            checkSortTabsAccessedDesForTab.checked = !checkSortTabsAccessedDesForDisable.checked;
            checkSortTabsAccessedDesForPage.checked = !checkSortTabsAccessedDesForDisable.checked;
            break;
    
        case "sortTabsAccessedDesCheckBoxForTab":
            await Storage.set({
                showSortTabsAccessedDesForTab: checkSortTabsAccessedDesForTab.checked,
                showSortTabsAccessedDesForDisable: false
            });
            checkSortTabsAccessedDesForDisable.checked = false;
            break;
        
        case "sortTabsAccessedDesCheckBoxForPage":
            await Storage.set({
                showSortTabsAccessedDesForPage: checkSortTabsAccessedDesForPage.checked,
                showSortTabsAccessedDesForDisable: false
            });
            checkSortTabsAccessedDesForDisable.checked = false;
            break;

        case "sortTabsAccessedAscCheckBoxForDisable":
            await Storage.set({
                showSortTabsAccessedAscForDisable: checkSortTabsAccessedAscForDisable.checked,
                showSortTabsAccessedAscForTab: !checkSortTabsAccessedAscForDisable.checked,
                showSortTabsAccessedAscForPage: !checkSortTabsAccessedAscForDisable.checked,
            });
            checkSortTabsAccessedAscForTab.checked = !checkSortTabsAccessedAscForDisable.checked;
            checkSortTabsAccessedAscForPage.checked = !checkSortTabsAccessedAscForDisable.checked;
            break;

        case "sortTabsAccessedAscCheckBoxForTab":
            await Storage.set({
                showSortTabsAccessedAscForTab: checkSortTabsAccessedAscForTab.checked,
                showSortTabsAccessedAscForDisable: false
            });
            checkSortTabsAccessedAscForDisable.checked = false;
            break;

        case "sortTabsAccessedAscCheckBoxForPage":
            await Storage.set({
                showSortTabsAccessedAscForPage: checkSortTabsAccessedAscForPage.checked,
                showSortTabsAccessedAscForDisable: false
            });
            checkSortTabsAccessedAscForDisable.checked = false;
            break;

        case "sortTabsTitleDesCheckBoxForDisable":
            await Storage.set({
                showSortTabsTitleDesForDisable: checkSortTabsTitleDesForDisable.checked,
                showSortTabsTitleDesForTab: !checkSortTabsTitleDesForDisable.checked,
                showSortTabsTitleDesForPage: !checkSortTabsTitleDesForDisable.checked,
            });
            checkSortTabsTitleDesForTab.checked = !checkSortTabsTitleDesForDisable.checked;
            checkSortTabsTitleDesForPage.checked = !checkSortTabsTitleDesForDisable.checked;
            break;

        case "sortTabsTitleDesCheckBoxForTab":
            await Storage.set({
                showSortTabsTitleDesForTab: checkSortTabsTitleDesForTab.checked,
                showSortTabsTitleDesForDisable: false
            });
            checkSortTabsTitleDesForDisable.checked = false;
            break;
    
        case "showTabsTitleDesCheckBoxForPage":
            await Storage.set({
                showSortTabsTitleDesForPage: checkSortTabsTitleDesForPage.checked,
                showSortTabsTitleDesForDisable: false
            });
            checkSortTabsTitleDesForDisable.checked = false;
            break;

        case "sortTabsTitleAscCheckBoxForDisable":
            await Storage.set({
                showSortTabsTitleAscForDisable: checkSortTabsTitleAscForDisable.checked,
                showSortTabsTitleAscForTab: !checkSortTabsTitleAscForDisable.checked,
                showSortTabsTitleAscForPage: !checkSortTabsTitleAscForDisable.checked,
            });
            checkSortTabsTitleAscForTab.checked = !checkSortTabsTitleAscForDisable.checked;
            checkSortTabsTitleAscForPage.checked = !checkSortTabsTitleAscForDisable.checked;
            break;

        case "sortTabsTitleAscCheckBoxForTab":
            await Storage.set({
                showSortTabsTitleAscForTab: checkSortTabsTitleAscForTab.checked,
                showSortTabsTitleAscForDisable: false
            });
            checkSortTabsTitleAscForDisable.checked = false;
            break;

        case "sortTabsTitleAscCheckBoxForPage":
            await Storage.set({
                showSortTabsTitleAscForPage: checkSortTabsTitleAscForPage.checked,
                showSortTabsTitleAscForDisable: false
            });
            checkSortTabsTitleAscForDisable.checked = false;
            break;

        case "sortTabsUrlDesCheckBoxForDisable":
            await Storage.set({
                showSortTabsUrlDesForDisable: checkSortTabsUrlDesForDisable.checked,
                showSortTabsUrlDesForTab: !checkSortTabsUrlDesForDisable.checked,
                showSortTabsUrlDesForPage: !checkSortTabsUrlDesForDisable.checked,
            });
            checkSortTabsUrlDesForTab.checked = !checkSortTabsUrlDesForDisable.checked;
            checkSortTabsUrlDesForPage.checked = !checkSortTabsUrlDesForDisable.checked;
            break;

        case "sortTabsUrlDesCheckBoxForTab":
            await Storage.set({
                showSortTabsUrlDesForTab: checkSortTabsUrlDesForTab.checked,
                showSortTabsUrlDesForDisable: false
            });
            checkSortTabsUrlDesForDisable.checked = false;
            break;
        
        case "sortTabsUrlDesCheckBoxForPage":
            await Storage.set({
                showSortTabsUrlsDesForPage: checkSortTabsUrlDesForPage.checked,
                showSortTabsUrlDesForDisable: false
            });
            checkSortTabsUrlDesForDisable.checked = false;
            break;

        case "sortTabsUrlAscCheckBoxForDisable":
            await Storage.set({
                showSortTabsUrlAscForDisable: checkSortTabsUrlAscForDisable.checked,
                showSortTabsUrlAscForTab: !checkSortTabsUrlAscForDisable.checked,
                showSortTabsUrlAscForPage: !checkSortTabsUrlAscForDisable.checked,
            });
            checkSortTabsUrlAscForTab.checked = !checkSortTabsUrlAscForDisable.checked;
            checkSortTabsUrlAscForPage.checked = !checkSortTabsUrlAscForDisable.checked;
            break;

        case "sortTabsUrlAscCheckBoxForTab":
            await Storage.set({
                showSortTabsUrlAscForTab: checkSortTabsUrlAscForTab.checked,
                showSortTabsUrlAscForDisable: false
            });
            checkSortTabsUrlAscForDisable.checked = false;
            break;

        case "sortTabsUrlAscCheckBoxForPage":
            await Storage.set({
                showSortTabsUrlAscForPage: checkSortTabsUrlAscForPage.checked,
                showSortTabsUrlAscForDisable: false
            });
            checkSortTabsUrlAscForDisable.checked = false;
            break;

        case "savePdfCheckBoxForDisable":
            await Storage.set({
                showSavePdfForDisable: checkSavePdfForDisable.checked,
                showSavePdfForPage: !checkSavePdfForDisable.checked,
                showSavePdfForTab: !checkSavePdfForDisable.checked
            });
            checkSavePdfForTab.checked = !checkSavePdfForDisable.checked;
            checkSavePdfForPage.checked = !checkSavePdfForDisable.checked;
            break;

        case "savePdfCheckBoxForPage":
            await Storage.set({
                showSavePdfForPage: checkSavePdfForPage.checked,
                showSavePdfForDisable: false,
            });
            checkSaveForDisable.checked = false;
            break;

        case "savePdfCheckBoxForTab":
            await Storage.set({
                showSavePdfForTab: checkSavePdfForTab.checked,
                showSavePdfForDisable: false
            });
            checkSavePdfForDisable.checked = false;
            break;

        case "closeDuplicateTabsCheckBoxForDisable":
            await Storage.set({
                showCloseDuplicateTabsForDisable: checkCloseDuplicateTabsForDisable.checked,
                showCloseDuplicateTabsForPage: !checkCloseDuplicateTabsForDisable.checked,
                showCloseDuplicateTabsForTab: !checkCloseDuplicateTabsForDisable.checked
            });
            checkCloseDuplicateTabsForTab.checked = !checkCloseDuplicateTabsForDisable.checked;
            checkCloseDuplicateTabsForPage.checked = !checkCloseDuplicateTabsForDisable.checked;
            break;

        case "closeDuplicateTabsCheckBoxForPage":
            await Storage.set({
                showCloseDuplicateTabsForPage: checkCloseDuplicateTabsForPage.checked,
                showCloseDuplicateTabsForDisable: false
            });
            checkCloseDuplicateTabsForDisable.checked = false;
            break;

        case "closeDuplicateTabsCheckBoxForTab":
            await Storage.set({
                showCloseDuplicateTabsForTab: checkCloseDuplicateTabsForTab.checked,
                showCloseDuplicateTabsForTab: false
            });
            checkCloseDuplicateTabsForDisable.checked = false;
            break;

        case "closeAllLeftCheckBoxForDisable":
            await Storage.set({
                showCloseAllLeftForDisable: checkCloseAllLeftForDisable.checked,
                showCloseAllLeftForTab: !checkCloseAllLeftForDisable.checked,
                showCloseAllLeftForPage: !checkCloseAllLeftForDisable.checked,
            });
            checkCloseAllLeftForTab.checked = !checkCloseAllLeftForDisable.checked;
            checkCloseAllLeftForPage.checked = !checkCloseAllLeftForDisable.checked;
            break;

        case "closeAllOtherCheckBoxForDisable":
            await Storage.set({
                showCloseAllOtherForDisable: checkCloseAllOtherForDisable.checked,
                showCloseAllOtherForTab: !checkCloseAllOtherForDisable.checked,
                showCloseAllOtherForPage: !checkCloseAllOtherForDisable.checked,
            });
            checkCloseAllOtherForTab.checked = !checkCloseAllOtherForDisable.checked;
            checkCloseAllOtherForPage.checked = !checkCloseAllOtherForDisable.checked;
            break;

        case "closeAllRightCheckBoxForDisable":
            await Storage.set({
                showCloseAllRightForDisable: checkCloseAllRightForDisable.checked,
                showCloseAllRightForTab: !checkCloseAllRightForDisable.checked,
                showCloseAllRightForPage: !checkCloseAllRightForDisable.checked,
            });
            checkCloseAllRightForTab.checked = !checkCloseAllRightForDisable.checked;
            checkCloseAllRightForPage.checked = !checkCloseAllRightForDisable.checked;
            break;

        case "closeAllLeftCheckBoxForTab":
            await Storage.set({
                showCloseAllLeftForTab: checkCloseAllLeftForTab.checked,
                showCloseAllLeftForDisable: false
            });
            checkCloseAllLeftForDisable.checked = false;
            break;

        case "closeAllOtherCheckBoxForTab":
            await Storage.set({
                showCloseAllOtherForTab: checkCloseAllOtherForTab.checked,
                showCloseAllOtherForDisable: false
            });
            checkCloseAllOtherForDisable.checked = false;
            break;

        case "closeAllRightCheckBoxForTab":
            await Storage.set({
                showCloseAllRightForTab: checkCloseAllRightForTab.checked,
                showCloseAllRightForDisable: false
            });
            checkCloseAllRightForDisable.checked = false;
            break;

        case "closeAllLeftCheckBoxForPage":
            await Storage.set({
                showCloseAllLeftForPage: checkCloseAllLeftForPage.checked,
                showCloseAllLeftForDisable: false
            });
            checkCloseAllLeftForDisable.checked = false;
            break;

        case "closeAllOtherCheckBoxForPage":
            await Storage.set({
                showCloseAllOtherForPage: checkCloseAllOtherForPage.checked,
                showCloseAllOtherForDisable: false
            });
            checkCloseAllOtherForDisable.checked = false;
            break;

        case "closeAllRightCheckBoxForPage":
            await Storage.set({
                showCloseAllRightForPage: checkCloseAllRightForPage.checked,
                showCloseAllRightForDisable: false
            });
            checkCloseAllRightForDisable.checked = false;
            break;

        case "clearPreviousTabsCheckBoxForDisable":
            await Storage.set({
                showClearPreviousTabsForDisable: checkClearPreviousForDisable.checked,
                showClearPreviousTabsForPage: !checkClearPreviousForDisable.checked,
                showClearPreviousTabsForTab: !checkClearPreviousForDisable.checked
            });
            checkClearPreviousForTab.checked = !checkClearPreviousForDisable.checked;
            checkClearPreviousForPage.checked = !checkClearPreviousForDisable.checked;
            break;

        case "clearPreviousTabsCheckBoxForPage":
            await Storage.set({
                showClearPreviousTabsForPage: checkClearPreviousForPage.checked,
                showClearPreviousTabsForDisable: false
            });
            checkClearPreviousForDisable.checked = false;
            break;
        
        case "clearPreviousTabsCheckBoxForTab":
            await Storage.set({
                showClearPreviousTabsForTab: checkClearPreviousForTab.checked,
                showClearPreviousTabsForDisable: false
            });
            checkClearPreviousForDisable.checked = false;
            break;

        case "discardAllCheckBoxForDisable":
            await Storage.set({
                showDiscardAllForDisable: checkDiscardAllForDisable.checked,
                showDiscardAllForPage: !checkDiscardAllForDisable.checked,
                showDiscardAllForTab: !checkDiscardAllForDisable.checked
            });
            checkDiscardAllForTab.checked = !checkDiscardAllForDisable.checked;
            checkDiscardAllForPage.checked = !checkDiscardAllForDisable.checked;
            break;
        
        case "discardAllRightCheckBoxForDisable":
            await Storage.set({
                showDiscardAllRightForDisable: checkDiscardAllRightForDisable.checked,
                showDiscardAllRightForPage: !checkDiscardAllRightForDisable.checked,
                showDiscardAllRightForTab: !checkDiscardAllRightForDisable.checked
            });
            checkDiscardAllRightForTab.checked = !checkDiscardAllRightForDisable.checked;
            checkDiscardAllRightForPage.checked = !checkDiscardAllRightForDisable.checked;
            break;

        case "discardAllLeftCheckBoxForDisable":
            await Storage.set({
                showDiscardAllLeftForDisable: checkDiscardAllLeftForDisable.checked,
                showDiscardAllLeftForPage: !checkDiscardAllLeftForDisable.checked,
                showDiscardAllLeftForTab: !checkDiscardAllLeftForDisable.checked
            });
            checkDiscardAllLeftForTab.checked = !checkDiscardAllLeftForDisable.checked;
            checkDiscardAllLeftForPage.checked = !checkDiscardAllLeftForDisable.checked;
            break;

        case "discardAllCheckBoxForTab":
            await Storage.set({
                showDiscardAllForTab: checkDiscardAllForTab.checked,
                showDiscardAllForDisable: false
            });
            checkDiscardAllForDisable.checked = false;
            break;

        case "discardAllRightCheckBoxForTab":
            await Storage.set({
                showDiscardAllRightForTab: checkDiscardAllRightForTab.checked,
                showDiscardAllRightForDisable: false
            });
            checkDiscardAllRightForDisable.checked = false;
            break;
        
        case "discardAllLeftCheckBoxForTab":
            await Storage.set({
                showDiscardAllLeftForTab: checkDiscardAllLeftForTab.checked,
                showDiscardAllLeftForDisable: false
            });
            checkDiscardAllLeftForDisable.checked = false;
            break;

        case "discardAllCheckBoxForPage":
            await Storage.set({
                showDiscardAllForPage: checkDiscardAllForPage.checked,
                showDiscardAllForDisable: false
            });
            checkDiscardAllForDisable.checked = false;
            break;

        case "discardAllRightCheckBoxForPage":
            await Storage.set({
                showDiscardAllRightForPage: checkDiscardAllRightForPage.checked,
                showDiscardAllRightForDisable: false
            });
            checkDiscardAllRightForDisable.checked = false;
            break;
        
        case "discardAllLeftCheckBoxForPage":
            await Storage.set({
                showDiscardAllLeftForPage: checkDiscardAllLeftForPage.checked,
                showDiscardAllLeftForDisable: false
            });
            checkDiscardAllLeftForDisable.checked = false;
            break;

        case "discardTabCheckBoxForTab":
            await Storage.set({
                showDiscardTabForTab: checkDiscardTabForTab.checked
            });
            break;

        case "combineAllCheckBoxForDisable":
            await Storage.set({
                showCombineAllForDisable: checkCombineAllForDisable.checked,
                showCombineAllForPage: !checkCombineAllForDisable.checked,
                showCombineAllForTab: !checkCombineAllForDisable.checked
            });
            checkCombineAllForPage.checked = !checkCombineAllForDisable.checked;
            checkCombineAllForTab.checked = !checkCombineAllForDisable.checked;
            break;

        case "combineAllRightCheckBoxForDisable":
            await Storage.set({
                showCombineAllRightForDisable: checkCombineAllRightForDisable.checked,
                showCombineAllRightForPage: !checkCombineAllRightForDisable.checked,
                showCombineAllRightForTab: !checkCombineAllRightForDisable.checked
            });
            checkCombineAllRightForPage.checked = !checkCombineAllRightForDisable.checked;
            checkCombineAllRightForTab.checked = !checkCombineAllRightForDisable.checked;
            break;

        case "combineAllLeftCheckBoxForDisable":
            await Storage.set({
                showCombineAllLeftForDisable: checkCombineAllLeftForDisable.checked,
                showCombineAllLeftForPage: !checkCombineAllLeftForDisable.checked,
                showCombineAllLeftForTab: !checkCombineAllLeftForDisable.checked
            });
            checkCombineAllLeftForPage.checked = !checkCombineAllLeftForDisable.checked;
            checkCombineAllLeftForTab.checked = !checkCombineAllLeftForDisable.checked;
            break;

        case "combineAllCheckBoxForPage":
            await Storage.set({
                showCombineAllForPage: checkCombineAllForPage.checked,
                showCombineAllForDisable: false
            });
            checkCombineAllForDisable.checked = false;
            break;

        case "combineAllRightCheckBoxForPage":
            await Storage.set({
                showCombineAllRightForPage: checkCombineAllRightForPage.checked,
                showCombineAllRightForDisable: false
            });
            checkCombineAllRightForDisable.checked = false;
            break;

        case "combineAllLeftCheckBoxForPage":
            await Storage.set({
                showCombineAllLeftForPage: checkCombineAllLeftForPage.checked,
                showCombineAllLeftForDisable: false
            });
            checkCombineAllLeftForDisable.checked = false;
            break;

        case "combineAllCheckBoxForTab":
            await Storage.set({
                showCombineAllForTab: checkCombineAllForTab.checked,
                showCombineAllForDisable: false
            });
            checkCombineAllForDisable.checked = false;
            break;

        case "combineAllRightCheckBoxForTab":
            await Storage.set({
                showCombineAllRightForTab: checkCombineAllRightForTab.checked,
                showCombineAllRightForDisable: false
            });
            checkCombineAllRightForDisable.checked = false;
            break;

        case "combineAllLeftCheckBoxForTab":
            await Storage.set({
                showCombineAllLeftForTab: checkCombineAllForTab.checked,
                showCombineAllLeftForDisable: false
            });
            checkCombineAllLeftForDisable.checked = false;
            break;
    }

    browser.extension.getBackgroundPage().closedTabsListChanged();
}

function init(){
    [
        "moveAllRightMenuLabel",
        "moveAllRightCheckBoxForDisableLabel",
        "moveAllRightCheckBoxForTabLabel",
        "moveAllRightCheckBoxForPageLabel",

        "moveAllLeftMenuLabel",
        "moveAllLeftCheckBoxForDisableLabel",
        "moveAllLeftCheckBoxForTabLabel",
        "moveAllLeftCheckBoxForPageLabel",

        "printPageMenuLabel",
        "printPageCheckBoxForDisableLabel",
        "printPageCheckBoxForTabLabel",
        "printPageCheckBoxForPageLabel",

        "printPreviewMenuLabel",
        "printPreviewCheckBoxForDisableLabel",
        "printPreviewCheckBoxForTabLabel",
        "printPreviewCheckBoxForPageLabel",

        "sortTabsTitleAscMenuLabel",
        "sortTabsTitleAscCheckBoxForDisableLabel",
        "sortTabsTitleAscCheckBoxForTabLabel",
        "sortTabsTitleAscCheckBoxForPageLabel",

        "sortTabsTitleDesMenuLabel",
        "sortTabsTitleDesCheckBoxForDisableLabel",
        "sortTabsTitleDesCheckBoxForTabLabel",
        "sortTabsTitleDesCheckBoxForPageLabel",

        "sortTabsUrlAscMenuLabel",
        "sortTabsUrlAscCheckBoxForDisableLabel",
        "sortTabsUrlAscCheckBoxForTabLabel",
        "sortTabsUrlAscCheckBoxForPageLabel",

        "sortTabsUrlDesMenuLabel",
        "sortTabsUrlDesCheckBoxForDisableLabel",
        "sortTabsUrlDesCheckBoxForTabLabel",
        "sortTabsUrlDesCheckBoxForPageLabel",

        "sortTabsAccessedAscMenuLabel",
        "sortTabsAccessedAscCheckBoxForDisableLabel",
        "sortTabsAccessedAscCheckBoxForTabLabel",
        "sortTabsAccessedAscCheckBoxForPageLabel",

        "sortTabsAccessedDesMenuLabel",
        "sortTabsAccessedDesCheckBoxForDisableLabel",
        "sortTabsAccessedDesCheckBoxForTabLabel",
        "sortTabsAccessedDesCheckBoxForPageLabel",

        "savePdfMenuLabel",
        "savePdfCheckBoxForDisableLabel",
        "savePdfCheckBoxForTabLabel",
        "savePdfCheckBoxForPageLabel",

        "clearListMenuLabel",
        "clearPreviousTabsCheckBoxForDisableLabel",
        "clearPreviousTabsCheckBoxForTabLabel",
        "clearPreviousTabsCheckBoxForPageLabel",

        "closeDuplicateTabsMenuLabel",
        "closeDuplicateTabsCheckBoxForDisableLabel",
        "closeDuplicateTabsCheckBoxForTabLabel",
        "closeDuplicateTabsCheckBoxForPageLabel",

        "closedTabsNumberLabel",

        "contextMenuLabel",

        "closePinnedTabsCheckBoxLabel",
        "closeTabsWhenCombineCheckBoxLabel",

        "closeAllOtherMenuLabel",
        "closeAllOtherCheckBoxForDisableLabel",
        "closeAllOtherCheckBoxForTabLabel",
        "closeAllOtherCheckBoxForPageLabel",

        "closeAllLeftMenuLabel",
        "closeAllLeftCheckBoxForDisableLabel",
        "closeAllLeftCheckBoxForTabLabel",
        "closeAllLeftCheckBoxForPageLabel",

        "closeAllRightMenuLabel",
        "closeAllRightCheckBoxForDisableLabel",
        "closeAllRightCheckBoxForTabLabel",
        "closeAllRightCheckBoxForPageLabel",

        "discardAllMenuLabel",
        "discardAllCheckBoxForDisableLabel",
        "discardAllCheckBoxForTabLabel",
        "discardAllCheckBoxForPageLabel",

        "discardLeftMenuLabel",
        "discardAllLeftCheckBoxForDisableLabel",
        "discardAllLeftCheckBoxForTabLabel",
        "discardAllLeftCheckBoxForPageLabel",

        "discardRightMenuLabel",
        "discardAllRightCheckBoxForDisableLabel",
        "discardAllRightCheckBoxForTabLabel",
        "discardAllRightCheckBoxForPageLabel",

        "combineAllMenuLabel",
        "combineAllCheckBoxForDisableLabel",
        "combineAllCheckBoxForTabLabel",
        "combineAllCheckBoxForPageLabel",

        "combineLeftMenuLabel",
        "combineAllLeftCheckBoxForDisableLabel",
        "combineAllLeftCheckBoxForTabLabel",
        "combineAllLeftCheckBoxForPageLabel",

        "combineRightMenuLabel",
        "combineAllRightCheckBoxForDisableLabel",
        "combineAllRightCheckBoxForTabLabel",
        "combineAllRightCheckBoxForPageLabel",
        
        "discardTabMenuLabel",
        "discardTabCheckBoxForTabLabel",
    ].forEach((id) => {
        document.querySelector("#" + id).textContent = browser.i18n.getMessage(id);
    });

    numberText.title = browser.i18n.getMessage("previousTabsLabel", browser.sessions.MAX_SESSION_RESULTS);
    numberText.max = browser.sessions.MAX_SESSION_RESULTS;
    loadOptions();

    numberText.addEventListener("change", numberChanged);

    checkClosePinnedTabs.addEventListener("change", checkBoxChanged);
    checkCloseTabsWhenCombine.addEventListener("change", checkBoxChanged);

    checkMoveAllRightForDisable.addEventListener("change", checkBoxChanged);
    checkMoveAllRightForTab.addEventListener("change", checkBoxChanged);
    checkMoveAllRightForPage.addEventListener("change", checkBoxChanged);

    checkMoveAllLeftForDisable.addEventListener("change", checkBoxChanged);
    checkMoveAllLeftForTab.addEventListener("change", checkBoxChanged);
    checkMoveAllLeftForPage.addEventListener("change", checkBoxChanged);

    checkPrintPageForDisable.addEventListener("change", checkBoxChanged);
    checkPrintPageForTab.addEventListener("change", checkBoxChanged);
    checkPrintPageForPage.addEventListener("change", checkBoxChanged);

    checkPrintPreviewForDisable.addEventListener("change", checkBoxChanged);
    checkPrintPreviewForTab.addEventListener("change", checkBoxChanged);
    checkPrintPreviewForPage.addEventListener("change", checkBoxChanged);

    checkSortTabsUrlAscForDisable.addEventListener("change", checkBoxChanged);
    checkSortTabsUrlAscForTab.addEventListener("change", checkBoxChanged);
    checkSortTabsUrlAscForPage.addEventListener("change", checkBoxChanged);

    checkSortTabsUrlDesForDisable.addEventListener("change", checkBoxChanged);
    checkSortTabsUrlDesForTab.addEventListener("change", checkBoxChanged);
    checkSortTabsUrlDesForPage.addEventListener("change", checkBoxChanged);

    checkSortTabsTitleAscForDisable.addEventListener("change", checkBoxChanged);
    checkSortTabsTitleAscForTab.addEventListener("change", checkBoxChanged);
    checkSortTabsTitleAscForPage.addEventListener("change", checkBoxChanged);

    checkSortTabsTitleDesForDisable.addEventListener("change", checkBoxChanged);
    checkSortTabsTitleDesForTab.addEventListener("change", checkBoxChanged);
    checkSortTabsTitleDesForPage.addEventListener("change", checkBoxChanged);

    checkSortTabsAccessedAscForDisable.addEventListener("change", checkBoxChanged);
    checkSortTabsAccessedAscForTab.addEventListener("change", checkBoxChanged);
    checkSortTabsAccessedAscForPage.addEventListener("change", checkBoxChanged);

    checkSortTabsAccessedDesForDisable.addEventListener("change", checkBoxChanged);
    checkSortTabsAccessedDesForTab.addEventListener("change", checkBoxChanged);
    checkSortTabsAccessedDesForPage.addEventListener("change", checkBoxChanged);
    
    checkSavePdfForDisable.addEventListener("change", checkBoxChanged);
    checkSavePdfForTab.addEventListener("change", checkBoxChanged);
    checkSavePdfForPage.addEventListener("change", checkBoxChanged);

    checkCloseDuplicateTabsForDisable.addEventListener("change", checkBoxChanged);
    checkCloseDuplicateTabsForTab.addEventListener("change", checkBoxChanged);
    checkCloseDuplicateTabsForPage.addEventListener("change", checkBoxChanged);

    checkClearPreviousForDisable.addEventListener("change", checkBoxChanged);
    checkClearPreviousForTab.addEventListener("change", checkBoxChanged);
    checkClearPreviousForPage.addEventListener("change", checkBoxChanged);

    checkCloseAllOtherForDisable.addEventListener("change", checkBoxChanged);
    checkCloseAllOtherForTab.addEventListener("change", checkBoxChanged);
    checkCloseAllOtherForPage.addEventListener("change", checkBoxChanged);

    checkCloseAllLeftForDisable.addEventListener("change", checkBoxChanged);
    checkCloseAllLeftForTab.addEventListener("change", checkBoxChanged);
    checkCloseAllLeftForPage.addEventListener("change", checkBoxChanged);

    checkCloseAllRightForDisable.addEventListener("change", checkBoxChanged);
    checkCloseAllRightForTab.addEventListener("change", checkBoxChanged);
    checkCloseAllRightForPage.addEventListener("change", checkBoxChanged);

    checkDiscardAllLeftForDisable.addEventListener("change", checkBoxChanged);
    checkDiscardAllLeftForTab.addEventListener("change", checkBoxChanged);
    checkDiscardAllLeftForPage.addEventListener("change", checkBoxChanged);

    checkDiscardAllForDisable.addEventListener("change", checkBoxChanged);
    checkDiscardAllForTab.addEventListener("change", checkBoxChanged);
    checkDiscardAllForPage.addEventListener("change", checkBoxChanged);

    checkDiscardAllRightForDisable.addEventListener("change", checkBoxChanged);
    checkDiscardAllRightForTab.addEventListener("change", checkBoxChanged);
    checkDiscardAllRightForPage.addEventListener("change", checkBoxChanged);

    checkCombineAllForDisable.addEventListener("change", checkBoxChanged);
    checkCombineAllForTab.addEventListener("change", checkBoxChanged);
    checkCombineAllForPage.addEventListener("change", checkBoxChanged);

    checkCombineAllRightForDisable.addEventListener("change", checkBoxChanged);
    checkCombineAllRightForTab.addEventListener("change", checkBoxChanged);
    checkCombineAllRightForPage.addEventListener("change", checkBoxChanged);

    checkCombineAllLeftForDisable.addEventListener("change", checkBoxChanged);
    checkCombineAllLeftForTab.addEventListener("change", checkBoxChanged);
    checkCombineAllLeftForPage.addEventListener("change", checkBoxChanged);

    checkDiscardTabForTab.addEventListener("change", checkBoxChanged);
}

function loadOptions(){
    Storage.get().then((result) => {
        numberText.value = result.previousTabsNumber;

        checkClosePinnedTabs.checked = result.showClosePinnedTabs;
        checkCloseTabsWhenCombine.checked = result.showCloseTabsWhenCombine;

        checkMoveAllRightForDisable.checked = result.showMoveAllRightForDisable;
        checkMoveAllRightForTab.checked = result.showMoveAllRightForTab;
        checkMoveAllRightForPage.checked = result.showMoveAllRightForPage;

        checkMoveAllLeftForDisable.checked = result.showMoveAllLeftForDisable;
        checkMoveAllLeftForTab.checked = result.showMoveAllLeftForTab;
        checkMoveAllLeftForPage.checked = result.showMoveAllLeftForPage;

        checkPrintPageForDisable.checked = result.showPrintPageForDisable;
        checkPrintPageForTab.checked = result.showPrintPageForTab;
        checkPrintPageForPage.checked = result.showPrintPageForPage;

        checkPrintPreviewForDisable.checked = result.showPrintPreviewForDisable;
        checkPrintPreviewForTab.checked = result.showPrintPreviewForTab;
        checkPrintPreviewForPage.checked = result.showPrintPreviewForPage;

        checkSortTabsUrlAscForDisable.checked = result.showSortTabsUrlAscForDisable;
        checkSortTabsUrlAscForTab.checked = result.showSortTabsUrlAscForTab;
        checkSortTabsUrlAscForPage.checked = result.showSortTabsUrlAscForPage;

        checkSortTabsUrlDesForDisable.checked = result.showSortTabsUrlDesForDisable;
        checkSortTabsUrlDesForTab.checked = result.showSortTabsUrlDesForTab;
        checkSortTabsUrlDesForPage.checked = result.showSortTabsUrlDesForPage;

        checkSortTabsTitleAscForDisable.checked = result.showSortTabsTitleAscForDisable;
        checkSortTabsTitleAscForTab.checked = result.showSortTabsTitleAscForTab;
        checkSortTabsTitleAscForPage.checked = result.showSortTabsTitleAscForPage;

        checkSortTabsTitleDesForDisable.checked = result.showSortTabsTitleDesForDisable;
        checkSortTabsTitleDesForTab.checked = result.showSortTabsTitleDesForTab;
        checkSortTabsTitleDesForPage.checked = result.showSortTabsTitleDesForPage;

        checkSortTabsAccessedAscForDisable.checked = result.showSortTabsAccessedAscForDisable;
        checkSortTabsAccessedAscForTab.checked = result.showSortTabsAccessedAscForTab;
        checkSortTabsAccessedAscForPage.checked = result.showSortTabsAccessedAscForPage;

        checkSortTabsAccessedDesForDisable.checked = result.showSortTabsAccessedDesForDisable;
        checkSortTabsAccessedDesForTab.checked = result.showSortTabsAccessedDesForTab;
        checkSortTabsAccessedDesForPage.checked = result.showSortTabsAccessedDesForPage;

        checkSavePdfForDisable.checked = result.showSavePdfForDisable;
        checkSavePdfForTab.checked = result.showSavePdfForTab;
        checkSavePdfForPage.checked = result.showSavePdfForPage;

        checkCloseDuplicateTabsForDisable.checked = result.showCloseDuplicateTabsForDisable;
        checkCloseDuplicateTabsForTab.checked = result.showCloseDuplicateTabsForTab;
        checkCloseDuplicateTabsForPage.checked = result.showCloseDuplicateTabsForPage;

        checkClearPreviousForDisable.checked = result.showClearPreviousTabsForDisable;
        checkClearPreviousForTab.checked = result.showClearPreviousTabsForTab;
        checkClearPreviousForPage.checked = result.showClearPreviousTabsForPage;

        checkCloseAllOtherForDisable.checked = result.showCloseAllOtherForDisable;
        checkCloseAllOtherForTab.checked = result.showCloseAllOtherForTab;
        checkCloseAllOtherForPage.checked = result.showCloseAllOtherForPage;

        checkCloseAllLeftForDisable.checked = result.showCloseAllLeftForDisable;
        checkCloseAllLeftForTab.checked = result.showCloseAllLeftForTab;
        checkCloseAllLeftForPage.checked = result.showCloseAllLeftForPage;

        checkCloseAllRightForDisable.checked = result.showCloseAllRightForDisable;
        checkCloseAllRightForTab.checked = result.showCloseAllRightForTab;
        checkCloseAllRightForPage.checked = result.showCloseAllRightForPage;

        checkDiscardAllForDisable.checked = result.showDiscardAllForDisable;
        checkDiscardAllForTab.checked = result.showDiscardAllForTab;
        checkDiscardAllForPage.checked = result.showDiscardAllForPage;

        checkDiscardAllRightForDisable.checked = result.showDiscardAllRightForDisable;
        checkDiscardAllRightForTab.checked = result.showDiscardAllRightForTab;
        checkDiscardAllRightForPage.checked = result.showDiscardAllRightForPage;

        checkDiscardAllLeftForDisable.checked = result.showDiscardAllLeftForDisable;
        checkDiscardAllLeftForTab.checked = result.showDiscardAllLeftForTab;
        checkDiscardAllLeftForPage.checked = result.showDiscardAllLeftForPage;

        checkCombineAllForDisable.checked = result.showCombineAllForDisable;
        checkCombineAllForTab.checked = result.showCombineAllForTab;
        checkCombineAllForPage.checked = result.showCombineAllForPage;

        checkCombineAllRightForDisable.checked = result.showCombineAllRightForDisable;
        checkCombineAllRightForTab.checked = result.showCombineAllRightForTab;
        checkCombineAllRightForPage.checked = result.showCombineAllRightForPage;

        checkCombineAllLeftForDisable.checked = result.showCombineAllLeftForDisable;

        checkDiscardTabForTab.checked = result.showDiscardTabForTab;
        checkCombineAllLeftForTab.checked = result.showCombineAllLeftForTab;
        checkCombineAllLeftForPage.checked = result.showCombineAllLeftForPage;
    });
}

init();