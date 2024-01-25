import { useParams } from "react-router-dom";
import { NEWS_LIST } from "../../config/constants";
import Box from "@mui/material/Box";
import ExploreMoreNews from "./components/ExploreMoreNews";
import Header from "./components/Header";
import Content from "./components/Content";

const NewsDetails: React.FC = () => {
  const { id } = useParams();

  const filteredNewsDetails =
    id && NEWS_LIST?.filter((item) => item?.id === id);

  const data: any = filteredNewsDetails && filteredNewsDetails[0];

  return (
    <>
      <Box>
        <Header data={data} />

        <Content data={data} />

        <ExploreMoreNews id={data?.id} />
      </Box>
    </>
  );
};

export default NewsDetails;
