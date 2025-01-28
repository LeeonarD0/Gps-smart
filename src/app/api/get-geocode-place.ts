import { api } from "../../lib/axios";

interface GetGeocodeResponse {
  results: {
    geometry: {
      location: {
        lat: number;
        lng: number;
      };
    };
  }[];
  status: string;
}

export async function getGeocodePlace(address: string){
  const response = await api.get<GetGeocodeResponse>(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}`)

  const location = response.data.results[0]?.geometry?.location;
  
  return {
    latitude: location.lat,
    longitude: location.lng,
  };
}