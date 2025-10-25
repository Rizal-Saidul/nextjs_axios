import DataUser from "./lib/getData";
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
      <div className="flex ">
      <DataUser/>
      </div>
    </>
  );
}
