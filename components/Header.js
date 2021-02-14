import React from 'react';
import Link from 'next/link';
import Nav from './Nav';
import styled from 'styled-components';

const Logo = styled.h1`
	font-size: 20px;
	font-weight: 700;
	a {
		color: darkblue;
		text-decoration: none;
	}
`;

const TopBar = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 60px;
	background-color: lightgray;
	padding: 0 20px;
`;

const Header = () => {
	return (
		<header>
			<TopBar>
				<p>search</p>
				<Logo>
					<Link href='/'>Just clothes</Link>
				</Logo>
				<Link href='/account'>account</Link>
			</TopBar>
			<Nav />
		</header>
	);
};

export default Header;
