browser.webNavigation.onCompleted.addListener((details) => {
  const { tabId, url } = details;
  if (url.includes('youtube.com/watch')) {
    browser.tabs.executeScript(tabId, { file: 'content.js', runAt: 'document_idle'});
  }
});
