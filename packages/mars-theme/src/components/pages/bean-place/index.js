import { connect } from "frontity";
import { Wrapper, WrapperBeanPlace, BackgroundImage, MainButton, TitleNormal, TitleBold, WrapperModel, WrapperModelTop, TextBody, WrapperModelBottom, Subtitle, ModelList, ShadowImage, WrapperDiscover, WrapperBeans, ButtonSecondary, Row, Column, WrapperRanges, CardHover } from "../../../styles/styles";
import BeanCard from "./bean-card";
import BeanChart from "./bean-chart";
import CafeMicrolotCircle from "../../../images/cafe-icon-circle.svg"
import CafeComunalCircle from "../../../images/cerro-icon-circle.svg"
import CacaoMicrolotCircle from "../../../images/cacao-icon-circle.svg"
import CacaoComunalCircle from "../../../images/valle-icon-circle.svg"

const BeanPlace = ( { state, actions } ) => {
    const data = state.source.get(state.router.link);
    const post = state.source[data.type][data.id];
    console.log('post---->', post)
    // 16-> microlot 17 -> comunal
    const title = post.title.rendered
    const acf = post.acf;
    const beanType = post.type;
    const loteType = post.lote_type;

    const microlotIcon = beanType === 'coffee-bean' ? CafeMicrolotCircle : CacaoMicrolotCircle;
    const comunalIcon = beanType === 'coffee-bean' ? CafeComunalCircle : CacaoComunalCircle;
    const microlotImg = beanType === 'coffee-bean' ? acf.COFFE_MICROLOT_IMG : acf.CACAO_MICROLOT_IMG;
    const comunalImg = beanType === 'coffee-bean' ? acf.COFFE_COMUNAL_IMG : acf.CACAO_COMUNAL_IMG;

    const description = beanType === 'coffee-bean' ? acf.COFFE_DESCRIPTION : acf.CACAO_DESCRIPTION;
    const bgImgSrc = beanType === 'coffee-bean' ? acf.COFFE_BG_IMG : acf.CACAO_BG_IMG;

    const comunalCoffeeTexts = [
        'Traceable region/area',
        'High quality consistency',
        'Larger volumes',
        'Certifications upon request'
    ]

    const microlotCoffeTexts = [
        'Traceable farm/plot',
        'Expertise techniques',
        'Unique profiles and origins',
        ''
    ]

    const comunalCacaoTexts = [
        'Traceable region/area',
        'High quality consistency',
        'Larger volumes',
        'Native & commercial blends'
    ]

    const microlotCacaoTexts = [
        'Traceable farm/plot',
        'Fine flavor cacaos',
        'Very limited/ exclusive availability'
    ]

    return (
        <>
            <WrapperBeanPlace>
                <BackgroundImage as={'img'} src={bgImgSrc}></BackgroundImage>
                <Row>
                    <Column className="titleCol">
                        <TitleBold> {title} </TitleBold>
                        <TextBody dangerouslySetInnerHTML={{__html: description}}>
                        </TextBody>
                    </Column>
                    <Column className="cardCol">
                        {
                            loteType.sort().map(lote => {
                                return(
                                    <>
                                        <BeanCard title={title} img={lote === 16 ? comunalImg : microlotImg} loteType={lote === 16 ? 'Comunales' : 'Microlots'} beanType={beanType} />
                                    </>
                                )
                            })
                        }
                    </Column>
                </Row>
            </WrapperBeanPlace>
            <BeanChart title={title} acf={acf} beanType={beanType}/>
            <WrapperRanges>
                <TitleBold> Our Ranges </TitleBold>
                <Row className="content">
                    <CardHover className={`comunales ${beanType}`}>
                        <Row>
                            <Column>
                                {
                                    beanType === 'coffee-bean' ?
                                    comunalCoffeeTexts.map((el, i) => <TextBody key={i}>{el}</TextBody>) :
                                    comunalCacaoTexts.map((el, i) => <TextBody key={i}>{el}</TextBody>) 
                                }
                            </Column>
                            <img src={comunalIcon} />
                        </Row>
                        <div className={`titleType ${beanType}`}>
                            <Subtitle>
                                Comunales
                            </Subtitle>
                        </div>
                    </CardHover>
                    <CardHover className={`microlots ${beanType}`}>
                        <Row>
                            <Column>
                                {
                                    beanType === 'coffee-bean' ?
                                    microlotCoffeTexts.map((el, i) => <TextBody key={i}>{el}</TextBody>) :
                                    microlotCacaoTexts.map((el, i) => <TextBody key={i}>{el}</TextBody>) 
                                }
                            </Column>
                            <img src={microlotIcon}/>
                        </Row>
                        <div className={`titleType ${beanType}`}>
                            <Subtitle>
                                Microlots
                            </Subtitle>
                        </div>
                    </CardHover>
                </Row>
            </WrapperRanges>
        </>
    )
}

export default connect(BeanPlace);
