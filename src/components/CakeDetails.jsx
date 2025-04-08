import { useParams } from "react-router-dom"

function CakeDetails() {
    var params = useParams()
    var cakeId = params.id

    return(
        <div>
            {cakeId} Cake Details
        </div>
    )
}

export default CakeDetails