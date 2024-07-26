// FAQList.jsx
import React from 'react';
import Help from '../pages/Help';
import HLogo from "../assets/iconLogo.png"

const faqData = [
    {
        title: 'What is B-Connect?',
        content: 'B-Connect, an online virtual platform for conducting video conferences, webinars, live classes, and audio conferences.',
    },
    {
        title: 'How do I attend a B-Connect workshop?',
        content: 'Ways to Attend a B-Connect session\n\nAn email or calendar invite\nAn instant messaging invite\nA web browser\nB-Connect app\nA landline or mobile phone\nAn SIP/H.323 device',
    },
    {
        title: 'B-Connect account needed to participate in B-Connect meeting?',
        content: 'You can attend meetings without having an account. But making an account would improve your experience.',
    },
    {
        title: 'How do I get onto a B-Connect meeting?',
        content: 'In order to join a B Connect session you will need:\n\nA random 9, 10, or <11-digit serial ID for each meeting\nIf you will join by phone, be sure to have the teleconference number in your invitation as well.',
    },
    {
        title: 'How do I join a B-Connect through the web?',
        content: 'To join from a web browser:\n\nOpen your web browser.\nGo to join.b-connect.us.\nInput the Host Provided Meeting ID\nClick "Join."',
    },
    {
        title: 'Will joining a meeting for which I have received an invitation work without having to download the B-Connect app?',
        content: 'Absolutely, no need to download the app - you can now directly join a B-Connect meeting from your web browser. When the app asks you to open it, click "Cancel" and select "Join from your browser".',
    },
    {
        title: 'Do I login to the app to B-Connect go mobile?',
        content: 'For Android users:\n\nLaunch the B-Connect mobile app.\nIf you are not signed in, tap "Join Meeting."\nFor joining after signing in, sign in > Join Meeting and input meeting ID to go to the audio/video settings then select "Join Meeting"',
    },
    {
        title: 'What if I get an email or calendar invite?',
        content: 'If you get an email or calendar invite, just click the joining link provided at your end from that property. If asked, give your browser permission for opening B-Connect.',
    },
    {
        title: 'How do I connect to a meeting via plain-old telephone?',
        content: 'To join a meeting by phone:\n\nEnter the number on your invite.\nUse the dial pad on your phone to enter the meeting ID when needed.\nIf you are already connected to the meeting on your computer, and want to enter a 6-digit participant ID displayed in "Meeting Information" screen that is tied between your phone\'s webinar with the application.',
    },
    {
        title: 'What is the SIP/H.323 Video System and How Can I Utilize it?',
        content: 'Connecting to a B-Connect Meeting with SIP/H.323\n\nCall the IP your invitation provided\nType meeting ID: using your device\'s keypad then press #\nOr you can directly join using dial string like 192.168.10.55##000111000\n\nIf you have any other questions or need assistance, do not hesitate to open up the chat and talk with our support team.',
    },
];

const FAQList = () => {
    return (
        <>
            <div className='flex flex-col items-center text-center justify-center mt-[2rem]'>
                <img src={HLogo} alt="help logo" className='h-28 w-28' />
                <h1 className='text-2xl font-bold text-sky-600 '>How can we help you?</h1>
            </div>
            {/* <h1
            className='text-2xl font-bold text-black mx-auto '
            >Frequently Asked Questions?</h1> */}
            <div className="max-w-4xl mx-auto my-8">
                {faqData.map((faq, index) => (
                    <Help key={index} title={faq.title} content={faq.content} />
                ))}

                <div className="mt-8 p-4 bg-gray-100 border text-center border-gray-300 rounded-lg">
                  <div className='mb-4'> 
                    <h2 className="text-lg font-semibold">Need more help?</h2>
                    <p className="">Try these next steps:</p>
                    </div> 
                    <div className="list-none ">
                        <li><a href="https://community.example.com" className="text-blue-500 hover:underline">Post to the Help Community</a></li>
                        <li>Get answers from community members</li>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FAQList;
