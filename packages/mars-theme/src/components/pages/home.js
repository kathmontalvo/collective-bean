import { connect } from "frontity";
import Link from "../link";
import { Wrapper, WrapperWelcome, BackgroundImage, MainButton, TitleNormal, TitleBold, WrapperModel, WrapperModelTop, TextBody, WrapperModelBottom, Subtitle, ModelList, ShadowImage, WrapperDiscover, WrapperBeans, BeanCard, ButtonSecondary } from "../../styles/styles";
import arrowRight from '../../images/arrow-right.png';

const Home = ({ state }) => {

    const data = state.source.get(state.router.link);
    const postInfo = state.source[data.type][data.id];
    const acf = postInfo.acf

    const { 
        WELCOME_TITLE_1, WELCOME_SUBTITLE_1, WELCOME_IMG, WELCOME_CTA, 
        MODEL_MSG_1, MODEL_MSG_2, MODEL_MSG_SMALL, MODEL_TITLE, MODEL_SUBTITLE, MODEL_BULLET_1, MODEL_BULLET_2, MODEL_BULLET_3, MODEL_BULLET_4, MODEL_IMG,
        DISCOVER_TITLE, DISCOVER_SUBTITLE, DISCOVER_IMG,
        BEAN_1_TITLE, BEAN_1_SUBTITLE, BEAN_1_CTA, BEAN_1_IMG_COLOR, BEAN_1_IMG_BN, BEAN_2_TITLE, BEAN_2_SUBTITLE, BEAN_2_CTA, BEAN_2_IMG_COLOR, BEAN_2_IMG_BN, BEAN_BG_IMAGE
    } = acf;

    const changeBgImage = (e, bgImg) => {
        e.target.children[1].src = bgImg
    }
    
    return(
        <>
            <Wrapper>
                <BackgroundImage src={WELCOME_IMG} className="welcome" alt="Fondo principal Collective Bean"/>
                <WrapperWelcome>
                    <h1>{WELCOME_TITLE_1}</h1>
                    <h2>{WELCOME_SUBTITLE_1}</h2>
                    <MainButton as={Link} link='/contact'>{WELCOME_CTA}</MainButton>
                </WrapperWelcome>
            </Wrapper>
            <Wrapper>
                <WrapperModel>
                    <WrapperModelTop>
                        <TitleNormal>{MODEL_MSG_1}</TitleNormal>
                        <TitleBold>{MODEL_MSG_2}</TitleBold>
                        <TextBody>{MODEL_MSG_SMALL}</TextBody>
                    </WrapperModelTop>
                    <WrapperModelBottom>
                        <section className="start">
                            <Subtitle>{MODEL_SUBTITLE}</Subtitle>
                            <TitleBold>{MODEL_TITLE}</TitleBold>
                            <ModelList>
                                <TextBody as={"li"}>
                                    <img src={arrowRight} />
                                    <span dangerouslySetInnerHTML={{ __html: MODEL_BULLET_1}}></span>
                                </TextBody>
                                <TextBody as={"li"}>
                                    <img src={arrowRight} />
                                    <span dangerouslySetInnerHTML={{ __html: MODEL_BULLET_2}}></span>
                                </TextBody>
                                <TextBody as={"li"}>
                                    <img src={arrowRight} />
                                    <span dangerouslySetInnerHTML={{ __html: MODEL_BULLET_3}}></span>
                                </TextBody> 
                                <TextBody as={"li"}>
                                    <img src={arrowRight} />
                                    <span dangerouslySetInnerHTML={{ __html: MODEL_BULLET_4}}></span>
                                </TextBody> 
                            </ModelList>
                        </section>
                        <ShadowImage src={MODEL_IMG} className="end"  isDark={true}/>
                    </WrapperModelBottom>
                </WrapperModel>
            </Wrapper>
            <Wrapper>
                <WrapperDiscover>
                    <ShadowImage src={DISCOVER_IMG} isDark={false}/>
                    <aside>
                        <Subtitle>{DISCOVER_SUBTITLE}</Subtitle>
                        <TitleBold>{DISCOVER_TITLE}</TitleBold>
                    </aside>
                </WrapperDiscover>
            </Wrapper>
            <Wrapper>
                <WrapperBeans style={{backgroundImage: `url(${BEAN_BG_IMAGE})`}}>
                    <BeanCard className="first" onMouseOver={(e) => changeBgImage(e, BEAN_1_IMG_COLOR)} onMouseLeave={(e) => changeBgImage(e, BEAN_1_IMG_BN)}>
                        <TextBody>{BEAN_1_SUBTITLE}</TextBody>
                        <img  src={BEAN_1_IMG_BN} alt="Grano de Café"/>
                        <TitleBold>{BEAN_1_TITLE}</TitleBold>
                        <ButtonSecondary as={Link} link={"/coffee-beans"}>{BEAN_1_CTA}</ButtonSecondary>
                    </BeanCard>
                    <BeanCard className="second" onMouseOver={(e) => changeBgImage(e, BEAN_2_IMG_COLOR)} onMouseLeave={(e) => changeBgImage(e, BEAN_2_IMG_BN)}>
                        <TextBody>{BEAN_2_SUBTITLE}</TextBody>
                        <img  src={BEAN_2_IMG_BN} alt="Grano de Cacao"/>
                        <TitleBold>{BEAN_2_TITLE}</TitleBold>
                        <ButtonSecondary as={Link} link={"/cocoa-beans"}>{BEAN_2_CTA}</ButtonSecondary>
                    </BeanCard>
                </WrapperBeans>
            </Wrapper>
        </>
    )
}

export default connect(Home);