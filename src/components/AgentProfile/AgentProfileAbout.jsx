import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const AgentAbout = () => {
  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        paddingTop: "40px",
        marginTop: "110px",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          position: "absolute",
          left: 0,
          top: 0,
          color: "text.primary",
          fontWeight: "bold",
          fontSize: "25px",
          fontFamily: "Inter",
        }}
      >
        About Arman Khan
      </Typography>
      <Typography
        sx={{
          width: "100%",
          paddingBottom: "10px",
          color: "zinc.800",
          fontSize: "16px",
          fontFamily: "Inter",
          fontWeight: "normal",
          lineHeight: "25px",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborumAt vero eos et accusamus et iusto odio
        dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
        corrupti quos dolores et quas molestias excepturi sint occaecati
        cupiditate non provident, similique sunt in culpa qui officia deserunt
        mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum
        facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis
        est eligendi optio cumque nihil impedit quo minus id quod maxime placeat
        facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
        Temporibus autem quibusdam et aut officiis debitis aut rerum
        necessitatibus saepe eveniet ut et voluptates repudiandae sint et
        molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente
        delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut
        perferendis doloribus asperiores repellat
      </Typography>
    </Box>
  );
};

export default AgentAbout;
