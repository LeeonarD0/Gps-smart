import { Flex } from "@radix-ui/themes";
import { InputGps } from "../components/interaction-painel/Input-gps";
import { OutputGps } from "../components/interaction-painel/output-user";
import { MapResult } from "../components/map-result";


export function GpsApp() {
  return (
    <Flex direction="column" className="bg-[#182449] border-[#304384] border items-center justify-center rounded-3xl h-[820px] w-[50%]" >
      <div className="flex flex-col justify-center items-center h-screen w-full gap-4 ">

        <div className="grid grid-flow-col grid-cols-3  gap-5 mt-5">
          <div className="grid col-span-1 justify-center w-full "> 
            <InputGps/>
          </div>

          <div className="grid col-span-2 w-full">
            <OutputGps />
          </div>
        </div>

        <div className="w-full h-full p-5">
          <MapResult />
        </div>
      </div>
    </Flex>
  )
}