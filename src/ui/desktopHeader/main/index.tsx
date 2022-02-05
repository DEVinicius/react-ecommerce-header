import { images } from "../../../config/images";
import { Actions } from "./actions";
import { SearchBar } from "./searchBar";
import { Container } from "./style";

export function Main() {
    return (
        <Container>
            <img src={images.logo} alt="" />
            <SearchBar />
            <Actions />
        </Container>
    );
}