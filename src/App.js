import 'react-notifications/lib/notifications.css'
import {NotificationContainer} from 'react-notifications'

import Routes from "./router/index";
import {SettingProvider} from './provider/setting'

function App() {
  return (
    <>
      <NotificationContainer />
      <SettingProvider>
        <Routes />
      </SettingProvider>
    </>
  );
}

export default App;
