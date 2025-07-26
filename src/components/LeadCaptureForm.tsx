'use client'
import { useState } from 'react';
import {Gift } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function LeadCaptureForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone:'',
    });

    const formReset = () => {
        setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone:'',    
        });
    };

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log('form submitted:', formData);
        formReset(); //add error handling in future
    };

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className='max-w-md rounded-xl p-8 border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.8)]'>
            <div className='flex flex-col gap-2 items-center'>
                <div className="bg-primary rounded-full p-3 w-fit mb-4">
                    <Gift className="w-8 h-8 text-primary-foreground"/>
                </div>
                <h1 className='text-center font-bold text-primary text-lg md:text-xl'>Get Your FREE Walmart Success Blueprint!</h1>
                <p className='text-center text-muted-foreground text-sm md:text-lg'>Enter your details below to access the complete step-by-step system</p>
                <form onSubmit={handleSubmit} className='space-y-4 w-full mt-3'>
                    <div>
                        <Input
                        type='text'
                        name='firstName'
                        placeholder='First Name'
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required/>
                    </div>
                    <div>
                        <Input
                        type='text'
                        name='lastName'
                        placeholder='Last Name'
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required/>
                    </div>
                    <div>
                        <Input
                        type='email'
                        name='email'
                        placeholder='Email'
                        value={formData.email}
                        onChange={handleInputChange}
                        required/>
                    </div>
                    <div>
                        <Input
                        type='tel'
                        name='phone'
                        placeholder='Phone Number'
                        value={formData.phone}
                        onChange={handleInputChange}
                        required/>
                    </div>
                    <div className=' flex justify-center'>
                        <Button variant='cta' className='w-full py-6'>GET MY FREE BLUEPRINT!</Button>
                    </div>
                </form>
                

            </div>
        </div>
    )
}