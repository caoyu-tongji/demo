function generateHTML() {
    // 获取用户输入的标题和内容
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    // 验证输入
    if (!title || !content) {
        alert('请输入标题和内容！');
        return;
    }

    // 生成HTML结构
    const generatedHTML = `
        <div class="generated-content">
            <h2>${title}</h2>
            <p>${content}</p>
            <div class="metadata">
                <small>生成时间：${new Date().toLocaleString()}</small>
            </div>
        </div>
    `;

    // 将生成的HTML显示在结果容器中
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = generatedHTML;

    // 添加一些动画效果
    resultContainer.style.opacity = '0';
    resultContainer.style.transition = 'opacity 0.5s';
    setTimeout(() => {
        resultContainer.style.opacity = '1';
    }, 100);
}

// 添加键盘事件监听，支持回车键提交
document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        generateHTML();
    }
});