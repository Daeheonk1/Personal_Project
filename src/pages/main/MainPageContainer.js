import react, { useEffect } from "react";
import "../../styles/App.css";
import "../../styles/index.css";
import { Navigate, useNavigate } from "react-router-dom";
import Map from "../../common/Map";
import Observer from "../../utils/observer"
import shop from "../../res/Image/Shop.svg"
import Header from "../../common/Header";
import { useRecoilState } from "recoil";
import { language } from "../../recoil/lang_recoil";
import { Main_Label } from "../../common/lang";



const MainPageContainer = () => {

    const [lang] = useRecoilState(language);

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

    const gotopage3 = () => {
        navigate("/page3")
    }

    const LABEL = lang === "English" ? Main_Label.EN : Main_Label.VI;
    return (
        <div className="container">
            <Header />
            <div className="h-component hidden">
                <div className="center">

                </div>
            </div>
            <div className=" h-component hidden border">
                <div className="flex-column">
                    <div className="hidden">
                        <img className="main-img" onClick={gotopage1} src="http://blog.jinbo.net/attach/615/200937431.jpg" />
                        <div className="flex-column paragraph">
                            <p> {LABEL.ASD_SHORT_INFO} </p>
                            <p>  {LABEL.ASD_CLICK}</p>
                        </div>

                    </div>
                    <div className="hidden">
                        <p> Click to see Thuy's story</p>
                        <img className="main-img" onClick={gotopage2} src="http://blog.jinbo.net/attach/615/200937431.jpg" />
                    </div>
                </div>
            </div >

            <div className="h-component hidden">
                <div className="flex-row">
                    <Map>

                    </Map>
                    <p> Title</p>
                </div>


            </div>
            <div>
                <div className="h-component hidden">
                    <div className="flex-column">
                        <img src={shop} onClick={gotopage3}></img>
                        <img></img>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default MainPageContainer;