import { DefaultModal } from "../../../../../modal";
import { Container } from "./style";

interface ICartModal {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function CartModal({
    isOpen,
    onRequestClose
}:ICartModal) {
    return(
        <DefaultModal
             isOpen={isOpen}
             onRequestClose={onRequestClose}
        >
            <Container>

            </Container>
        </DefaultModal>
    );
}