import { ChangeEventHandler, FC, useState } from "react";
import Loader from "./Loader";

interface SearchBarProps extends React.InputHTMLAttributes<HTMLInputElement> {
    onFilter: (filteredData: Array<any>) => void,
    filterFn: (searchTxt: string) => Array<any>
}
const SearchBar: FC<SearchBarProps> = ({ onFilter, filterFn, ...htmlProps }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    let timeoutid: NodeJS.Timeout;

    const startSearching = (searchText: string) => {
        setIsLoading(true);
        onFilter(filterFn(searchText));
        setIsLoading(false);
    }

    const onTextChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
        if (timeoutid) clearTimeout(timeoutid);
        timeoutid = setTimeout(() => {
            startSearching(event.target.value);
        }, 1000);
    }

    return (
        <>
            <Loader isLoading={isLoading} loadingText="Searching Users" />
            {!isLoading && (
                <>
                    <label htmlFor={htmlProps.id}><i className="bi bi-search"></i>&nbsp;:&nbsp;</label>
                    <input {...htmlProps} 
                        className="border border-gray-light bg-white text-black rounded-lg py-2 px-4"
                        onChange={onTextChangeHandler}/>
                </>
            )}

        </>

    )
}

export default SearchBar;