import { Box, Typography } from "@mui/material";
import { getIcon } from "../utils/getIcon";

const CardDetails = ({ icon, number, text, dark = false }) => {
  const Icon = getIcon(icon);

  return (
    <Box
      sx={{
        flex: 1,
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",

          flexDirection: {
            xs: "column",
            md: "row",
          },

          alignItems: "center",
          justifyContent: "center",

          gap: {
            xs: 2,
            md: 1.5,
            lg: 2.5,
          },

          textAlign: {
            xs: "center",
            md: "left",
          },
        }}
      >
        <Box
          sx={{
            width: {
              xs: 70,
              md: 55,
              lg: 70,
            },

            height: {
              xs: 70,
              md: 55,
              lg: 70,
            },

            bgcolor: "primary.main",
            borderRadius: "50%",

            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            flexShrink: 0,
          }}
        >
          <Icon
            sx={{
              fontSize: {
                xs: 32,
                md: 24,
                lg: 32,
              },

              color: "background.default",
            }}
          />
        </Box>

        <Box
          sx={{
            flex: 1,
            width: "100%",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: dark ? "primary.main" : "background.paper",

              fontSize: {
                xs: "1.25rem",
                md: "1rem",
                lg: "1.25rem",
              },

              textAlign: {
                xs: "center",
                md: "left",
              },

              mb: 0.5,
            }}
          >
            {number}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: dark ? "text.secondary" : "background.paper",

              fontSize: {
                xs: 14,
                md: 12,
                lg: 14,
              },

              fontWeight: 500,
              lineHeight: 1.7,

              textAlign: {
                xs: "center",
                md: "left",
              },
            }}
          >
            {text}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CardDetails;