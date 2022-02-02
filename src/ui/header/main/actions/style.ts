import { colors } from './../../../../config/colors';
import styled from "styled-components";
import { shade } from 'polished';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Action = styled.aside``;

export const Login = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    svg {
        margin: 0 1rem 0 0;
        font-size: 2rem;
        color: ${colors.white};
    }

    >div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        >a {
            margin: 0.25rem;
            transition: 0.25s;

            &:hover {
                color:${shade(0.4, colors.white)} ;
            }
        }
    }
`;