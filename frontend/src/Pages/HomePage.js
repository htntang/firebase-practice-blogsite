import { Auth } from "../components/auth";

export default function HomePage(){
    return(
        <>
        <div className="box1">
            <Auth />
        </div>

        <div className="box2">
            here to support your goals
        </div>

        <div className="box3">
            featured articles
        </div>

        <div className="box4">
            featured media
        </div>

        <div className="box5">
            awards
        </div>
        </>
    )
}