import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  CardActions,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export const EventCard = () => {
  return (
    <div>
      <Card sx={{ width: 345 }}>
        <CardMedia
          sx={{ height: 345 }}
          image="https://cdn.pixabay.com/photo/2020/11/04/15/13/burger-5712704_1280.jpg"
        />
        <CardContent>
          <Typography variant="h5">Indian Fast Food</Typography>
          <Typography variant="body2">50% off on your first order</Typography>

          <div className="py-2 space-y-2">
            <p>{"mumbai"}</p>
            <p className="text-sm text-blue-500">December 25, 2024 12.00AM</p>
            <p className="text-sm text-red-500">December 26, 2024 12.00AM</p>
          </div>
        </CardContent>

        {false && (
          <CardActions>
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </CardActions>
        )}
      </Card>
    </div>
  );
};
