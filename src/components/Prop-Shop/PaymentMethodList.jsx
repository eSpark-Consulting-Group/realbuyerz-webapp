import React from 'react'

import { Box, Button, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';

const PaymentMethodList = ({paymentMedthodDetails, handleDelete, selected, handleChange}) => {
    return (
        <Box sx={{ my: '20px', maxWidth: '485px', }}>
            <Typography
                sx={{
                    fontSize: '18px',
                    fontWeight: 500,
                    fontStyle: 'normal',
                    py: 2,
                    px: 3
                }}>
                My card
            </Typography>
            <RadioGroup
                row
                value={selected}
                name="radio-buttons-group"
                onChange={handleChange}
            >
                {paymentMedthodDetails.map((card, index) => (
                    card.isCheckBox &&
                    <Box sx={{
                        display: 'flex', justifyContent: 'space-between',
                        border: '1px solid #E7E7E7', borderRadius: '10px', my: 1, padding: 1
                    }}>
                        <Box>
                            <FormControlLabel
                                key={card.card_number}
                                value={card.card_number}
                                control={<Radio />}
                                label={card.name_on_card}
                            />
                        </Box>
                        <Box>
                            <Typography>{card.name_on_card}</Typography>
                            <Typography>{card.card_number}</Typography>
                        </Box>
                        <Box>
                            <Button onClick={() => handleDelete(index)}>
                                <DeleteIcon />
                            </Button>
                        </Box>
                    </Box>
                ))}
            </RadioGroup>
        </Box>
    )
}

export default PaymentMethodList
