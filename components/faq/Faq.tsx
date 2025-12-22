import { useState } from "react";
import Layout from "@/components/faq/components/Layout";
import data from "./faqdata.json";

export default function Faqs() {
  const [active, setActive] = useState(new Array(data.length).fill(false));
  const isSomeActive = active.some((el) => el);

  const handleClick = () => {
    isSomeActive
      ? setActive(new Array(data.length).fill(false))
      : setActive(new Array(data.length).fill(true));
  };

  return (
    <div className="grid bg-black place-items-center w-full rounded-t-3xl">
      <Layout
        handleClick={handleClick}
        isSomeActive={isSomeActive}
        data={data}
        turn={active}
        setTurn={setActive}
      />
    </div>
  );
}
