import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const Busqueda = ({ actualizarInput, escucharClickDelBoton }) => {
  return (
    <Box sx={{ p: 3 }}>
      <TextField
        onChange={actualizarInput}
        label="Busca tu producto"
        variant="standard"
      />
      <Button onClick={escucharClickDelBoton} variant="outlined">
        Buscar
      </Button>
    </Box>
  );
};

export default Busqueda;
