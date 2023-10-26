import { menuItems } from "@/app/constents/Live-bidding/constants";
import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const LeftSideBar = () => {
  const [openItemId, setOpenItemId] = useState(null);

  const toggleCollapse = (itemId) => {
    if (itemId === openItemId) {
      setOpenItemId(null); // Close the currently open item
    } else {
      setOpenItemId(itemId); // Open the clicked item
    }
  };

  return (
    <Grid container columnSpacing={{ xs: 1, sm: 2, md: 4, lg: 5 }}>
      <Grid
        item
        xs={12}
        sx={{
          padding: "15px",
          borderRadius: 15,
        }}
      >
        <Box
          sx={{
            width: "98%",
            backgroundColor: "#FF631C33",
            borderRadius: "15px",
            display: "flex",
            padding: "10px",
            alignItems: "center",
          }}
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.4762 21.75H22.0476V18H24.4286V21.75H28V24.25H24.4286V28H22.0476V24.25H18.4762V21.75ZM11.3333 8.625C13 8.625 14.3095 10 14.3095 11.75C14.3095 13.5 13 14.875 11.3333 14.875C9.66667 14.875 8.35714 13.5 8.35714 11.75C8.35714 10 9.66667 8.625 11.3333 8.625ZM11.3333 3C15.9762 3 19.6667 6.875 19.6667 11.75C19.6667 18.25 11.3333 28 11.3333 28C11.3333 28 3 18.25 3 11.75C3 6.875 6.69048 3 11.3333 3ZM11.3333 5.5C8 5.5 5.38095 8.25 5.38095 11.75C5.38095 13 5.38095 15.5 11.3333 23.875C17.2857 15.5 17.2857 13 17.2857 11.75C17.2857 8.25 14.6667 5.5 11.3333 5.5Z"
              fill="#FB631C"
            />
          </svg>
          <Typography
            sx={{
              color: "#FB631C",
              fontSize: "16px",
              fontWeight: "500",
              px: "20px",
            }}
          >
            Live Bidding
          </Typography>
        </Box>
        {menuItems.map((item) => {
          const isItemOpen = item.id === openItemId;
          return (
            <div key={item.id}>
              <Box
                sx={{
                  width: "100%",
                  borderRadius: "15px",
                  display: "flex",
                  padding: "10px",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {item.icons}
                  <Typography
                    sx={{
                      color: "#000",
                      fontSize: "16px",
                      fontWeight: "500",
                      px: "20px",
                    }}
                  >
                    {item.itemName}
                  </Typography>
                </Box>
                {item.accordianIcon && (
                  <IconButton onClick={() => toggleCollapse(item.id)}>
                    <ExpandMoreIcon />
                  </IconButton>
                )}
              </Box>
              <Collapse in={isItemOpen}>
                {item.actions && item.actions.length > 0 && (
                  <div>
                    <ul>
                      {item.actions.map((action, index) => (
                        <li key={index}>
                          <a href={action.link}>{action.title}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </Collapse>
            </div>
          );
        })}
      </Grid>
    </Grid>
  );
};

// return (
//     <Grid container columnSpacing={{ xs: 1, sm: 2, md: 4, lg: 5 }}>
//       <Grid
//         item
//         xs={12}
//         sx={{
//           padding: "15px",
//           borderRadius: 15,
//         }}
//       >
//         <Box
//           sx={{
//             width: "98%",
//             backgroundColor: "#FF631C33",
//             borderRadius: "15px",
//             display: "flex",
//             padding: "10px",
//             alignItems: "center",
//           }}
//         >
//           <Box>
//             <svg
//               width="30"
//               height="30"
//               viewBox="0 0 30 30"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M18.4762 21.75H22.0476V18H24.4286V21.75H28V24.25H24.4286V28H22.0476V24.25H18.4762V21.75ZM11.3333 8.625C13 8.625 14.3095 10 14.3095 11.75C14.3095 13.5 13 14.875 11.3333 14.875C9.66667 14.875 8.35714 13.5 8.35714 11.75C8.35714 10 9.66667 8.625 11.3333 8.625ZM11.3333 3C15.9762 3 19.6667 6.875 19.6667 11.75C19.6667 18.25 11.3333 28 11.3333 28C11.3333 28 3 18.25 3 11.75C3 6.875 6.69048 3 11.3333 3ZM11.3333 5.5C8 5.5 5.38095 8.25 5.38095 11.75C5.38095 13 5.38095 15.5 11.3333 23.875C17.2857 15.5 17.2857 13 17.2857 11.75C17.2857 8.25 14.6667 5.5 11.3333 5.5Z"
//                 fill="#FB631C"
//               />
//             </svg>
//           </Box>
//           <Typography
//             sx={{
//               color: "#FB631C",
//               fontSize: "26px",
//               fontWeight: "500",
//               px: "20px",
//             }}
//           >
//             Live Bidding
//           </Typography>
//         </Box>
//         {menuItems.map((item) => {
//           return (
//             <Grid>
//               <Box
//                 sx={{
//                   width: "100%",
//                   borderRadius: "15px",
//                   display: "flex",
//                   padding: "10px",
//                   alignItems: "center",
//                   justifyContent: "space-between",
//                 }}
//               >
//                   <Accordion>
//                     <AccordionSummary
//                       expandIcon={<ExpandMoreIcon />}
//                       aria-controls="panel1a-content"
//                       id="panel1a-header"
//                     >
//                          <Box
//                   sx={{
//                     display: "flex",
//                     alignItems: "center",
//                   }}
//                  >
//                   {item.icons}
//                   <Typography
//                     sx={{
//                       color: "#000",
//                       fontSize: "16px",
//                       fontWeight: "500",
//                       px: "20px",
//                     }}
//                   >
//                     {item.itemName}
//                   </Typography>
//                 </Box>

//                     </AccordionSummary>
//                     <AccordionDetails>
//                       <Typography>
//                         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                         Suspendisse malesuada lacus ex, sit amet blandit leo
//                         lobortis eget.
//                       </Typography>
//                     </AccordionDetails>
//                   </Accordion>

//               </Box>
//             </Grid>
//           );
//         })}
//       </Grid>
//     </Grid>
//   );

export default LeftSideBar;
