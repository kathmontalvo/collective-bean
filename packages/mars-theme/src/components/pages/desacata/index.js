import { connect, styled } from "frontity";
import desacataLogoDark from "../../../images/logo_desacata.png";
import desacataLogoWhite from "../../../images/logo_desacata_white.png";
import CBlogo from "../../../images/cb_logo_white.png"
import fbIconDark from "../../../images/fb_dark.svg";
import igIconDark from "../../../images/ig_dark.svg";
import fbIcon from "../../../images/fb.svg";
import igIcon from "../../../images/ig.svg";
import bgThunder from "../../../images/bg-thunder.png";
import Link from "../../link";
import { Column, FooterSection, Row } from "../../../styles/styles";


const Desacata = ({ state }) => {
    const data = state.source.get(state.router.link);
    const post = state.source[data.type][data.id];
    console.log('post---->', post)

    const title = post.title.rendered;
    const acf = post.acf;

    const {
        TITLE, SUBTITLE, IMG_1, IMG_2,
        CAFE_1_TITLE, CAFE_1_IMG, CAFE_2_TITLE, CAFE_2_IMG, CAFE_3_TITLE, CAFE_3_IMG, CAFE_4_TITLE, CAFE_4_IMG, CAFE_5_TITLE, CAFE_5_IMG, CAFE_6_TITLE, CAFE_6_IMG, 
        CACAO_1_TITLE, CACAO_1_IMG, CACAO_2_TITLE, CACAO_2_IMG, CACAO_3_TITLE, CACAO_3_IMG, CACAO_4_TITLE, CACAO_4_IMG, CACAO_5_TITLE, CACAO_5_IMG, CACAO_6_TITLE, CACAO_6_IMG, 
        FB_URL, IG_URL
    } = acf;

    const coffeeProducts = {
        title: 'cafés',
        products: [ 
            { title: CAFE_1_TITLE, img: CAFE_1_IMG },
            { title: CAFE_2_TITLE, img: CAFE_2_IMG },
            { title: CAFE_3_TITLE, img: CAFE_3_IMG },
            { title: CAFE_4_TITLE, img: CAFE_4_IMG },
            { title: CAFE_5_TITLE, img: CAFE_5_IMG },
            { title: CAFE_6_TITLE, img: CAFE_6_IMG }
        ]
    }
    const cacaoProducts = {
        title: 'cacaos',
        products: [ 
            { title: CACAO_1_TITLE, img: CACAO_1_IMG },
            { title: CACAO_2_TITLE, img: CACAO_2_IMG },
            { title: CACAO_3_TITLE, img: CACAO_3_IMG },
            { title: CACAO_4_TITLE, img: CACAO_4_IMG },
            { title: CACAO_5_TITLE, img: CACAO_5_IMG },
            { title: CACAO_6_TITLE, img: CACAO_6_IMG }
        ]
    }

    return(
        <>
            <Main>
                <nav>
                    <img className="title" src={desacataLogoDark} alt="Logo Desacata"/>
                    <div className="social">
                        <Link link={FB_URL} target="_blank" rel="noopener noreferrer">
                            <img src={fbIconDark} alt="Icono Facebook" />
                        </Link>
                        <Link link={IG_URL} target="_blank" rel="noopener noreferrer">
                            <img src={igIconDark} alt="Icono Instagram" />
                        </Link>
                    </div>
                </nav>
                <section className="main-banner">
                    <div className="text">
                        <h2>{TITLE}</h2>
                        <p>{SUBTITLE}</p>
                        <button>unete</button>
                    </div>
                    <div className="imgs">
                        <img src={IMG_1} alt="Bolsa de café Desacata"/>
                        <img src={IMG_2} alt="Bolsa de cacao Desacata" />
                    </div>
                </section>
            </Main>
            <ProductSection>
                <div className="product-title">
                    <h3>{coffeeProducts.title}</h3>
                </div>
                <div className="products">
                    {
                        coffeeProducts.products.filter((el) => el.title !== '').map((prod, i) => 
                            <CardProduct key={i}>
                                <img src={prod.img} />
                                <p>
                                    {prod.title}
                                </p>
                            </CardProduct>
                        )
                    }
                </div>

            </ProductSection>
            <ProductSection>
                <div className="product-title">
                    <h3>{cacaoProducts.title}</h3>
                </div>
                <div className="products">
                    {
                        cacaoProducts.products.filter((el) => el.title !== '').map((prod, i) => 
                            <CardProduct key={i}>
                                <img src={prod.img} />
                                <p>
                                    {prod.title}
                                </p>
                            </CardProduct>
                        )
                    }
                </div>

            </ProductSection>
            <FooterSection style={{backgroundColor: '#231F20'}}>
                <Column>
                    <Link link={'/home-3/'}>
                        <img className="logo" src={CBlogo} alt="Logotipo Collective Bean"/>
                    </Link>
                </Column>
                <Column style={{marginTop: '36px', marginBottom: '48px'}}>
                    <img className="logo" src={desacataLogoWhite} alt="Logotipo Desacata"/>
                </Column>
                <Column>
                    <Row>
                        <Link link={FB_URL} target="_blank" rel="noopener noreferrer">
                            <img src={fbIcon} />
                        </Link>
                        <Link link={IG_URL} target="_blank" rel="noopener noreferrer">
                            <img src={igIcon} />
                        </Link>
                    </Row>
                </Column>
            </FooterSection>
        </>
    )
}

