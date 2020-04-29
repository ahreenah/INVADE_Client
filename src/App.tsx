import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import TabDashboard from './pages/TabDashboard';
import TabDictionary from './pages/TabDictionary';
import TabTrainings from './pages/TabTrainings';
import TabSettings from './pages/TabSettings';
import TabTrainingSelectDict from './pages/TabTrainingsSelectDict'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/tabDashboard" component={TabDashboard} exact={true} />
          <Route path="/tabDictionary" component={TabDictionary} exact={true} />
          <Route path="/tabTrainings" component={TabTrainings} exact={true}/>
          <Route path="/tabChooseDict" component={TabTrainingSelectDict} exact={true}/>
          <Route path="/tabSettings" component={TabSettings} />
          <Route path="/" render={() => <Redirect to="/tabDashboard" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tabDashboard" href="/tabDashboard">
            <IonIcon icon={triangle} />
            <IonLabel>Dashboard</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tabDictionary" href="/tabDictionary">
            <IonIcon icon={ellipse} />
            <IonLabel>Dictionary</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tabTrainings" href="/tabTrainings">
            <IonIcon icon={square} />
            <IonLabel>Trainings</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tabSettings" href="/tabSettings">
            <IonIcon icon={square} />
            <IonLabel>Settings</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
