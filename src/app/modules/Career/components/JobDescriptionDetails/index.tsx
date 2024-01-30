import { useParams } from "react-router-dom";
import jobsData from "../../data.json";
import { Box, Stack, Typography } from "@mui/material";
import COLORS from "../../../../styles/colors";
import { messages } from "./config/messages";
import useDeviceSize from "../../../../hooks/useDeviceSize";

const JobDescriptionDetails: React.FC = () => {
  const { id } = useParams();

  const filteredNewsDetails =
    id && jobsData?.data?.filter((item) => item?.id === id);

  const data: any = filteredNewsDetails && filteredNewsDetails[0];

  const jobDescriptionDetails = data?.details;

  const { isOnMobile, isOnTablet } = useDeviceSize();

  return (
    <Box px="8%">
      <Typography
        fontSize={30}
        fontWeight={700}
        color={COLORS.DARK_BLUE}
        textAlign="center"
        my={4}
      >
        {messages.currentOpenings}
      </Typography>

      <Stack
        direction={isOnMobile || isOnTablet ? "column" : "row"}
        justifyContent="space-between"
        alignItems={isOnMobile || isOnTablet ? "start" : "center"}
        bgcolor={COLORS.DARK_BLUE}
        color={COLORS.WHITE}
        p={4}
      >
        <Typography fontSize={24} fontWeight={400}>
          {data?.jobTitle}
        </Typography>
        <Typography
          fontSize={18}
          fontWeight={400}
        >{`${messages.postedOn} : ${data?.postedOn}`}</Typography>
      </Stack>

      {jobDescriptionDetails?.description && (
        <Stack p={4}>
          <Typography fontSize={18} fontWeight={400}>
            {jobDescriptionDetails?.description}
          </Typography>
        </Stack>
      )}

      {jobDescriptionDetails?.desiredExperience && (
        <Stack p={4}>
          <Typography fontSize={18} fontWeight={700}>
            {messages.desiredExperience}
          </Typography>
          {jobDescriptionDetails?.desiredExperience.map((exp: any) => (
            <ul>
              <li>
                <Typography fontSize={18} fontWeight={400}>
                  {exp}
                </Typography>
              </li>
            </ul>
          ))}
        </Stack>
      )}

      {jobDescriptionDetails?.keyResponsibilities && (
        <Stack p={4}>
          <Typography fontSize={18} fontWeight={700}>
            {messages.keyResponsibilities}
          </Typography>
          {jobDescriptionDetails?.keyResponsibilities.map(
            (responsibility: any) => (
              <ul>
                <li>
                  <Typography fontSize={18} fontWeight={400}>
                    {responsibility}
                  </Typography>
                </li>
              </ul>
            )
          )}
        </Stack>
      )}

      {jobDescriptionDetails?.mustHave && (
        <Stack p={4}>
          <Typography fontSize={18} fontWeight={700}>
            {messages.mustHave}
          </Typography>
          {jobDescriptionDetails?.mustHave.map((item: any) => (
            <ul>
              <li>
                <Typography fontSize={18} fontWeight={400}>
                  {item}
                </Typography>
              </li>
            </ul>
          ))}
        </Stack>
      )}

      {jobDescriptionDetails?.goodToHave && (
        <Stack p={4}>
          <Typography fontSize={18} fontWeight={700}>
            {messages.goodToHave}
          </Typography>
          {jobDescriptionDetails?.goodToHave.map((item: any) => (
            <ul>
              <li>
                <Typography fontSize={18} fontWeight={400}>
                  {item}
                </Typography>
              </li>
            </ul>
          ))}
        </Stack>
      )}

      {jobDescriptionDetails?.strongTechnicalSkills && (
        <Stack p={4}>
          <Typography fontSize={18} fontWeight={700}>
            {messages.strongTechnicalSkills}
          </Typography>
          {jobDescriptionDetails?.strongTechnicalSkills.map((item: any) => (
            <ul>
              <li>
                <Typography fontSize={18} fontWeight={400}>
                  {item}
                </Typography>
              </li>
            </ul>
          ))}
        </Stack>
      )}

      {jobDescriptionDetails?.additionalSkills && (
        <Stack p={4}>
          <Typography fontSize={18} fontWeight={700}>
            {messages.additionalSkills}
          </Typography>
          {jobDescriptionDetails?.additionalSkills.map((item: any) => (
            <ul>
              <li>
                <Typography fontSize={18} fontWeight={400}>
                  {item}
                </Typography>
              </li>
            </ul>
          ))}
        </Stack>
      )}

      {jobDescriptionDetails?.salesTargetAchievement && (
        <Stack p={4}>
          <Typography fontSize={18} fontWeight={700}>
            {messages.salesTargetAchievement}
          </Typography>
          {jobDescriptionDetails?.salesTargetAchievement.map((item: any) => (
            <ul>
              <li>
                <Typography fontSize={18} fontWeight={400}>
                  {item}
                </Typography>
              </li>
            </ul>
          ))}
        </Stack>
      )}

      {jobDescriptionDetails?.productKnowledge && (
        <Stack p={4}>
          <Typography fontSize={18} fontWeight={700}>
            {messages.productKnowledge}
          </Typography>
          {jobDescriptionDetails?.productKnowledge.map((item: any) => (
            <ul>
              <li>
                <Typography fontSize={18} fontWeight={400}>
                  {item}
                </Typography>
              </li>
            </ul>
          ))}
        </Stack>
      )}

      {jobDescriptionDetails?.clientRelationshipManagement && (
        <Stack p={4}>
          <Typography fontSize={18} fontWeight={700}>
            {messages.clientRelationshipManagement}
          </Typography>
          {jobDescriptionDetails?.clientRelationshipManagement.map(
            (item: any) => (
              <ul>
                <li>
                  <Typography fontSize={18} fontWeight={400}>
                    {item}
                  </Typography>
                </li>
              </ul>
            )
          )}
        </Stack>
      )}

      {jobDescriptionDetails?.marketResearch && (
        <Stack p={4}>
          <Typography fontSize={18} fontWeight={700}>
            {messages.marketResearch}
          </Typography>
          {jobDescriptionDetails?.marketResearch.map((item: any) => (
            <ul>
              <li>
                <Typography fontSize={18} fontWeight={400}>
                  {item}
                </Typography>
              </li>
            </ul>
          ))}
        </Stack>
      )}

      {jobDescriptionDetails?.salesPipelineManagement && (
        <Stack p={4}>
          <Typography fontSize={18} fontWeight={700}>
            {messages.salesPipelineManagement}
          </Typography>
          {jobDescriptionDetails?.salesPipelineManagement.map((item: any) => (
            <ul>
              <li>
                <Typography fontSize={18} fontWeight={400}>
                  {item}
                </Typography>
              </li>
            </ul>
          ))}
        </Stack>
      )}

      {jobDescriptionDetails?.qualifications && (
        <Stack p={4}>
          <Typography fontSize={18} fontWeight={700}>
            {messages.qualifications}
          </Typography>
          {jobDescriptionDetails?.qualifications.map((item: any) => (
            <ul>
              <li>
                <Typography fontSize={18} fontWeight={400}>
                  {item}
                </Typography>
              </li>
            </ul>
          ))}
        </Stack>
      )}
    </Box>
  );
};

export default JobDescriptionDetails;
