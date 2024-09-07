

import './App.css'
import { Button } from "./components/ui/button"
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel"

function App() {


	return (
		<>
			<div className="px-20">
				<h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-blue-700 md:text-5xl lg:text-6xl dark:text-white">We invest in the world’s potential</h1>
				<Button className="px-20 py-20">Hello ShadCN</Button>
				<Carousel className="py-20">
					<CarouselContent>
						<CarouselItem> 1</CarouselItem>
						<CarouselItem> 2</CarouselItem>
						<CarouselItem> 3</CarouselItem>
					</CarouselContent>
					<CarouselPrevious className="text-red-500" />
					<CarouselNext className="text-red-500" />
				</Carousel>

			</div>
		</>
	)
}

export default App
