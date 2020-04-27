import React from 'react';
import { IonNote, IonList, IonItem, IonLabel, IonGrid, IonRow, IonCol, IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCardHeader, IonCard, IonCardSubtitle, IonCardTitle} from '@ionic/react';
import './TabDictionary.css';

let words = [{key:"1",spelling:"dog",translation:"собака"},
             {key:"2",spelling:"cat",translation:"кощка"},
             {key:"3",spelling:"dog",translation:"собака"},
             {key:"4",spelling:"dog",translation:"собака"},
             {key:"5",spelling:"cat",translation:"кощка"},
             {key:"6",spelling:"dog",translation:"собака"},
             {key:"7",spelling:"dog",translation:"собака"},
             {key:"8",spelling:"cat",translation:"кощка"},
             {key:"9",spelling:"dog",translation:"собака"},
             {key:"10",spelling:"dog",translation:"собака"},
             {key:"11",spelling:"cat",translation:"кощка"},];
// alert(splitBy)
let alt=(i:any)=>{alert(i)};
function t(word:any){
  console.log(word);
}
const TabDictionary: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Dictionary</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent id="cid">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab Dictionary</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          <IonRow>
            <IonCol size="auto">
              {/*dictionaries*/}
              <IonList>
                <IonItem key="k1">
                  <IonLabel>Dictonary 1</IonLabel>
                  <IonNote slot="end" color="danger">99</IonNote>
                </IonItem>
                <IonItem key="k2">
                  <IonLabel>Dictonary 2</IonLabel>
                  <IonNote slot="end" color="danger">99</IonNote>
                </IonItem>
                <IonItem key="k3">
                  <IonLabel>Dictonary 3</IonLabel>
                  <IonNote slot="end" color="danger">99</IonNote>
                </IonItem>
              </IonList>
            </IonCol>
            <IonCol>
              <IonGrid>
                
                {words.map(function(i:any){
                  return (<IonRow>
                    {
                      (
                        <IonCol key={i.key} onClick={()=>t(i)}>
                          <IonCard>
                            <IonCardHeader>
                              <IonCardTitle>{i.spelling}</IonCardTitle>
                              <IonCardSubtitle>{i.translation}</IonCardSubtitle>
                            </IonCardHeader>
                          </IonCard>
                        </IonCol>)
                      }
                    
                  </IonRow>)
                  })
                }
                
              </IonGrid>
              <IonButton color="light" expand="full">Choose Spelling</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default TabDictionary;