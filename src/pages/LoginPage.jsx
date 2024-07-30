import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import wall from "../assets/wall.jpg";
import { Toaster, toast } from "react-hot-toast";

const LoginPage = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:8002/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userName: userName,
        password: password,
      }),
    });

    const data = await response.json();

    if (response.ok) {
        toast.success('Login successful.', {
            style: {
              border: '1px solid #713200',
              padding: '16px',
              color: '#713200',
            },
            iconTheme: {
              primary: '#0B0B0B',
              secondary: '#FFFAEE',
            },
          }); 
    console.log('Login successful:', data);
      setTimeout(() => {
        navigate("/home");
      }, 2000)  
      } else {
      toast.error(data.message || 'Login failed');
      setError(data.message || 'Login failed');
    }
  };

  return (
    <>
    <Toaster   position="top-center" duration="3000" />
    <div className="w-full lg:grid lg:min-h-[400px] lg:grid-cols-2 xl:min-h-[400px]">
      <div className="hidden bg-muted lg:block">
        <img src={wall} alt="Image" />
      </div>
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <form onSubmit={handleLogin} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="userName">User Name</Label>
              <Input
                id="userName"
                placeholder="sayem"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="******"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link to="/register" className="underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default LoginPage;
