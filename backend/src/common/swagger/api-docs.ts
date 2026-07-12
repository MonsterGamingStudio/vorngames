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
        'Список опубликованных скриптов. Фильтры: `search`, `gameCategory`, `sort` (`relevance` по умолчанию, `price_asc`, `popular`, `comments`), пагинация. В каждом товаре: `badge` (null если нет), `hasUniqueOffer`, `featuredOnHome`, `coverUrl` (отдельная обложка или fallback на первое фото галереи), цены с 2 знаками после запятой, `tebexPackageId` и `tebexPayUrl`.',
    },
    random: {
      summary: 'Случайные скрипты для главной',
      description:
        'Возвращает N случайных опубликованных скриптов с `featuredOnHome=true` (по умолчанию 4). Порядок перемешан на сервере.',
    },
    popular: {
      summary: 'Популярные скрипты за 24 часа',
      description:
        'Топ по просмотрам за 24 часа (по умолчанию 4). Если популярных меньше — остальные слоты заполняются случайными опубликованными скриптами.',
    },
    bySlug: {
      summary: 'Карточка скрипта',
      description:
        'Полная информация: медиа, цены, `tebexPackageId`, `tebexPayUrl`, badge, instructionHtml. С cookie — `isAuthenticated`, `isPurchased`. Файл скрипта не отдаётся.',
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
        'Список покупок текущего пользователя: скрипт (включая `tebexPackageId`, `tebexPayUrl`), цена, дата. Флаг `needsUpdate: true` — вышла новая версия файла, которую ещё не скачивали.',
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
        'Расширенный профиль: данные пользователя + массив достижений (top_commentator, active_buyer, sandbox_lover) с флагом unlocked и ключами перевода titleKey/descriptionKey.',
    },
    public: {
      summary: 'Публичный профиль пользователя',
      description:
        'Для перехода из комментариев: username, avatarUrl, steamId (для ссылки на Steam-профиль), createdAt, достижения с ключами перевода. Без приватных данных (balance).',
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

  tebex: {
    buy: {
      summary: 'Создать Tebex checkout basket',
      description:
        'Только для авторизованных. Создаёт корзину через Tebex Headless API для скрипта с `tebexPackageId`, добавляет package по ID вебстора и возвращает `{ ident }` для Tebex.js. Steam ID передаётся как `target_username_id`. После оплаты выдача — через `POST /api/tebex/webhook`.',
    },
    webhook: {
      summary: 'Webhook Tebex',
      description:
        'URL для панели Tebex (GMod / FiveM): `POST /api/tebex/webhook`. Проверка IP Tebex + заголовок `X-Signature`. События: validation.webhook (ответ `{ id }`), payment.completed (выдача лицензии и Purchase), payment.refunded (отзыв). Маппинг package ID → скрипт настраивается в админке (`/api/admin/tebex-packages`).',
    },
    adminList: {
      summary: '[Админ] Список Tebex-покупок',
      description:
        'Покупки через Tebex: email, продукт, transaction ID, license key, статус. Поиск по email, license key, transaction ID, названию пакета.',
    },
    adminUpdate: {
      summary: '[Админ] Включить/отключить Tebex-лицензию',
      description:
        'Тело: `{ "active": true | false }`. При отключении удаляется Purchase (нет доступа к скачиванию). При включении — восстанавливается, если пользователь привязан.',
    },
    adminPackagesList: {
      summary: '[Админ] Маппинг Tebex package → скрипт',
      description:
        'Список привязок package ID (Tebex) к скриптам VornGames. Фильтр `store`: gmod | fivem. Настраивается через админку вместо env.',
    },
    adminPackagesCreate: {
      summary: '[Админ] Добавить маппинг Tebex package',
      description:
        'Тело: `{ store, packageId, scriptId, packageName? }`. store: gmod | fivem. packageId — ID пакета в Tebex, scriptId — UUID скрипта в каталоге.',
    },
    adminPackagesUpdate: {
      summary: '[Админ] Изменить маппинг Tebex package',
      description: 'Частичное обновление: packageId, packageName, scriptId.',
    },
    adminPackagesDelete: {
      summary: '[Админ] Удалить маппинг Tebex package',
      description: 'Удаляет привязку package ID → скрипт. Существующие лицензии не затрагиваются.',
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
    listUserPurchases: {
      summary: '[Админ] Покупки пользователя',
      description:
        'Список всех Purchase пользователя (новые первыми): скрипт, цена, needsUpdate, grantedByAdmin.',
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
      description:
        'Включая неопубликованные. С медиа, версией, `tebexPackageId` и вычисляемой `tebexPayUrl`.',
    },
    create: {
      summary: '[Админ] Создать скрипт',
      description:
        'title, slug, описание, gameCategory, priceRub/priceUsd (до 2 знаков после запятой), tebexPackageId (опц.), discount, badge, instructionHtml, isPublished, featuredOnHome. Обложка — отдельно через POST cover.',
    },
    update: {
      summary: '[Админ] Редактировать скрипт',
      description:
        'Частичное обновление (UpdateScriptDto). Смена slug проверяется на уникальность.',
    },
    unpublish: {
      summary: '[Админ] Снять с публикации',
      description:
        'Помечает скрипт удалённым (deletedAt). Скрывается из каталога и из списка в админке. Покупатели сохраняют доступ к скачиванию.',
    },
    addMedia: {
      summary: '[Админ] Добавить медиа по URL',
      description: 'type: image | youtube, url, sortOrder. Для YouTube — полная ссылка.',
    },
    uploadImage: {
      summary: '[Админ] Загрузить картинку в галерею',
      description:
        'multipart/form-data: file (jpeg/png/webp/gif), sortOrder. Галерея отделена от обложки (`coverUrl`).',
    },
    uploadCover: {
      summary: '[Админ] Загрузить обложку',
      description:
        'multipart/form-data: file (jpeg/png/webp/gif). Заменяет предыдущую обложку. Не добавляет фото в галерею.',
    },
    removeCover: {
      summary: '[Админ] Удалить обложку',
      description: 'Удаляет coverKey и файл из хранилища. Галерея не затрагивается.',
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
