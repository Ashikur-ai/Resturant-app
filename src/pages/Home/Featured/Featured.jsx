import SectionTitle from "../../../components/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8">
            <SectionTitle
                heading={"Featured Items"}
                subHeading={"check it out"}
            >

            </SectionTitle>
            <div className="md:flex justify-center items-center pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2023 </p>
                    <p className="uppercase">Where can I get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nemo quaerat molestias necessitatibus. Eaque iste, molestias recusandae saepe hic nobis sapiente a pariatur ipsam autem tempora deserunt, nam necessitatibus nostrum! Neque delectus nulla, officiis quae doloremque repellat voluptatibus sunt aperiam! Incidunt maiores amet nobis autem nihil, laudantium officiis repellendus voluptatum.</p>
                    <button className="btn btn-outline border-0 border-b-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;