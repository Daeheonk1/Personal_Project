import react, { useEffect } from 'react';
import Observer from "../../utils/observer";
import Header from "../../common/Header";

const Page1 = () => {

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

                <h1>

                    What is Austism Spectrum Disorder?
                </h1>
                <ul>
                    <li>
                        aaaaaaa
                    </li>
                    <li>
                        aaa
                    </li>
                </ul>
                <h1>
                    What are the main types of this disoder?
                </h1>
                <p>

                </p>
                <h1>
                    What is Austism Spectrum Disorder?
                </h1>
                <p>

                </p>

            </div>
        </div>);

}

export default Page1;

