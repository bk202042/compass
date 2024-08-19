interface Property {
    id: number;
    title: string;
    price: string;
    location: {
      lat: number;
      lng: number;
    };
  }

  interface PropertyListProps {
    properties: Property[];
    onSelectProperty: (property: Property) => void;
  }

  export default function PropertyList({ properties, onSelectProperty }: PropertyListProps) {
    return (
      <div className="overflow-y-auto h-screen">
        {properties.map((property) => (
          <div
            key={property.id}
            className="p-4 border-b cursor-pointer hover:bg-gray-100"
            onClick={() => onSelectProperty(property)}
          >
            <h3 className="text-lg font-semibold">{property.title}</h3>
            <p className="text-gray-600">{property.price}</p>
          </div>
        ))}
      </div>
    );
  }
