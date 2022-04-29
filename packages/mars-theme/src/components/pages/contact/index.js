import { connect, styled } from "frontity";
import { Button, TextBody } from "../../../styles/styles";

const Contact = ({ state }) => {
    const data = state.source.get(state.router.link);
    const post = state.source[data.type][data.id];
    console.log('post---->', post)

    const acf = post.acf;

    const {
        TITLE, SUBTITLE, BG_IMG, EMAIL
    } = acf;

    return(
        <WrapperContact>
            <img src={BG_IMG} />
            <section>
                <h2>{TITLE}</h2>
                <TextBody>{SUBTITLE}</TextBody>
                <form>
                    <label>
                        Name
                        <input />
                    </label>
                    <label>
                        Last Name
                        <input />
                    </label>
                    <label>
                        Email
                        <input />
                    </label>
                    <label>
                        Subject
                        <input />
                    </label>
                    <label>
                        Message
                        <textarea />
                    </label>
                </form>
                <Button>Send</Button>
            </section>
        </WrapperContact>
    )
}

export default connect(Contact)

const WrapperContact = styled.section`
    width: 100%;
    min-height: 88vh;
    display: flex;
    flex-direction: column;
    img {
        width: 100%;
        object-fit: cover;
        height: 150px;
    }
    section {
        padding: 48px 36px;
        width: auto;
        h2 {
            font-family: 'Abel', sans-serif;
            font-size: 48px;
            color: #1D501D;
            margin: 12px 0;
        }
        ${Button} {
            background-color: #F8F6E8;
            border: 1px solid #D1C065;
            color: #1D501D;
            padding: 12px 36px;
        }
        form {
            display: flex;
            flex-direction: column;
            margin-bottom: 36px;
            label {
                display: flex;
                flex-direction: column;
                width: 80%;
            }
        }
    }

    @media screen and (min-width: 768px) {
        flex-direction: row;

        img {
            width: 30%;
            height: auto;
        }
        section {
            width: 70%;
            padding: 64px 120px 64px 80px;
            h2 {
                font-size: 64px;
                margin: 24px 0;
            }
        }
    }
    @media screen and (min-width: 1200px) {
        img {
            width: 45%;
        }
        section {
            width: 55%;
        }
    }
`
