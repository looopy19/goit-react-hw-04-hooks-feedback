import PropTypes from "prop-types";
import { Wrapper } from "./Container.styles";

const Container = ({ children }) => {
    return <Wrapper>{children}</Wrapper>;
};

Container.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Container;