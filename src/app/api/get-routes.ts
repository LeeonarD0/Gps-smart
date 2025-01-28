import { api } from "../../lib/axios";

// Interface para os parâmetros da requisição
export interface GetRouteBody {
  originLat: number;
  originLng: number;
  destinLat: number;
  destinLng: number;
  travelMode: 'DRIVE' | 'WALK' | 'BICYCLE' | 'TRANSIT'
}

// Interface para o formato da resposta da API
export interface GetRouteResponse {
  routes: {
    duration: string; // Tempo estimado de viagem
    distanceMeters: number; // Distância em metros
    polyline: {
      encodedPolyline: string; // Linha codificada para o trajeto
    };
  }[];
}

// Função para buscar a rota
export async function getRoute({
  originLat,
  originLng,
  destinLat,
  destinLng,
  travelMode
}: GetRouteBody): Promise<GetRouteResponse> {
  try {
    const response = await api.post<GetRouteResponse>(
      "https://routes.googleapis.com/directions/v2:computeRoutes",
      {
        origin: {
          location: {
            latLng: {
              latitude: originLat,
              longitude: originLng,
            },
          },
        },
        destination: {
          location: {
            latLng: {
              latitude: destinLat,
              longitude: destinLng,
            },
          },
        },

        travelMode,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "X-Goog-FieldMask":
            "routes.duration,routes.distanceMeters,routes.polyline.encodedPolyline",
        },
      }
    );

    return response.data;
  } catch (error) {
    throw new Error("Error to find route, verify your API.");
  }
}