import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { styled } from "@mui/system";
import { useTheme } from "@mui/material/styles";

const AboutSection = styled(Box)({
  background: "linear-gradient(to right, #090a26, #112D4E)", // Azul degradê
  color: "#fff",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  padding: "50px 20px",
});

const CardStyled = styled(Paper)({
  padding: "20px",
  borderRadius: "15px",
  backgroundColor: "#fff",
  color: "#0A192F",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
  "&:hover": {
    transform: "scale(1.05)",
    transition: "0.3s",
  },
});

const About = () => {
  const theme = useTheme();
  return (
    <AboutSection>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Texto à esquerda */}
          <Grid item xs={12} md={6}>
            <Typography 
              variant="h3" 
              gutterBottom 
              sx={{ fontWeight: "bold", textAlign: "left", fontFamily: theme.typography.fontFamily }}
            >
              QUEM EU SOU?
            </Typography>
            <Typography variant="h6" sx={{ textAlign: "left", fontFamily: theme.typography.fontFamily }}>
              Sempre preferi buscar soluções em vez de reclamar dos problemas. Essa mentalidade despertou minha curiosidade pela tecnologia desde os meus 8 anos de idade, o que acabou me levando ao mundo da programação. Resolver desafios sempre me motivou, e foi assim que a programação se tornou uma verdadeira paixão para mim.

              Atualmente, sou Desenvolvedor Fullstack e tenho facilidade tanto no Front-end quanto no Back-end. No meu dia a dia, trabalho com diversas tecnologias, como JavaScript, HTML, CSS, Python, MySQL, React e Docker. Além disso, estou no 3º semestre da faculdade de Análise e Desenvolvimento de Sistemas, sempre buscando aprimorar meus conhecimentos. Para complementar minha formação, também realizei cursos na Alura e na OneBitCode, aprofundando ainda mais minhas habilidades na área.
            </Typography>
          </Grid>

          {/* Imagem à direita */}
          <Grid item xs={12} md={6} display="flex" justifyContent="center">
            <img 
              src="https://images.pexels.com/photos/16592498/pexels-photo-16592498/free-photo-of-internet-conexao-ligacao-vinculo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Minha Foto" 
              style={{ width: "100%", maxWidth: "700px", borderRadius: "10px" }} 
            />
          </Grid>
        </Grid>

        {/* Cards de Habilidades */}
        <Grid container spacing={3} mt={4}>
          <Grid item xs={12} sm={6} md={3}>
            <CardStyled>
              <Typography variant="h6" fontWeight="bold">JavaScript</Typography>
              <Typography>Criação de interações e aplicações web.</Typography>
            </CardStyled>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <CardStyled>
              <Typography variant="h6" fontWeight="bold">Python</Typography>
              <Typography>Automação, back-end e desenvolvimento web.</Typography>
            </CardStyled>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <CardStyled>
              <Typography variant="h6" fontWeight="bold">HTML & CSS</Typography>
              <Typography>Estruturação e estilização de páginas.</Typography>
            </CardStyled>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <CardStyled>
              <Typography variant="h6" fontWeight="bold">Make</Typography>
              <Typography>ferramenta de automação que permite conectar aplicativos.</Typography>
            </CardStyled>
          </Grid>
        </Grid>
      </Container>
    </AboutSection>
  );
};

export default About;
