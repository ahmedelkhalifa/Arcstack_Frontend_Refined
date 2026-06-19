import { Divider, Grid, Paper } from '@mui/material'
import React from 'react'
import ClassicCard from './ClassicCard'
import { CalendarToday, Group, Language, StarBorder } from '@mui/icons-material'
import { useTranslation } from 'react-i18next'

const FeaturesPaper = () => {
    const {t} = useTranslation();
  return (
    <Paper elevation={2} sx={{bgcolor: "primary.dark", px: 5, py: 3, width: "100%", borderRadius: 0}}>
        <Grid container spacing={{xs: 3, md: 0}}>
            <Grid size={{xs: 12, md: 3}}>
                <ClassicCard variant="row"
                number={t("stats.projectsCompleted.value")}
                text={t("stats.projectsCompleted.label")}
                icon={<CalendarToday fontSize="medium" sx={{color: "secondary.main"}}/>}
                border={true}/>
            </Grid>
            {/* <Divider orientation='vertical' flexItem sx={{color: "divider"}}/> */}
            <Grid size={{xs: 12, md: 3}}>
                <ClassicCard variant="row"
                number={t("stats.coreServices.value")}
                text={t("stats.coreServices.label")}
                icon={<Group fontSize="medium" sx={{color: "secondary.main"}}/>}
                border={true}/>
            </Grid>
            {/* <Divider orientation='vertical' flexItem sx={{color: "divider"}}/> */}
            <Grid size={{xs: 12, md: 3}}>
                <ClassicCard variant="row"
                number={t("stats.clientSatisfaction.value")}
                text={t("stats.clientSatisfaction.label")}
                icon={<StarBorder fontSize="medium" sx={{color: "secondary.main"}}/>}
                border={true}/>
            </Grid>
            {/* <Divider orientation='vertical' flexItem sx={{color: "divider"}}/> */}
            <Grid size={{xs: 12, md: 3}}>
                <ClassicCard variant="row"
                number={t("stats.location.value")}
                text={t("stats.location.label")}
                icon={<Language fontSize="medium" sx={{color: "secondary.main"}}/>}/>
            </Grid>
        </Grid>
    </Paper>
  )
}

export default FeaturesPaper