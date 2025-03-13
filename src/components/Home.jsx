import Cakelist from "./Cakelist"
import Carousel from "./Carousel"
import Signup from "./Signup"

function Home() {
    return (
        <div>
            <Signup />
            <Carousel />
            <Cakelist />
        </div>
    )
}

export default Home