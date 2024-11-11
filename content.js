function highlightCustomUnderlinedText() {
    const elements = document.querySelectorAll('*');

    elements.forEach((element) => {
        const style = window.getComputedStyle(element);

        // 下線が「text-decoration」、カスタム「border-bottom」、または「box-shadow」によって表示されている場合を確認
        if (
            style.textDecoration.includes('underline') || 
            style.borderBottomStyle !== 'none' ||
            (style.boxShadow && style.boxShadow.includes('0px -1px'))
        ) {
            element.style.backgroundColor = 'yellow'; // ハイライトの色を設定
        }
    });
}

// 実行
highlightCustomUnderlinedText();
