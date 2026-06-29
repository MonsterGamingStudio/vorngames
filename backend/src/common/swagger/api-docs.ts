/** Подробные описания эндпоинтов для Swagger UI */

export const ApiDocs = {
  auth: {
    steamLogin: {
      summary: 'Вход через Steam',
      description:
        'Открывается в браузере. Перенаправляет на Steam OpenID. После успешного входа Steam вызывает callback, API создаёт/обновляет пользователя (ник, аватар), выставляет httpOnly-cookie `auth_token` (JWT, 7 дней) и редиректит на `FRONTEND_URL`.',
    },
    steamCallback: {
      summary: 'Callback Steam OpenID (служебный)',
      description:
        'Вызывается автоматически Steam после авторизации. Не вызывать вручную из Swagger. Устанавливает cookie и редиректит на фронт.',
    },
    me: {
      summary: 'Текущий пользователь',
      description:
        'Возвращает профиль по cookie `auth_token`: id, steamId, username, avatarUrl, balance (RUB), role, isBlocked, createdAt. Обновляет lastLoginAt и синхронизирует ник/аватар из Steam.',
    },
    logout: {
      summary: 'Выход',
      description: 'Удаляет cookie `auth_token`. Сессия на сайте завершается.',
    },
  },

  scripts: {
    list: {
      summary: 'Каталог скриптов',
      description:
        'Список опубликованных скриптов. Фильтры: `search` (по названию), `gameCategory` (gmod | fivem), `sort` (price_asc | price_desc | popular). Пагинация: `page`, `limit` (макс. 100). Сортировка `popular` — по просмотрам за последние 24 часа.',
    },
    random: {
      summary: 'Случайные скрипты для главной',
      description:
        'Возвращает N случайных опубликованных скриптов (по умолчанию 4). Используется блоком «Наша продукция» на главной. При каждом запросе набор новый.',
    },
    popular: {
      summary: 'Популярные скрипты за 24 часа',
      description:
        'Топ скриптов по уникальным просмотрам за последние 24 часа. Учитывается дедупликация: один пользователь или IP — не более одного просмотра в сутки на скрипт.',
    },
    bySlug: {
      summary: 'Карточка скрипта',
      description:
        'Полная информация: медиа, цены (RUB/USD), скидка, badge, instructionHtml, даты. Если передан cookie — дополнительно `isAuthenticated`, `isPurchased`, `requiresAuthToPurchase: true`. Файл скрипта не отдаётся.',
    },
    recordView: {
      summary: 'Записать просмотр страницы скрипта',
      description:
        'Аналитика для блока «Популярное». Дедупликация: **не более 1 просмотра за 24 ч** на пару (скрипт + пользователь) для авторизованных или (скрипт + IP) для гостей. Повторный вызов вернёт `{ ok: true, recorded: false }` без увеличения счётчика.',
    },
    recordClick: {
      summary: 'Записать клик «Купить»',
      description:
        'Аналитика кликов по кнопке покупки. Дедупликация: **не более 1 клика за 24 ч** на пользователя или IP для одного скрипта. Повторный вызов не увеличивает счётчик.',
    },
  },

  purchases: {
    create: {
      summary: 'Начать покупку скрипта',
      description:
        '**Только для авторизованных** (Steam). Создаёт платёж UnitPay и возвращает `payment_url`. Параметр `currency`: RUB (по умолчанию) или USD. Повторная покупка того же скрипта — 409. После оплаты webhook создаёт Purchase и уведомление.',
    },
    list: {
      summary: 'Купленные скрипты',
      description:
        'Список покупок текущего пользователя: скрипт, цена, дата. Флаг `needsUpdate: true` — вышла новая версия файла, которую ещё не скачивали.',
    },
    download: {
      summary: 'Скачать купленный скрипт',
      description:
        'Стримит актуальный архив (zip/rar). Требует Purchase. Обновляет `lastDownloadedVersionId`. Ответ — бинарный файл, не JSON.',
    },
  },

  profile: {
    me: {
      summary: 'Мой профиль с достижениями',
      description:
        'Расширенный профиль: данные пользователя + массив достижений (top_commentator, active_buyer, sandbox_lover) с флагом unlocked и описанием условий.',
    },
    public: {
      summary: 'Публичный профиль пользователя',
      description:
        'Для перехода из комментариев: username, avatarUrl, createdAt, достижения. Без приватных данных (balance, steamId).',
    },
  },

  comments: {
    list: {
      summary: 'Комментарии к скрипту',
      description: 'Только одобренные (`approved`) комментарии с автором (ник, аватар). Сортировка: новые сверху.',
    },
    create: {
      summary: 'Оставить комментарий',
      description:
        'Требует авторизацию. Комментарий создаётся со статусом `pending` и отправляется на модерацию. Пользователю приходит уведомление `comment_submitted`.',
    },
    listPending: {
      summary: '[Админ] Очередь модерации',
      description: 'Список комментариев со статусом pending: текст, автор, скрипт.',
    },
    moderate: {
      summary: '[Админ] Одобрить или отклонить',
      description:
        'Тело: `{ "status": "approved" | "rejected" }`. При одобрении — уведомление автору `comment_approved`.',
    },
  },

  notifications: {
    list: {
      summary: 'Список уведомлений',
      description:
        'Пагинация: page, limit. `unreadOnly=true` — только непрочитанные. Типы: comment_submitted, comment_approved, purchase_completed, support_reply, support_ticket_created, script_update.',
    },
    unreadCount: {
      summary: 'Счётчик непрочитанных',
      description: 'Число уведомлений с readAt = null. Для бейджа в шапке.',
    },
    markRead: {
      summary: 'Пометить прочитанными',
      description:
        'Query `ids` — UUID через запятую. Без ids — помечает все непрочитанные текущего пользователя.',
    },
  },

  support: {
    create: {
      summary: 'Создать тикет поддержки',
      description:
        'Из профиля: subject + первое сообщение. Генерируется номер вида `VG-YYYYMMDD-XXXX`. Уведомление `support_ticket_created`.',
    },
    list: {
      summary: 'Мои тикеты',
      description: 'Список тикетов текущего пользователя: номер, тема, статус open/closed.',
    },
    get: {
      summary: 'Тикет с историей сообщений',
      description: 'Полная переписка по номеру тикета. Доступ только владельцу.',
    },
    addMessage: {
      summary: 'Добавить сообщение в тикет',
      description: 'Только для открытых тикетов (status=open).',
    },
    adminList: {
      summary: '[Админ] Все тикеты',
      description: 'Фильтр `status`: open | closed. С данными пользователя.',
    },
    adminGet: {
      summary: '[Админ] Тикет с перепиской',
      description: 'Любой тикет по номеру, включая закрытые.',
    },
    adminReply: {
      summary: '[Админ] Ответить в тикет',
      description: 'Сообщение с isStaff=true. Пользователю — уведомление `support_reply`.',
    },
    adminClose: {
      summary: '[Админ] Закрыть тикет',
      description: 'status → closed, closedAt заполняется. История сохраняется.',
    },
  },

  payments: {
    create: {
      summary: 'Создать платёж доната (игровая валюта)',
      description:
        'Внутренний API для игрового WS. Заголовок `X-Webhook-Secret`. Не для покупки скриптов на сайте. Возвращает UnitPay URL. После pay — callback на WS.',
    },
    unitpayHandler: {
      summary: 'Webhook UnitPay',
      description:
        'URL для личного кабинета UnitPay. Методы: check, pay, error. Для type=donate — callback на WS; для type=script — выдача Purchase.',
    },
  },

  admin: {
    listUsers: {
      summary: '[Админ] Список пользователей',
      description: 'Поиск по username и steamId. Пагинация page/limit.',
    },
    updateUser: {
      summary: '[Админ] Блокировка / роль',
      description: 'isBlocked, blockedReason, role (user | admin).',
    },
    grantPurchase: {
      summary: '[Админ] Выдать скрипт пользователю',
      description: 'Создаёт Purchase без оплаты (grantedByAdmin). Тело: scriptId, currency.',
    },
    revokePurchase: {
      summary: '[Админ] Отозвать покупку',
      description: 'Удаляет запись Purchase. Пользователь теряет доступ к скачиванию.',
    },
    blockIp: {
      summary: '[Админ] Заблокировать IP',
      description: 'Добавляет IP в IpBlock. Заблокированные IP получают 403 на защищённых эндпоинтах.',
    },
    unblockIp: {
      summary: '[Админ] Разблокировать IP',
      description: 'Удаляет запись из IpBlock.',
    },
    dashboard: {
      summary: '[Админ] Сводка',
      description:
        'Агрегаты: users, scripts (опубликованные), purchases, openTickets, pendingComments.',
    },
  },

  adminScripts: {
    listAll: {
      summary: '[Админ] Все скрипты',
      description: 'Включая неопубликованные. С медиа и текущей версией.',
    },
    create: {
      summary: '[Админ] Создать скрипт',
      description:
        'title, slug (опц.), описание, gameCategory, priceRub/priceUsd, discount, badge, instructionHtml, isPublished, featuredOnHome.',
    },
    update: {
      summary: '[Админ] Редактировать скрипт',
      description: 'Частичное обновление любых полей. Смена slug проверяется на уникальность.',
    },
    unpublish: {
      summary: '[Админ] Снять с публикации',
      description: 'Soft-delete: isPublished=false. Скрипт пропадает из каталога.',
    },
    addMedia: {
      summary: '[Админ] Добавить медиа по URL',
      description: 'type: image | youtube, url, sortOrder. Для YouTube — полная ссылка.',
    },
    uploadImage: {
      summary: '[Админ] Загрузить картинку',
      description: 'multipart/form-data: file (jpeg/png/webp/gif), sortOrder. Хранится в R2/local CDN.',
    },
    listMedia: {
      summary: '[Админ] Список медиа скрипта',
      description: 'Все изображения и YouTube-ссылки в порядке sortOrder.',
    },
    reorderMedia: {
      summary: '[Админ] Изменить порядок медиа',
      description: 'Тело: массив { id, sortOrder }.',
    },
    removeMedia: {
      summary: '[Админ] Удалить медиа',
      description: 'Удаляет запись ScriptMedia. Файл в хранилище не удаляется автоматически.',
    },
    uploadVersion: {
      summary: '[Админ] Загрузить новую версию файла',
      description:
        'multipart: file (zip/rar), versionLabel. Старая версия перестаёт быть current. Всем покупателям — уведомление script_update.',
    },
    stats: {
      summary: '[Админ] Статистика скрипта',
      description: 'views, clicks, purchases, comments. Опционально from/to (ISO даты).',
    },
  },
} as const;
