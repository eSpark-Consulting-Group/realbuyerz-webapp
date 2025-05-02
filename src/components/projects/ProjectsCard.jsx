// 'use client';

// import { PROJECTS_DATA } from '@/src/constants/Projects/projects';
// import {
//   Typography,
//   Box,
//   Grid,
//   Pagination,
//   PaginationItem,
//   Skeleton,
// } from '@mui/material';
// import Image from 'next/image';
// import Link from 'next/link';
// import React, { useState } from 'react';

// const ITEMS_PER_PAGE = 3;

// const ProjectsCard = ({ data }) => {
//   const [currentPage, setCurrentPage] = useState(1);

//   const totalItems = data?.length || PROJECTS_DATA.length;
//   const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
//   const currentProjects = (data || PROJECTS_DATA).slice(
//     (currentPage - 1) * ITEMS_PER_PAGE,
//     currentPage * ITEMS_PER_PAGE
//   );

//   const handleChangePage = (_event, newPage) => {
//     setCurrentPage(newPage);
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const renderImage = (project) => {
//     const hasImage = project?.images?.length > 0;
//     const src = hasImage
//       ? project.images[0]
//       : '/images/default/default_project_image.jpg';

//     return hasImage ? (
//       <Image
//         src={src}
//         alt={`Project ${project?.id}`}
//         fill
//         style={{ objectFit: 'cover' }}
//       />
//     ) : (
//       <Skeleton variant="rectangular" width="100%" height={300} />
//     );
//   };

//   const renderText = (text, variant = 'text', width = 100, height = 20) =>
//     text ? text : <Skeleton variant={variant} width={width} height={height} />;

//   return (
//     <>
//       <Grid container spacing={2}>
//         {currentProjects.map((project, index) => (
//           <Grid
//             key={index}
//             item
//             xs={12}
//             sm={6}
//             md={4}
//             sx={{
//               backgroundColor: '#fff',
//               border: '1px solid #E4E4E4',
//               borderRadius: '5px',
//               overflow: 'hidden',
//             }}
//           >
//             <Link href={`/projects/${project?.property_id}`}>
//               <Box position="relative" height={300}>
//                 {renderImage(project)}
//               </Box>
//             </Link>

//             <Box p={2}>
//               <Box display="flex" alignItems="flex-end" pb={2}>
//                 <Typography sx={{ fontSize: 20, fontWeight: 500, pr: 1 }}>
//                   {renderText(project?.amountCurrency)}
//                 </Typography>
//                 <Typography sx={{ fontSize: 25, fontWeight: 600 }}>
//                   {renderText(project?.amount, 'rectangular', 100, 30)}
//                 </Typography>
//               </Box>

//               <Typography
//                 sx={{ fontSize: 16, fontWeight: 500, pb: 1 }}
//                 noWrap
//               >
//                 {renderText(`${project?.location}, ${project?.city}`)}
//               </Typography>

//               <Box display="flex" gap={1}>
//                 <Typography sx={{ fontSize: 16 }}>
//                   {renderText(project?.area)}
//                 </Typography>
//                 <Typography sx={{ fontSize: 16 }}>
//                   {renderText(project?.areaUnit)}
//                 </Typography>
//               </Box>

//               <Typography sx={{ fontSize: 18, fontWeight: 600, pb: 1 }}>
//                 {renderText(project?.orientation)}
//               </Typography>

//               <Typography sx={{ fontSize: 16, lineHeight: '25px' }}>
//                 {project?.description?.length > 150
//                   ? `${project.description.slice(0, 147)}...`
//                   : renderText(project?.description)}
//               </Typography>
//             </Box>
//           </Grid>
//         ))}
//       </Grid>

//       {totalItems > ITEMS_PER_PAGE && (
//         <Box display="flex" justifyContent="center" mt={3}>
//           <Pagination
//             count={totalPages}
//             page={currentPage}
//             onChange={handleChangePage}
//             color="primary"
//             renderItem={(item) => (
//               <PaginationItem
//                 {...item}
//                 sx={{
//                   borderRadius: '4px',
//                   backgroundColor: '#fff',
//                   border: '1px solid #DFE3E8',
//                   color: item?.type !== 'page' ? '#C4CDD5' : '#000',
//                   fontWeight: 'bold',
//                   '&:hover': {
//                     backgroundColor: '#fff',
//                   },
//                   '&.Mui-selected': {
//                     backgroundColor: '#fff',
//                     color: '#4200FF',
//                     border: '1px solid #4200FF',
//                   },
//                   '&.Mui-disabled': {
//                     backgroundColor: '#919EAB',
//                     color: '#C4CDD5',
//                   },
//                 }}
//               />
//             )}
//           />
//         </Box>
//       )}
//     </>
//   );
// };

// export default ProjectsCard;
