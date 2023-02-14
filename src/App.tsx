import React from "react";
import Card from "./components/Card/Card";
import myImage from './groot.jpg'
import { ExpandIcon } from "./assets";
import { HeartIcon } from "./assets";
import { ShareIcon } from "./assets";

// import Alert from "./components/Alert/Alert";
// import { InfoIcon } from "./assets";
// import { SuccessIcon } from "./assets";
// import { CloseIcon } from "./assets";
// import { WarningIcon } from "./assets";
// import { ErrorIcon } from "./assets";
// import { AlertVarientEnum } from "./components/Alert/Alert";



const App: React.FC = () => {
  return (
    <>

      {/* <Alert message="This is an error alert! — Default" />
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
        /> */}
      <div className="card-block">
        <Card defination="Word of the Day" title="be•nev•o•lent" subTitle="adjective"
          description="well meaning and kindly. 'a benevolent smile'" actions={["SHARE","LEARN MORE"]}/>
        <Card image={myImage} title="Groot"
          description="Groot (/ɡruːt/) is a character appearing in American comic books published by Marvel Comics." actions={["SHARE","LEARN MORE"]}/>
        <Card defination="Word of the Day" title="be•nev•o•lent" subTitle="adjective"
          description="well meaning and kindly. 'a benevolent smile'" actions= {  [ <HeartIcon /> ,<ShareIcon />, <ExpandIcon />]}/>
        <Card image={myImage} title="Groot"
          description="Groot (/ɡruːt/) is a character appearing in American comic books published by Marvel Comics." actions={<ExpandIcon /> }/>
      </div>
    </>
  );
};

export default App;
