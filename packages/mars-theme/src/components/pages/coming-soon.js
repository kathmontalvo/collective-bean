import { connect, styled } from "frontity";
import cbLogo from "../../images/cb_logo_white.png";
import fbIcon from "../../images/fb.svg";
import igIcon from "../../images/ig.svg";
import Link from "../link";

const ComingSoon = ({state}) => {
	console.log(state)
	const data = state.source.get(state.router.link);
    const post = state.source[data.type][data.id];

	console.log(data, post);
	const url = {
		fb: 'https://www.facebook.com/CollectiveBean',
		ig: 'https://www.instagram.com/collectivebean.peru/'
	}
	return(
		<Main>
			<img className="main-img" src={cbLogo} alt="Logotipo Collective Bean"/>
			<p>— coming soon —</p>
			<section className="icons">
				<Link link={url.fb} target="_blank" rel="noopener noreferrer">
					<img src={fbIcon} alt="ícono Facebook" />
				</Link>
				<Link link={url.ig} target="_blank" rel="noopener noreferrer">
					<img src={igIcon} alt="ícono Instagram" />
				</Link>
			</section>
		</Main>
	)
}

export default connect(ComingSoon);

const Main = styled.main`
	width: 100%;
	height: 100vh;
	background-color: #162216;
	color: #FFFFFF;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-family: Helvetica, sans-serif;

	.main-img {
		width: 90%;
	}
	.icons {
		margin-top: 36px;
		a {
			margin-right: 12px;
			&:nth-of-type(2n) {
				margin: 0;
			}
			img {
				width: 30px;
			}
		}
	}
	@media screen and (min-width: 768px) {
		.main-img {
			width: 50%;
			max-width: 512px;
		}
	}

`

