import Footer from "./Footer";
import MainHeader from "./MainHeader";

export default function Layout({ children }) {
  return (
    <>
      <MainHeader />
      {children}
      <Footer />
    </>
  );
}
