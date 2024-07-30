import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import wall from "../assets/wall.jpg";
const Register = () => {
  return (
    <div className="w-full lg:grid lg:min-h-[400px] lg:grid-cols-2 xl:min-h-[400px]">
      <div className="hidden bg-muted lg:block">
        <img src={wall} alt="Image" />
      </div>
        <CardContent>
          <div className="mx-auto grid w-[350px] gap-6 mt-[50px]">
            <div className="grid gap-2 text-center">
              <h1 className="text-3xl font-bold">Sign Up</h1>
              <p className="text-balance text-muted-foreground">
                Enter your information to create an account{" "}
              </p>
            </div>

            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="first-name">First name</Label>
                  <Input id="first-name" placeholder="Max" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="last-name">Last name</Label>
                  <Input id="last-name" placeholder="Robinson" required />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="dob">Date of birth</Label>
                <Input id="dob" type="date" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="image">Profile Picture</Label>
                <Input
                  id="image"
                  type="file"
                  required
                  
                />
              </div>
              <Button type="submit" className="w-full">
                Create an account
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link to="/" className="underline">
              Sign in
              </Link>
            </div>
          </div>
        </CardContent>
    </div>
  );
};

export default Register;
