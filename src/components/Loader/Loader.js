import { LoaderContainer } from "./Loader.styled";
import { MutatingDots }  from "react-loader-spinner";

const Loader = () => {
    return (
        <LoaderContainer>
            <MutatingDots color="#00BFFF" width={80} height={80}/>
        </LoaderContainer>
    );
};
export default Loader;
 