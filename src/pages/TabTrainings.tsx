import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';

const TabTrainings: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Trainings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3-1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton color="light" expand="full">Spelling</IonButton>
        <IonButton color="light" expand="full">Choose Spelling</IonButton>
        <IonButton color="light" expand="full">Choose Translation</IonButton>
        <IonButton color="light" expand="full">Quick quiz</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default TabTrainings;
