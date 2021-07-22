import PropTypes from "prop-types";
import { Btn } from "./Button.styles";
import { RiEmotionHappyLine, RiEmotionNormalLine, RiEmotionUnhappyLine } from "react-icons/ri";

const Button = ({ feedback, onClick }) => {
    return (
        <Btn type="button" data-feedback={feedback} onClick={onClick}>
            {feedback === "good" && (
                <RiEmotionHappyLine size="50" color="green" style={{ marginRight:10}}/>
            )}
            {feedback === "neutral" && (
                <RiEmotionNormalLine size="50" color="grey" style={{ marginRight: 10 }} />
            )}
            {feedback === "bad" && (
                <RiEmotionUnhappyLine size="50" color="red" style={{ marginRight: 10 }}/>
            )}
            {feedback}
        </Btn>
    );
};

Button.propTypes = {
    feedback: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Button;