module.exports.layout = ({
  date, time, summary, link,
}) => `Привет!\n
Напоминаем о Frontend мероприятии «${summary}», которое начнется ${date} в ${time} (UTC+0). Подробная информация по ссылке ${link}.\n

`;
