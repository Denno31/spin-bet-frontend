import styled from 'styled-components';
import Image from 'next/image';

const Nav = styled.nav`
    background-color: ${({ theme: { color } }) => color.spinDarkGray};
    padding: 5px;
    box-sizing: border-box;
    position: sticky;
    top: 0;
    z-index: 100;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

const NavContent = styled.div`
    display: flex;
    width: 100%;
    max-width: 1380px;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
`;

const NavLogo = styled.div`
    font-size: ${({ theme: { fonts } }) => fonts.xxxl}
    font-weight: 600;
    padding: 10px 0 10px;
`;

export const Navbar = () => {
    return (
        <Nav>
            <NavContent>
                <NavLogo>
                    <Image src="/assets/spinbet-logo.svg" width="120" height={27} alt="Spinbet" />
                </NavLogo>
            </NavContent>
        </Nav>
    );
};
