import { useGlobalAppContext } from "../contexts/appContext";
import { Alert } from "@mantine/core";
import { AlertCircle } from "tabler-icons-react";

const AlertComponent = () => {
  let { showAlert } = useGlobalAppContext();
  return (
    <>
      {showAlert && (
        <Alert
          icon={<AlertCircle size={16} />}
          title="Bummer!"
          color={`${showAlert?.color}`}
        >
          {showAlert?.msg}
        </Alert>
      )}
    </>
  );
};

export default AlertComponent;
