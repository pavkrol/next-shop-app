import Header from '../components/Header';
import GlobalStyles from '../styles/GlobalStyles';
import styled from 'styled-components';

const InnerStyles = styled.div`
	padding: 20px;
`;

const Page = ({ children }) => (
	<div>
		<GlobalStyles />
		<Header />
		<InnerStyles>{children}</InnerStyles>
	</div>
);

export default Page;
