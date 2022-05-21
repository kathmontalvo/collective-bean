import { connect, styled } from "frontity";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button, fadeAnimation, TextBody } from "../../../styles/styles";
import bubbleBg from "../../../images/bubble.png"
import successIcon from "../../../images/success.svg"
import errorIcon from "../../../images/error.svg"

const Contact = ({ state }) => {
    const data = state.source.get(state.router.link);
    const post = state.source[data.type][data.id];
    const isEnglish = !state.router.link.includes('/es/') ? true : false;

    const acf = post.acf;

    const {
        TITLE, SUBTITLE, BG_IMG,
        RESPONSE_MESSAGE, ERROR_MESSAGE,
        SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY
    } = acf;

    const form = useRef();
    const [successMsg, setSuccessMsg] = useState(false)
    const [errorMsg, setErrorMsg] = useState(false)

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }

    const sendEmail = (e) => {

        e.preventDefault();
        const submitBtn = document.getElementById('sendBtn')
        submitBtn.disabled = true;

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
        .then((result) => {
            setErrorMsg(false);
            setSuccessMsg(true);
            e.target.reset();
            scrollToTop();
            submitBtn.disabled = false;

        }, (error) => {
            setSuccessMsg(false);
            setErrorMsg(true);
            e.target.reset();
            submitBtn.disabled = false;

        });
    }

    const formEn = {
        name: 'Name',
        lastname: 'Last name',
        email: 'Email',
        subject: 'Subject',
        message: 'Message',
        btn: 'Send'
    }

    const formEs = {
        name: 'Nombre',
        lastname: 'Apellido',
        email: 'Email',
        subject: 'Asunto',
        message: 'Mensaje',
        btn: 'Enviar'
    }

    const currentForm = isEnglish ? formEn : formEs

    return(
        <WrapperContact>
            <img className="bg" src={BG_IMG} />
            <section>

                { successMsg ? 
                    <WrapperMessage success>
                        <img className="icon" src={successIcon} />
                        {RESPONSE_MESSAGE}
                     </WrapperMessage> 
                    : ''}
                { errorMsg ?
                    <WrapperMessage>
                        <img src={errorIcon} />
                        {ERROR_MESSAGE}
                    </WrapperMessage> 
                    : ''}
                
                <h2>{TITLE}</h2>
                <TextBody>{SUBTITLE}</TextBody>
                <form ref={form} onSubmit={sendEmail}>
                    <div className="content">

                        <label>
                            {currentForm.name}
                            <input type='text' name='firstName' required />
                        </label>
                        <label>
                            {currentForm.lastname}
                            <input type='text' name='lastName' required/>
                        </label>
                        <label>
                            {currentForm.email}
                            <input type='email' name='email' required/>
                        </label>
                        <label>
                            {currentForm.subject}
                            <input type='text' name='subject' required/>
                        </label>
                        <label>
                            {currentForm.message}
                            <textarea rows={4} name='message' required/>
                        </label>
                    </div>
                     <Button as='input' id="sendBtn" type='submit' value={currentForm.btn} disabled={false}></Button>
                </form>
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
    img.bg {
        width: 100%;
        object-fit: cover;
        height: 150px;
    }
    section {
        padding: 48px 36px;
        width: auto;
        animation: 0.5s ${fadeAnimation} 0.1s backwards;
        h2 {
            font-family: 'Abel', sans-serif;
            font-size: 48px;
            color: #1D501D;
            margin: 12px 0;
        }
        form {
            width: auto;
            .content {
                display: flex;
                flex-direction: column;
                background-color: #F8F6E8;
                padding: 16px;
                margin-bottom: 24px;    

                label {
                    display: flex;
                    flex-direction: column;
                    background-color: #F8F6E8;
                    margin-bottom: 12px;
                    font-size: 14px;
                    color: #403636;
    
                    input, textarea {
                        background-color: transparent;
                        border: none;
                        border-bottom: 1px solid #968F8F;
                        color: #333333;
                        font-size: 14px;
                        font-family: Helvetica, sans-serif;
                        margin-top: 4px;
    
                        &:focus-visible {
                            outline: none;
                        }
                    }
                    input {
                        height: 24px;
                        padding: 4px 0;
                    }
                }
            }
            ${Button} {
                background-color: #F8F6E8;
                border: 1px solid #D1C065;
                color: #1D501D;
                padding: 12px 36px;
                font-size: 16px;
                &:hover {
                    transition: all 0.2s linear 0.1s;
                    background-color: #D1C065;
                }
                &[type="submit"]:disabled {
                    background-color: #e1dfd1;
                    cursor: default;
                    color: #546056c9;
                    border-color: #546056c9;
                }
            }
        }
    }

    @media screen and (min-width: 768px) {
        flex-direction: row;

        img.bg {
            width: 30%;
            height: auto;
        }
        section {
            width: 70%;
            padding: 64px 120px 64px 80px;
            background: url(${bubbleBg});
            background-repeat: no-repeat;
            background-position: 110% -200px;
            background-size: contain;
            h2 {
                font-size: 64px;
                margin: 24px 0 0;
            }
            ${TextBody} {
                margin-top: 12px;
            }
            form {
                width: 80%;
                ${Button} {
                    font-size: 18px;
                }
            }
        }
    }
    @media screen and (min-width: 1200px) {
        img.bg {
            width: 45%;
        }
        section {
            width: 55%;
        }
    }
`

const WrapperMessage = styled.p`
    background: ${props => props.success ? "#DAF2D8" : "#EEC7C5"};;
    border: 1px solid ${props => props.success ? "#65947d" : "#b04546"};
    color: ${props => props.success ? "#65947d" : "#b04546"};
    padding: 16px;
    border-radius: 4px;
    font-size: 14px;
    display: flex;
    align-items: center;

    img.icon {
        width: 24px;
        height: auto;
        margin-right: 8px;    
    }

    @media screen and (min-width: 768px) {
        font-size: 16px;
        width: 74%;
    }

`