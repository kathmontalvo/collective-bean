import { connect, styled } from "frontity";
import { BackgroundImage, Column, TextBody, TitleBold, TitleNormal, Wrapper, WrapperBanner, WrapperMessages } from "../../../styles/styles";
import ResourceCard from "./resource-card";

const ModelPage = ({ state }) => {
    const data = state.source.get(state.router.link);
    const post = state.source[data.type][data.id];
    console.log('post---->', post)

    const acf = post.acf;

    const {
        TITLE, SUBTITLE, BG_IMG,
        RESOURCE_1_TITLE, RESOURCE_1_DESCRIPTION, RESOURCE_1_URL, RESOURCE_1_IMG,
        RESOURCE_2_TITLE, RESOURCE_2_DESCRIPTION, RESOURCE_2_URL, RESOURCE_2_IMG,
        RESOURCE_3_TITLE, RESOURCE_3_DESCRIPTION, RESOURCE_3_URL, RESOURCE_3_IMG,
        RESOURCE_4_TITLE, RESOURCE_4_DESCRIPTION, RESOURCE_4_URL, RESOURCE_4_IMG,
        RESOURCE_5_TITLE, RESOURCE_5_DESCRIPTION, RESOURCE_5_URL, RESOURCE_5_IMG,
        RESOURCE_6_TITLE, RESOURCE_6_DESCRIPTION, RESOURCE_6_URL, RESOURCE_6_IMG,
    } = acf;

    const resources = [
        {title: RESOURCE_1_TITLE, description: RESOURCE_1_DESCRIPTION.split('\r\n\r\n'), url: RESOURCE_1_URL, img: RESOURCE_1_IMG},
        {title: RESOURCE_2_TITLE, description: RESOURCE_2_DESCRIPTION.split('\r\n\r\n'), url: RESOURCE_2_URL, img: RESOURCE_2_IMG},
        {title: RESOURCE_3_TITLE, description: RESOURCE_3_DESCRIPTION.split('\r\n\r\n'), url: RESOURCE_3_URL, img: RESOURCE_3_IMG},
        {title: RESOURCE_4_TITLE, description: RESOURCE_4_DESCRIPTION.split('\r\n\r\n'), url: RESOURCE_4_URL, img: RESOURCE_4_IMG},
        {title: RESOURCE_5_TITLE, description: RESOURCE_5_DESCRIPTION.split('\r\n\r\n'), url: RESOURCE_5_URL, img: RESOURCE_5_IMG},
        {title: RESOURCE_6_TITLE, description: RESOURCE_6_DESCRIPTION.split('\r\n\r\n'), url: RESOURCE_6_URL, img: RESOURCE_6_IMG},
    ]

    // console.log(messages)

    return(
        <>
            <Wrapper>
                <BackgroundImage src={BG_IMG} className="resource" alt="Fondo principal"/>
                <WrapperBanner>
                    <TitleBold>{TITLE}</TitleBold>
                    <TextBody style={{ color: '#FFFFFF'}}>
                        {SUBTITLE}
                    </TextBody>
                </WrapperBanner>
            </Wrapper>
            <WrapperCards>
                {
                    resources.filter(el => el.title !== '').map((resource, i) => {
                        return(
                            <ResourceCard key={i} resource={resource} />
                        )
                    })
                }
            </WrapperCards>

        </>
    )
    

}

export default connect(ModelPage);

const WrapperCards = styled.div`
    display: flex;
    flex-wrap: wrap; 
    flex-direction: row;
    padding: 64px 36px;
    background-color: #EBEBEB;
    justify-content: space-between;
    @media screen and (min-width: 768px) {
        padding: 48px 80px;
    }
    @media screen and (min-width: 1200px) {
        padding: 100px 120px;
    }
    @media screen and (min-width: 1600px) {
        padding: 120px 300px;
    }
`
