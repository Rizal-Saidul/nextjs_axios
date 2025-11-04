import DataUser from "./lib/getData";
import AddUser from "./ui/AddUser";
import DataView from "./ui/DataView";
import Header from "./ui/Header";
import SideBar from "./ui/SideBar";

// import Image from "next/image";
export default function Home() {
  return (
    <>
      {/* header */}
      <Header/>
      {/* side bar */}
      <SideBar/>
      {/* table */}
    <div className="flex items-start mt-10 min-h-screen justify-center">
      <DataView/>

      <AddUser/>
      </div>
    </>
  );
}
