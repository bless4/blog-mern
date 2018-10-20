/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './styles.module.scss';

export const SIZES = {
    SMALL: 'small',
    MEDIUM: 'medium',
    LARGE: 'large'
};

const Button = ({ buttonSize, label, rest }) => (
    <button
        className={classnames(
            styles.button,
            styles[buttonSize || SIZES.MEDIUM],
            styles.typographyButton
        )}
        {...rest}
    >
        {label}
    </button>
);

Button.propTypes = {
    type: PropTypes.string,
    disabled: PropTypes.string,
    buttonSize: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

Button.defaultProps = {
    type: 'button',
    disabled: ''
};
export default Button;