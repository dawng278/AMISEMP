import { initializeApp, getApps, getApp } from "firebase/app";
import { getDatabase } from "firebase/database";  // ✅ Thêm dòng này để sử dụng Realtime Database
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDU5HkPo7ufMwtwmj0kiI3VICLu9ysPPTk",
  authDomain: "catidex-4a1e1.firebaseapp.com",
  databaseURL: "https://catidex-4a1e1-default-rtdb.firebaseio.com",  // ✅ Đảm bảo URL chính xác
  projectId: "catidex-4a1e1",
  storageBucket: "catidex-4a1e1.appspot.com",  // ✅ Sửa lỗi sai "firebasestorage.app" -> "appspot.com"
  messagingSenderId: "790322694588",
  appId: "1:790322694588:web:bd55a6cab42df36831c3b9",
  measurementId: "G-0410TV8SW1",
};

// Tránh lỗi `Firebase App named '[DEFAULT]' already exists`
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// ✅ Export database và auth
export const database = getDatabase(app);
export const auth = getAuth(app);
export default app;
