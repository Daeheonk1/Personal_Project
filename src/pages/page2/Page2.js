import react, { useEffect } from 'react';
import Observer from "../../utils/observer";
import Header from "../../common/Header";

const Page2 = () => {

    useEffect(() => {
        Observer();
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container">
            <Header />
            <div className="h-component hidden">
                <div className="center"> </div>
            </div>
            <div className="h-compnent flex-column">



            </div>
        </div>);

}

export default Page2;

