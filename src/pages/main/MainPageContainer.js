import react, { useEffect } from "react";
import "../../styles/App.css";
import "../../styles/index.css";
import { Navigate, useNavigate } from "react-router-dom";
import Observer from "../../utils/observer"

const MainPageContainer = () => {
    const navigate = useNavigate();

    useEffect(() => {
        Observer();
    }, []);

    const gotopage1 = () => {
        navigate("/page1")
    }

    return (
        <div className="container">
            <div className="h-component hidden">
                <div className="center">

                </div>
            </div>
            <div className=" h-component hidden border">
                <div className="flex-column">
                    <div className="hidden">
                        <img onClick={gotopage1} src="http://blog.jinbo.net/attach/615/200937431.jpg" />
                        <p> tjfaud</p>
                    </div>
                    <div className="hidden">
                        <p> tjfaud</p>
                        <img src="http://blog.jinbo.net/attach/615/200937431.jpg" />
                    </div>
                </div>
            </div>

            <div className="h-compntnt hidden">
                <div className="flex-row">
                    <img src="http://blog.jinbo.net/attach/615/200937431.jpg" />
                    <p> Title</p>
                </div>

            </div>
        </div>
    );
};

export default MainPageContainer;