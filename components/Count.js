'use client'
import { useEffect, useState } from "react";

export default function Count({ dateEnd }) 
{
    const [time, setTime] = useState();
    const [days , setDays] = useState(0);   
    const [hours , setHours] = useState(0);
    const [minutes , setMinutes] = useState(0);
    const [seconds , setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        const now = new Date();
        const diff = dateEnd - now;
        setDays(Math.floor(diff / 1000 / 60 / 60 / 24));
        setHours(Math.floor(diff / 1000 / 60 / 60) % 24);
        setMinutes(Math.floor(diff / 1000 / 60) % 60);
        setSeconds(Math.floor(diff / 1000) % 60);
        setTime(`${days}d ${hours}h ${minutes}m ${seconds}s`);
        }, seconds);
        return () => clearInterval(interval);
    }, [seconds]);
    return (
        <p className="lg:text-[7rem] md:text-[4rem] text-[2.5rem] ">{time}</p>
    );
}