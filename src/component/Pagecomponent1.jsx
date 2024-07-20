import React from "react";

const Pagecomponent1 = ({ pageno, setPageno }) => {
  const nextpage = () => {
    setPageno(pageno + 1);
  };
  const prevpage = () => {
    if (pageno > 1) {
      setPageno(pageno - 1);
    }
  };
  return (
    <div className="flex flex-row gap-4">
      {pageno > 1 ? (
        <div
          onClick={prevpage}
          className="border-2 w-[28px] text-center bg-navbar text-white text-xl"
        >
          {"<"}
        </div>
      ) : (
        " "
      )}

      <div className="border-2 w-[28px] text-center bg-navbar text-white text-xl ">
        {pageno}
      </div>
      <div
        onClick={nextpage}
        className="border-2 w-[28px] text-center bg-navbar text-white text-xl"
      >
        {">"}
      </div>
    </div>
  );
};
export default Pagecomponent1;
