import { connect } from "frontity";
import { useEffect } from "react";
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
	const isCoffeeBeans = post.categories.find(el => el == 27 || el == 24);
    // 27/24 -> cafes - 31/29 -> cacaos

    console.log('post---->', post)
    console.log('cafe---->', isCoffeeBeans)
    // 19-> microlot 18 -> comunal
    const title = post.title.rendered
    const acf = post.acf;
    const beanType = isCoffeeBeans ? 'coffee-bean' : 'cocoa-bean';
    const loteType = post.lote_type;

    useEffect(() => {
        window.scrollTo({
        top: 0,
        behavior: "smooth"
        });
    }, [])

    const microlotIcon = beanType === 'coffee-bean' ? CafeMicrolotCircle : CacaoMicrolotCircle;
    const comunalIcon = beanType === 'coffee-bean' ? CafeComunalCircle : CacaoComunalCircle;
    const microlotImg = beanType === 'coffee-bean' ? acf.COFFE_MICROLOT_IMG : acf.CACAO_MICROLOT_IMG;
    const comunalImg = beanType === 'coffee-bean' ? acf.COFFE_COMUNAL_IMG : acf.CACAO_COMUNAL_IMG;

    const description = beanType === 'coffee-bean' ? acf.COFFE_DESCRIPTION : acf.CACAO_DESCRIPTION;
    const bgImgSrc = beanType === 'coffee-bean' ? acf.COFFE_BG_IMG : acf.CACAO_BG_IMG;
    // console.log(microlotImg, comunalImg, typeof loteType,  Object.values(loteType));
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
                <BackgroundImage src={bgImgSrc} alt="Fondo principal"/>
                <Row>
                    <Column className="titleCol">
                        <TitleBold> {title} </TitleBold>
                        <TextBody dangerouslySetInnerHTML={{__html: description}}>
                        </TextBody>
                    </Column>
                    <Column className="cardCol">
                        {
                            Object.values(loteType).sort().map(lote => {
                                return(
                                    <>
                                        <BeanCard state={state} title={title} img={lote === 19 ? microlotImg : comunalImg} loteType={lote === 19 ? 'Microlots' : 'Comunales'} beanType={beanType} />
                                    </>
                                )
                            })
                        }
                    </Column>
                </Row>
            </WrapperBeanPlace>
            <BeanChart state={state} title={title} acf={acf} beanType={beanType}/>
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
