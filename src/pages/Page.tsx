import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';
import { Geolocation } from '@capacitor/geolocation';
import React, {useState, useCallback} from 'react';

const GeolocationPage = () => {

  const [loc, setLoc] = useState<any>(null);

  const getCurrentPosition = useCallback(async () => {
    const coordinates: any = await Geolocation.getCurrentPosition();
    setLoc(coordinates);
  }, []);

  return (
    <div>
      <h1>Geolocation</h1>
      <p>Your location is:</p>
      <p>Latitude: {loc?.coords.latitude}</p>
      <p>Longitude: {loc?.coords.longitude}</p>

      <button onClick={getCurrentPosition}>
        Get Current Location
      </button>
    </div>
  );
}

const Page: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name={name} />
        <GeolocationPage />
      </IonContent>
    </IonPage>
  );
};

export default Page;
