import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton,
         IonGrid, IonRow, IonCol,
         IonCardHeader, IonCard, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';

let words = [{key:"1",name:"en 1",language:"english"},
             {key:"2",name:"sp 5",language:"spanish"},];

const TabTrainingsSelectedDict: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Please select word dict for training</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonGrid>
                
                {words.map(function(i:any){
                  return (<IonRow>
                    {
                      (
                        <IonCol key={i.key} onClick={()=>{}}>
                          <IonCard>
                            <IonCardHeader>
                              <IonCardTitle>{i.name}</IonCardTitle>
                              <IonCardSubtitle>{i.language}</IonCardSubtitle>
                            </IonCardHeader>
                          </IonCard>
                        </IonCol>)
                      }
                    
                  </IonRow>)
                  })
                }
                
              </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default TabTrainingsSelectedDict;
