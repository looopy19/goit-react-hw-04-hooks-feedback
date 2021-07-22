import PropTypes from "prop-types";
import Button from "../Button/Button";
import { List, Item } from "./FeedbackOptions.styles";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    options = Object.keys(options);

    return (
        <List>
            {options.map((option) => (
                <Item key={option}>
                    <Button feedback={option} onClick={onLeaveFeedback} />
                </Item>
            ))}
        </List>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.shape({
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
    }).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;