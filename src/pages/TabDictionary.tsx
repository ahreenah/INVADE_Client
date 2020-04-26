import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './TabDictionary.css';

const TabDictionary: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Dictionary</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab Dictionary</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab Dictionary" />
      </IonContent>
    </IonPage>
  );
};

export default TabDictionary;
