import { messages } from "./config/messages";
import { StyledCarouselBtn } from "./style";
import BannerImageOne from "../../../../assets/News_02.png";
import BannerImageTwo from "../../../../assets/News_03.png";
import { TCarouselData } from "./config/types";

export const HOME_CAROUSEL_CARD_LIST: Array<TCarouselData> = [
  {
    imgPath: BannerImageOne,
    title: messages.saasProductDevCompanyTitle,
    subtitle: messages.saasProductDevCompanySubtitle,
    carouselBtn: (
      <StyledCarouselBtn variant="contained" size="large">
        {messages.saasProductDevCompanyBtn}
      </StyledCarouselBtn>
    ),
  },
  {
    imgPath: BannerImageTwo,
    title: messages.saasProductDevCompanyTitle,
    subtitle: messages.saasProductDevCompanySubtitle,
    carouselBtn: (
      <StyledCarouselBtn variant="contained" size="large">
        {messages.saasProductDevCompanyBtn}
      </StyledCarouselBtn>
    ),
  },
  {
    imgPath: BannerImageOne,
    title: messages.endToEndProductDevTitle,
    subtitle: messages.endToEndProductDevSubtitle,
    carouselBtn: (
      <StyledCarouselBtn variant="contained" size="large">
        {messages.endToEndProductDevBtn}
      </StyledCarouselBtn>
    ),
  },
];
