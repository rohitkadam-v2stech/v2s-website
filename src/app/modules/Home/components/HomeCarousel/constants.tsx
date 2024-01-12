import { messages } from "./config/messages";
import { StyledCarouselBtn } from "./style";
import imageOne from "../../../../assets/homeCarousel/homeOne.png";
import imageTwo from "../../../../assets/homeCarousel/homeTwo.png";
import imageThree from "../../../../assets/homeCarousel/homeThree.png";
import { TCarouselData } from "./config/types";
import { navigateToWhatsAppContact } from "../../../../utils/helpers";

export const HOME_CAROUSEL_CARD_LIST: Array<TCarouselData> = [
  {
    imgPath: imageOne,
    title: messages.saasProductDevCompanyTitle,
    subtitle: messages.saasProductDevCompanySubtitle,
    carouselBtn: (
      <StyledCarouselBtn
        variant="contained"
        size="large"
        onClick={navigateToWhatsAppContact}
      >
        {messages.saasProductDevCompanyBtn}
      </StyledCarouselBtn>
    ),
  },
  {
    imgPath: imageTwo,
    title: messages.saasProductDevCompanyTitle,
    subtitle: messages.saasProductDevCompanySubtitle,
    carouselBtn: (
      <StyledCarouselBtn
        variant="contained"
        size="large"
        onClick={navigateToWhatsAppContact}
      >
        {messages.saasProductDevCompanyBtn}
      </StyledCarouselBtn>
    ),
  },
  {
    imgPath: imageThree,
    title: messages.endToEndProductDevTitle,
    subtitle: messages.endToEndProductDevSubtitle,
    carouselBtn: (
      <StyledCarouselBtn
        variant="contained"
        size="large"
        onClick={navigateToWhatsAppContact}
      >
        {messages.endToEndProductDevBtn}
      </StyledCarouselBtn>
    ),
  },
];
