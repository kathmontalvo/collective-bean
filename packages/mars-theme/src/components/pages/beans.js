import { connect } from "frontity";
import { TextBody, Subtitle, TitleBold, TitleNormal, WrapperBeansPage, BackgroundMenu, ImgMap } from "../../styles/styles";
import map from "../utils/map.svg"
import CacaoMap from "./beans-maps/cacaoMap";
import CoffeeMap from "./beans-maps/coffeeMap";

const Beans = ({ state, actions }) => {
  const data = state.source.get(state.router.link);
	const isCoffeeBeans = data.isCoffeeBeanArchive
  const beanType = data.type;

	console.log(data, isCoffeeBeans)

	const hoverPoint = (e, className, isShow) => {

    const stroke = document.querySelector(`.${className}-stroke`)
    const text = document.querySelector(`.${className}-text`)

    const colorPoint = isCoffeeBeans ? "#74FF90" : "#D65BD6"

    e.target.style.fill =  isShow ? "#B63EB6" : colorPoint;
    e.target.style.cursor =  "pointer";
    stroke.style.stroke = isShow ? "#B63EB6" : "white";
    text.style.fill = isShow ? "#B63EB6" : "white";

    e.target.style.transition =  "fill 0.5 linear 0.5";
    stroke.style.transition = "stroke 0.5 linear 0.5";
    text.style.transition = "fill 0.5 linear 0.5";

	}

  const goToPage = (param) => {
    console.log(param)
    actions.router.set(`/${beanType}/${param}/`)
  }

	return (
		<WrapperBeansPage>
      <BackgroundMenu></BackgroundMenu>
			<TitleBold>
				Our { isCoffeeBeans ? 'Coffees' : 'Cocoas' }
			</TitleBold>
      { isCoffeeBeans ? <CoffeeMap hoverPoint={hoverPoint} goToPage={goToPage} /> : <CacaoMap hoverPoint={hoverPoint} goToPage={goToPage} /> }
		</WrapperBeansPage>
	)
}

export default connect(Beans);
