import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { styled } from "@mui/system";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const ProjectsSection = styled(Box)( ({
  background: "linear-gradient(to right, #090a26, #112D4E)", 
  color: "#fff",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  padding: "50px 20px",
  textAlign: "center",
}));

const ProjectCard = styled(Paper)({
  padding: "20px",
  borderRadius: "15px",
  backgroundColor: "#3E5879",
  color: "#D8C4B6",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
  transition: "0.3s",
  "&:hover": {
    transform: "scale(1.05)",
  },
});

interface Project {
  title: string;
  description: string;
  images: string[];
}

const projects: Project[] = [
  {
    title: "HospedaPará",
    description: "O HospedaPará é uma plataforma de hospedagem criada para atender à alta demanda de visitantes em Belém. Diferente dos serviços tradicionais, ele permite o aluguel de casas, escolas, hotéis e até embarcações, oferecendo mais opções para quem busca acomodações.",
    images: [
      "/assets/images/hospedahome.png",
      "/assets/images/hospedahome2.png",
      "/assets/images/hospedacasa.png",
      "/assets/images/hospedacentro.png",
      "/assets/images/hospedahotel.png",
      "/assets/images/hospedalogin.png",
      "/assets/images/hospedaembarcação.png",
    ],
  },
  {
    title: "iPhonePix",
    description: "O iPhonePix é um e-commerce focado exclusivamente em acessórios para iPhones. A plataforma conta com um sistema de carrinho que permite selecionar produtos e finalizar a compra na área de pagamento, além de um login seguro para uma experiência personalizada.",
    images: [
      "/assets/images/iphone_pix1.png",
      "/assets/images/iphonepixlogin.png",
      "/assets/images/iphonepixx_cart.png",
      "/assets/images/iphonepixx.png",
    ],
  }
];

const Projects = () => {
  return (
    <ProjectsSection>
      <Container maxWidth="lg">
        <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold" }}>
          Alguns Projetos Recentes
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {projects.map((project: Project, index: number) => (
            <Grid item xs={12} sm={6} md={6} key={index}>
              <ProjectCard>
                <Typography variant="h6" fontWeight="bold">
                  {project.title}
                </Typography>
                <Swiper
                  modules={[Pagination, Autoplay]}
                  spaceBetween={10}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  style={{ borderRadius: "10px", overflow: "hidden" }}
                >
                  {project.images.map((image: string, imgIndex: number) => (
                    <SwiperSlide key={imgIndex}>
                      <img 
                        src={image} 
                        alt={`${project.title} - ${imgIndex}`} 
                        style={{ width: "100%", borderRadius: "10px" }} 
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <Typography variant="body2" sx={{ marginTop: "10px" }}>
                  {project.description}
                </Typography>
              </ProjectCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ProjectsSection>
  );
};

export default Projects;
