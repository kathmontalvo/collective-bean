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
    const isEnglish = !state.router.link.includes('/es/') ? true : false;

	const isCoffeeBeans = post.categories.find(el => el == 27 || el == 24);
    // 27/24 -> cafes - 31/29 -> cacaos

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

    const comunalCoffeeTexts = [
        isEnglish ? 'Traceable region/area' : 'Región/área trazable',
        isEnglish ? 'High quality consistency' : 'Consistencia de alta calidad',
        isEnglish ? 'Larger volumes' : 'Volúmenes más grandes',
        isEnglish ? 'Certifications upon request' : 'Certificaciones a pedido'
    ]

    const microlotCoffeTexts = [
        isEnglish ? 'Traceable farm/plot' : 'Chacra/parcela trazable',
        isEnglish ? 'Expertise techniques' : 'Procesos experimentales',
        isEnglish ? 'Unique profiles and origins' : 'Perfiles y orígenes únicos',
        ''
    ]

    const comunalCacaoTexts = [
        isEnglish ? 'Traceable region/area' : 'Región/área trazable',
        isEnglish ? 'High quality consistency' : 'Consistencia de alta calidad',
        isEnglish ? 'Larger volumes' : 'Volúmenes más grandes',
        isEnglish ? 'Native & commercial blends' : 'Mezclas nativas y comerciales'
    ]

    const microlotCacaoTexts = [
        isEnglish ? 'Traceable farm/plot' : 'Chacra/parcela trazable',
        isEnglish ? 'Fine flavor cacaos' : 'Cacaos finos de aroma',
        isEnglish ? 'Very limited/ exclusive availability' : 'Disponibilidad muy limitada/exclusiva'
    ]

    const titleMicrolot = isEnglish ? 'Microlots' : 'Microlotes'
    const titleComunal = isEnglish ? 'Comunales' : 'Comunales'

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
                                        <BeanCard state={state} title={title} img={lote === 19 ? microlotImg : comunalImg} loteType={lote === 19 ? 'microlots' : 'comunales'} loteTitle={lote===19 ? titleMicrolot : titleComunal} beanType={beanType} />
                                    </>
                                )
                            })
                        }
                    </Column>
                </Row>
            </WrapperBeanPlace>
            <BeanChart state={state} title={title} acf={acf} beanType={beanType}/>
            <WrapperRanges>
                <TitleBold> {isEnglish ? 'Our Ranges' : 'Nuestros rangos'} </TitleBold>
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
                                {titleComunal}
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
                                {titleMicrolot}
                            </Subtitle>
                        </div>
                    </CardHover>
                </Row>
            </WrapperRanges>
        </>
    )
}

export default connect(BeanPlace);
