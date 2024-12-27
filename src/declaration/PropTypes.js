import PropTypes from "prop-types";
import InputBox from "../components/InputBox";

InputBox.propTypes = {
  label: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  onAmountChange: PropTypes.func.isRequired,
  onCurrencyChange: PropTypes.func.isRequired,
  currencyOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectCurrency: PropTypes.string.isRequired,
  amountDisable: PropTypes.bool,
  currencyDisable: PropTypes.bool,
  className: PropTypes.string,
};

InputBox.defaultProps = {
  amountDisable: false,
  currencyDisable: false,
  className: "",
};
