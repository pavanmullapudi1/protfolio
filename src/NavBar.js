import React from "react";
import logo from "./assets/images/dp.png";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { Backdrop, Box, Fade, Modal, Typography } from "@mui/material";
import Login from "./login";
// import { colorContext } from "./Context";

function NavBar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const imgSTyles = {
    borderRadius: "66%",
    width: "33px",
    height: "33px",
    margin: "19px 4px 8px 4px ",
  };
  const FontSTyles = {
    fontSize: "14px",
    textTransform: "uppercase",
    margin: 0,
    color: "#FFF1E6",
  };
  const FontSTylesSMall = {
    fontSize: "10px",
    textTransform: "uppercase",
    margin: 0,
    color: "#FFF1E6",
  };

  const infoStyles = {
    margin: "16px 4px 6px 4px",
  };
  const navBArDrop = {
    background:
      "linear-gradient(rgb(32 32 32) 20%, rgb(0, 0, 0) 20%, rgba(17, 18, 16, 0.65))",
    position: "sticky",
    width: "100%",
    top: "0px",
    zIndex: 4,
  };
  //   const themeSetter = useContext(colorContext);
  return (
    <div className="nav-bar" style={navBArDrop}>
      <div className="d-flex flex-row">
        <div className="pl-2">
          <img src={logo} alt="logo" style={imgSTyles} className="account-dp" />
        </div>
        <div className="account-info" style={infoStyles}>
          <p style={FontSTyles}>Mullapudi Pavan Phani Teja</p>
          <p style={FontSTylesSMall}>Software Engineer</p>
        </div>
        <div className="ms-auto p-3">
          <svg
            width="22"
            height="20"
            viewBox="0 0 22 20"
            fill="none"
            onClick={handleOpen}
            data-tooltip-id="my-tooltip-1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.58694 11.2814C13.4914 15.9299 15.6043 9.4289 17.9814 17.9766C15.8594 19.0941 10.9741 16.2316 7.06965 11.5832C3.16519 6.93479 1.72015 2.26064 3.84207 1.1432C14.7798 4.15892 5.68248 6.63301 9.58694 11.2814Z"
              fill="#FFF1E6"
            />
            <path
              d="M11.5699 3.67065C11.6394 3.36854 11.9315 3.17011 12.2346 3.23486C13.1976 3.44056 14.1144 3.77809 14.947 4.23464C15.9344 4.77602 16.7841 5.47416 17.4476 6.28919C18.1112 7.10422 18.5756 8.02019 18.8144 8.9848C19.0006 9.7371 19.0468 10.5075 18.9526 11.2691C18.9075 11.6334 18.5578 11.8661 18.1952 11.8083C17.7963 11.7446 17.5392 11.356 17.5739 10.9534C17.6237 10.3748 17.578 9.79205 17.4368 9.22161C17.2353 8.40776 16.8435 7.63495 16.2836 6.9473C15.7238 6.25966 15.0069 5.67063 14.1739 5.21387C13.5182 4.85434 12.8007 4.5823 12.0473 4.40652C11.7151 4.32901 11.4935 4.00312 11.5699 3.67065Z"
              fill="#FFF1E6"
            />
            <path
              d="M14 1.58609C14 1.2624 14.2627 0.997901 14.5856 1.02012C15.5197 1.0844 16.4361 1.30208 17.2925 1.66462C18.3272 2.10269 19.2507 2.74222 20.0014 3.54071C20.7521 4.33919 21.313 5.27835 21.6467 6.29574C21.9161 7.11706 22.0324 7.97419 21.9923 8.82962C21.9763 9.17022 21.6651 9.40922 21.3265 9.36905C20.9801 9.32797 20.7379 9.01074 20.7475 8.66205C20.7661 7.97894 20.6667 7.29607 20.4516 6.64025C20.17 5.78187 19.6968 4.98949 19.0634 4.3158C18.43 3.64211 17.6509 3.10254 16.7779 2.73294C16.0833 2.43888 15.3419 2.25778 14.5855 2.19604C14.2628 2.1697 14 1.90979 14 1.58609Z"
              fill="#FFF1E6"
            />
          </svg>
          <ReactTooltip
            id="my-tooltip-1"
            place="bottom"
            content="Hello.. Talk to me>>?"
            variant="warning"
          />
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
              backdrop: {
                timeout: 500,
              },
            }}
          >
            <Fade in={open}>
              <Box sx={style}>
                <Typography
                  id="transition-modal-title"
                  variant="h6"
                  component="h2"
                >
                  Text in a modal
                </Typography>
                {/* <Typography id="transition-modal-description" sx={{ mt: 2 }}> */}
                <Login />
                {/* </Typography> */}
              </Box>
            </Fade>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
