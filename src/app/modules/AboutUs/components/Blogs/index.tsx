import { Box, Grid, Typography } from "@mui/material";

import COLORS from "../../../../styles/colors";
import { messages } from "../../config/messages";
import { BLOGS_LIST } from "../../config/constants";
import OverviewCard from "../../../../components/OverviewCard";

const Blogs: React.FC = () => (
  <Box bgcolor={COLORS.LIGHT_BLUE} mt={-2}>
    <Box px="6%" py={16}>
      <Typography
        fontSize={30}
        fontWeight={700}
        color={COLORS.DARK_BLUE}
        textAlign="center"
        mb={6}
      >
        {messages.blogs}
      </Typography>

      <Grid container spacing={16}>
        {BLOGS_LIST.map((blog, index) => (
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6} key={index}>
            <OverviewCard
              image={blog.image}
              // imageHeight={280}
              title={blog.title}
              description={blog.description}
              onReadMoreClick={() => {}}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  </Box>
);

export default Blogs;
