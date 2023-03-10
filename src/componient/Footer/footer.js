import Logo from "../Asserts/Images/logos.png";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import PinterestIcon from "@mui/icons-material/Pinterest";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LanguageIcon from "@mui/icons-material/Language";
import { StyledGrid, StyledText } from "./ui";
const Footer = () => {
  return (
    <>
      <footer
        style={{
          backgroundColor: "#38E54D ",
          width: "100vw",
          color: "white",
          fontWeight: "bold",
          fontSize: "15px",
          fontFamily: "monospace",
        }}
      >
        <Box>
          <Grid
            container
            sx={{
              display: { xs: "flex", md: "flex", sm: "flex" },
              justifyContent: { xs: "center", md: "center", sm: "center" },
              alignItem: { xs: "center", md: "center", sm: "center" },
            }}
          >
            <StyledGrid lg={12} item container spacing={2}>
              <Grid item lg={3} xs={12}>
                <img alt="Logo" src={Logo} width={"200px"} height={"100px"} />

                <Grid item sx={{ padding: "0px 20px " }}>
                  <p>
                    business or organization providing a particular service on
                    behalf of another business, person, or group.a business or
                    organization providing.
                  </p>
                  © 2020 Copyright:
                </Grid>
              </Grid>

              <Grid item lg={3} xs={12}>
                <h2>Services</h2>
                <StyledText>Home</StyledText>
                <StyledText>About</StyledText>
                <StyledText>Process</StyledText>
                <StyledText>OurSkill</StyledText>
                <StyledText>Portfolio</StyledText>
                <StyledText>Contact</StyledText>
              </Grid>
              <Grid item lg={3} xs={12}>
                <h2>Usefull Links</h2>
                <p>Vision</p>
                <p>Mision</p>
                <p>Vision</p>
                <p>Mision</p>
                <p>Vision</p>
                <p>Mision</p>
              </Grid>
              <Grid item lg={3} xs={12}>
                <h2>Contact Us</h2>

                <p>
                  <PhoneIcon fontSize="3px" /> +1-546658846
                </p>
                <p>
                  <EmailIcon fontSize="3px" /> info@agency.com
                </p>
                <p>
                  {" "}
                  <LanguageIcon fontSize="3px" />{" "}
                  <a
                    href="https://google.com/"
                    style={{ color: "#fff", marginLeft: "10px" }}
                  >
                    www.expedia.com
                  </a>
                </p>
                <Grid item>
                  <h2>Follow Us</h2>
                  <FacebookIcon sx={{ fontSize: "20px", color: "black",  }} />
                  <YouTubeIcon sx={{ fontSize: "20px", color: "black" }} />
                  <TwitterIcon sx={{ fontSize: "20px", color: "black" }} />
                  <GoogleIcon sx={{ fontSize: "20px", color: "black" }}/>
                  <PinterestIcon sx={{ fontSize: "20px", color: "black" }} />
                </Grid>
              </Grid>
            </StyledGrid>
          </Grid>
        </Box>
      </footer>
    </>
  );
};

export default Footer;
