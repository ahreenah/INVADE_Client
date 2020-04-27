import React from 'react';
import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './TabDashboard.css';

const TabDashboard: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Dashboard</IonTitle>
          </IonToolbar>
        </IonHeader>
        /* contens */
      </IonContent>
    </IonPage>
  );
};

export default TabDashboard;
