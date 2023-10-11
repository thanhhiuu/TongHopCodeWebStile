import { Header, Banner } from "../../components/Index";
// import { getHome } from "../../apis/home.js";
// import { useEffect } from "react";
function Home() {
  // useEffect(() => {
  //   const home = async () => {
  //     const response = await getHome();
  //     console.log(response);
  //   };
  //   home();
  // }, []);
  return (
    <>
      <div className="overflow-y-scroll bg-[#37075d] border-l-[1px]">
        <div className="h-[60px] w-[90%] mx-auto flex items-center ">
          <Header />
        </div>
        <Banner />
      </div>
    </>
  );
}

export default Home;
