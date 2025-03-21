import { 
    Columns2, Facebook, Frame, Framer, Image, Link2, PanelTop, Projector, RectangleEllipsis, 
    SquareSplitVertical, Text, TextSelectionIcon, Twitter 
} from "lucide-react";

export default [
    {
        icon: RectangleEllipsis,
        label: 'Button',
        type: 'Button',
        content: 'Sample Button',
        url: '#',
        style: {
            textAlign: 'center',
            backgroundColor: '#007bff',
            color: '#ffffff',
            padding: '12px 25px',
            width: 'auto',
            fontSize: '16px',
            fontWeight: 'normal',
            borderRadius: '5px',
            border: 'none',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Added subtle shadow for elevation
            textTransform: 'uppercase', // Making text uppercase
            cursor: 'pointer', // Pointer cursor to show it's clickable
            transition: 'background-color 0.3s ease, transform 0.3s ease', // Added smooth transition for hover effect
        },
        outerStyle: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            backgroundColor: '#f4f5f7', // Light background to contrast the button
            padding: '10px',
        }
    },
    {
        icon: TextSelectionIcon,
        type: 'Text',
        label: 'Text',
        textarea: 'Sample Text',
        style: {
            backgroundColor: '#fff',
            color: '#333333',
            padding: '20px',
            textAlign: 'center',
            fontSize: '22px',
            fontWeight: 'normal',
            textTransform: 'uppercase',
            letterSpacing: '0.5px', // Added letter spacing to give it a more polished feel
            lineHeight: '1.5', // Added line height for better readability
            fontFamily: "'Roboto', sans-serif", // Added font-family for a modern look
            border: '1px solid #e0e0e0', // Subtle border to outline the text area
            borderRadius: '8px', // Rounded corners
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Soft shadow for elevation
        },
        outerStyle: {
            backgroundColor: '#fff',
            width: '100%',
            padding: '10px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }
    },
    {
        icon: Image,
        type: 'Image',
        label: 'Image',
        imageUrl: "/image.png",
        alt: 'Image',
        url: '#',
        style: {
            backgroundColor: '#ffffff',
            padding: '10px',
            height: 'auto',
            width: '80%',
            margin: '0px',
            borderRadius: '8px',
            border: '2px solid #f2f2f2', // Added a border for image clarity
            objectFit: 'cover', // Ensuring the image covers the space without distortion
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Elevated effect
        },
        outerStyle: {
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff',
            padding: '10px',
        }
    },
    {
        icon: Frame,
        type: 'Logo',
        label: 'Logo',
        imageUrl: "/logo.svg",
        alt: 'logo',
        url: '#',
        style: {
            backgroundColor: '#ffffff',
            padding: '10px',
            height: '30%',
            width: '30%',
            objectFit: 'contain', // Keeping the logo aspect ratio intact
            borderRadius: '10px', // Rounded corners for a softer look
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.15)', // Soft shadow to lift the logo
            transition: 'transform 0.3s ease', // Smooth animation for hover effect
        },
        outerStyle: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff',
            width: '100%',
            padding: '10px',
            cursor: 'pointer', // Pointer cursor for hover effect
        }
    },
    {
        icon: PanelTop,
        type: 'LogoHeader',
        label: 'Logo Header',
        imageUrl: "/logo.svg",
        alt: 'logo',
        url: '#',
        style: {
            backgroundColor: '#ffffff',
            padding: '12px',
            height: '50%',
            width: '50%',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow for better appearance
            transition: 'all 0.3s ease', // Smooth transition for scaling
        },
        outerStyle: {
            display: 'flex',
            justifyContent: 'left',
            alignItems: 'center',
            backgroundColor: '#fff',
            width: '100%',
            padding: '15px',
        }
    },
    {
        icon: SquareSplitVertical,
        type: 'Divider',
        label: 'Divider',
        content: '',
        style: {
            color: '#000000',
            padding: '15px',
            width: '100%',
            borderTop: '2px solid #e0e0e0', // Divider line added
            margin: '20px 0', // Added margin for spacing between elements
        }
    },
    {
        type: 'SocialIcons',
        icon: Twitter,
        label: 'Social Icons',
        socialIcons: [
            {
                icon: 'https://cdn-icons-png.flaticon.com/128/2111/2111463.png',
                url: '#'
            },
            {
                icon: 'https://cdn-icons-png.flaticon.com/128/5968/5968852.png',
                url: '#'
            },
            {
                icon: 'https://cdn-icons-png.flaticon.com/128/5968/5968756.png',
                url: '#'
            }
        ],
        options: [
            {
                icon: 'https://cdn-icons-png.flaticon.com/128/2111/2111463.png',
                url: '#'
            },
            {
                icon: 'https://cdn-icons-png.flaticon.com/128/5968/5968852.png',
                url: '#'
            },
            {
                icon: 'https://cdn-icons-png.flaticon.com/128/5968/5968756.png',
                url: '#'
            }
        ],
        style: {
            width: 40,
            height: 40,
            borderRadius: '50%',
            border: '2px solid #ffffff', // White border to make icons pop
            backgroundColor: '#1da1f2', // Blue background for the Twitter icon
            boxShadow: '0 3px 8px rgba(0, 0, 0, 0.2)', // Light shadow to elevate the icons
            transition: 'transform 0.3s ease', // Smooth hover animation
            margin: '5px', // Slight space between the icons
        },
        outerStyle: {
            display: 'flex',
            gap: 15,
            justifyContent: 'center',
            alignItems: 'center',
            padding: '10px',
        }
    }
]
