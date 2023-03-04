import { useForm } from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"


const Form = () =>{
    const schema = yup.object().shape({
        fullName: yup.string("").required("your full name is required dear !!!"),
        Email: yup.string().email().required(),
        Age: yup.number().integer().positive().min(18).required(),
        Password: yup.string().min(8).max(16).required(),
        ConfirmPassword: yup.string().oneOf([yup.ref("Password"), null], "passwords do not match").required()


    })

    const {register , handleSubmit , formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = (data) =>{
        console.log(data)
    }
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Full name ...." {...register("fullName")}/><br></br>
            <p>{errors.fullName?.message}</p>
            <input type="text" placeholder="Email ...."  {...register("Email")}/><br></br>
            <p>{errors.Email?.message}</p>
            <input type="text" placeholder="Age ...."  {...register("Age")}/><br></br>
            <p>{errors.Age?.message}</p>
            <input type="password" placeholder="Password ...." {...register("Password")} /><br></br>
            <p>{errors.Password?.message}</p>
            <input type="password" placeholder="ConfirmPassword ...."  {...register("ConfirmPassword")} /><br></br>
            <p>{errors.ConfirmPassword?.message}</p>
            <input type="submit" />

            
            
        </form>
    )
}

export default Form