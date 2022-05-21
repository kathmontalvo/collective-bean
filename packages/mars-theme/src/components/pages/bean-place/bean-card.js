import { connect } from "frontity";
import { BeanCardWrapper, ButtonSecondary, CardHover, CardVisible, Subtitle } from "../../../styles/styles";
import microlotCafeIcon from "../../../images/cafe-icon.svg"
import comunalCafeIcon from "../../../images/cerro-icon.svg"
import microlotCacaoIcon from "../../../images/cacao-icon.svg"
import comunalCacaoIcon from "../../../images/valle-icon.svg"
import Link from "../../link";


const BeanCard = ({img, loteType, loteTitle, beanType, title, state}) => {

    const microlotIcon = beanType === 'coffee-bean' ? microlotCafeIcon : microlotCacaoIcon;
    const comunalIcon = beanType === 'coffee-bean' ? comunalCafeIcon : comunalCacaoIcon;
    const isEnglish = !state.router.link.includes('/es/') ? true : false;

    return(
        <BeanCardWrapper>
            <CardVisible className={`${loteType} ${beanType}`}>
                <img className="loteImg" src={img} />
                <div className={`loteTxt ${loteType} ${beanType}`}>
                    <Subtitle>
                        {loteTitle}
                    </Subtitle>
                </div>
            </CardVisible>
            <CardHover className={`${loteType} ${beanType}`}>
                <img src={loteType === 'comunales' ? comunalIcon : microlotIcon } />
                <Subtitle>
                    {title.toUpperCase()}
                </Subtitle>
                <ButtonSecondary as={Link} link={isEnglish ? '/contact/' : '/es/contacto/'}>{isEnglish ? 'Get it!' : '¡Lo quiero!'}</ButtonSecondary>
            </CardHover>
        </BeanCardWrapper>
    )
}

export default connect(BeanCard);