export default connect(Desacata)

const Main = styled.section`
    width: auto;
    height: 75vh;
    padding: 48px 36px;
    background: linear-gradient(
        to right,
        #EFEFEF 50%,
        #D5ECD3 50%
    );
    font-family: 'Courier Prime', 'serif';

    nav {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 36px;
        img.title {
            width: 120px;
            height: auto;
            object-fit: contain;
        }
        .social {
            a {
                img {
                    width: 24px;
                    margin-right: 8px;
                }
            }
        }
    }
    section.main-banner {
        background-color: white;
        background-image: url(${bgThunder});
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        .text {
            width: 100%;
            padding: 24px;
            h2 {
                font-size: 36px;
                font-weight: 400;
                margin-bottom: 12px;
            }
            p {
                font-size: 14px;
                margin-bottom: 24px;
            }
            button {
                font-family: 'Abel', sans-serif;
                font-size: 16px;
                border: none;
                background: #231F20;
                color: #FFFFFF;
                padding: 12px 24px;
                cursor: pointer;
            }
        }
        .imgs {
            width: 100%;
            img {
                width: 120px;
            }
        }
    }

    @media screen and (min-width: 768px) {
        padding: 48px 80px;
        height: 65vh;

        nav {
            .img.title {
                width: 200px;

            }
            .social {
                a{
                    img {
                        width: 36px;
                        margin-right: 12px;
                    }
                }
            }
        }
        section.main-banner {
            .text {
                width: 60%;
                padding: 48px 24px 48px 48px;

                h2 {
                    font-size: 70px;
                    margin-bottom: 12px;
                }
                p {
                    font-size: 20px;
                    margin-bottom: 48px;
                }
                button {
                    font-size: 24px;
                    padding: 16px 48px;
                }
            }
            .imgs {
                width: 40%;
                img {
                    width: 180px;
                }
            }
        }
    }
    @media screen and (min-width: 1200px) {
        padding: 48px 120px;
        height: 80vh;

        nav {
            .img.title {
            }
            .social {
                a{
                    img {
                        width: 48px;
                    }
                }
            }
        }
    }
`
const ProductSection = styled.section`
    font-family: 'Courier Prime', 'serif';

    .product-title {
        background-color: #FFFFFF;
        background-image: url(${bgThunder});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        padding: 0 36px;
        h3 {
            margin: 0;
            padding: 36px 36px 12px 36px;
            font-weight: 400;
            font-size: 36px;
        }
    }
    .products {
        display: flex;
        flex-wrap: wrap; 
        flex-direction: row;
        padding: 24px 36px;
        background-color: #EBEBEB;
    }
    @media screen and (min-width: 768px) {
        .product-title {
            h3 {
                padding: 120px 120px 12px 120px;
                font-size: 70px;
            }
        }
        .products {
            padding: 12px 120px 24px 150px;
        
        }

    }
    @media screen and (min-width: 1200px) {
    }
`

const CardProduct = styled.div`
    width: 50%;
    margin-bottom: 24px;
    img {
        width: 95%;
    }
    p {
        width: 95%;
        margin: 12px auto;
        text-align: center;
        font-size: 24px;
    }
    @media screen and (min-width: 768px) {
        width: 33%;
    }
    @media screen and (min-width: 1200px) {
    }
`

