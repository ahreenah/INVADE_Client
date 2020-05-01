import React, {useState} from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonGrid, IonRow, IonCol,
  IonCardHeader, IonCard, IonCardSubtitle, IonCardTitle, IonInput } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './TabTrainings.css'

let wordSets = [{key:"1",name:"en 1",language:"english"},
             {key:"2",name:"sp 5",language:"spanish"},];

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
             
const TabTrainings: React.FC = () => {
  const [training, setTraining] = useState('');
  const [wordSet, setWordSet] = useState(-1);
  if(training=='') 
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
              <IonButton color="light" expand="full" onClick={()=>{setTraining('spelling')}}>Spelling</IonButton>
            </IonCol>
            <IonCol>
              <IonButton color="light" expand="full" onClick={()=>{setTraining('choose spelling')}}>Choose Spelling</IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton color="light" expand="full" onClick={()=>{setTraining('choose translation')}}>Choose Translation</IonButton>
            </IonCol>
            <IonCol>
              <IonButton color="light" expand="full" onClick={()=>{setTraining('quick quiz')}}>Quick quiz</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
        </IonContent>
        </IonPage>)
      {/*----------------------------------*/}
  if (wordSet==-1)
  return (<IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Please select word set for training {training}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
                
                {wordSets.map(function(i:any){
                  return (<IonRow>
                    {
                      (
                        <IonCol key={i.key} onClick={()=>{setWordSet(i.key)}}>
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
  function tp(){
    if (training=='spelling')
      return (
      <div>
        <IonCard>
          <IonCardHeader>TEXT</IonCardHeader>
          <div className="row">
            <IonInput className="spelling"></IonInput>
            <IonButton>next</IonButton>
          </div>
        </IonCard>
      </div>)
    function answer(i:any){

    }
    if (training=='choose spelling' || training=="choose translation")
      return (
        <IonCard>
          <IonCardHeader>TEXT</IonCardHeader>
          <IonGrid className="answerWrapper">
            <IonRow>
              <IonCol>
                <IonButton className="answerBtn" color="light" expand="full" onClick={()=>{answer('spelling')}}>w1</IonButton>
              </IonCol>
              <IonCol>
                <IonButton className="answerBtn" color="light" expand="full" onClick={()=>{answer('choose spelling')}}>w2</IonButton>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonButton className="answerBtn" color="light" expand="full" onClick={()=>{answer('choose translation')}}>w3</IonButton>
              </IonCol>
              <IonCol>
                <IonButton className="answerBtn" color="light" expand="full" onClick={()=>{answer('quick quiz')}}>w4</IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCard>
        
      )
      if (training=='quick quiz')
      return (
        <IonCard>
          <IonCardHeader>TEXT</IonCardHeader>
          <IonGrid className="answerWrapper">
            <IonRow>
              <IonCol>
                <IonButton className="answerBtn" color="light" expand="full" onClick={()=>{answer('spelling')}}>YES</IonButton>
              </IonCol>
              <IonCol>
                <IonButton className="answerBtn" color="light" expand="full" onClick={()=>{answer('choose spelling')}}>NO</IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCard> 
      )
    return (<div>error</div>)
  }
  return (
  <IonPage>
    <IonHeader>
        <IonToolbar>
          <IonTitle>training {training}</IonTitle>
        </IonToolbar>
    </IonHeader>
      {/*React.createElement(
        'h1',
        {className: 'greeting'},
        'Привет, мир!'
      )*/tp()}
    <IonContent>
    </IonContent>
  </IonPage>)
};

export default TabTrainings;
