import { useParams } from "react-router-dom";
import jobsData from "../../data.json";
import { Box, Stack, Typography } from "@mui/material";
import COLORS from "../../../../styles/colors";
import { messages } from "./config/messages";

const JobDescriptionDetails: React.FC = () => {
  const { id } = useParams();

  const filteredNewsDetails =
    id && jobsData?.data?.filter((item) => item?.id === id);

  const data: any = filteredNewsDetails && filteredNewsDetails[0];

  const jobDescriptionDetails = data?.details;
  console.log("JD Data", data);

  return (
    <Box px="8%">
      <Typography
        fontSize={30}
        fontWeight={700}
        color={COLORS.DARK_BLUE}
        textAlign="center"
        mb={4}
      >
        {messages.currentOpenings}
      </Typography>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
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
            Desired Experience:
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
            Key Responsibilities:
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
            Must Have:
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
            Good to Have:
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
            Strong Technical Skills:
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
            Additional Skills:
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
            Sales Target Achievement:
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
            Product Knowledge:
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
            Client Relationship Management:
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
            Market Research:
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
            Sales Pipeline Management:
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
            Qualifications:
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
