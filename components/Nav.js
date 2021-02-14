import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const NavWrapper = styled.nav`
	display: flex;
	justify-content: center;
	padding: 10px 20px;
	background-color: peru;
	a {
		margin: 0 20px;
	}
`;

const Nav = () => {
	return (
		<NavWrapper>
			<Link href='/hoodies'>Hoodies</Link>
			<Link href='/shoes'>Shoes</Link>
			<Link href='/tshirts'>Tshirts</Link>
		</NavWrapper>
	);
};

export default Nav;
