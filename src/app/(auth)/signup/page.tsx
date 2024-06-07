"use client";
import Button from "@/ui/Button";
import Link from "next/link";
import { useState } from "react";

function SignUpPage() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    function handleSignUp(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        // ...
    }

    return (
        <form className="text-center sm:w-[350px] w-full space-y-5" onSubmit={handleSignUp}>
            <h1 className="text-3xl">Sign Up</h1>
            <div className="flex flex-col space-y-5">
                <input
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full border-2 border-stone-300 focus-within:border-primary rounded-md h-10 px-3"
                    required
                    type="text"
                    placeholder="firstName..."
                    name="firstName"
                />
                <input
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full border-2 border-stone-300 focus-within:border-primary rounded-md h-10 px-3"
                    required
                    type="text"
                    placeholder="lastName..."
                    name="lastName"
                />
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border-2 border-stone-300 focus-within:border-primary rounded-md h-10 px-3"
                    required
                    type="email"
                    placeholder="Email..."
                    name="email"
                />
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border-2 border-stone-300 focus-within:border-primary rounded-md h-10 px-3"
                    required
                    type="password"
                    placeholder="Password..."
                    name="password"
                />

                <p className="text-sm text-stone-500">
                    Already have an account?{" "}
                    <Link href="/login" className="text-primary">
                        Login
                    </Link>
                </p>
            </div>
            <Button className="w-full" variant="primary" type="submit">
                Sign Up
            </Button>
        </form>
    );
}

export default SignUpPage;
