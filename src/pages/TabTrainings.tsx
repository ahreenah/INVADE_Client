import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonGrid, IonRow, IonCol } from '@ionic/react';
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
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonButton color="light" expand="full">Spelling</IonButton>
            </IonCol>
            <IonCol>
              <IonButton color="light" expand="full">Choose Spelling</IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton color="light" expand="full">Choose Translation</IonButton>
            </IonCol>
            <IonCol>
              <IonButton color="light" expand="full">Quick quiz</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default TabTrainings;
