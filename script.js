document.getElementById('orderBtn').onclick = function() {
    document.getElementById('orderForm').style.display = 'block';
    window.scrollTo({ top: document.getElementById('orderForm').offsetTop, behavior: 'smooth' });
};

document.getElementById('orderForm').onsubmit = function(e) {
    e.preventDefault();
    // Собираем данные формы
    const data = {
        service: document.getElementById('service').value,
        datetime: document.getElementById('datetime').value,
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        adtext: document.getElementById('adtext').value
    };
    // Отправка данных в Telegram WebApp (если открыт в Telegram)
    if (window.Telegram && Telegram.WebApp) {
        Telegram.WebApp.sendData(JSON.stringify(data));
        Telegram.WebApp.close();
    }
    // Показываем сообщение об успехе
    document.getElementById('formSuccess').style.display = 'block';
    setTimeout(() => {
        document.getElementById('orderForm').reset();
        document.getElementById('orderForm').style.display = 'none';
        document.getElementById('formSuccess').style.display = 'none';
    }, 2500);
};