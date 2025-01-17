import { Box, Card, TextField, Typography } from "@mui/material";
import CustomButton from "../../components/ui/CustomButton";
import ViewRegistrationComp from "../../components/ViewRegistration";
// import axiosInstance from "../../utils/axios";

export default function ViewRegistration() {
    // const claimApi = async ()=>{
    //     try {
    //         const res = await axiosInstance.post(`api/claims/claim/`,{
    //             headers: {
    //                 "Content-Type": "application/json"
    //             }
    //         });
    //         console.log("street res ===", res);
    //     } catch (error) {
    //         console.log("Error:", error);
    //     }
    // }
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }} my={3}>
            <Card sx={{ width: '95%', margin: 'auto', padding: '20px', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                <Box sx={{display:'flex',justifyContent:'space-between'}}>
                    <Typography sx={{ fontSize: '1.05rem',py:'10px' }}>Registration Addresss: 123 Some St, Sometown, PA 12345</Typography>
                    <Typography sx={{ fontSize: '1.05rem',py:'10px' }}>Assigned Dealer: Super Solar Inc.</Typography>
                </Box>
                <Box sx={{ width: '40%', display: 'flex', flexDirection: 'row', gap: '5px' }}>
                    <Typography>Owner Name:</Typography>
                    <TextField
                        type='text'
                        // onBlur={handleBlur}
                        // onChange={handleChange}
                        // value={values.email}
                        name='email'
                        id="outlined-size-small"
                        className="w-1/2"
                        // label='Jim & Joan Smith'
                        size="small"
                        value='Jim & Joan Smith'
                    />
                    <CustomButton buttonName="Update" />
                </Box>
                <Box sx={{ width: '40%', display: 'flex', flexDirection: 'row', gap: '5px' }} py={2}>
                    <CustomButton buttonName="Show Parts" />
                    <CustomButton buttonName="Upload Documents" />
                    <CustomButton buttonName="Open Claim" />
                </Box>
                <Card sx={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                    <ViewRegistrationComp />
                </Card>
            </Card>
        </Box>
    )
}
