import React from 'react'
import styles from './PricingForm.module.css'
import PricingOptions from './PricingOptions'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import axios from 'axios'
import { Button } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

function PricingForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onFormSubmit = (formData) => {
        // console.log(formData);
        axios({
            method: 'post',
            url: 'https://back.ezcolab.com/api/static/connectlead',
            data: "name=" +
                formData.name +
                "&email=" +
                formData.email +
                "&course_id=" +
                formData.plan +
                "&phone=" +
                formData.phone +
                "&institute_id=" +
                '5fd857718c56d02080428280'
        })
            .then((response) => {
                // console.log(response);
                alert('sucess')
            }).catch((err) => {
                alert(err.message)
            })
    }

    return (
        <>
            <div
                className="bg-transparent pt-10 mb-20"
            >
                <div className=" px-4 lg:px-0 max-w-6xl mx-auto">
                    <div className="grid items-center lg:grid-cols-2 gap-x-20">
                        <div className="col-span-1 order-last lg:order-first">
                            <div className="">
                                <form onSubmit={handleSubmit(onFormSubmit)} id="requestForm" data-toggle="validator" data-focus="false" className='space-y-3'>

                                    <div>
                                        <TextField
                                            type="text"
                                            label='Name'
                                            variant='outlined'
                                            className='w-full'
                                            {...register('name', { required: true })}
                                        />
                                        {errors.name && <p className='text-gray-600 text-xs'>name is required</p>}
                                    </div>

                                    <div >
                                        <TextField
                                            label="Email"
                                            type="email"
                                            variant="outlined"
                                            className='w-full'
                                            {...register('email', { required: true })}
                                        />
                                        {errors.email && <p className='text-gray-600 text-xs'>email is required</p>}
                                    </div>

                                    <div>
                                        <TextField
                                            label="Phone"
                                            type="text"
                                            variant="outlined"
                                            className='w-full'
                                            {...register('phone', { required: true })}
                                        />
                                        {errors.phone && <p className='text-gray-600 text-xs'>phone is required</p>}
                                    </div>

                                    <div>
                                        <FormControl variant="outlined" className='w-full'>
                                            <InputLabel id="demo-simple-select-outlined-label">Plan</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-outlined-label"
                                                id="demo-simple-select-outlined"
                                                label="plan"

                                                {...register('plan', { required: true })}
                                            >
                                                <MenuItem value='Collaborator'>Collaborator</MenuItem>
                                                <MenuItem value='Creator'>Creator</MenuItem>
                                                <MenuItem value='EZ Creator'>EZ Creator</MenuItem>
                                                <MenuItem value='other'>other</MenuItem>
                                            </Select>
                                        </FormControl>
                                        {errors.plan && <p className='text-gray-600 text-xs'>plan is required</p>}
                                    </div>

                                    <div className="text-sm">
                                        <input
                                            type="checkbox"
                                            id="rterms"
                                            value="Agreed-to-Terms"
                                            name="rterms"
                                            required
                                            className='mr-2'
                                        />I agree with EZ Colab's stated
                                        <Link to="/privacy-policy.html">Privacy Policy</Link> and
                                        <Link to="/terms-conditions.html">Terms & Conditions</Link>
                                        <div className="help-block with-errors"></div>
                                    </div>

                                    <div>
                                        <Button
                                            variant='contained'
                                            type='submit'
                                            className={styles.pricingFormBtn}
                                        >
                                            Submit
                                        </Button>

                                    </div>
                                    <div className="form-message">
                                        <div id="rmsgSubmit" className="h3 text-center hidden"></div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="col-span-1">
                            <PricingOptions />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PricingForm
