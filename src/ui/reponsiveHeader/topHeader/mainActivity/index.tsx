import { images } from "../../../../config/images";
import { Cart } from "./cart";
import { Profile } from "./profile";
import { Container } from "./style";

export function MainActivity() {
    return (
        <Container>
            <img src={images.logo} alt="" />
            <aside>
                <Cart />
                <Profile />
            </aside>
        </Container>
    );
}