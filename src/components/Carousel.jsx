export default function Carousel() {
    return (
      <div className="w-full mb-16">
        {/* Carousel container */}
        <div className="carousel w-full h-[400px] rounded-box overflow-x-auto flex space-x-4">
          
          {/* Carousel Item 1 */}
          <div className="carousel-item flex-shrink-0 w-full sm:w-[500px]">
            <img
              className="object-cover w-full h-full"
              src="https://cdn.foxlo.in/skc/9TH.jpg"
              alt=""
            />
          </div>
          
          {/* Carousel Item 2 */}
       
          
          {/* Carousel Item 3 */}
          <div className="carousel-item flex-shrink-0 w-full sm:w-[500px]">
            <img
              className="object-cover w-full h-full"
              src="https://cdn.foxlo.in/skc/11TH.jpg"
              alt="Pizza"
            />
          </div>
  
          {/* Carousel Item 4 */}
          <div className="carousel-item flex-shrink-0 w-full sm:w-[500px]">
            <img
              className="object-cover w-full h-full"
              src="https://cdn.foxlo.in/skc/THIRD.jpg"
              alt="Pizza"
            />
          
          </div>
          </div>
      </div>
    );
  }
  