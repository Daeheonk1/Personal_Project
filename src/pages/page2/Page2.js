import react, { useEffect } from 'react';
import Observer from "../../utils/observer";
import Header from "../../common/Header";
import { P2_Label } from "../../common/lang"
import { useRecoilState } from "recoil";
import { language } from "../../recoil/lang_recoil";

const Page2 = () => {
    const [lang] = useRecoilState(language);

    useEffect(() => {
        Observer();
        window.scrollTo(0, 0);

    }, []);

    const LABEL = lang === "English" ? P2_Label.EN : P2_Label.VI;

    return (
        <div className="container">
            <Header showHomebutton={true} />
            <div className="h-component hidden">
                <div className="center"> </div>
            </div>
            <div className="h-compnent flex-column left">



            </div>
        </div>);

}

export default Page2;

