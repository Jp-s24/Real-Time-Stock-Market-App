"use client";

import { useForm } from "react-hook-form";
import InputField from "@/components/forms/InputField";
import FooterLink from "@/components/forms/FooterLink";
import { Button } from "@/components/ui/button";

type SignInFormData = {
    email: string;
    password: string;
};

const SignIn = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<SignInFormData>({
        defaultValues: {
            email: "",
            password: "",
        },
        mode: "onBlur",
    });

    const onSubmit = async (data: SignInFormData) => {
        try {
            console.log("Sign in data:", data);

            // Sign-in logic goes here
        } catch (error) {
            console.error("Sign in error:", error);
        }
    };

    return (
        <>
            <h1 className="form-title">Sign In</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <InputField
                    name="email"
                    label="Email"
                    type="email"
                    placeholder="Enter Your Email"
                    register={register}
                    error={errors.email}
                    validation={{
                        required: "Email is required",
                        pattern: {
                            value: /^\w+@\w+\.\w+$/,
                            message: "Please enter a valid email address",
                        },
                    }}
                />

                <InputField
                    name="password"
                    label="Password"
                    placeholder="Enter your password"
                    type="password"
                    register={register}
                    error={errors.password}
                    validation={{
                        required: "Password is required",
                        minLength: {
                            value: 8,
                            message: "Password must be at least 8 characters",
                        },
                    }}
                />

                <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="yellow-btn w-full mt-5"
                >
                    {isSubmitting ? "Signing in..." : "Sign In"}
                </Button>
            </form>

            <FooterLink
                text="Don't have an account?"
                linkText="Create an account"
                href="/sign-up"
            />
        </>
    );
};

export default SignIn;