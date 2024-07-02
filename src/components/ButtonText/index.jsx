import { Container } from "./styled";
import PropTypes from 'prop-types';

export function ButtonText({title, ...rest}){
    return(
        <Container
        type="button"
        {...rest}>
            {title}
        </Container>
    )
}

ButtonText.propTypes = {
    title: PropTypes.string.isRequired, // Define 'title' as a required string prop
  };