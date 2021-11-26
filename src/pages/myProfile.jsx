import { Button, Grid, Input } from "@mui/material";
import Header from "./header";
import React, { useState } from 'react';

const MyProfile = () => {
    const [image, setImage] = useState(null);
    return (
        <Grid container direction="column" >
            <Grid item xs>
            {image && <img src={URL.createObjectURL(image)}  /> } 
            </Grid>
            <Grid item xs={4}>
            <Input placeholder="Username" />
            <Button
                variant="contained"
                component="label"
            >Upload
                <input hidden type="file" accept="image/*" multiple onChange={(event) => {
                    setImage(event.target.files[0])
                    console.log(event.target.files[0])
                }} />
            </Button>
            </Grid>
        </Grid>
    );
}

export default MyProfile;