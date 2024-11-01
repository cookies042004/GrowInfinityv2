import React, { useState } from "react";
import axios from "axios"; // Import Axios
import arrowRight from "../assets/img/arrow-right.png";
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import "./PropertyCard.css";
import { Link } from "react-router-dom";
import { Button, TextField } from "@mui/material";

export const PropertyCard = ({ id, name, address, image }) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', mobile: '', message: '', propertyName: name });
  const [error, setError] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setFormData({ name: '', mobile: '', message: '', property: id }); // Reset form
    setError('');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.mobile || !formData.message) {
      setError('All fields are required.');
      return;
    }

    try {
      await axios.post(`${process.env.BASE_URL}/api/v1/property-enquiry`, formData);
      handleClose(); // Close modal on successful submission
      alert('Enquiry submitted successfully!');
    } catch (err) {
      console.error(err);
      setError('Failed to submit enquiry.');
    }
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <div className="property-card font-poppins text-[#03002E] p-5 w-[350px] my-5">
      <div className="flex justify-center">
        <img
          src={`${process.env.BASE_URL}/${image}`}
          alt=""
          className="rounded-[50%] object-center"
          style={{ height: '300px' }}
        />
      </div>
      <h1 className="text-xl font-semibold mt-5">{name}</h1>
      <p className="font-normal ">{address}</p>
      <p className="font-semibold text-[#161A23]">3 BHK</p>
      <p className="font-semibold">From INR 17 Lakh</p>
      <div className="flex gap-8 py-6">
        <div className="bg-[#03002E] rounded-[16.7px] px-7 py-1">
          <Link to={`/project/${id}`}>
            <button className="text-white">Details</button>
          </Link>
        </div>
        <button onClick={handleOpen} className="text-white bg-[#03002E] rounded-[16.7px] px-7 py-1 flex justify-between gap-4 items-center">
          Enquiry
          <span>
            <img src={arrowRight} alt="" />
          </span>
        </button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ textAlign: 'center' }}>
            Enquiry Form
          </Typography>
          {error && <Typography color="error">{error}</Typography>}
          <form onSubmit={handleSubmit}>
            <div className="my-10">
              <TextField size="small" id="name" name="name" label="Name" variant="outlined" value={formData.name} fullWidth
                onChange={handleChange} required />
            </div>
            <div className="my-10">
              <TextField size="small" id="mobile" name="mobile" label="Mobile Number" variant="outlined" value={formData.mobile} fullWidth
                onChange={handleChange} required />
            </div>
            <div className="my-10">
              <TextField size="small"
                required
                id="propertyName"
                name="propertyName"
                label="Property"
                defaultValue={name}
                fullWidth
              />
            </div>
            <div className="my-10">
              <TextField size="small"
                required
                id="message"
                name="message"
                label="Message"
                multiline
                value={formData.message}
                onChange={handleChange}
                fullWidth
              />
            </div>
            <input type="hidden" name="propertyName" value={formData.propertyName} />
            <Button variant="contained" sx={{ background: '#03002E', textTransform: 'none', }} fullWidth type="submit">
              Submit
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};
