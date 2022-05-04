import { connect } from "frontity";
import { ButtonSecondary, Column, Row, TitleBold, TitleNormal, WrapperBeanChart } from "../../../styles/styles";
import Link from "../../link";

const BeanChart = ({ title, acf, beanType }) => {

    const isCoffeeType = beanType === 'coffee-bean' 

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

    return(
        <WrapperBeanChart>
            <Column className="title">
                <TitleNormal>
                    Growing Conditions
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
                                <td className="main">{isCoffeeType ? 'Profile' : 'Fermentation'}</td>
                                <td>{TITLE_1}</td>
                            </tr>
                            <tr>
                                <td className="main"> Altitude</td>
                                <td>{TITLE_2_1} - {TITLE_2_2} masl</td>
                            </tr>
                            <tr>
                                <td className="main">Varieties</td>
                                <td>{TITLE_3?.map((el, i) => i !== TITLE_3.length-1 ?  el+', ' : el)}</td>
                            </tr>
                            <tr>
                                <td className="main">{isCoffeeType ? 'Processes' : 'Temperature'}</td>
                                <td>
                                    {isCoffeeType ? 
                                        TITLE_4?.map((el, i) => i !== TITLE_4.length-1 ?  el+', ' : el) : TITLE_4
                                    }
                                </td>
                            </tr>
                            <tr>
                                <td className="main">Harvest period</td>
                                <td>{TITLE_5_1} to {TITLE_5_2}</td>
                            </tr>
                        </tbody>
                    </table>
                </Column>
                <Column>
                    <table>
                        <tbody>
                            <tr>
                                <td className="main">Environment</td>
                                <td>{TITLE_6}</td>
                            </tr>
                            <tr>
                                <td className="main">Families <br/> involved</td>
                                <td>{TITLE_7}</td>
                            </tr>
                            <tr>
                                <td className="main">Certificate</td>
                                <td>{TITLE_8}</td>
                            </tr>
                            <tr>
                                <td className="main">Volume</td>
                                <td>{TITLE_9} tons</td>
                            </tr>
                        </tbody>
                    </table>
                    <ButtonSecondary as={Link} link='/contact'>Get it!</ButtonSecondary>
                </Column>
            </Row>
        </WrapperBeanChart>
    )
}

export default connect(BeanChart);
