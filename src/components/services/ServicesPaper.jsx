import { ArrowOutward } from '@mui/icons-material'
import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { getServices } from '../../data/services'
import ServiceCard from './ServiceCard'

const ServicesPaper = () => {
    const {t} = useTranslation();
    const services = getServices(t);
  return (
    <Box sx={{width: "100%"}}>
        <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <Box>
          <Typography variant="h5" sx={{ color: "secondary.main" }}>
            {t("services.badge")}
          </Typography>
          <Typography variant="h4" sx={{ color: "text.primary" }}>
            {t("services.title")}
          </Typography>
        </Box>
        <Button
          endIcon={<ArrowOutward />}
          sx={{ fontWeight: 600, display: { xs: "none", md: "flex" } }}
        >
          {t("services.viewAll")}
        </Button>
      </Box>
      <Grid container sx={{mt: 8}} spacing={4}>
        {services.map((service, index) => (
            <Grid size={{xs: 12, md: 6, lg: 3}} key={index}>
                <ServiceCard service={service}/>
            </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default ServicesPaper