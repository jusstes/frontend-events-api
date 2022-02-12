## Серверная часть проекта доступная по адресу https://kosmosila.space
### В проекте используются: Node.js, Express, MongoDB, Mongoose, Celebrate, Winston

#### Без авторизации   

GET `/events?year=n` — получить список фронтенд мероприятий, где n любой год с 2016   
POST `/sign_up` — регистрация пользователя по `email, password`   
POST `/sign_in` — авторизация пользователя по `email, password`    

#### Защищены авторизацией   

GET `/user` — получить данные пользователя   
PATCH `/user` — изменить данные пользователя   
DELETE `/sign_out` — выход пользователя из системы   

GET `/request` — получить список всех мероприятий, запрос на создание которых был отправлен пользователем   
POST `/request` — отправить запрос на создание мероприятия. Обязательные поля: `start`, `end`, `summary`, `location`, `description`, `link`. Опциональное: `allDay`   
DELETE `/request/:_id` — отменить запрос на добавление мероприятия   

GET `/requests` — получить список всех запросов на одобрение (доступно пользователю с ролью админа)   
POST`/requests/:_id` — одобрить запрос на добавление мероприятия (доступно пользователю с ролью админа)   
DELETE `/requests/:_id` — отклонить запрос на добавление мероприятия (доступно пользователю с ролью админа)   

GET `/notification` — отдает список всех запросов на уведомления об мероприятии   
POST `/notification` — создает запрос на уведомление. Обязательные поля: `eventId`, `date`, `time`   
DELETE `/notification/:_id` — удаляет запрос на уведомление (доступно пользователю с ролью админа)   

### Директории
`/controllers` — файлы контроллеров пользователя и карточки   
`/errors` — файлы обработки ошибок   
`/middlewares` — файлы промежуточных действий с данными   
`/models` — файлы описания схем пользователя и карточки   
`/routes` — файлы роутера  
