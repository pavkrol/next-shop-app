import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
	@font-face {
		font-family: 'Lato';
		src: url('/public/Lato-Light.ttf');
		font-style: normal;
		font-weight: 300
	}

	@font-face {
		font-family: 'Lato';
		src: url('/public/Lato-Regular.ttf');
		font-style: normal;
		font-weight: normal;
	}

	@font-face {
		font-family: 'Lato';
		src: url('/public/Lato-Bold.ttf');
		font-style: normal;
		font-weight: 700
	}

	html,
	body {
    font-family: 'Lato', sans-serif;
    box-sizing: border-box;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	*, *:before, *:after {
    box-sizing: inherit;
    padding: 0;
		margin: 0;
  }
  
  button {
    font-family: 'Lato', sans-serif;
  }
`;

export default GlobalStyles;
