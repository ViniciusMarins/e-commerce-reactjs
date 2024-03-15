import { useState } from "react";
import "./Paginator.css";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";

type PropsType = {
  valorInicial: number;
  setValorInicial: React.Dispatch<React.SetStateAction<number>>;
  valorFinal: number;
  setValorFinal: React.Dispatch<React.SetStateAction<number>>;
  products: any;
};

function Paginator({
  valorInicial,
  setValorInicial,
  valorFinal,
  setValorFinal,
  products,
}: PropsType) {
  const [currentPage, setCurrentPage] = useState<number>(0);

  const handleNextPage = () => {
    if (valorFinal < products.length) {
      setValorInicial((prev) => prev + 25);
      setValorFinal((prev) => prev + 25);
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (valorInicial > 0) {
      setValorInicial((prev) => prev - 25);
      setValorFinal((prev) => prev - 25);
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="paginator">
      <MdOutlineKeyboardDoubleArrowLeft
        cursor="pointer"
        size={20}
        onClick={handlePreviousPage}
      />
      <button
        onClick={handlePreviousPage}
        className={currentPage === 0 ? "current-page" : ""}
      >
        1
      </button>
      <button
        onClick={handleNextPage}
        className={currentPage > 0 ? "current-page" : ""}
      >
        2
      </button>

      <MdOutlineKeyboardDoubleArrowRight
        cursor="pointer"
        size={20}
        onClick={handleNextPage}
      />
    </div>
  );
}

export default Paginator;
