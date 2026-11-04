export default function Layout({ children }) {
  return (
    <div style={{ backgroundColor: "lightblue" }}>
      <p>Menerapkan Layout dari folder blog</p>
      <main>{children}</main>
    </div>
  );
}
