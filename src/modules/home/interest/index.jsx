import React from 'react'
import { Button, Checkbox, FormGroup, FormControlLabel } from '@mui/material'

import { getInterstList } from './helpers'
import { sInterest, sInterestCheckbox } from './styles'

const Interest = ({
    isLoading,
    submitButtonHandler,
    interestCheckboxOnChangeHandler,
}) => {
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
                                name={item}
                                label={item}
                                disabled={isLoading}
                                control={<Checkbox />}
                                onChange={interestCheckboxOnChangeHandler}
                            />
                        )
                    })}
                </FormGroup>
            </div>
            <div>
                <Button
                    color='primary'
                    variant='contained'
                    disabled={isLoading}
                    onClick={submitButtonHandler}
                    fullWidth
                >
                    Submit
                </Button>
            </div>
        </div>
    )
}

export default Interest
