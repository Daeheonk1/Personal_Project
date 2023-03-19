import react, { useEffect, useState } from 'react';
import Observer from "../../utils/observer";
import Header from "../../common/Header";
import { getProducts } from '../../lib/products';
import item1 from "../../res/Image/1.1.jpeg";
import item2 from "../../res/Image/1.2.jpeg";
import item3 from "../../res/Image/1.3.webp";
import item4 from "../../res/Image/2.1.jpeg";
import item5 from "../../res/Image/3.1.jpeg";
import item6 from "../../res/Image/3.2.jpeg";
import item7 from "../../res/Image/3.3.webp";

const Page3 = () => {
    const [products] = useState(() => {
        return getProducts();
    })

    const images = {
        "item1": item1,
        "item2": item2,
        "item3": item3,
        "item4": item4,
        "item5": item5,
        "item6": item6,
        "item7": item7,
    }
    useEffect(() => {
        Observer();
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container">
            <Header showHomebuttton={true} />
            <div className="h-component hidden">
                <div className="center shop"> </div>
            </div>
            <div className="h-compnent flex-column"></div>

            <div className="h-component p">
                {products.map(item => {

                    return (
                        <div className="product-container">
                            <a herf={item.link} target="_blank" rel="noopener no referrer"> <img src={images[item.img]}></img></a>
                            <div>{item.name}</div>
                            <div>{item.price}</div>
                        </div>

                    )

                })

                }

            </div>
        </div>);

}

export default Page3;