'use client'
import { useState } from 'react';
import {Gift, ArrowRight } from 'lucide-react';

export default function LeadCaptureForm() {
    return (
        <div className='max-w-md rounded-xl p-8 border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.8)]'>
            <div className='flex flex-col gap-2 items-center'>
                <div className="bg-primary rounded-full p-3 w-fit mb-4">
                    <Gift className="w-8 h-8 text-primary-foreground"/>
                </div>
                <h1 className='text-center font-bold text-primary text-lg md:text-xl'>Get Your FREE Walmart Success Blueprint!</h1>
                <p className='text-center text-muted-foreground text-sm md:text-lg'>Enter your details below to access the complete step-by-step system</p>

                

            </div>
        </div>
    )
}