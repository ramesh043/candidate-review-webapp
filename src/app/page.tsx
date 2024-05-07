import Sidebar from "./components/Sidebar";
import DashBoard from "./components/DashBoard";

function Home() {
  return (
    <>
      <main>
        <div>
          <Sidebar />
        </div>
        <div>
          <DashBoard />
        </div>
      </main>
      <div className="flex justify-between pt-4 my-4 items-center px-4 border-t-2 divide-slate-100">
        <p>2024 &copy; ❤️Ramesh</p>
        <div className="text-sm">
          <a href="/" className="text-sm font-thin mx-2">
            Contact Us
          </a>
          <a href="/" className="text-sm font-thin mx-2">
            Privacy
          </a>
          <a href="/" className="text-sm font-thin">
            Terms
          </a>
        </div>
      </div>
    </>
  );
}
export default Home;
