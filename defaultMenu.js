// 木木炒飯｜依提供的紙本菜單整理。
// 部署時檔名必須為 defaultMenu.js，與 admin.html 放在同目錄。
// 7 個分類、42 個紙本品項；展開肉類／麵種後共有 61 個可點選品項。
// 未列出加飯、加麵價格，因此不建立任何額外收費選項。
// 「售完」為文字結束時間，須搭配支援此格式的新版 admin.html。
// 售完時仍須由店家手動設定暫停接單；此設定不會偵測庫存。
// 以獨立作用域包裝，避免與其他 script 的 const 名稱衝突。
(() => {
  "use strict";
  const storeInfo = {
  "store_name": "木木炒飯",
  "store_phone": "06-2321675",
  "store_address": "台南市永康區龍潭街61號",
  "hours": [
    "10:30-13:00",
    "16:40-售完"
  ],
  "closed_days": [
    6,
    0
  ],
  "store_notice": "歡迎光臨木木炒飯！餐點現點現炒，請耐心等候。營業時間：10:30–13:00、16:40 起至售完；每週六、日公休。"
};
  const categories = [
  {
    "name": "炒飯類",
    "sort_order": 1,
    "is_active": true
  },
  {
    "name": "燴飯類",
    "sort_order": 2,
    "is_active": true
  },
  {
    "name": "鍋燒類",
    "sort_order": 3,
    "is_active": true
  },
  {
    "name": "炒麵類",
    "sort_order": 4,
    "is_active": true
  },
  {
    "name": "熱炒類",
    "sort_order": 5,
    "is_active": true
  },
  {
    "name": "蛋類",
    "sort_order": 6,
    "is_active": true
  },
  {
    "name": "湯類",
    "sort_order": 7,
    "is_active": true
  }
];
  const items = [
  {
    "category_name": "炒飯類",
    "name": "蛋炒飯",
    "type": "fixed",
    "price": 50,
    "addons": [],
    "is_available": true
  },
  {
    "category_name": "炒飯類",
    "name": "肉絲炒飯",
    "type": "fixed",
    "price": 75,
    "addons": [],
    "is_available": true
  },
  {
    "category_name": "炒飯類",
    "name": "什錦炒飯",
    "type": "fixed",
    "price": 80,
    "addons": [],
    "is_available": true
  },
  {
    "category_name": "炒飯類",
    "name": "蝦仁炒飯",
    "type": "fixed",
    "price": 80,
    "addons": [],
    "is_available": true
  },
  {
    "category_name": "炒飯類",
    "name": "櫻花蝦炒飯",
    "type": "fixed",
    "price": 75,
    "addons": [],
    "is_available": true
  },
  {
    "category_name": "炒飯類",
    "name": "番茄肉絲炒飯",
    "type": "fixed",
    "price": 80,
    "addons": [],
    "is_available": true
  },
  {
    "category_name": "炒飯類",
    "name": "麻油肉絲炒飯",
    "type": "fixed",
    "price": 80,
    "addons": [],
    "is_available": true
  },
  {
    "category_name": "炒飯類",
    "name": "魚卵香腸炒飯",
    "type": "fixed",
    "price": 90,
    "addons": [],
    "is_available": true
  },
  {
    "category_name": "炒飯類",
    "name": "番茄蝦仁炒飯",
    "type": "fixed",
    "price": 85,
    "addons": [],
    "is_available": true
  },
  {
    "category_name": "炒飯類",
    "name": "鹹豬肉炒飯",
    "type": "fixed",
    "price": 90,
    "addons": [],
    "is_available": true
  },
  {
    "category_name": "炒飯類",
    "name": "牛肉炒飯",
    "type": "fixed",
    "price": 100,
    "addons": [],
    "is_available": true
  },
  {
    "category_name": "炒飯類",
    "name": "剝皮辣椒炒飯",
    "type": "fixed",
    "price": 95,
    "addons": [],
    "is_available": true
  },
  {
    "category_name": "炒飯類",
    "name": "海味雙拼炒飯",
    "type": "fixed",
    "price": 100,
    "addons": [],
    "is_available": true
  },
  {
    "category_name": "炒飯類",
    "name": "羊肉炒飯",
    "type": "fixed",
    "price": 100,
    "addons": [],
    "is_available": true
  },
  {
    "category_name": "炒飯類",
    "name": "檸檬塔香牛肉炒飯",
    "type": "fixed",
    "price": 110,
    "addons": [],
    "is_available": true
  },
  {
    "category_name": "燴飯類",
    "name": "豬肉燴飯",
    "type": "fixed",
    "price": 100,
    "addons": [],
    "is_available": true
  },
  {
    "category_name": "燴飯類",
    "name": "牛肉燴飯",
    "type": "fixed",
    "price": 100,
    "addons": [],
    "is_available": true
  },
  {
    "category_name": "燴飯類",
    "name": "羊肉燴飯",
    "type": "fixed",
    "price": 100,
    "addons": [],
    "is_available": true
  },
  {
    "category_name": "燴飯類",
    "name": "沙茶豬肉燴飯",
    "type": "fixed",
    "price": 100,
    "addons": [],
    "is_available": true
  },
  {
    "category_name": "燴飯類",
    "name": "沙茶牛肉燴飯",
    "type": "fixed",
    "price": 100,
    "addons": [],
    "is_available": true
  },
  {
    "category_name": "燴飯類",
    "name": "沙茶羊肉燴飯",
    "type": "fixed",
    "price": 100,
    "addons": [],
    "is_available": true
  },
  {
    "category_name": "燴飯類",
    "name": "麻辣豬肉燴飯",
    "type": "fixed",
    "price": 100,
    "addons": [],
    "is_available": true
  },
  {
    "category_name": "燴飯類",
    "name": "麻辣牛肉燴飯",
    "type": "fixed",
    "price": 100,
    "addons": [],
    "is_available": true
  },
  {
    "category_name": "燴飯類",
    "name": "麻辣羊肉燴飯",
    "type": "fixed",
    "price": 100,
    "addons": [],
    "is_available": true
  },
  {
    "category_name": "鍋燒類",
    "name": "原味鍋燒（意麵）",
    "type": "fixed",
    "price": 70,
    "addons": [],
    "is_available": true
  },
  {
    "category_name": "鍋燒類",
    "name": "原味鍋燒（泡麵）",
    "type": "fixed",
    "price": 70,
    "addons": [],
    "is_available": true
  },
  {
    "category_name": "鍋燒類",
    "name": "麻辣鍋燒（意麵）",
    "type": "fixed",
    "price": 75,
    "addons": [],
    "is_available": true
  },
  {
    "category_name": "鍋燒類",
    "name": "麻辣鍋燒（泡麵）",
    "type": "fixed",
    "price": 75,
    "addons": [],
    "is_available": true
  },
  {
    "category_name": "鍋燒類",
    "name": "沙茶鍋燒（意麵）",
    "type": "fixed",
    "price": 75,
    "addons": [],
    "is_available": true
  },
  {
    "category_name": "鍋燒類",
    "name": "沙茶鍋燒（泡麵）",
    "type": "fixed",
    "price": 75,
    "addons": [],
    "is_available": true
  },
  {
    "category_name": "鍋燒類",
    "name": "剝皮鍋燒（意麵）",
    "type": "fixed",
    "price": 75,
    "addons": [],
    "is_available": true
  },
  {
    "category_name": "鍋燒類",
    "name": "剝皮鍋燒（泡麵）",
    "type": "fixed",
    "price": 75,
    "addons": [],
    "is_available": true
  },
  {
    "category_name": "炒麵類",
    "name": "什錦炒麵（油麵）",
    "type": "fixed",
    "price": 70,
    "addons": [],
    "is_available": true
  },
  {
    "category_name": "炒麵類",
    "name": "什錦炒麵（意麵）",
    "type": "fixed",
    "price": 70,
    "addons": [],
    "is_available": true
  },
  {
    "category_name": "炒麵類",
    "name": "什錦炒麵（泡麵）",
    "type": "fixed",
    "price": 70,
    "addons": [],
    "is_available": true
  },
  {
    "category_name": "炒麵類",
    "name": "牛肉炒麵（油麵）",
    "type": "fixed",
    "price": 80,
    "addons": [],
    "is_available": true
  },
  {
    "category_name": "炒麵類",
    "name": "牛肉炒麵（意麵）",
    "type": "fixed",
    "price": 80,
    "addons": [],
    "is_available": true
  },
  {
    "category_name": "炒麵類",
    "name": "牛肉炒麵（泡麵）",
    "type": "fixed",
    "price": 80,
    "addons": [],
    "is_available": true
  },
  {
    "category_name": "炒麵類",
    "name": "麻辣豬肉炒麵（油麵）",
    "type": "fixed",
    "price": 80,
    "addons": [],
    "is_available": true
  },
  {
    "category_name": "炒麵類",
    "name": "麻辣豬肉炒麵（意麵）",
    "type": "fixed",
    "price": 80,
    "addons": [],
    "is_available": true
  },
  {
    "category_name": "炒麵類",
    "name": "麻辣豬肉炒麵（泡麵）",
    "type": "fixed",
    "price": 80,
    "addons": [],
    "is_available": true
  },
  {
    "category_name": "炒麵類",
    "name": "麻辣牛肉炒麵（油麵）",
    "type": "fixed",
    "price": 80,
    "addons": [],
    "is_available": true
  },
  {
    "category_name": "炒麵類",
    "name": "麻辣牛肉炒麵（意麵）",
    "type": "fixed",
    "price": 80,
    "addons": [],
    "is_available": true
  },
  {
    "category_name": "炒麵類",
    "name": "麻辣牛肉炒麵（泡麵）",
    "type": "fixed",
    "price": 80,
    "addons": [],
    "is_available": true
  },
  {
    "category_name": "熱炒類",
    "name": "炒時蔬",
    "type": "fixed",
    "price": 50,
    "addons": [],
    "is_available": true
  },
  {
    "category_name": "熱炒類",
    "name": "蔥爆牛肉",
    "type": "fixed",
    "price": 150,
    "addons": [],
    "is_available": true
  },
  {
    "category_name": "熱炒類",
    "name": "蔥爆豬肉",
    "type": "fixed",
    "price": 150,
    "addons": [],
    "is_available": true
  },
  {
    "category_name": "熱炒類",
    "name": "麻辣牛肉",
    "type": "fixed",
    "price": 150,
    "addons": [],
    "is_available": true
  },
  {
    "category_name": "熱炒類",
    "name": "麻辣豬肉",
    "type": "fixed",
    "price": 150,
    "addons": [],
    "is_available": true
  },
  {
    "category_name": "熱炒類",
    "name": "塔香蛤蜊",
    "type": "fixed",
    "price": 150,
    "addons": [],
    "is_available": true
  },
  {
    "category_name": "熱炒類",
    "name": "酒香蛤蜊",
    "type": "fixed",
    "price": 150,
    "addons": [],
    "is_available": true
  },
  {
    "category_name": "熱炒類",
    "name": "清蒸蛤蜊",
    "type": "fixed",
    "price": 150,
    "addons": [],
    "is_available": true
  },
  {
    "category_name": "熱炒類",
    "name": "炒螺肉",
    "type": "fixed",
    "price": 150,
    "addons": [],
    "is_available": true
  },
  {
    "category_name": "蛋類",
    "name": "蔥仔蛋",
    "type": "fixed",
    "price": 50,
    "addons": [],
    "is_available": true
  },
  {
    "category_name": "蛋類",
    "name": "九層塔蛋",
    "type": "fixed",
    "price": 50,
    "addons": [],
    "is_available": true
  },
  {
    "category_name": "蛋類",
    "name": "滑蛋蝦仁",
    "type": "fixed",
    "price": 150,
    "addons": [],
    "is_available": true
  },
  {
    "category_name": "蛋類",
    "name": "滑蛋牛肉",
    "type": "fixed",
    "price": 150,
    "addons": [],
    "is_available": true
  },
  {
    "category_name": "湯類",
    "name": "貢丸湯",
    "type": "fixed",
    "price": 30,
    "addons": [],
    "is_available": true
  },
  {
    "category_name": "湯類",
    "name": "魚丸湯",
    "type": "fixed",
    "price": 30,
    "addons": [],
    "is_available": true
  },
  {
    "category_name": "湯類",
    "name": "蛤蜊湯",
    "type": "fixed",
    "price": 40,
    "addons": [],
    "is_available": true
  },
  {
    "category_name": "湯類",
    "name": "蛋花湯",
    "type": "fixed",
    "price": 25,
    "addons": [],
    "is_available": true
  }
];
  window.DEFAULT_MENU_TEMPLATE = { store_info: storeInfo, categories, items };
})();
