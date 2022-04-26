import { connect } from "frontity";
import { BeanCardWrapper, ButtonSecondary, CardHover, CardVisible, Subtitle } from "../../../styles/styles";
import microlotCafeIcon from "../../../images/cafe-icon.svg"
import comunalCafeIcon from "../../../images/cerro-icon.svg"
import microlotCacaoIcon from "../../../images/cacao-icon.svg"
import comunalCacaoIcon from "../../../images/valle-icon.svg"


const BeanCard = ({img, loteType, beanType, title}) => {

    const microlotIcon = beanType === 'coffee-bean' ? microlotCafeIcon : microlotCacaoIcon;
    const comunalIcon = beanType === 'coffee-bean' ? comunalCafeIcon : comunalCacaoIcon;

    return(
        <BeanCardWrapper>
            <CardVisible className={`${loteType.toLowerCase()} ${beanType}`}>
                <img className="loteImg" src={img} />
                <div className={`loteTxt ${loteType.toLowerCase()} ${beanType}`}>
                    <Subtitle>
                        {loteType}
                    </Subtitle>
                </div>
            </CardVisible>
            <CardHover className={`${loteType.toLowerCase()} ${beanType}`}>
                <img src={loteType.toLowerCase() === 'comunales' ? comunalIcon : microlotIcon } />
                <Subtitle>
                    {title.toUpperCase()}
                </Subtitle>
                <ButtonSecondary>Get it!</ButtonSecondary>
            </CardHover>
        </BeanCardWrapper>
    )
}

export default connect(BeanCard);
