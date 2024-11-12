import { connect, styled } from "frontity";
import { TextBody } from "../../../styles/styles"
import Link from "../../link"
import downloadIcon from "../../../images/download.svg"

const ResourceCard = ({resource}) => {
    return(
        <CardProduct 
            as={'a'} 
            href={resource.url} 
            download={resource.title}
            target="_blank"
            style={{backgroundImage: `url(${resource.img})`}}
        >
            <img src={downloadIcon} alt="download icon" />
            <h4>{resource.title}</h4>
            <TextBody>
                {resource.description}            
            </TextBody>
            
        </CardProduct>
    )
}

export default ResourceCard

const CardProduct = styled.div`
    width: 100%;
    margin-bottom: 24px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
        width: 36px;
        height: 36px;
    }

    h4 {
        color: #FFFFFF;
        font-family: 'Abel', sans-serif;
        font-size: 20px;
        text-align: center;
        margin: 24px auto 16px;
    }
    ${TextBody} {
        color: #FFFFFF;
        font-family: 'Abel', sans-serif;
        font-size: 14px;
        text-align: center;
    }
    
    @media screen and (min-width: 768px) {
        width: 40%;
        padding: 16px 24px;
        img {
            width: 48px;
            height: 48px;
        }
        h4 {
            font-size: 36px;
    
        }
        ${TextBody} {
            font-size: 16px;   
        }
    }
    
    @media screen and (min-width: 1200px) {
        width: 30%;
        padding: 36px 24px;
    }
`