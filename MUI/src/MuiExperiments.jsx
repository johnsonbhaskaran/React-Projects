import Button from "@mui/material/Button";
import { Add, Settings } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const MuiExperiments = () => {
  const GreenButton = styled(Button)({
    backgroundColor: "lightseagreen",
    color: "white",
    margin: 5,
    "&:hover": {
      backgroundColor: "lightsalmon",
    },
  });

  return (
    <>
      <div>Hello</div>
      <Button variant='text'>Text</Button>
      <Button variant='contained' color='secondary' size='large'>
        Contained
      </Button>
      <Button variant='contained' color='success' size='large' endIcon={<Add />}>
        Add new post
      </Button>
      <Button variant='outlined' startIcon={<Settings />}>
        Outlined
      </Button>
      <Typography variant='h1' component='h2'>
        It uses h1 style but it's a p tag
      </Typography>
      {/* <Button
        variant='contained'
        sx={{
          backgroundColor: "lightseagreen",
          color: "white",
          margin: 5,
          "&:hover": {
            backgroundColor: "lightsalmon",
          },
        }}
        disabled
      >
        My unique Button
      </Button> */}
      <GreenButton>My Button</GreenButton>
      <GreenButton>Another Button</GreenButton>
    </>
  );
};
export default MuiExperiments;
