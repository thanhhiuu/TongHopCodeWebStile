import { useEffect } from "react";
import { useSelector } from "react-redux";

const SliderBanner = () => {
  const sliderElements = document.querySelectorAll(".slider-items");
  const { banner } = useSelector((state) => state.app);
  for (let index = 0; index < sliderElements.length; index++) {
    console.log(index);
    if (index > 1) {
      sliderElements[index].style.display = "none";
    } else {
      sliderElements[index].style.display = "block";
    }
  }
  useEffect(() => {
    let min = 0;
    let max = 1;
    const timeSlider = setInterval(() => {
      for (let index = 0; index < sliderElements.length; index++) {
        // console.log(index);
        if (index < min || index > max) {
          sliderElements[index].style.display = "none";
          sliderElements[index].style.animation = " all 1s ease";

          // Thay vì opacity, set transform:
        } else {
          sliderElements[index].style.display = "block";
          sliderElements[index].style.animation = " all 2s ease";
        }
      }
      min += 1;
      max += 1;
      if (min > sliderElements.length - 1 || max > sliderElements.length - 1) {
        min = 0;
        max = 1;
      }
    }, 2000);

    return () => {
      timeSlider && clearInterval(timeSlider);
    };
  }, [banner, sliderElements]);

  return (
    <>
      <div className="flex gap-2 w-full justify-center mt-6">
        {banner?.map((items) => (
          <div key={items.encodeId}>
            <img
              src={items.banner}
              alt=""
              style={{ animation: " all 2s ease" }}
              className="slider-items w-[500px] p-[30px]"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default SliderBanner;
