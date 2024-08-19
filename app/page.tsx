'use client'

import { useEffect, useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import PropertyList from './components/PropertyList';
import Map from './components/Map';

interface Property {
  id: number;
  title: string;
  price: string;
  location: {
    lat: number;
    lng: number;
  };
}

export default function Home() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  useEffect(() => {
    // 예시 데이터:
    const dummyProperties: Property[] = [
      { id: 1, title: '강남 아파트', price: '10억', location: { lat: 37.5665, lng: 126.9780 } },
      { id: 2, title: '서초 오피스텔', price: '5억', location: { lat: 37.5635, lng: 126.9800 } },
    ];
    setProperties(dummyProperties);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <SearchBar />
      <main className="flex-grow flex">
        <div className="w-1/3">
          <PropertyList
            properties={properties}
            onSelectProperty={setSelectedProperty}
          />
        </div>
        <div className="w-2/3">
          <Map
            properties={properties}
            selectedProperty={selectedProperty}
          />
        </div>
      </main>
    </div>
  );
}
