import { Box, Container, Grid, Typography, styled } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";

// Definindo o StyledButton
const StyledButton = styled("a")(({ theme }) => ({
    display: "inline-flex",
    alignItems: "center",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: "10px 20px",
    textDecoration: "none",
    borderRadius: "5px",
    "&:hover": {
        backgroundColor: theme.palette.primary.dark,
    },
    cursor: "pointer",
}));

const Hero = () => {
    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up('xs')]: { // <= mobile
            paddingTop: "100px",
        },
        [theme.breakpoints.up('md')]: { // >= mobile
            paddingTop: "0",
        }
    }));

    return (
        <StyledHero>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={5}>
                        <Box position="relative">
                            <Box position="absolute" width={"150%"} top={-100} right={0}>
                                <AnimatedBackground />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>
                            William Cardoso
                        </Typography>
                        <Typography color="primary.contrastText" variant="h2" textAlign="center">
                            Desenvolvedor full-stack
                        </Typography>
                        <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                            <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                {/* Download CV button */}
                                <StyledButton href="https://drive.usercontent.google.com/u/0/uc?id=1WMORnwWrxS8HoD5pM2OiofvFZoHMDWjF&export=download" download>
                                    <DownloadIcon />
                                    <Typography>Download CV</Typography>
                                </StyledButton>
                            </Grid>
                            <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                {/* Contact me button */}
                                <StyledButton href="https://mail.google.com/mail/?view=cm&fs=1&to=williamcardoso797@gmail.com&su=Contato%20via%20Website&body=Olá%2C%20gostaria%20de%20entrar%20em%20contato.">
                                    <MailOutlineIcon />
                                    <Typography>Contact me</Typography>
                                </StyledButton>

                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </StyledHero>
    );
}

export default Hero;