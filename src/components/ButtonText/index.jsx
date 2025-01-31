import { Container } from "./styled";
import PropTypes from "prop-types";

export function ButtonText({ title, $isActive = false, ...rest }) {
  return (
    <Container $isactive={$isActive.toString()} type="button" {...rest}>
      {title}
    </Container>
  );
}

ButtonText.propTypes = {
  title: PropTypes.string.isRequired, // Define 'title' as a required string prop
  $isActive: PropTypes.bool.isRequired, // Define 'title' as a required string prop
};
