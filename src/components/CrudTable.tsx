import { FC, useCallback, useMemo, useState } from "react";
import Button, { ButtonType } from "./Button";
import SearchBar from "./SearchBar";
import Pagination from "./Pagination";

export type HeaderData = {
    headerText?: string,
    dataField: string,
    template?: (data: {}) => JSX.Element,
    isSearchable?: boolean,
    isSortable?: boolean,
    canHide?: boolean,
}
export type CrudTableProps = {
    className?: string,
    tblKey?: React.Key,
    children?: React.ReactNode,
    headerData: HeaderData[],
    listData: any[],
    enableAdd?: boolean,
    addFn?: () => void,
    enableEdit?: boolean,
    editFn?: (data: {}) => void,
    enableDelete?: boolean,
    deleteFn?: (data: {}) => void,
    pagination?: {
        pageSize: number
    },
    onSelect?: (datarow: {}) => void
}
const CrudTable: FC<CrudTableProps> = (props) => {
    const { tblKey, children, headerData, listData,
        enableAdd = true, enableEdit = true, enableDelete = true,
        addFn = () => { }, deleteFn = () => { }, editFn = () => { },
        pagination = { pageSize: 10 }, onSelect = () => { } } = props;

    const [filteredData, setFilteredData] = useState<typeof listData>(props.listData);
    const [pagedData, setPagedData] = useState<typeof listData>([]);

    const searchableHeaders = new Array<string>;
    const renderHeaders = useMemo(() => headerData.map((item, index) => {
        const { canHide = false, isSearchable = true } = item;
        const headerName: string = item.headerText ? item.headerText : item.dataField
        const hiddenClass: string = canHide ? "hidden md:table-cell" : "";

        if (isSearchable) searchableHeaders.push(item.dataField);

        return (
            <th key={`${tblKey}_th${index}`} className={`p-5 text-left ${hiddenClass}`}>{headerName}</th>
        )
    }), [headerData]);

    const onFilter = (data: typeof listData) => {
        setFilteredData(data);
    }

    const filterFn = useCallback((searchTxt: string) =>
        listData.filter((row) => {
            let result: boolean = false;
            for (let searchHeader of searchableHeaders) {
                result = (row[searchHeader] as string).toUpperCase().includes(searchTxt.toUpperCase());
                if (result) break;
            }
            return result;
        }), [listData]);

    const paginationHandler = (startIndex: number, endIndex: number) => {
        setPagedData(filteredData.slice(startIndex, endIndex + 1));
    }

    const renderActions = (item: any) => (
        <td>
            {enableEdit &&
                (<a className="p-1 rounded-lg border border-none hover:text-gray-light" href="#" onClick={() => editFn(item)}>
                    <span><i className="bi bi-pencil-square"></i></span>
                </a>)
            }
            &nbsp;
            {enableDelete &&
                (<a className="p-1 rounded-lg border border-none hover:text-gray-light" href="#" onClick={() => deleteFn(item)}>
                    <span><i className="bi bi-trash"></i></span>
                </a>)
            }
        </td>
    );

    return (
        <div className="border-0 rounded-xl my-5 p-5 mx-auto shadow-2xl">
            <table className="w-full">
                <caption className="p-5">
                    {children}
                    <div className="my-5">
                        <div className="float-left">
                            <SearchBar id="searchusersbar" placeholder="Search users" filterFn={filterFn} onFilter={onFilter} />
                        </div>
                        {enableAdd &&
                            (<div className="float-right">
                                <Button variant={ButtonType.primary} onClick={() => addFn()}>
                                    <span><i className="bi bi-plus"></i></span>
                                    <span className="hidden md:inline">Add Record</span>
                                </Button>
                            </div>)
                        }
                    </div>
                </caption>
                <thead>
                    <tr key={`${tblKey}_tr_header`} className="border-b border-b-gray">
                        {renderHeaders}
                        {(enableEdit || enableDelete) &&
                            (<th key={`${tblKey}_th_actions`}>&nbsp;</th>)
                        }
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-light">
                    <CrudTableRows data={pagedData} headerData={headerData} renderActions={renderActions} onSelect={onSelect} />
                </tbody>
            </table>
            <div className="my-5">
                <Pagination totalSize={filteredData.length} pageSize={pagination.pageSize} onPaginate={paginationHandler} />
            </div>
        </div>
    )
}

export default CrudTable;

type CrudTableRowsProps = {
    data: Array<any>,
    headerData: Array<any>,
    renderActions: (item: any) => React.ReactNode,
    onSelect: (datarow: any) => void
}
const CrudTableRows: FC<CrudTableRowsProps> = ({ data, headerData, renderActions, onSelect }) => {
    const rows = data.map((item, index) => {

        const renderCols = headerData.map((headerItem, headerIndex) => {
            const { canHide = false } = headerItem;
            const renderContent: JSX.Element = headerItem.template ?
                headerItem.template(item) :
                (<>{item[headerItem.dataField]}</>);

            const hiddenClass: string = canHide ? "hidden md:table-cell" : "";
            return (
                <td key={`row${index}col${headerIndex}`} className={`p-5 ${hiddenClass}`}
                    onClick={() => { onSelect(item) }}>
                    {renderContent}
                </td>
            )
        });

        const grayShadowClass: string = ((index % 2) !== 0) ? "shadow-inner-fill-gray" : "";

        return (
            <tr key={`tr${index}`} className={`${grayShadowClass} my-5 hover:cursor-pointer hover:shadow-inner-fill-gray-dark`}>
                {renderCols}
                {renderActions(item)}
            </tr>
        )
    });

    return rows;
}