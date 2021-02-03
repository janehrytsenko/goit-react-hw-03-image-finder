import PropTypes from 'prop-types';
import errorImage from './sadcat.jpg';
import s from './ErrorAlert.module.css';

function ErrorAlert({ texterror }) {
  return (
    <div role="alert" className={s.wrapper}>
      <img src={errorImage} width="550" alt="sadcat" />
      <p text={texterror} className={s.text}>
        {texterror}
      </p>
    </div>
  );
}

ErrorAlert.propTypes = {
  texterror: PropTypes.string.isRequired,
};

export default ErrorAlert;