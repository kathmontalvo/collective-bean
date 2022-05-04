import { connect } from "frontity";
import { IKImage, IKContext } from 'imagekitio-react'
import { BackgroundImage, Column, MainButton, TitleBold, TitleNormal, Wrapper, WrapperBanner, WrapperMessages } from "../../../styles/styles";
import MessageRow from "./message-row";
import Link from "../../link";


const ModelPage = ({ state }) => {
    const data = state.source.get(state.router.link);
    const post = state.source[data.type][data.id];
    console.log('post---->', post)

    const acf = post.acf;

    const {
        MODEL_TITLE_1, MODEL_TITLE_2, MODEL_BG_IMG, BTN_CTA,
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

    return(
        <>
            <Wrapper>
                <IKContext urlEndpoint="https://ik.imagekit.io/n5oedf70g6">
                    <BackgroundImage as={IKImage} src={MODEL_BG_IMG} alt="Fondo principal"/>
                </IKContext>
                <WrapperBanner>
                    <TitleNormal>
                        {MODEL_TITLE_1}
                    </TitleNormal>
                    <TitleBold>{MODEL_TITLE_2}</TitleBold>
                    <MainButton as={Link} link='/contact'>{BTN_CTA}</MainButton>
                </WrapperBanner>
            </Wrapper>
            <WrapperMessages>
                {
                    messages.map((msg, i) => <MessageRow key={i} msg={msg} />)
                }
            </WrapperMessages>
        </>
    )
    

}

export default connect(ModelPage);
