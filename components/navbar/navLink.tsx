import styled from "styled-components"
import Link from "next/link";
import { ReactNode } from "react";

type NavLinkProps = {
    children?: ReactNode,
    to: string,
    selected: boolean
}

export const StyledNavText = styled.div<{ selected: boolean }>`
    font-family: ${props => props.theme.fonts.base};
    padding: 0 20px 11px 0;
    cursor: pointer;
    font-weight: 400;
    text-decoration: none;
    color: ${(props) => {
                return props.selected ? props.theme.colors.orange : props.theme.colors.base
            }};
    font-size: 22px;
    &:hover {
        opacity: 0.7;
    };
    transition: opacity 0.4s linear;
`


// components
export default function NavLink ({children, to, selected}: NavLinkProps) {
    return (
        <Link href={to}>
            <StyledNavText
                selected={selected} 
            >
                {children}
            </StyledNavText>
        </Link>
    )
}