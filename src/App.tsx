import React from "react";
import Alert from "./components/Alert/Alert";
import { InfoIcon } from "./assets";
import { SuccessIcon } from "./assets";
import { CloseIcon } from "./assets";
import { WarningIcon } from "./assets";
import { ErrorIcon } from "./assets";
import { AlertVarientEnum } from "./components/Alert/Alert";



const App: React.FC = () => {
  return (
    <> 
        <Alert message="This is an error alert! — Default" />
        <Alert
          message="This is an info alert! — check it out!"
          type="info"
          icon={<InfoIcon />}
          title={true}
          closeIcon={<CloseIcon />}
        />
        <Alert
          message="This is a success alert! — check it out!"
          type="success"
          varient={AlertVarientEnum.OUTLINED}
          icon={<SuccessIcon />}
          title={true}
          closeIcon={<CloseIcon />}
        />
        <Alert
          message="This is a warning alert! — check it out!"
          type="warning"
          icon={<WarningIcon />}
          closeIcon={<CloseIcon />}
        />
        <Alert
          message="This is an error alert! — check it out!"
          type="error"
          varient={AlertVarientEnum.FILLED}
          icon={<ErrorIcon />}
        />
    </>
  );
};

export default App;
