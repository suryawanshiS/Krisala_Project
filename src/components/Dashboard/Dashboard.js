// import React, { useState } from "react";
// import { Box, Grid, Typography, Button, MenuItem, Select, Divider } from "@mui/material";
// import Sidebar from "../Sidebar/Sidebar";
// import TicketCard from "../TicketCard/TicketCard";
// import SortRoundedIcon from '@mui/icons-material/SortRounded';

// const Dashboard = () => {
//   const [dropdownValue, setDropdownValue] = React.useState("41 Elite");
//   const [showMenu , setShowMenu] = useState(false)

//   return (
//     <Box display="flex" sx={{ minHeight: "100vh" }}>
//       {showMenu ? (
//     <div className="" style={{position: window.innerWidth > 768 ?  'relative' : "absolute" , zIndex:999 , backgroundColor:'rgb(244, 244, 244)'}}>
//       <Button onClick={()=>{setShowMenu(false)}}> x </Button>
//       <Sidebar />
//       </div>
//       ) :  (
//         <div className="" style={{position:'absolute'}}>
//         <Button onClick={()=>{setShowMenu(true)}}> <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg> </Button>
//         </div>
//       )}
//       <Box flex={1} p={3} bgcolor="#f9f9f9">
//         {/* Header Section */}
//         <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
//           <Typography variant="h6" sx={{ fontWeight: "bold" }}>
//             Dashboard / All Tickets
//           </Typography>
//           <Box display="flex" alignItems="center">
//             {/* Dropdown Menu */}
//             <Select
//               value={dropdownValue}
//               onChange={(e) => setDropdownValue(e.target.value)}
//               variant="outlined"
//               size="small"
//               sx={{ marginRight: 2 }}
//             >
//               <MenuItem value="41 Elite">41 Elite</MenuItem>
//               <MenuItem value="Option 1">Option 1</MenuItem>
//               <MenuItem value="Option 2">Option 2</MenuItem>
//             </Select>
//             {/* Filters Icon */}
//             <Button variant="text" startIcon={<SortRoundedIcon />}>
//               Filters
//             </Button>
//           </Box>
//         </Box>

//         {/* Ticket Section */}
//         <Grid container spacing={2}>
//           <Grid item xs={12}>
//             <TicketCard ticketId="KRSL-1234" category="Plumbing > B" />
//           </Grid>
//           <Grid item xs={12}>
//             <TicketCard ticketId="KRSL-5678" category="Electrical > A" />
//           </Grid>
//         </Grid>
//       </Box>
//     </Box>
//   );
// };

// export default Dashboard;


import React, { useState, useEffect } from "react";
import { Box, Grid, Typography, Button, MenuItem, Select } from "@mui/material";
import Sidebar from "../Sidebar/Sidebar";
import TicketCard from "../TicketCard/TicketCard";
import SortRoundedIcon from '@mui/icons-material/SortRounded';

const Dashboard = () => {
  const [dropdownValue, setDropdownValue] = useState("41 Elite");
  const [showMenu, setShowMenu] = useState(false);
  const [isWebView, setIsWebView] = useState(window.innerWidth > 768);

  // Update view mode based on window size
  useEffect(() => {
    const handleResize = () => {
      setIsWebView(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Box display="flex" sx={{ minHeight: "100vh" }}>
      {/* Sidebar Section */}
      {isWebView || showMenu ? (
        <div
          style={{
            position: isWebView ? "relative" : "absolute",
            zIndex: 999,
            backgroundColor: "rgb(244, 244, 244)",
          }}
        >
          {!isWebView && (
            <Button onClick={() => setShowMenu(false)} style={{ margin: "10px" }}>
              Close
            </Button>
          )}
          <Sidebar />
        </div>
      ) : (
        <div style={{ position: "absolute" }}>
          <Button onClick={() => setShowMenu(true)} style={{ margin: "10px" }}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000">
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </Button>
        </div>
      )}

      {/* Main Content */}
      <Box flex={1} p={3} bgcolor="#f9f9f9">
        {/* Header Section */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Dashboard / All Tickets
          </Typography>
          <Box display="flex" alignItems="center">
            {/* Dropdown Menu */}
            <Select
              value={dropdownValue}
              onChange={(e) => setDropdownValue(e.target.value)}
              variant="outlined"
              size="small"
              sx={{ marginRight: 2 }}
            >
              <MenuItem value="41 Elite">41 Elite</MenuItem>
              <MenuItem value="Option 1">Option 1</MenuItem>
              <MenuItem value="Option 2">Option 2</MenuItem>
            </Select>
            {/* Filters Icon */}
            <Button variant="text" startIcon={<SortRoundedIcon />}>
              Filters
            </Button>
          </Box>
        </Box>

        {/* Ticket Section */}
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TicketCard ticketId="KRSL-1234" category="Plumbing > B" />
          </Grid>
          <Grid item xs={12}>
            <TicketCard ticketId="KRSL-5678" category="Electrical > A" />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
