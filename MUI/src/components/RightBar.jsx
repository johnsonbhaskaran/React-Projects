import List from "@mui/material/List";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Divider from "@mui/material/Divider";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";

const RightBar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position='fixed' width={500}>
        <Typography variant='h5' fontWeight={100} mb={2}>
          Online Friends
        </Typography>
        <AvatarGroup max={4}>
          <Avatar
            alt='Remy Sharp'
            src='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg'
          />
          <Avatar
            alt='Travis Howard'
            src='https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg'
          />
          <Avatar
            alt='Cindy Baker'
            src='https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg'
          />
          <Avatar
            alt='Agnes Walker'
            src='https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg'
          />
          <Avatar
            alt='Trevor Henderson'
            src='https://images.pexels.com/photos/1821095/pexels-photo-1821095.jpeg'
          />
        </AvatarGroup>
        <Typography variant='h5' fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={164}>
          <ImageListItem>
            <img
              src='https://images.pexels.com/photos/69776/tulips-bed-colorful-color-69776.jpeg'
              alt=''
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src='https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg'
              alt=''
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src='https://images.pexels.com/photos/158063/bellingrath-gardens-alabama-landscape-scenic-158063.jpeg'
              alt=''
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src='https://images.pexels.com/photos/68507/spring-flowers-flowers-collage-floral-68507.jpeg'
              alt=''
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src='https://images.pexels.com/photos/46216/sunflower-flowers-bright-yellow-46216.jpeg'
              alt=''
            />
          </ImageListItem>
          <ImageListItem>
            <img src='https://images.pexels.com/photos/673857/pexels-photo-673857.jpeg' alt='' />
          </ImageListItem>
          <ImageListItem>
            <img src='https://images.pexels.com/photos/70069/pexels-photo-70069.jpeg' alt='' />
          </ImageListItem>
          <ImageListItem>
            <img src='https://images.pexels.com/photos/132474/pexels-photo-132474.jpeg' alt='' />
          </ImageListItem>
          <ImageListItem>
            <img src='https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg' alt='' />
          </ImageListItem>
        </ImageList>
        <Typography variant='h5' fontWeight={100} mt={2}>
          Latest Conversations
        </Typography>
        <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
          <ListItem alignItems='flex-start'>
            <ListItemAvatar>
              <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
            </ListItemAvatar>
            <ListItemText
              primary='Brunch this weekend?'
              secondary={
                <>
                  <Typography
                    component='span'
                    variant='body2'
                    sx={{ color: "text.primary", display: "inline" }}
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </>
              }
            />
          </ListItem>
          <Divider variant='inset' component='li' />
          <ListItem alignItems='flex-start'>
            <ListItemAvatar>
              <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
            </ListItemAvatar>
            <ListItemText
              primary='Brunch this weekend?'
              secondary={
                <>
                  <Typography
                    component='span'
                    variant='body2'
                    sx={{ color: "text.primary", display: "inline" }}
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};
export default RightBar;
