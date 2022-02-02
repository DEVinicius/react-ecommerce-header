import { Categories } from "./categories";
import { Main } from "./main";
import { Container } from "./style";

export function Header() {
    return(
        <Container>
            <Main />
            <Categories />
        </Container>
    );
}