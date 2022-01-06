import { FC } from "react" 

type SearchProps = {
    search: string
    setSearch: any
}

const Search: FC<SearchProps> = ({search, setSearch}) => {
    return (
        <div className="wrapperSearch">
            <div className="search">
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    type="text" 
                    placeholder="Поиск здесь..."/>
                <img height={20} width={20} src="https://i.imgur.com/L33v1KO.png" alt="search" />
            </div>
        </div>
    )
}
export default Search