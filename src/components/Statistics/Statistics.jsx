import React from "react";
import PropTypes from "prop-types";
import {List, Item, Text } from "./Statistics.styles";

const Statistics = ({ good, neutral, bad, total, positivePercentage = 0 }) => {
    return (
        <List>
            <Item>
                <Text good>
                     Good: {good}
                </Text>
            </Item>
            <Item>
                <Text neutral>
                     Neutral: {neutral}
                </Text>
            </Item>
            <Item>
                <Text bad>
                   Bad: {bad}
                </Text>
            </Item>
            <Item>
                <Text total>
                     Total: {total}
                </Text>
            </Item>
            <Item>
                <Text percentage>
                    Positive: {positivePercentage} %
                </Text>
            </Item>
        </List>
    );
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;