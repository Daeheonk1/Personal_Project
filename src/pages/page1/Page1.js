import react, { useEffect } from 'react';
import Observer from "../../utils/observer"

const Page1 = () => {

    useEffect(() => {
        Observer();
    }, []);

    return (
        <div className="container">
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

