import {
  DateRange,
  Edit,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Fab from "@mui/material/Fab";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { Box, Stack, styled } from "@mui/system";
import { useState } from "react";

const StyledModal = styled(Modal)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const UserBox = styled(Box)({ display: "flex", alignItems: "center" });

const Add = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Tooltip
        onClick={() => setOpen(true)}
        sx={{ position: "fixed", bottom: 20, left: { xs: "calc(50% - 67px)", md: 30 } }}
        title={"add post"}
        placement='right'
        color='primary'
      >
        <Fab variant='extended'>
          <Edit sx={{ mr: 1 }} />
          Add Post
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClick={() => setOpen(false)}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box
          width={500}
          height={300}
          bgcolor={"background.default"}
          color={"text.primary"}
          p={5}
          borderRadius={5}
        >
          <Typography variant='h4' color='gray' fontWeight={600}>
            Create post
          </Typography>
          <UserBox py={3}>
            <Avatar
              src='https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg'
              sx={{ width: 30, height: 30 }}
            />
            <Typography variant='span' fontWeight={500} px={2}>
              John Doe
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id='standard-multiline-static'
            multiline
            rows={3}
            placeholder="What's on your mind?"
            variant='standard'
          />
          <Stack direction={"row"} gap={1} mt={2} mb={3}>
            <EmojiEmotions color='primary' />
            <Image color='secondary' />
            <VideoCameraBack color='success' />
            <PersonAdd color='error' />
          </Stack>
          <ButtonGroup fullWidth variant='contained' aria-label='Basic button group'>
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};
export default Add;
