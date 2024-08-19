'use client'

import { useEffect } from 'react';
import styles from './Home.module.css';

export default function Home() {
  useEffect(() => {
    const loadScript = () => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`;
      script.async = true;
      script.onload = () => initMap();
      document.head.appendChild(script);
    };

    const initMap = () => {
      const map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });

      const input = document.getElementById('autocomplete') as HTMLInputElement;
      const autocomplete = new google.maps.places.Autocomplete(input);
      autocomplete.bindTo('bounds', map);

      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        if (!place.geometry || !place.geometry.location) {
          console.log("No details available for input: '" + place.name + "'");
          return;
        }

        map.setCenter(place.geometry.location);
        map.setZoom(15);

        new google.maps.Marker({
          position: place.geometry.location,
          map: map,
        });
      });
    };

    loadScript();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>구글 맵스 장소 API 예제</h1>
      <div className={styles.searchContainer}>
        <input
          id="autocomplete"
          className={styles.input}
          placeholder="위치를 입력하세요"
          type="text"
        />
        <button className={styles.searchButton}>검색</button>
      </div>
      <div id="map" className={styles.map}></div>
    </div>
  );
}