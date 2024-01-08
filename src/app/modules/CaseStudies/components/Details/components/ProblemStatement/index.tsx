import { Box, Typography } from "@mui/material";

import COLORS from "../../../../../../styles/colors";
import { messages } from "../../config/messages";
import { StyledRegularText } from "../../../../style";

type TProblemStatementProps = {
  data: any;
};

const ProblemStatement: React.FC<TProblemStatementProps> = ({ data }) => {
  const { problemStatement, solution, ongoingValueBasedRelationship } = data;
  return (
    <>
      <Box py={3} px={{ xs: 1, sm: 2, md: "10%", lg: "10%", xl: "10%" }}>
        <Typography
          mb={1}
          fontSize={20}
          fontWeight={800}
          color={COLORS.DARK_BLUE}
        >
          {messages.problemStatement}
        </Typography>

        {problemStatement?.main && (
          <StyledRegularText mb={2} textAlign="justify">
            {problemStatement?.main}
          </StyledRegularText>
        )}

        {problemStatement?.subProblemStatements && (
          <StyledRegularText mb={2} textAlign="justify">
            {problemStatement?.subProblemStatements?.map(
              (problemStatement: any) => (
                <ul>
                  <li>{problemStatement}</li>
                </ul>
              )
            )}
          </StyledRegularText>
        )}
      </Box>

      <Box
        py={3}
        px={{ xs: 1, sm: 2, md: "10%", lg: "10%", xl: "10%" }}
        bgcolor={COLORS.BACKGROUND_GREY}
      >
        <Typography
          mb={1}
          fontSize={20}
          fontWeight={800}
          color={COLORS.DARK_BLUE}
        >
          {messages.solution}
        </Typography>

        <StyledRegularText mb={2} textAlign="justify">
          {solution?.map((solution: any) => (
            <ul>
              <li>{solution}</li>
            </ul>
          ))}
        </StyledRegularText>
      </Box>

      <Box py={3} px={{ xs: 1, sm: 2, md: "10%", lg: "10%", xl: "10%" }}>
        <Typography
          mb={1}
          fontSize={20}
          fontWeight={800}
          color={COLORS.DARK_BLUE}
        >
          {messages.ongoingValueBasedRelationship}
        </Typography>

        <StyledRegularText mb={2} textAlign="justify">
          {ongoingValueBasedRelationship?.map((item: any) => (
            <ul>
              <li>{item}</li>
            </ul>
          ))}
        </StyledRegularText>
      </Box>
    </>
  );
};

export default ProblemStatement;
