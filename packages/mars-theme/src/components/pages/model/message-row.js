import { connect } from "frontity";
import { Column, Row, TextBody, TitleBold, TitleNormal } from "../../../styles/styles";

const MessageRow = ({ msg }) => {
    return(
        <Row>
            <Column className="text">
                <TitleBold>{msg.title}</TitleBold>
                <div className="text-msg">
                    {msg.text.map((text, i) => <TextBody key={i} dangerouslySetInnerHTML={{ __html: text}}></TextBody> )}
                </div>
            </Column>
            <Column>
                <img className="section-img" src={msg.img} alt={`Landscape describing ${msg.title}`} />
            </Column>
        </Row>
    )
}

export default connect(MessageRow);
