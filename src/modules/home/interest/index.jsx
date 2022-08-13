import React from 'react'
import { Button, Checkbox, FormGroup, FormControlLabel } from '@mui/material'

import { getInterstList } from './helpers'
import { sInterest, sInterestCheckbox } from './styles'

const Interest = () => {
    return (
        <div className={sInterest}>
            <div>
                <p>
                    <b>Pilih Minat:</b>
                </p>
            </div>
            <div className={sInterestCheckbox}>
                <FormGroup>
                    {getInterstList().map((item, index) => {
                        return (
                            <FormControlLabel
                                key={index}
                                label={item}
                                control={<Checkbox />}
                            />
                        )
                    })}
                </FormGroup>
            </div>
            <div>
                <Button variant='contained' color='primary' fullWidth>
                    Submit
                </Button>
            </div>
        </div>
    )
}

export default Interest
