import { mailtrapClient, sender } from "../mailtrap/mailtrap.config.js"
import { PASSWORD_RESET_REQUEST_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE, VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js"

export const sendVerificationEmail = async (email, verificationToken) => {
    const recipient = [{email}]

    try{
        const response = await mailtrapClient.send({
            from:sender, 
            to: recipient,
            subject: "verify your email",
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
            category: "Email verification"
        }) 

        console.log("Email sent successfully", response)
    }catch(error) {
        console.error("error sending verification:", error)
        throw new error(`error sending verification email : ${error}`)
    } 
} 

export const sendWelcomeEmail = async (email, name) => {
    const recipient = [{email}];
    
    try{
        const response = await mailtrapClient.send({
            from:sender, 
            to: recipient,
            template_uuid: "a642b166-ef66-48c7-a374-025f0cf57d12",
            template_variables: {
            company_info_name: "Auth company",
            name: name
            }
        }) 

        console.log("Email sent successfully", response)
    }catch(error) {
        console.error("error sending welcome email:", error)
        throw new error(`error sending welcome email : ${error}`)
    } 
}

export const sendPasswordResetEmail = async (email, resetURL) => {
    const recipient = [{email}];

    try {
        const response = await mailtrapClient.send({
            from : sender,
            to:recipient,
            subject:"Reset password",
            html:PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
            category: "Password Reset"
        })
    } catch (error) {
        console.error("error sending password reset email:", error)
        throw new error(`error sending password reset email : ${error}`)
    }
}

export const sendResetSuccessEmail = async (email) => {
    const recipient = [{email}];
    try {
        const response = await mailtrapClient.send({
            from : sender,
            to:recipient,
            subject:"Password reset successful",
            html:PASSWORD_RESET_SUCCESS_TEMPLATE,
            category: "Password Reset"
        })
        console.log("Password reset successfully", response)
    } catch (error) {
        console.error("error sending password reset successfull email:", error)
        throw new error(`error sending password reset successfull email : ${error}`)
    }
}