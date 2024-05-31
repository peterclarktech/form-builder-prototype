import { FC, useEffect, useState } from "react";
import Button, { ButtonType } from "./Button";

type PaginationType = {
    totalSize: number,
    pageSize: number,
    onPaginate: (startIndex: number, endIndex: number) => void
}
const Pagination: FC<PaginationType> = ({ totalSize, pageSize = 10, onPaginate }) => {
    const [currentPage, setCurrentPage] = useState<number>(1);

    let startIndex: number = (currentPage - 1) * pageSize;
    let endIndex: number = startIndex + pageSize - 1;
    if (endIndex > totalSize) endIndex = totalSize - 1;

    let maxPage: number = Math.ceil(totalSize / pageSize);

    useEffect(() => onPaginate(startIndex, endIndex)
        , [startIndex, endIndex]);

    const changePage = (newPage: number) => {
        setCurrentPage(newPage);
    }

    return (
        <div className="flex flex-col sm:flex-row">
            <div className="float-left content-center flex-none">
                {totalSize > 0 && <span>{`Showing ${startIndex + 1}-${endIndex + 1} out of ${totalSize} rows`}</span>}
                {totalSize < 1 && <span>No records found...</span>}
            </div>
            <div className="flex-1">
                {maxPage > 1 && (
                    <div className="sm:float-right">
                        <Button variant={currentPage !== 1 ? ButtonType.default : ButtonType.disabled}
                            onClick={() => changePage(1)}>
                            <i className="bi bi-chevron-bar-left"></i>
                        </Button>
                        &nbsp;
                        <Button variant={currentPage > 1 ? ButtonType.default : ButtonType.disabled}
                            onClick={() => changePage(currentPage - 1)}>
                            <i className="bi bi-chevron-left"></i>
                        </Button>
                        <span className="mx-5 font-bold">
                            {currentPage} / {maxPage}
                        </span>
                        <Button variant={currentPage < maxPage ? ButtonType.default : ButtonType.disabled}
                            onClick={() => changePage(currentPage + 1)}>
                            <i className="bi bi-chevron-right"></i>
                        </Button>
                        &nbsp;
                        <Button variant={currentPage !== maxPage ? ButtonType.default : ButtonType.disabled}
                            onClick={() => changePage(maxPage)}>
                            <i className="bi bi-chevron-bar-right"></i>
                        </Button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Pagination;