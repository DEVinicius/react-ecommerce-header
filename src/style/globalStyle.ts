import { createGlobalStyle } from "styled-components";
import { colors } from "../config/colors";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    a {
        color: ${colors.white};
        text-decoration: none;
    }

    button {
        cursor: pointer;
    }

    .react-modal-overlay {
        background: rgba(0,0, 0, 0.5);
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content:center;
    }
    
    .react-modal-content {
        width: 100%;
        max-width: 576px;
        background: #f0f2f5;
        padding: 3rem;
        position: relative;
        border-radius: 0.25rem;
        border: none;
    }
`;