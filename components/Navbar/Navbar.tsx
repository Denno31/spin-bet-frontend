import Image from 'next/image';
import { IconTemplate } from '../Shared/IconTemplate/IconTemplate';
import {
    Nav,
    NavContent,
    NavLogo,
    NavMenu,
    NavSearchInput,
    SearchIconContainer,
} from './NavbarComponents.styled/NavbarComponenents.styled';

export const Navbar = () => {
    return (
        <Nav>
            <NavContent>
                <NavLogo>
                    <Image src="/assets/spinbet-logo.svg" width="120" height={27} alt="Spinbet" />
                </NavLogo>
                <NavSearchInput>
                    <input type="text " placeholder="Search match" />
                    <SearchIconContainer>
                        <IconTemplate svgName="ic:baseline-search" svgWidth={28} />
                    </SearchIconContainer>
                </NavSearchInput>
                <NavMenu>
                    <IconTemplate label="BLOG" svgName="carbon:blog" />
                    <IconTemplate label="Gifts" svgName="material-symbols:featured-seasonal-and-gifts-rounded" />
                    <IconTemplate label="DROPING ODDS" svgName="ph:trend-down" />
                    <IconTemplate label="NOTIFICATION" svgName="ep:notification" />
                </NavMenu>
            </NavContent>
        </Nav>
    );
};
