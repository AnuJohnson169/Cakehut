import { useSearchParams } from "react-router-dom"

function SearchCake() {

    var [query,setQueryParams] = useSearchParams()
    var text = query.get("q")
    // get
    // /serachcakes?q=

    return(
        <div>Search results for {text}</div>
    )
}

export default SearchCake