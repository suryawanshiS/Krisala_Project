import React, { useState } from "react";
import NearMeOutlinedIcon from "@mui/icons-material/NearMeOutlined";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Grid,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
  Checkbox,
  FormControlLabel,
  IconButton,
} from "@mui/material";
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import ReactSpeedometer from "react-d3-speedometer";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";


const TicketCard = () => {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState(""); // Dropdown value
  const [description, setDescription] = useState("");
  const [attachment, setAttachment] = useState(null);
  const [image, setImage] = useState(null);

  // Modal handlers
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // File upload handlers
  const handleAttachmentChange = (e) => setAttachment(e.target.files[0]);
  const handleImageChange = (e) => setImage(e.target.files[0]);

  return (
    <>
      {/* Ticket Card */}
      <Card
        sx={{ marginBottom: 2, boxShadow: 2, cursor: "pointer" }}
        onClick={handleOpen}
      >
        <CardContent>
          {/* Top Section */}
          <Grid container spacing={2} alignItems="center" justifyContent="space-between">
            <Grid item xs={6}>
              <Typography variant="body2" color="text.secondary">
                Ticket ID: <strong>KRSL-1234</strong>
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: "bold", marginTop: 1 }}>
                Plumbing &gt; B
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ marginTop: 0.5 }}>
                11:00 AM | 23 Sept 24
              </Typography>
              <Typography variant="body2" sx={{ marginTop: 1 }}>
                Kitchen tap leaking
              </Typography>
              <Typography variant="body2">Location: B-702</Typography>
            </Grid>
            <Grid item xs={6} textAlign="right">
              <Box display="flex" justifyContent="flex-end" gap={4}>
                <Button variant="contained" color="success" size="small" sx={{ borderRadius: '10px' }}>
                  Accept
                </Button>
                <Button variant="contained" color="error" size="small" sx={{ borderRadius: '10px' }}>
                  Reject
                </Button>
              </Box>
              <Box mt={1} textAlign="right" display="flex" justifyContent="flex-end" alignItems="center" >
                <Typography variant="body2" sx={{ color: "text.secondary", marginRight: 1 }}>
                  Assignee: Pawan Pawra
                </Typography>
                <IconButton size="small">
                  <EditOutlinedIcon />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
          <Divider sx={{ marginY: 2 }} />

          {/* Middle Section: ReactSpeedometer */}
         
          {/* Bottom Section */}
          <Grid container spacing={2}  style={{display:'flex' ,flexDirection:'row', justifyContent:'space-between' ,alignItems:'flex-end'}}>
            <Grid item  display="flex" alignItems="center" >
              <Typography
                variant="body2"
                color="text.secondary"
                display="flex"
                alignItems="center"
              >
                <NearMeOutlinedIcon /> Add Comments
              </Typography>
            </Grid>
            <Grid  spacing={2}style={{display:'flex' ,justifyContent:'center',alignItems:"flex-end"}}  >
            <Grid item >
              <ReactSpeedometer
                style={{opacity:0.5}}
                width={100}
                height={54}
                value={50}
                minValue={0}
                maxValue={100}
                customSegmentStops={[0, 20, 40, 60, 80, 100]} // Adjusted for smoother transitions
                segmentColors={[
                  "#006400", // Dark Green
                  "#7FFF00", // Light Green
                  "#FFFF00", // Yellow
                  "#FFA500", // Orange
                  "#FF0000", // Red
                ]}
                needleColor="#000"
                needleHeightRatio={0.4} // Adjust this ratio to reduce needle height
                currentValueText=""
                textColor="transparent"
                needleTransitionDuration={1500}
                needleTransition="easeElastic"
                ringWidth={7}
              />
            </Grid>
            <Grid item>
              <Typography variant="body2" sx={{ marginLeft: 1, color: "green" }}>
                Opened from 3 days
              </Typography>
            </Grid>
          </Grid>
            <Grid item  textAlign="right" >
              <Typography variant="body2" color="text.secondary" component="span">
                Created By: Customer Name, B-702
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Popup Modal */}
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth >
        <DialogTitle>Ticket ID: KRSL-1234</DialogTitle>
        <DialogContent>
          {/* Status Dropdown */}
          <TextField
            fullWidth
            select
            label="Status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            margin="normal"
            required
          >
            <MenuItem value="Open">Open</MenuItem>
            <MenuItem value="In Progress">In Progress</MenuItem>
            <MenuItem value="Closed">Closed</MenuItem>
          </TextField>

          {/* Description Textarea */}
          <TextField
            fullWidth
            multiline
            rows={3}
            label="Description (mandatory)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            margin="normal"
            required
          />

          {/* File and Image Upload */}
          <Grid container spacing={2} alignItems="center" marginY={1}>
            <Grid item>
              <input
                accept="image/*"
                style={{ display: "none" }}
                id="image-upload"
                type="file"
                onChange={handleImageChange}
              />
              <label htmlFor="image-upload">
                <IconButton component="span" color="primary">
                  <CameraAltOutlinedIcon />
                </IconButton>
              </label>
            </Grid>
            <Grid item>
              <input
                style={{ display: "none" }}
                id="file-upload"
                type="file"
                onChange={handleAttachmentChange}
              />
              <label htmlFor="file-upload">
                <IconButton component="span" color="primary">
                  <AttachFileOutlinedIcon />
                </IconButton>
              </label>
            </Grid>
          </Grid>

          {/* Review Checkbox */}
          <FormControlLabel
            control={<Checkbox />}
            label="I have reviewed the property and closing this ticket with attaching image."
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" variant="contained" sx={{ backgroundColor: 'black', borderRadius: '10px' }}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default TicketCard;
