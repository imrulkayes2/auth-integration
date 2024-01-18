import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Home = () => {
    const authInfo = useContext(AuthContext);
    return (
        <div className="text-3xl text-center">
            <h1>This is home : {authInfo.name}</h1>
        </div>
    );
};

export default Home;