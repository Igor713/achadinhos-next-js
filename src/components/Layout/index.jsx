import Header from '../Header';
import Footer from '../Footer';
import ResponsiveContainer from '../ResponsiveContainer';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <ResponsiveContainer>
        <main>{children}</main>
      </ResponsiveContainer>
      <Footer />
    </>
  );
}
