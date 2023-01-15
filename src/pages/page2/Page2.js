import react, { useEffect } from 'react';
import Observer from "../../utils/observer"

const Page2 = () => {

    useEffect(() => {
        Observer();
    }, []);

    return (
        <div className="container">
            <div className="h-component hidden">
                <div className="center"> </div>
            </div>
            <div className="h-compnent flex-column">



            </div>
        </div>);

}

export default Page2;

