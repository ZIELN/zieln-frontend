import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
