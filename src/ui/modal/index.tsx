import { ReactNode } from 'react';
import ReactModal from 'react-modal';

interface IModal {
    isOpen: boolean;
    onRequestClose: () => void;
    children: ReactNode;
}

export function DefaultModal({
    isOpen,
    onRequestClose,
    children
}:IModal) {
    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            {children}
        </ReactModal>
    )
}