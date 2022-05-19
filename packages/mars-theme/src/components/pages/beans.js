import { connect } from "frontity";
import { TextBody, Subtitle, TitleBold, TitleNormal, WrapperBeansPage, BackgroundMenu, ImgMap } from "../../styles/styles";
import map from "../utils/map.svg"
import CacaoMap from "./beans-maps/cacaoMap";
import CoffeeMap from "./beans-maps/coffeeMap";

const Beans = ({ state, actions }) => {
  const data = state.source.get(state.router.link);
	const isCoffeeBeans = data.link.includes('cafes') || data.link.includes('coffee');
  const isEnglish = !state.router.link.includes('/es/') ? true : false;

	console.log(data, isCoffeeBeans)

  const titleEn = `Our ${ isCoffeeBeans ? 'Coffees' : 'Cacaos' }`
  const titleEs = `Nuestros ${ isCoffeeBeans ? 'cafés' : 'cacaos' }`

	const hoverPoint = (e, className, isShow) => {

    const stroke = document.querySelector(`.${className}-stroke`)
    const text = document.querySelector(`.${className}-text`)
    const point = document.querySelector(`.${className}-point`)

    const colorPoint = isCoffeeBeans ? "#74FF90" : "#D65BD6"

    point.style.fill =  isShow ? "#B63EB6" : colorPoint;
    e.target.style.cursor =  "pointer";
    stroke.style.stroke = isShow ? "#B63EB6" : "white";
    text.style.fill = isShow ? "#B63EB6" : "white";

    point.style.transition =  "fill 0.5 linear 0.5";
    stroke.style.transition = "stroke 0.5 linear 0.5";
    text.style.transition = "fill 0.5 linear 0.5";

	}

  const goToPage = (param) => {
    const slug = isEnglish ? param : `${param}-es`; 
    console.log(param, isEnglish, slug)

    actions.router.set(isEnglish ? `/${slug}` : `/es/${slug}`)
  }

	return (
		<WrapperBeansPage>
      <BackgroundMenu></BackgroundMenu>
			<TitleBold>
			 { isEnglish ? titleEn : titleEs }
			</TitleBold>
      { isCoffeeBeans ? <CoffeeMap hoverPoint={hoverPoint} goToPage={goToPage} /> : <CacaoMap hoverPoint={hoverPoint} goToPage={goToPage} /> }
		</WrapperBeansPage>
	)
}

export default connect(Beans);
