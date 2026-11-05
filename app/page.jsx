// menggunakan client component
"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.alert("Hello next.js");
  });
  return (
    <div>
      <h1>Page jsx</h1>
      <p>Selamat datang di halaman utama!</p>
    </div>
  );
}
