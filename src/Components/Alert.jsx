import useAppProvider from "../Hooks/useAppProvider";

const Alert = () => {
  const { alertType, alertText } = useAppProvider();
  return <div className={`alert alert-${alertType}`}>{alertText}</div>;
};

export default Alert;
