import { connect } from "frontity";
import { BackgroundImage, Column, TitleBold, TitleNormal, Wrapper, WrapperBanner, WrapperMessages } from "../../../styles/styles";
import MessageRow from "./message-row";

const ModelPage = ({ state }) => {
    const data = state.source.get(state.router.link);
    const post = state.source[data.type][data.id];
    console.log('post---->', post)

    const acf = post.acf;

    const {
        MODEL_TITLE_1, MODEL_TITLE_2, MODEL_BG_IMG,
        MSG_1_TITLE, MSG_1_TEXT, MSG_1_IMG,
        MSG_2_TITLE, MSG_2_TEXT, MSG_2_IMG,
        MSG_3_TITLE, MSG_3_TEXT, MSG_3_IMG,
        MSG_4_TITLE, MSG_4_TEXT, MSG_4_IMG,
    } = acf;

    const messages = [
        {title: MSG_1_TITLE, text: MSG_1_TEXT.split('\r\n\r\n'), img: MSG_1_IMG},
        {title: MSG_2_TITLE, text: MSG_2_TEXT.split('\r\n\r\n'), img: MSG_2_IMG},
        {title: MSG_3_TITLE, text: MSG_3_TEXT.split('\r\n\r\n'), img: MSG_3_IMG},
        {title: MSG_4_TITLE, text: MSG_4_TEXT.split('\r\n\r\n'), img: MSG_4_IMG},
    ]

    console.log(messages)

    return(
        <>
            <Wrapper>
                <BackgroundImage src={MODEL_BG_IMG} alt="Fondo Model Page" />
                <WrapperBanner>
                    <TitleNormal>
                        {MODEL_TITLE_1}
                    </TitleNormal>
                    <TitleBold>{MODEL_TITLE_2}</TitleBold>
                </WrapperBanner>
            </Wrapper>
            <WrapperMessages>
                {
                    messages.map(msg => <MessageRow msg={msg} />)
                }
            </WrapperMessages>
        </>
    )
    

}

export default connect(ModelPage);