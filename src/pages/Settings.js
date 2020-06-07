import React from "react";
import SettingsForm from '../components/SettingsForm';
import { validateAccess } from '../components/utils/Utils';


const Settings = props => {
  validateAccess(props.history);
  return (
    <div className="settings-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Your Settings</h1>
            <SettingsForm/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
