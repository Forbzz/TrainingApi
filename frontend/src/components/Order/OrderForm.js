import React, {useState, useEffect} from 'react'
import Form from "../../layouts/Form"
import {ButtonGroup, Grid, InputAdornment, makeStyles, Button as MuiButton} from "@material-ui/core";
import Input from "../../controls/Input"
import Select from "../../controls/Select"
import Button from "../../controls/Button"
import {useForm} from "../../hooks/useForm";
import ReplayIcon from '@material-ui/icons/Replay';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import ReorderIcon from '@material-ui/icons/Reorder';
import {createAPIEndpoint, ENDPOINTS} from "../../api"
import {roundToDecimalPoint} from "../../utils";

const pMethods = [
    {id:'none', title : 'Select'},
    {id:'Cash', title : 'Cash'},
    {id:'Card', title : 'Card'},
]



const useStyle = makeStyles(theme => ({
    adornmentText: {
        '& .MuiTypography-root': {
            color: '#f3b33d',
            fontWeight: 'bolder',
            fontSize: '1.5em'
        }
    },
    submitButtonGroup: {
        backgroundColor: '#f3b33d',
        color: '#000',
        margin: theme.spacing(1),
        '& .MuiButton-label': {
            textTransform: 'none'
        },
        '&:hover': {
            backgroundColor: '#f3b33d',
        }
    }
}))

export default function OrderForm(props){

    const {values, setValues, errors, handleInputChange} = props;
    const classes = useStyle();

    const [customerList, setCustomerList] = useState([]);

    useEffect(()=>{
    createAPIEndpoint(ENDPOINTS.CUSTOMER).fetchAll()
        .then(res=>{
            let customerList = res.data.map(item => ({
                id : item.customerId,
                title : item.customerName
            }));
            console.log("ВНИМАНИЕ");
            console.log(customerList);
            customerList = [{id: 0, title: 'Select'}].concat(customerList);
            setCustomerList(customerList);
        })
        .catch(err => console.log(err))
    }, [])

    useEffect(()=>{
        let gTotal = values.orderDetails.reduce((tempTotal,item)=>{
            return tempTotal + (item.quantity * item.foodItemPrice);
        },0);
        setValues({
            ...values,
            gTotal : roundToDecimalPoint(gTotal)
        })

    },[JSON.stringify(values.orderDetails)])

    return (
        <Form>
            <Grid container>
                <Grid item xs={6}>
                    <Input
                        disabled
                        label="Order Number"
                        name="orderNumber"
                        value={values.orderNumber}
                        InputProps={{
                            startAdornment: <InputAdornment
                                className={classes.adornmentText}
                                position="start">#</InputAdornment>
                        }}
                    />
                    <Select
                        label="Customer"
                        name="customerId"
                        value={values.customerId}
                        onChange = {handleInputChange}
                        options={customerList}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Select
                        label="Payment Method"
                        name="pMethod"
                        value={values.pMethod}
                        onChange={handleInputChange}
                        options={pMethods}
                    />
                    <Input
                        disabled
                        label="Grand Total"
                        name="gTotal"
                        value={values.gTotal}
                        InputProps={{
                            startAdornment: <InputAdornment
                                className={classes.adornmentText}
                                position="start">$</InputAdornment>
                        }}
                    />
                    <ButtonGroup className={classes.submitButtonGroup}>
                        <MuiButton
                            size="large"
                            endIcon={<RestaurantMenuIcon/>}
                            type="submit">Submit</MuiButton>
                        <MuiButton
                            size="small"
                            startIcon={<ReplayIcon/>}
                            type="submit"/>
                    </ButtonGroup>
                    <Button
                    size="large"
                    startIcon={<ReorderIcon/>}
                    >Orders</Button>
                </Grid>
            </Grid>
        </Form>
    );
}