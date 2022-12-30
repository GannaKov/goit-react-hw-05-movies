import PropTypes from 'prop-types';
import { HiArrowLeft } from "react-icons/hi";
import {StyledLink} from "./GoBack.styled"


export const GoBack = ({  to, children }) => {
  return (
    <StyledLink to={to}>
      <HiArrowLeft size="24" />
      {children}
    </StyledLink>
  );
};
GoBack.propTypes = {
  to:PropTypes.objectOf(PropTypes.string),
  children: PropTypes.node,
}