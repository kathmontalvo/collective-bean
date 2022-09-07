import { connect } from "frontity";
import { ButtonSecondary, Column, Row, TitleBold, TitleNormal, WrapperBeanChart } from "../../../styles/styles";
import Link from "../../link";

const BeanChart = ({ title, acf, beanType, state }) => {

    const isCoffeeType = beanType === 'coffee-bean' 
    const isEnglish = !state.router.link.includes('/es/') ? true : false;

    const { 
        COFFE_CARD_PROFILES, 
        COFFE_CARD_ALTITUDE_INIT, 
        COFFE_CARD_ALTITUDE_END,
        COFFE_CARD_VARIETIES,
        COFFE_CARD_PROCESSES,
        COFFE_CARD_HARVEST_INIT,
        COFFE_CARD_HARVEST_END,
        COFFE_CARD_ENVIRONMENT,
        COFFE_CARD_FAMILIES,
        COFFE_CARD_CERTIFICATE,
        COFFE_CARD_VOLUME 
    } = acf;

    const { 
        CACAO_CARD_FERMENTATION, 
        CACAO_CARD_ALTITUDE_INIT, 
        CACAO_CARD_ALTITUDE_END,
        CACAO_CARD_VARIETIES,
        CACAO_CARD_TEMPERATURE,
        CACAO_CARD_HARVEST_INIT,
        CACAO_CARD_HARVEST_END,
        CACAO_CARD_ENVIRONMENT,
        CACAO_CARD_FAMILIES,
        CACAO_CARD_CERTIFICATE,
        CACAO_CARD_VOLUME 
    } = acf;

    const TITLE_1 = isCoffeeType ? COFFE_CARD_PROFILES : CACAO_CARD_FERMENTATION;
    const TITLE_2_1 = isCoffeeType ? COFFE_CARD_ALTITUDE_INIT : CACAO_CARD_ALTITUDE_INIT;
    const TITLE_2_2 = isCoffeeType ? COFFE_CARD_ALTITUDE_END : CACAO_CARD_ALTITUDE_END; 
    const TITLE_3 = isCoffeeType ? COFFE_CARD_VARIETIES : CACAO_CARD_VARIETIES;
    const TITLE_4 = isCoffeeType ? COFFE_CARD_PROCESSES : CACAO_CARD_TEMPERATURE;
    const TITLE_5_1 = isCoffeeType ? COFFE_CARD_HARVEST_INIT : CACAO_CARD_HARVEST_INIT;
    const TITLE_5_2 = isCoffeeType ? COFFE_CARD_HARVEST_END : CACAO_CARD_HARVEST_END;
    const TITLE_6 = isCoffeeType ? COFFE_CARD_ENVIRONMENT : CACAO_CARD_ENVIRONMENT;
    const TITLE_7 = isCoffeeType ? COFFE_CARD_FAMILIES : CACAO_CARD_FAMILIES;
    const TITLE_8 = isCoffeeType ? COFFE_CARD_CERTIFICATE : CACAO_CARD_CERTIFICATE;
    const TITLE_9 = isCoffeeType ? COFFE_CARD_VOLUME : CACAO_CARD_VOLUME;

    const keyEn = {
        val1: isCoffeeType ? 'Profile' : 'Fermentation',
        val2: 'Altitude',
        val2_1: 'masl',
        val3: 'Varieties',
        val4: isCoffeeType ? 'Processes' : 'Temperature',
        val5: 'Harvest period',
        val5_1: 'to',
        val6: 'Environment',
        val7: 'Families involved',
        val8: 'Certificate',
        val9: 'Volume',
        val9_1: 'tons',
    }
    const keyEs = {
        val1: isCoffeeType ? 'Perfil' : 'Fermentación',
        val2: 'Altitud',
        val2_1: 'msnm',
        val3: 'Variedades',
        val4: isCoffeeType ? 'Procesos' : 'Temperatura',
        val5: 'Periodo de cosecha',
        val5_1: 'a',
        val6: 'Ecosistema',
        val7: 'Familias',
        val8: 'Certificados',
        val9: 'Volumen',
        val9_1: 'toneladas',
    }

    const keyVal = isEnglish ? keyEn : keyEs 

    return(
        <WrapperBeanChart>
            <Column className="title">
                <TitleNormal>
                    {isEnglish ? 'Growing Conditions' : 'Propiedades del cultivo' }
                </TitleNormal>
                <TitleBold>
                    {title}
                </TitleBold>
            </Column>
            <Row>
                <Column>
                    <table>
                        <tbody>
                            <tr>
                                <td className="main">{keyVal.val1}</td>
                                <td>{TITLE_1}</td>
                            </tr>
                            <tr>
                                <td className="main"> {keyVal.val2}</td>
                                <td>{TITLE_2_1} - {TITLE_2_2} {keyVal.val2_1}</td>
                            </tr>
                            <tr>
                                <td className="main">{keyVal.val3}</td>
                                <td>{TITLE_3?.map((el, i) => i !== TITLE_3.length-1 ?  el+', ' : el)}</td>
                            </tr>
                            <tr>
                                <td className="main">{keyVal.val4}</td>
                                <td>
                                    {isCoffeeType ? 
                                        TITLE_4?.map((el, i) => i !== TITLE_4.length-1 ?  el+', ' : el) : TITLE_4
                                    }
                                </td>
                            </tr>
                            <tr>
                                <td className="main">{keyVal.val5}</td>
                                <td>{TITLE_5_1} {keyVal.val5_1} {TITLE_5_2}</td>
                            </tr>
                        </tbody>
                    </table>
                </Column>
                <Column>
                    <table>
                        <tbody>
                            <tr>
                                <td className="main">{keyVal.val6}</td>
                                <td>{TITLE_6}</td>
                            </tr>
                            <tr>
                                <td className="main">{keyVal.val7}</td>
                                <td>{TITLE_7}</td>
                            </tr>
                            <tr>
                                <td className="main">{keyVal.val8}</td>
                                <td>{TITLE_8}</td>
                            </tr>
                            <tr>
                                <td className="main">{keyVal.val9}</td>
                                <td>{TITLE_9} {keyVal.val9_1}</td>
                            </tr>
                        </tbody>
                    </table>
                    <ButtonSecondary as={Link} link={isEnglish ? '/contact/' : '/es/contacto/'}>{isEnglish ? 'Get it!' : '¡Lo quiero!'}</ButtonSecondary>
                </Column>
            </Row>
        </WrapperBeanChart>
    )
}

export default connect(BeanChart);
