// ============================================================================
// 📦 雲端點餐與 POS 系統・獨立 Firebase 設定檔 (firebaseConfig.js)
// 💡 部署新合作店家時，只需將 Firebase 控制台提供的設定替換於此檔案即可，
//    完全不需要修改 index.html 與 admin.html！
// ============================================================================

const firebaseConfig = {
  apiKey: "AIzaSyDNJj1wirszcZLeH_cdnGeaVw1eE9xojno",
  authDomain: "eat-order-test2.firebaseapp.com",
  projectId: "eat-order-test2",
  storageBucket: "eat-order-test2.firebasestorage.app",
  messagingSenderId: "1050930540405",
  appId: "1:1050930540405:web:dc07c9895b5b15059d6d3c"
};



window.FIREBASE_CONFIG = firebaseConfig;