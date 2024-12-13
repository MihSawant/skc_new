import { useState, useEffect } from "react";
import axios from "axios";
export default function Carousel() {
  const [aboutImages, setAboutImages] = useState([]);
  useEffect(() => {
    fetchAboutImages();
}, []);

function fetchAboutImages(){
        axios.get("/api/carouselImages/all")
            .then(resp => {
                console.log("resp", resp);
                const images = resp.data.map(item => item.imageUrl);
                console.log(images);
                
                setAboutImages(images);
                
            })
            .catch(err => console.error(err));
}
    return (
      <div className="w-full mb-16">
        {/* Carousel container */}
        <div className="carousel w-full h-[400px] rounded-box overflow-x-auto flex space-x-4">
          
          {/* Carousel Item 1 */}
          <div className="carousel-item flex-shrink-0 w-full sm:w-[500px]">
            <img
              className="object-cover w-full h-full"
              // src="/img/temp/9TH.jpg"
              src={aboutImages.at(0)}
              alt=""
            />
          </div>
          
          {/* Carousel Item 2 */}
       
          
          {/* Carousel Item 3 */}
          <div className="carousel-item flex-shrink-0 w-full sm:w-[500px]">
            <img
              className="object-cover w-full h-full"
              // src="/img/temp/11TH.jpg"
              src={aboutImages.at(1)}
              alt="Pizza"
            />
          </div>
  
          {/* Carousel Item 4 */}
          <div className="carousel-item flex-shrink-0 w-full sm:w-[500px]">
            <img
              className="object-cover w-full h-full"
              // src="/img/temp/THIRD.jpg"
              src={aboutImages.at(2)}
              alt="Pizza"
            />
          
          </div>

          <div className="carousel-item flex-shrink-0 w-full sm:w-[500px]">
            <img
              className="object-cover w-full h-full"
              // src="/img/temp/10TH.jpg"
              src={aboutImages.at(3)}
              alt="Pizza"
            />
          
          </div>
          </div>
      </div>
    );
  }
  