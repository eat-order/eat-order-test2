// ============================================================================
// 🍱 雲端點餐與 POS 系統・獨立公版範本菜單檔 (defaultMenu.js)
// 🏪 目前設定店家：木木炒飯 (台南市永康區龍潭街61號 / 06-2321675)
// ⏰ 營業時間：10:30~13:00, 16:40~(售完) (每星期六日公休日)
// 💡 部署新合作店家時，請將此檔案與 admin.html 放在同一個目錄下。
// ============================================================================

const defaultMenuCategories = [
  { name: "炒飯類", sort_order: 1, is_active: true },
  { name: "燴飯類", sort_order: 2, is_active: true },
  { name: "鍋燒類", sort_order: 3, is_active: true },
  { name: "炒麵類", sort_order: 4, is_active: true },
  { name: "熱炒類", sort_order: 5, is_active: true },
  { name: "蛋類", sort_order: 6, is_active: true },
  { name: "湯類", sort_order: 7, is_active: true }
];

// 炒飯通用客製化選項
const friedRiceAddons = [
  { name: "加飯 (+10元)", price: 10 },
  { name: "小辣", price: 0 },
  { name: "中辣", price: 0 },
  { name: "大辣", price: 0 },
  { name: "不要蔥", price: 0 }
];

// 燴飯類：□豬 □牛 □羊 選項
const huiFanAddons = [
  { name: "豬肉", price: 0 },
  { name: "牛肉", price: 0 },
  { name: "羊肉", price: 0 },
  { name: "加飯 (+10元)", price: 10 },
  { name: "加辣", price: 0 },
  { name: "不要蔥", price: 0 }
];

// 鍋燒類：□意麵 □泡麵 選項
const potNoodleAddons = [
  { name: "意麵", price: 0 },
  { name: "泡麵", price: 0 },
  { name: "加麵 (+15元)", price: 15 },
  { name: "不要蔥", price: 0 },
  { name: "不要沙茶", price: 0 }
];

// 炒麵類 (什錦/牛肉)：□油麵 □意麵 □泡麵 選項
const friedNoodleAddons = [
  { name: "油麵", price: 0 },
  { name: "意麵", price: 0 },
  { name: "泡麵", price: 0 },
  { name: "加麵 (+15元)", price: 15 },
  { name: "加辣", price: 0 },
  { name: "不要蔥", price: 0 }
];

// 麻辣炒麵專用：□豬 □牛 + □油麵 □意麵 □泡麵 選項
const spicyFriedNoodleAddons = [
  { name: "豬肉", price: 0 },
  { name: "牛肉", price: 0 },
  { name: "油麵", price: 0 },
  { name: "意麵", price: 0 },
  { name: "泡麵", price: 0 },
  { name: "加麵 (+15元)", price: 15 },
  { name: "不要蔥", price: 0 }
];

// 熱炒類通用選項
const stirFryAddons = [
  { name: "小辣", price: 0 },
  { name: "中辣", price: 0 },
  { name: "大辣", price: 0 },
  { name: "不辣", price: 0 }
];

// 湯類通用選項
const soupAddons = [
  { name: "不要蔥", price: 0 },
  { name: "不要香油", price: 0 }
];

