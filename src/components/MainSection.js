import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import Container from "@mui/material/Container";
import { useState, useEffect } from "react";

const MainSection = ({ busqueda }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${busqueda}`)
      .then((res) => res.json())
      .then((data) => {
        setProductos(data.results);
      });
  }, [busqueda]);

  return (
    <Container>
      <Grid
        container
        spacing={6}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {productos.map((producto) => (
          <Grid item>
            <CardActionArea>
              <Card sx={{ maxWidth: 200, height: 300 }}>
                <CardMedia
                  component="img"
                  height="150"
                  image={producto.thumbnail}
                  alt={producto.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6">
                    {producto.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {producto.address.state_name}
                  </Typography>
                </CardContent>
              </Card>
            </CardActionArea>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MainSection;
