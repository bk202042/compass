import { useEffect, useRef } from 'react';

interface Property {
  id: number;
  title: string;
  price: string;
  location: {
    lat: number;
    lng: number;
  };
}

interface MapProps {
  properties: Property[];
  selectedProperty: Property | null;
}

export default function Map({ properties, selectedProperty }: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.google && mapRef.current) {
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 37.5665, lng: 126.9780 },
        zoom: 12,
      });

      properties.forEach((property) => {
        new window.google.maps.Marker({
          position: property.location,
          map: map,
          title: property.title,
        });
      });

      if (selectedProperty) {
        map.setCenter(selectedProperty.location);
        map.setZoom(15);
      }
    }
  }, [properties, selectedProperty]);

  return <div ref={mapRef} className="w-full h-screen" />;
}
