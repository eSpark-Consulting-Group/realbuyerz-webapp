import { TableCell, TableRow } from "@mui/material";

export const SpaceRow = ({ space, title }) => (
    <>
      {title && (
        <TableRow>
          <TableCell colSpan={space.length} sx={{
            color:'#000',
            fontSize:'25px',
            fontStyle:'normal',
            fontWeight: 500,
            lineHeight:'normal'
          }}>
            {title}
          </TableCell>
        </TableRow>
      )}
      {!title && (
        <TableRow>
          {space.map((item, index) => (
            <TableCell key={index}>
              {item.space}
            </TableCell>
          ))}
        </TableRow>
      )}
    </>
  );