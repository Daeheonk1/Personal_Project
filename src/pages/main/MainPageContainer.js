import react, { useEffect } from "react";
import "../../styles/App.css";
import "../../styles/index.css";
import { Navigate, useNavigate } from "react-router-dom";
import Map from "../../common/Map";
import Observer from "../../utils/observer"

const MainPageContainer = () => {
    const navigate = useNavigate();

    useEffect(() => {
        Observer();
        window.scrollTo(0, 0);
    }, []);

    const gotopage1 = () => {
        navigate("/page1")


    }

    const gotopage2 = () => {
        navigate("/page2")


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
                        <div className="flex-column paragraph">
                            <p> Autism Spectrum Disorder is a developmental disorder that hinders one’s ability to communicate, learn, behave ,and interact with others. It is a disorder that can be diagnosed at any age. Symptoms generally appear in the first two years of the child’s life. </p>
                            <p> Click To Learn More </p>
                        </div>

                    </div>
                    <div className="hidden">
                        <p> Click to see Thuy's story</p>
                        <img onClick={gotopage2} src="http://blog.jinbo.net/attach/615/200937431.jpg" />
                    </div>
                </div>
            </div >

            <div className="h-component hidden">
                <div className="flex-row">
                    {/* <Map></Map> */}
                    <p> Title</p>
                </div>

            </div>
        </div >
    );
};

export default MainPageContainer;