const defaultMenuItems = [
  // ================= 1. 炒飯類 (16項) =================
  { category_name: "炒飯類", name: "蛋炒飯", type: "fixed", price: 50, addons: friedRiceAddons, is_available: true },
  { category_name: "炒飯類", name: "肉絲炒飯", type: "fixed", price: 75, addons: friedRiceAddons, is_available: true },
  { category_name: "炒飯類", name: "什錦炒飯", type: "fixed", price: 80, addons: friedRiceAddons, is_available: true },
  { category_name: "炒飯類", name: "蝦仁炒飯", type: "fixed", price: 80, addons: friedRiceAddons, is_available: true },
  { category_name: "炒飯類", name: "櫻花蝦炒飯", type: "fixed", price: 75, addons: friedRiceAddons, is_available: true },
  { category_name: "炒飯類", name: "番茄肉絲炒飯", type: "fixed", price: 80, addons: friedRiceAddons, is_available: true },
  { category_name: "炒飯類", name: "麻油肉絲炒飯", type: "fixed", price: 80, addons: friedRiceAddons, is_available: true },
  { category_name: "炒飯類", name: "魚卵香腸炒飯", type: "fixed", price: 90, addons: friedRiceAddons, is_available: true },
  { category_name: "炒飯類", name: "番茄蝦仁炒飯", type: "fixed", price: 85, addons: friedRiceAddons, is_available: true },
  { category_name: "炒飯類", name: "鹹豬肉炒飯", type: "fixed", price: 90, addons: friedRiceAddons, is_available: true },
  { category_name: "炒飯類", name: "牛肉炒飯", type: "fixed", price: 100, addons: friedRiceAddons, is_available: true },
  { category_name: "炒飯類", name: "剝皮辣椒炒飯", type: "fixed", price: 95, addons: friedRiceAddons, is_available: true },
  { category_name: "炒飯類", name: "海味雙拼炒飯", type: "fixed", price: 100, addons: friedRiceAddons, is_available: true },
  { category_name: "炒飯類", name: "羊肉炒飯", type: "fixed", price: 100, addons: friedRiceAddons, is_available: true },
  { category_name: "炒飯類", name: "檸檬塔香牛肉炒飯", type: "fixed", price: 110, addons: friedRiceAddons, is_available: true },

  // ================= 2. 燴飯類 (3項) =================
  { category_name: "燴飯類", name: "燴飯 (選豬/牛/羊)", type: "fixed", price: 100, addons: huiFanAddons, is_available: true },
  { category_name: "燴飯類", name: "沙茶燴飯 (選豬/牛/羊)", type: "fixed", price: 100, addons: huiFanAddons, is_available: true },
  { category_name: "燴飯類", name: "麻辣燴飯 (選豬/牛/羊)", type: "fixed", price: 100, addons: huiFanAddons, is_available: true },

  // ================= 3. 鍋燒類 (4項) =================
  { category_name: "鍋燒類", name: "原味鍋燒 (選意麵/泡麵)", type: "fixed", price: 70, addons: potNoodleAddons, is_available: true },
  { category_name: "鍋燒類", name: "麻辣鍋燒 (選意麵/泡麵)", type: "fixed", price: 75, addons: potNoodleAddons, is_available: true },
  { category_name: "鍋燒類", name: "沙茶鍋燒 (選意麵/泡麵)", type: "fixed", price: 75, addons: potNoodleAddons, is_available: true },
  { category_name: "鍋燒類", name: "剝皮鍋燒 (選意麵/泡麵)", type: "fixed", price: 75, addons: potNoodleAddons, is_available: true },

  // ================= 4. 炒麵類 (3項) =================
  { category_name: "炒麵類", name: "什錦炒麵 (選油麵/意麵/泡麵)", type: "fixed", price: 70, addons: friedNoodleAddons, is_available: true },
  { category_name: "炒麵類", name: "牛肉炒麵 (選油麵/意麵/泡麵)", type: "fixed", price: 80, addons: friedNoodleAddons, is_available: true },
  { category_name: "炒麵類", name: "麻辣炒麵 (選豬/牛・油麵/意麵/泡麵)", type: "fixed", price: 80, addons: spicyFriedNoodleAddons, is_available: true },

  // ================= 5. 熱炒類 (9項) =================
  { category_name: "熱炒類", name: "炒時蔬", type: "fixed", price: 50, addons: stirFryAddons, is_available: true },
  { category_name: "熱炒類", name: "蔥爆牛肉", type: "fixed", price: 150, addons: stirFryAddons, is_available: true },
  { category_name: "熱炒類", name: "蔥爆豬肉", type: "fixed", price: 150, addons: stirFryAddons, is_available: true },
  { category_name: "熱炒類", name: "麻辣牛肉", type: "fixed", price: 150, addons: stirFryAddons, is_available: true },
  { category_name: "熱炒類", name: "麻辣豬肉", type: "fixed", price: 150, addons: stirFryAddons, is_available: true },
  { category_name: "熱炒類", name: "塔香蛤蜊", type: "fixed", price: 150, addons: stirFryAddons, is_available: true },
  { category_name: "熱炒類", name: "酒香蛤蜊", type: "fixed", price: 150, addons: stirFryAddons, is_available: true },
  { category_name: "熱炒類", name: "清蒸蛤蜊", type: "fixed", price: 150, addons: [], is_available: true },
  { category_name: "熱炒類", name: "炒螺肉", type: "fixed", price: 150, addons: stirFryAddons, is_available: true },

  // ================= 6. 蛋類 (4項) =================
  { category_name: "蛋類", name: "蔥仔蛋", type: "fixed", price: 50, addons: [], is_available: true },
  { category_name: "蛋類", name: "九層塔蛋", type: "fixed", price: 50, addons: [], is_available: true },
  { category_name: "蛋類", name: "滑蛋蝦仁", type: "fixed", price: 150, addons: [], is_available: true },
  { category_name: "蛋類", name: "滑蛋牛肉", type: "fixed", price: 150, addons: [], is_available: true },

  // ================= 7. 湯類 (4項) =================
  { category_name: "湯類", name: "貢丸湯", type: "fixed", price: 30, addons: soupAddons, is_available: true },
  { category_name: "湯類", name: "魚丸湯", type: "fixed", price: 30, addons: soupAddons, is_available: true },
  { category_name: "湯類", name: "蛤蜊湯", type: "fixed", price: 40, addons: soupAddons, is_available: true },
  { category_name: "湯類", name: "蛋花湯", type: "fixed", price: 25, addons: soupAddons, is_available: true }
];

window.DEFAULT_MENU_TEMPLATE = {
  categories: defaultMenuCategories,
  items: defaultMenuItems
};