// 拡張機能がインストールされたときに右クリックメニューを追加
chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "highlightUnderlinedText",
        title: "下線付きテキストを強調表示",
        contexts: ["all"]
    });
});

// メニュー項目がクリックされたときに関数をページに注入して実行
chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "highlightUnderlinedText") {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: function() {
                // ここに下線付き文字を強調する関数を直接記述
                const elements = document.querySelectorAll('*');
                elements.forEach((element) => {
                    const style = window.getComputedStyle(element);
                    if (
                        style.textDecoration.includes('underline') || 
                        style.borderBottomStyle !== 'none' ||
                        (style.boxShadow && style.boxShadow.includes('0px -1px'))
                    ) {
                        element.style.backgroundColor = 'yellow'; // ハイライトの色を設定
                    }
                });
            }
        });
    }
});
