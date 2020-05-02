import React, {useState} from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonGrid, IonRow, IonCol,
  IonCardHeader, IonCard, IonCardSubtitle, IonCardTitle, IonInput } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './TabTrainings.css'

let wordSets = [{key:"1",name:"en 1",language:"english"},
             {key:"2",name:"sp 5",language:"spanish"},];

let words = [{key:"1",spelling:"dog",translation:"dog"},
             {key:"2",spelling:"cat",translation:"cat"},
             {key:"3",spelling:"rat",translation:"rat"},
             {key:"4",spelling:"bat",translation:"bat"},
             {key:"5",spelling:"set",translation:"set"},
             {key:"6",spelling:"get",translation:"get"},
             {key:"7",spelling:"adopt",translation:"ado"},
             {key:"8",spelling:"reset",translation:"res"},
             {key:"9",spelling:"append",translation:"app"},
             {key:"10",spelling:"prepend",translation:"pre"},
             {key:"11",spelling:"depend",translation:"dep"},];
             
function random4(correctKey:string){
  let words2 = [...words];
  words2=words2.sort((a,b)=>(Math.random()-0.5))
  let correctNum = words2.findIndex(function (i){return i.key==correctKey})
  if (correctNum>3){
    let newNum = Math.trunc(Math.random()*4);
    words2[newNum] = words2[correctNum];
    correctNum = newNum;
  }
  console.log('correct: ',correctNum);
  return {words:words2, num:correctNum};
}

function handleChangeSpelling(event:any){
  providedAnswer=event.target.value;
}

let wordNum = 0;

let providedAnswer="";
let correctNum = "2";
let correctSpelling="";
let rnd = random4(correctNum);

const TabTrainings: React.FC = () => {
  const [training, setTraining] = useState('');
  const [trainingEnded, setTrainingEnded] = useState(false);
  const [wordSet, setWordSet] = useState(-1);
  const [trainingShown, setTrainingShown] = useState(wordNum<words.length?words[wordNum].spelling:'');
  let shuffled = rnd.words;
  correctNum = rnd.num.toString();
  const [w,setW]=useState(shuffled);
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
  if(trainingEnded){
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>
            Training result
            </IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent></IonContent>
      </IonPage>
    )
  }
  function tp(){
    if (training=='spelling')
      return (
      <div>
        <IonCard>
          <IonCardHeader>{trainingShown}</IonCardHeader>
          <div className="row">
            <IonInput className="spelling" onIonChange={handleChangeSpelling} ></IonInput>
            <IonButton onClick={()=>{answer(1)}}>next</IonButton>
          </div>
        </IonCard>
      </div>)
    function answer(i:any){
      wordNum++;
      // checking the answer
      if (training=='choose spelling' || training=="choose translation"){
        if(i==correctNum)
          console.log('ok');
        else
          console.log('not ok')
      }
      if (training=='spelling'){
        console.log(providedAnswer);
        if(true)
          console.log('ok');
        else
          console.log('not ok')
        providedAnswer='';
      }
      if(training=='quick quiz'){
        if(true)
          console.log('ok');
        else
          console.log('not ok')
      } 

      // next word
      if(words.length>wordNum){
        setTrainingShown(words[wordNum].spelling);
        rnd = random4(words[wordNum].key);
        let shuffled = rnd.words;
        correctSpelling = words[wordNum].spelling;
        correctNum = rnd.num.toString();
        setW(shuffled);
      }
      else{
        alert('end')
        setTrainingEnded(true);
      }
      // console.log(wordNum);
    }
    if (training=='choose spelling' || training=="choose translation")
      return (
        <IonCard>
          <IonCardHeader>{trainingShown}</IonCardHeader>
          <IonGrid className="answerWrapper">
            <IonRow>
              <IonCol>
                <IonButton className="answerBtn" color="light" expand="full" onClick={()=>{answer('0')}}>{w[0].spelling}</IonButton>
              </IonCol>
              <IonCol>
                <IonButton className="answerBtn" color="light" expand="full" onClick={()=>{answer('1')}}>{w[1].spelling}</IonButton>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonButton className="answerBtn" color="light" expand="full" onClick={()=>{answer('2')}}>{w[2].spelling}</IonButton>
              </IonCol>
              <IonCol>
                <IonButton className="answerBtn" color="light" expand="full" onClick={()=>{answer('3')}}>{w[3].spelling}</IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCard> 
      )
      if (training=='quick quiz')
      return (
        <IonCard>
          <IonCardHeader>{trainingShown}</IonCardHeader>
          <IonGrid className="answerWrapper">
            <IonRow>
              <IonCol>
                <IonButton className="answerBtn" color="light" expand="full" onClick={()=>{answer(true)}}>YES</IonButton>
              </IonCol>
              <IonCol>
                <IonButton className="answerBtn" color="light" expand="full" onClick={()=>{answer(false)}}>NO</IonButton>
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
