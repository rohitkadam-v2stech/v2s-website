export const IMAGE_SLIDER_SETTINGS = {
  dots: true,
  infinite: true,
  speed: 500,
  arrows: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

export const OUR_ASSOCIATION_IMAGES_LIST = [
  "https://v2stech.com/wp-content/uploads/2023/02/msme-logo.png",
  "https://v2stech.com/wp-content/uploads/2023/02/confluent-logo.png",
  "https://v2stech.com/wp-content/uploads/2023/02/scgt-logo.png",
  "https://v2stech.com/wp-content/uploads/2023/02/naascom-logo.png",
  //   "https://v2stech.com/wp-content/uploads/2023/02/mongodblogobrand1-resized.png",
  "https://v2stech.com/wp-content/uploads/2023/02/goodfirms.png",
];
