import { 
    Columns2, Facebook, Frame, Framer, Image, Link2, PanelTop, Projector, RectangleEllipsis, 
    SquareSplitVertical, Text, TextSelectionIcon, Twitter 
} from "lucide-react";

export default [
    {
        id: 'button-1',
        icon: RectangleEllipsis,
        label: 'Button',
        type: 'Button',
        content: 'Click',
        url: '#',
        className: 'custom-button',
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
            boxShadow: '',
            textTransform: 'uppercase',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease, transform 0.3s ease',
        },
        outerStyle: {
            display: '',
            justifyContent: '',
            alignItems: '',
            width: '',
            backgroundColor: '',
            padding: '',
        }
    },
    {
        id: 'text-1',
        icon: TextSelectionIcon,
        type: 'Text',
        label: 'Text',
        content: 'Sample Text',
        className: 'custom-text',
        style: {
            backgroundColor: '#fff',
            color: '#000000',
            padding: '0px',
            textAlign: '',
            fontSize: '22px',
            fontWeight: 'normal',
            textTransform: '',
            letterSpacing: '',
            lineHeight: '',
            fontFamily: "'Roboto', sans-serif",
            border: '',
            borderRadius: '',
            boxShadow: '',
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
        id: 'image-1',
        icon: Image,
        type: 'Image',
        label: 'Image',
        imageUrl: "/image.png",
        alt: 'Image',
        url: 'https://picsum.photos/seed/picsum/200/300',
        className: 'custom-image',
        style: {
            backgroundColor: '#ffffff',
            padding: '10px',
            height: 'auto',
            width: '80%',
            margin: '0px',
            borderRadius: '8px',
            border: '2px solid #f2f2f2',
            objectFit: 'cover',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
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
        id: 'logo-1',
        icon: Frame,
        type: 'Logo',
        label: 'Logo',
        imageUrl: "/logo.svg",
        alt: 'logo',
        url: '#',
        className: 'custom-logo',
        style: {
            backgroundColor: '#ffffff',
            padding: '10px',
            height: '30%',
            width: '30%',
            objectFit: 'contain',
            borderRadius: '10px',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.15)',
            transition: 'transform 0.3s ease',
        },
        outerStyle: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff',
            width: '100%',
            padding: '10px',
            cursor: 'pointer',
        }
    },
    {
        id: 'logo-header-1',
        icon: PanelTop,
        type: 'LogoHeader',
        label: 'Logo Header',
        imageUrl: "/logo.svg",
        alt: 'logo',
        url: '#',
        className: 'custom-logo-header',
        style: {
            backgroundColor: '#ffffff',
            padding: '12px',
            height: '50%',
            width: '50%',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.3s ease',
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
        id: 'divider-1',
        icon: SquareSplitVertical,
        type: 'Divider',
        label: 'Divider',
        content: '',
        className: 'custom-divider',
        style: {
            color: '#000000',
            padding: '15px',
            width: '100%',
            borderTop: '2px solid #e0e0e0',
            margin: '20px 0',
        }
    },
    {
        id: 'social-icons-1',
        type: 'SocialIcons',
        icon: Twitter,
        label: 'Social Icons',
        className: 'custom-social-icons',
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
            border: '2px solid #ffffff',
            backgroundColor: '#1da1f2',
            boxShadow: '0 3px 8px rgba(0, 0, 0, 0.2)',
            transition: 'transform 0.3s ease',
            margin: '5px',
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