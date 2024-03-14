import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col w-full overflow-y-hidden">
      <Navbar />
      <main className="flex-grow">{children}</main>
    </div>
  );
};

export default Layout;
