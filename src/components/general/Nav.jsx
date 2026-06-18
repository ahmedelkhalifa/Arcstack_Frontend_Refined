import { ArrowOutward } from '@mui/icons-material'
import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import logo from "../../assets/logo_transparent.png"

const Nav = () => {
    const {t} = useTranslation();
    const navigate = useNavigate();
  return (
    <Box sx={{position: "fixed", top: 0, left: 0, width: "100%"}}>
        <Container maxWidth="xl" sx={{py: 3, display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <Box component={"img"} src={logo} sx={{width: "150px"}}/>
            <Box sx={{display: {xs: "none", md: "flex"}, alignItems: "center", gap: 8}}>
                <Typography variant='body1' sx={{fontWeight: 600, cursor: "pointer"}}
                component={"div"} onClick={() => navigate("/services")}>
                    {t("navbar.menu.home")}
                </Typography>
                <Typography variant='body1' sx={{fontWeight: 600, cursor: "pointer"}}
                component={"div"} onClick={() => navigate("/services")}>
                    {t("navbar.menu.services")}
                </Typography>
                <Typography variant='body1' sx={{fontWeight: 600, cursor: "pointer"}}
                component={"div"} onClick={() => navigate("/services")}>
                    {t("navbar.menu.work")}
                </Typography>
                <Typography variant='body1' sx={{fontWeight: 600, cursor: "pointer"}}
                component={"div"} onClick={() => navigate("/services")}>
                    {t("navbar.menu.about")}
                </Typography>
                <Typography variant='body1' sx={{fontWeight: 600, cursor: "pointer"}}
                component={"div"} onClick={() => navigate("/services")}>
                    {t("navbar.menu.contact")}
                </Typography>
            </Box>
            <Button variant='contained' endIcon={<ArrowOutward/>}>
                LETS TALK
            </Button>
        </Container>
    </Box>
  )
}

export default Nav