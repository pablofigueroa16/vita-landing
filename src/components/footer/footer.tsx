import { File, Search, Settings } from "lucide-react"
import { OrbitingCircles } from "@/components/ui/orbiting-circles"

const footer = () => {
  return (
    <div className="text-text relative h-[500px] w-full overflow-hidden">
      <OrbitingCircles>
        <File />
        <Settings />
        <File />
      </OrbitingCircles>
      <OrbitingCircles radius={100} reverse>
        <File />
        <Settings />
        <File />
        <Search />
      </OrbitingCircles>
    </div>
  );
}
export default footer;