import { Table } from "@radix-ui/themes";
import { useSearchParams } from "react-router";
import { getGeocodePlace } from "../../app/api/get-geocode-place";
import { getRoute } from "../../app/api/get-routes";


export function OutputGps() {

  async function getRouteDatas() {
  const [searchParams] = useSearchParams()

  const originAddressString = searchParams.get('originAddress') ?? ''
  const destinAddressString = searchParams.get('destinAddress') ?? ''

  const { latitude: originLat, longitude: originLng } = await getGeocodePlace(originAddressString)
  const { latitude: destinLat, longitude: destinLng } = await getGeocodePlace(destinAddressString)

  const dataRoutes = await getRoute({
    originLat,
    originLng,
    destinLat,
    destinLng,
    travelMode: "DRIVE"
  })

  return dataRoutes
  }




return (
  <div className="bg-[#253974] border border-[#304384] rounded-lg">
    <Table.Root>
      <Table.Header>
        <Table.ColumnHeaderCell align="center">Mode</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell align="center">Time</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell align="center">Distance to travel</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell align="center">Cost</Table.ColumnHeaderCell>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell align="center"></Table.Cell>
          <Table.Cell align="center"></Table.Cell>
          <Table.Cell align="center">3km</Table.Cell>
          <Table.Cell align="center">$20</Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.Cell align="center">Bus</Table.Cell>
          <Table.Cell align="center">13 Minutes.</Table.Cell>
          <Table.Cell align="center">5km</Table.Cell>
          <Table.Cell align="center">$50</Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.Cell align="center">Train</Table.Cell>
          <Table.Cell align="center">22 Minutes.</Table.Cell>
          <Table.Cell align="center">4km</Table.Cell>
          <Table.Cell align="center">$31</Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.Cell align="center">Walk</Table.Cell>
          <Table.Cell align="center">22 Minutes.</Table.Cell>
          <Table.Cell align="center">4km</Table.Cell>
          <Table.Cell align="center">$31</Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.Cell align="center">Cycling</Table.Cell>
          <Table.Cell align="center">22 Minutes.</Table.Cell>
          <Table.Cell align="center">4km</Table.Cell>
          <Table.Cell align="center">$31</Table.Cell>
        </Table.Row>


      </Table.Body>
    </Table.Root>
  </div>
)
}
