import React,{useState} from "react";
import { TextField } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
const PasswordFields = () => {
     const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };
  const handleConfirmPasswordToggle = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };
    return (
        <>
         <TextField
              label="Password"
              variant="outlined"
              type={showPassword ? 'text' : 'password'}
              fullWidth
              name="password"
              // value={formData.password}
              onChange={handlePassword}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      style={{ color: '#444444' }}
                      // onClick={handlePassword}
                      onClick={handlePasswordToggle}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          <TextField
              label="Confirm Password"
              variant="outlined"
              type={showConfirmPassword ? 'text' : 'password'}
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      style={{ color: '#444444' }}
                      onClick={handleConfirmPasswordToggle}
                      edge="end"
                    >
                      {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              onChange={handleConfirmPassword}
            />
            </>
    )
}
export default PasswordFields;