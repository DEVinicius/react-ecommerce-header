import { useCallback, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Container } from "./style";
import { CartModal } from "./cartModal";

export function CartAction() {
    const [cartModal, setCartModal] = useState<boolean>(false);
    
    const handleOpenCartModal = useCallback(async() => {
        setCartModal(true);
    }, [setCartModal]);

    const handleCloseCartModal = useCallback(() => {
        setCartModal(false);
    }, [setCartModal]);

    return (
        <>
            <Container onMouseOver={handleOpenCartModal}>
                <FiShoppingCart />
            </Container>
            <CartModal 
                isOpen={cartModal}
                onRequestClose={handleCloseCartModal}
            />
        </>
    );
}