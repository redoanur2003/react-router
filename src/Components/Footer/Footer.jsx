import { Facebook, FacebookIcon, Info, Mail, Phone } from 'lucide-react';
import React from 'react';

const Footer = () => {
    return (
        <div>
            <h2>Thanks for visiting our university.</h2>
            <ul className='grid grid-cols-2 md:flex gap-6 justify-center'>
                <li className='flex'><FacebookIcon></FacebookIcon> <li> Facebook</li></li>
                <li className='flex'> <Mail></Mail> <li>Google</li></li>
                <li className='flex'><Info></Info> <li>Wikipedia</li></li>
                <li className='flex'><Phone></Phone> <li>Contact us</li></li>
            </ul>
        </div>
    );
};

export default Footer;