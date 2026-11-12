import { roboto } from "@/app/font";

export default function Heading({ children }) {
  return (
    // menggunakan font roboto

    <h1 className={`text-2xl pb-3 font-bold ${roboto.className}`}>
      {children}
    </h1>
  );
}
