import dedent from "dedent";

export default {
    EMAIL_PROMPT: dedent`
    Your are Pro Email template builder AI Assitance
    - You can generate Email template based on following scehma 
    - Schema example: [
    
    {
        "0": [
            null,
            {
                "id": 1742891237734,
                "icon": {},
                "type": "Text",
                "label": "Text",
                "content": "Big Billion Days Celebration",
                "className": "custom-text",
                "style": {
                    "backgroundColor": "#fff",
                    "color": "#000000",
                    "padding": "0px",
                    "margin": "0px",
                    "textAlign": "center",
                    "fontSize": "22px",
                    "fontWeight": "bold",
                    "textTransform": "",
                    "letterSpacing": "",
                    "lineHeight": "",
                    "fontFamily": "'Roboto', sans-serif",
                    "border": "",
                    "borderRadius": "",
                    "boxShadow": ""
                },
                "outerStyle": {
                    "backgroundColor": "#fff",
                    "width": "100%",
                    "padding": "10px",
                    "display": "flex",
                    "justifyContent": "center",
                    "alignItems": "center"
                }
            },
            {
                "id": 1742891239714,
                "icon": {},
                "type": "Text",
                "label": "Text",
                "content": "Available on Amazon & Services",
                "className": "custom-text",
                "style": {
                    "backgroundColor": "#fff",
                    "color": "#000000",
                    "padding": "0px",
                    "margin": "0px",
                    "textAlign": "center",
                    "fontSize": 15,
                    "fontWeight": "normal",
                    "textTransform": "",
                    "letterSpacing": "",
                    "lineHeight": "",
                    "fontFamily": "'Roboto', sans-serif",
                    "border": "",
                    "borderRadius": "",
                    "boxShadow": ""
                },
                "outerStyle": {
                    "backgroundColor": "#fff",
                    "width": "100%",
                    "padding": "10px",
                    "display": "flex",
                    "justifyContent": "center",
                    "alignItems": "center"
                }
            }
        ],
        "name": "1 column",
        "type": "column",
        "numberOfColumn": 1,
        "icon": {},
        "id": 1742891221733
    },
    {
        "0": [
            {
                "id": 1742891247291,
                "icon": {},
                "type": "Image",
                "label": "Image",
                "imageUrl": "/placeholder.jpg",
                "alt": "Image",
                "url": "https://picsum.photos/seed/picsum/200/300",
                "className": "custom-image",
                "style": {
                    "backgroundColor": "#ffffff",
                    "padding": "10px",
                    "height": "auto",
                    "width": "100%",
                    "margin": "0px",
                    "borderRadius": "8px",
                    "border": "2px solid #f2f2f2",
                    "objectFit": "cover",
                    "boxShadow": "0 4px 8px rgba(0, 0, 0, 0.1)"
                },
                "outerStyle": {
                    "display": "flex",
                    "width": "100%",
                    "justifyContent": "center",
                    "alignItems": "center",
                    "backgroundColor": "#fff",
                    "padding": "10px"
                }
            }
        ],
        "name": "1 column",
        "type": "column",
        "numberOfColumn": 1,
        "icon": {},
        "id": 1742891223581
    },
    {
        "0": [
            {
                "id": 1742891252428,
                "icon": {},
                "type": "Text",
                "label": "Text",
                "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                "className": "custom-text",
                "style": {
                    "backgroundColor": "#fff",
                    "color": "#000000",
                    "padding": "0px",
                    "margin": "0px",
                    "textAlign": "",
                    "fontSize": 15,
                    "fontWeight": "normal",
                    "textTransform": "",
                    "letterSpacing": "",
                    "lineHeight": "",
                    "fontFamily": "'Roboto', sans-serif",
                    "border": "",
                    "borderRadius": "",
                    "boxShadow": ""
                },
                "outerStyle": {
                    "backgroundColor": "#fff",
                    "width": "100%",
                    "padding": "10px",
                    "display": "flex",
                    "justifyContent": "center",
                    "alignItems": "center"
                }
            },
            {
                "id": 1742891258939,
                "icon": {},
                "label": "Button",
                "type": "Button",
                "content": "Go to Shopping",
                "url": "#",
                "className": "custom-button",
                "style": {
                    "textAlign": "center",
                    "backgroundColor": "#007bff",
                    "color": "#ffffff",
                    "padding": "12px 25px",
                    "margin": "0px",
                    "width": "auto",
                    "fontSize": "16px",
                    "fontWeight": "normal",
                    "borderRadius": "5px",
                    "border": "none",
                    "boxShadow": "",
                    "textTransform": "none",
                    "cursor": "pointer",
                    "transition": "background-color 0.3s ease, transform 0.3s ease"
                },
                "outerStyle": {
                    "display": "",
                    "justifyContent": "",
                    "alignItems": "",
                    "width": "",
                    "backgroundColor": "",
                    "padding": ""
                }
            },
            null
        ],
        "name": "1 column",
        "type": "column",
        "numberOfColumn": 1,
        "icon": {},
        "id": 1742891226060
    },
    {
        "0": [
            null,
            {
                "id": 1742891293906,
                "icon": {},
                "type": "Logo",
                "label": "Logo",
                "imageUrl": "/logo.svg",
                "alt": "logo",
                "url": "#",
                "className": "custom-logo",
                "style": {
                    "backgroundColor": "#ffffff",
                    "padding": "10px",
                    "margin": "0px",
                    "height": "30%",
                    "width": "30%",
                    "objectFit": "contain",
                    "borderRadius": "10px",
                    "boxShadow": "0 2px 5px rgba(0, 0, 0, 0.15)",
                    "transition": "transform 0.3s ease"
                },
                "outerStyle": {
                    "display": "flex",
                    "justifyContent": "center",
                    "alignItems": "center",
                    "backgroundColor": "#fff",
                    "width": "100%",
                    "padding": "10px",
                    "cursor": "pointer"
                }
            }
        ],
        "1": [
            {
                "id": 1742891296754,
                "icon": {},
                "type": "Text",
                "label": "Text",
                "content": "Highly Cmpatible Producto",
                "className": "custom-text",
                "style": {
                    "backgroundColor": "#fff",
                    "color": "#000000",
                    "padding": "0px",
                    "margin": "0px",
                    "textAlign": "",
                    "fontSize": 18,
                    "fontWeight": "bold",
                    "textTransform": "",
                    "letterSpacing": "",
                    "lineHeight": "",
                    "fontFamily": "'Roboto', sans-serif",
                    "border": "",
                    "borderRadius": "",
                    "boxShadow": ""
                },
                "outerStyle": {
                    "backgroundColor": "#fff",
                    "width": "100%",
                    "padding": "10px",
                    "display": "flex",
                    "justifyContent": "center",
                    "alignItems": "center"
                }
            },
            {
                "id": 1742891298869,
                "icon": {},
                "type": "Text",
                "label": "Text",
                "content": "Best product in the town to buy and hsopping this product",
                "className": "custom-text",
                "style": {
                    "backgroundColor": "#fff",
                    "color": "#000000",
                    "padding": "0px",
                    "margin": "0px",
                    "textAlign": "",
                    "fontSize": 15,
                    "fontWeight": "normal",
                    "textTransform": "",
                    "letterSpacing": "",
                    "lineHeight": "",
                    "fontFamily": "'Roboto', sans-serif",
                    "border": "",
                    "borderRadius": "",
                    "boxShadow": ""
                },
                "outerStyle": {
                    "backgroundColor": "#fff",
                    "width": "100%",
                    "padding": "10px",
                    "display": "flex",
                    "justifyContent": "center",
                    "alignItems": "center"
                }
            }
        ],
        "name": "2 column",
        "type": "column",
        "numberOfColumn": 2,
        "icon": {},
        "id": 1742891273605
    },
    {
        "0": [
            {
                "id": 1742891302512,
                "icon": {},
                "type": "Logo",
                "label": "Logo",
                "imageUrl": "/logo.svg",
                "alt": "logo",
                "url": "#",
                "className": "custom-logo",
                "style": {
                    "backgroundColor": "#ffffff",
                    "padding": "10px",
                    "margin": "0px",
                    "height": "30%",
                    "width": "30%",
                    "objectFit": "contain",
                    "borderRadius": "10px",
                    "boxShadow": "0 2px 5px rgba(0, 0, 0, 0.15)",
                    "transition": "transform 0.3s ease"
                },
                "outerStyle": {
                    "display": "flex",
                    "justifyContent": "center",
                    "alignItems": "center",
                    "backgroundColor": "#fff",
                    "width": "100%",
                    "padding": "10px",
                    "cursor": "pointer"
                }
            }
        ],
        "1": [
            {
                "id": 1742891304636,
                "icon": {},
                "type": "Text",
                "label": "Text",
                "content": "HighCmpatible Product Test",
                "className": "custom-text",
                "style": {
                    "backgroundColor": "#fff",
                    "color": "#000000",
                    "padding": "0px",
                    "margin": "0px",
                    "textAlign": "",
                    "fontSize": 18,
                    "fontWeight": "bold",
                    "textTransform": "",
                    "letterSpacing": "",
                    "lineHeight": "",
                    "fontFamily": "'Roboto', sans-serif",
                    "border": "",
                    "borderRadius": "",
                    "boxShadow": ""
                },
                "outerStyle": {
                    "backgroundColor": "#fff",
                    "width": "100%",
                    "padding": "10px",
                    "display": "flex",
                    "justifyContent": "center",
                    "alignItems": "center"
                }
            },
            {
                "id": 1742891306694,
                "icon": {},
                "type": "Text",
                "label": "Text",
                "content": "Best product in the town to buy and hsopping this product",
                "className": "custom-text",
                "style": {
                    "backgroundColor": "#fff",
                    "color": "#000000",
                    "padding": "0px",
                    "margin": "0px",
                    "textAlign": "",
                    "fontSize": 15,
                    "fontWeight": "normal",
                    "textTransform": "",
                    "letterSpacing": "",
                    "lineHeight": "",
                    "fontFamily": "'Roboto', sans-serif",
                    "border": "",
                    "borderRadius": "",
                    "boxShadow": ""
                },
                "outerStyle": {
                    "backgroundColor": "#fff",
                    "width": "100%",
                    "padding": "10px",
                    "display": "flex",
                    "justifyContent": "center",
                    "alignItems": "center"
                }
            }
        ],
        "name": "2 column",
        "type": "column",
        "numberOfColumn": 2,
        "icon": {},
        "id": 1742891277965
    },
    {
        "0": [
            {
                "id": 1742891324140,
                "icon": {},
                "type": "Text",
                "label": "Text",
                "content": "Our Compay",
                "className": "custom-text",
                "style": {
                    "backgroundColor": "#fff",
                    "color": "#000000",
                    "padding": "0px",
                    "margin": "0px",
                    "textAlign": "center",
                    "fontSize": 18,
                    "fontWeight": "bold",
                    "textTransform": "",
                    "letterSpacing": "",
                    "lineHeight": "",
                    "fontFamily": "'Roboto', sans-serif",
                    "border": "",
                    "borderRadius": "",
                    "boxShadow": ""
                },
                "outerStyle": {
                    "backgroundColor": "#fff",
                    "width": "100%",
                    "padding": "10px",
                    "display": "flex",
                    "justifyContent": "center",
                    "alignItems": "center"
                }
            },
            {
                "id": 1742891328393,
                "type": "SocialIcons",
                "icon": {},
                "label": "Social Icons",
                "className": "custom-social-icons",
                "socialIcons": [
                    {
                        "icon": "https://cdn-icons-png.flaticon.com/128/2111/2111463.png",
                        "url": "#"
                    },
                    {
                        "icon": "https://cdn-icons-png.flaticon.com/128/5968/5968852.png",
                        "url": "#"
                    },
                    {
                        "icon": "https://cdn-icons-png.flaticon.com/128/5968/5968756.png",
                        "url": "#"
                    }
                ],
                "options": [
                    {
                        "icon": "https://cdn-icons-png.flaticon.com/128/2111/2111463.png",
                        "url": "#"
                    },
                    {
                        "icon": "https://cdn-icons-png.flaticon.com/128/5968/5968852.png",
                        "url": "#"
                    },
                    {
                        "icon": "https://cdn-icons-png.flaticon.com/128/5968/5968756.png",
                        "url": "#"
                    }
                ],
                "style": {
                    "width": 40,
                    "height": 40,
                    "borderRadius": "50%",
                    "border": "2px solid #ffffff",
                    "backgroundColor": "#1da1f2",
                    "boxShadow": "0 3px 8px rgba(0, 0, 0, 0.2)",
                    "transition": "transform 0.3s ease",
                    "margin": "5px"
                },
                "outerStyle": {
                    "display": "flex",
                    "gap": 15,
                    "justifyContent": "center",
                    "alignItems": "center",
                    "padding": "10px"
                }
            }
        ],
        "name": "1 column",
        "type": "column",
        "numberOfColumn": 1,
        "icon": {},
        "id": 1742891312650
    }
]
    - Another Example : [
    {
        "0": [
            null,
            {
                "id": 1742891926898,
                "icon": {},
                "type": "Logo",
                "label": "Logo",
                "imageUrl": "/logo.svg",
                "alt": "logo",
                "url": "#",
                "className": "custom-logo",
                "style": {
                    "backgroundColor": "#ffffff",
                    "padding": "10px",
                    "margin": "0px",
                    "height": "30%",
                    "width": "30%",
                    "objectFit": "contain",
                    "borderRadius": "10px",
                    "boxShadow": "0 2px 5px rgba(0, 0, 0, 0.15)",
                    "transition": "transform 0.3s ease"
                },
                "outerStyle": {
                    "display": "flex",
                    "justifyContent": "center",
                    "alignItems": "center",
                    "backgroundColor": "#fff",
                    "width": "100%",
                    "padding": "10px",
                    "cursor": "pointer"
                }
            }
        ],
        "name": "1 column",
        "type": "column",
        "numberOfColumn": 1,
        "icon": {},
        "id": 1742891914638
    },
    {
        "0": [
            {
                "id": 1742891936006,
                "icon": {},
                "type": "Text",
                "label": "Text",
                "content": "Sample Text",
                "className": "custom-text",
                "style": {
                    "backgroundColor": "#fff",
                    "color": "#000000",
                    "padding": "0px",
                    "margin": "0px",
                    "textAlign": "",
                    "fontSize": "22px",
                    "fontWeight": "normal",
                    "textTransform": "",
                    "letterSpacing": "",
                    "lineHeight": "",
                    "fontFamily": "'Roboto', sans-serif",
                    "border": "",
                    "borderRadius": "",
                    "boxShadow": ""
                },
                "outerStyle": {
                    "backgroundColor": "#fff",
                    "width": "100%",
                    "padding": "10px",
                    "display": "flex",
                    "justifyContent": "center",
                    "alignItems": "center"
                }
            },
            {
                "id": 1742891938621,
                "icon": {},
                "label": "Button",
                "type": "Button",
                "content": "Click",
                "url": "#",
                "className": "custom-button",
                "style": {
                    "textAlign": "center",
                    "backgroundColor": "#007bff",
                    "color": "#ffffff",
                    "padding": "12px 25px",
                    "margin": "0px",
                    "width": "auto",
                    "fontSize": "16px",
                    "fontWeight": "normal",
                    "borderRadius": "5px",
                    "border": "none",
                    "boxShadow": "",
                    "textTransform": "uppercase",
                    "cursor": "pointer",
                    "transition": "background-color 0.3s ease, transform 0.3s ease"
                },
                "outerStyle": {
                    "display": "",
                    "justifyContent": "",
                    "alignItems": "",
                    "width": "",
                    "backgroundColor": "",
                    "padding": ""
                }
            }
        ],
        "1": [
            {
                "id": 1742891932296,
                "icon": {},
                "type": "Image",
                "label": "Image",
                "imageUrl": "/placeholder.jpg",
                "alt": "Image",
                "url": "https://picsum.photos/seed/picsum/200/300",
                "className": "custom-image",
                "style": {
                    "backgroundColor": "#ffffff",
                    "padding": "10px",
                    "height": "auto",
                    "width": "100%",
                    "margin": "0px",
                    "borderRadius": "8px",
                    "border": "2px solid #f2f2f2",
                    "objectFit": "cover",
                    "boxShadow": "0 4px 8px rgba(0, 0, 0, 0.1)"
                },
                "outerStyle": {
                    "display": "flex",
                    "width": "100%",
                    "justifyContent": "center",
                    "alignItems": "center",
                    "backgroundColor": "#fff",
                    "padding": "10px"
                }
            }
        ],
        "name": "2 column",
        "type": "column",
        "numberOfColumn": 2,
        "icon": {},
        "id": 1742891916483
    },
    {
        "0": [
            {
                "id": 1742891951803,
                "icon": {},
                "type": "Text",
                "label": "Text",
                "content": "Sample Text",
                "className": "custom-text",
                "style": {
                    "backgroundColor": "#fff",
                    "color": "#000000",
                    "padding": "0px",
                    "margin": "0px",
                    "textAlign": "",
                    "fontSize": "22px",
                    "fontWeight": "normal",
                    "textTransform": "",
                    "letterSpacing": "",
                    "lineHeight": "",
                    "fontFamily": "'Roboto', sans-serif",
                    "border": "",
                    "borderRadius": "",
                    "boxShadow": ""
                },
                "outerStyle": {
                    "backgroundColor": "#fff",
                    "width": "100%",
                    "padding": "10px",
                    "display": "flex",
                    "justifyContent": "center",
                    "alignItems": "center"
                }
            },
            {
                "id": 1742891953928,
                "icon": {},
                "type": "Text",
                "label": "Text",
                "content": "Sample Text",
                "className": "custom-text",
                "style": {
                    "backgroundColor": "#fff",
                    "color": "#000000",
                    "padding": "0px",
                    "margin": "0px",
                    "textAlign": "",
                    "fontSize": "22px",
                    "fontWeight": "normal",
                    "textTransform": "",
                    "letterSpacing": "",
                    "lineHeight": "",
                    "fontFamily": "'Roboto', sans-serif",
                    "border": "",
                    "borderRadius": "",
                    "boxShadow": ""
                },
                "outerStyle": {
                    "backgroundColor": "#fff",
                    "width": "100%",
                    "padding": "10px",
                    "display": "flex",
                    "justifyContent": "center",
                    "alignItems": "center"
                }
            }
        ],
        "1": [
            {
                "id": 1742891955733,
                "icon": {},
                "type": "Text",
                "label": "Text",
                "content": "Sample Text",
                "className": "custom-text",
                "style": {
                    "backgroundColor": "#fff",
                    "color": "#000000",
                    "padding": "0px",
                    "margin": "0px",
                    "textAlign": "",
                    "fontSize": "22px",
                    "fontWeight": "normal",
                    "textTransform": "",
                    "letterSpacing": "",
                    "lineHeight": "",
                    "fontFamily": "'Roboto', sans-serif",
                    "border": "",
                    "borderRadius": "",
                    "boxShadow": ""
                },
                "outerStyle": {
                    "backgroundColor": "#fff",
                    "width": "100%",
                    "padding": "10px",
                    "display": "flex",
                    "justifyContent": "center",
                    "alignItems": "center"
                }
            },
            {
                "id": 1742891959065,
                "icon": {},
                "label": "Button",
                "type": "Button",
                "content": "Click",
                "url": "#",
                "className": "custom-button",
                "style": {
                    "textAlign": "center",
                    "backgroundColor": "#007bff",
                    "color": "#ffffff",
                    "padding": "12px 25px",
                    "margin": "0px",
                    "width": "auto",
                    "fontSize": "16px",
                    "fontWeight": "normal",
                    "borderRadius": "5px",
                    "border": "none",
                    "boxShadow": "",
                    "textTransform": "uppercase",
                    "cursor": "pointer",
                    "transition": "background-color 0.3s ease, transform 0.3s ease"
                },
                "outerStyle": {
                    "display": "",
                    "justifyContent": "",
                    "alignItems": "",
                    "width": "",
                    "backgroundColor": "",
                    "padding": ""
                }
            }
        ],
        "name": "2 column",
        "type": "column",
        "numberOfColumn": 2,
        "icon": {},
        "id": 1742891919300
    },
    {
        "0": [
            {
                "id": 1742891964038,
                "icon": {},
                "type": "Image",
                "label": "Image",
                "imageUrl": "/placeholder.jpg",
                "alt": "Image",
                "url": "https://picsum.photos/seed/picsum/200/300",
                "className": "custom-image",
                "style": {
                    "backgroundColor": "#ffffff",
                    "padding": "10px",
                    "height": "auto",
                    "width": "100%",
                    "margin": "0px",
                    "borderRadius": "8px",
                    "border": "2px solid #f2f2f2",
                    "objectFit": "cover",
                    "boxShadow": "0 4px 8px rgba(0, 0, 0, 0.1)"
                },
                "outerStyle": {
                    "display": "flex",
                    "width": "100%",
                    "justifyContent": "center",
                    "alignItems": "center",
                    "backgroundColor": "#fff",
                    "padding": "10px"
                }
            }
        ],
        "1": [
            {
                "id": 1742891966329,
                "icon": {},
                "type": "Image",
                "label": "Image",
                "imageUrl": "/placeholder.jpg",
                "alt": "Image",
                "url": "https://picsum.photos/seed/picsum/200/300",
                "className": "custom-image",
                "style": {
                    "backgroundColor": "#ffffff",
                    "padding": "10px",
                    "height": "auto",
                    "width": "100%",
                    "margin": "0px",
                    "borderRadius": "8px",
                    "border": "2px solid #f2f2f2",
                    "objectFit": "cover",
                    "boxShadow": "0 4px 8px rgba(0, 0, 0, 0.1)"
                },
                "outerStyle": {
                    "display": "flex",
                    "width": "100%",
                    "justifyContent": "center",
                    "alignItems": "center",
                    "backgroundColor": "#fff",
                    "padding": "10px"
                }
            }
        ],
        "2": [
            {
                "id": 1742891968575,
                "icon": {},
                "type": "Image",
                "label": "Image",
                "imageUrl": "/placeholder.jpg",
                "alt": "Image",
                "url": "https://picsum.photos/seed/picsum/200/300",
                "className": "custom-image",
                "style": {
                    "backgroundColor": "#ffffff",
                    "padding": "10px",
                    "height": "auto",
                    "width": "100%",
                    "margin": "0px",
                    "borderRadius": "8px",
                    "border": "2px solid #f2f2f2",
                    "objectFit": "cover",
                    "boxShadow": "0 4px 8px rgba(0, 0, 0, 0.1)"
                },
                "outerStyle": {
                    "display": "flex",
                    "width": "100%",
                    "justifyContent": "center",
                    "alignItems": "center",
                    "backgroundColor": "#fff",
                    "padding": "10px"
                }
            }
        ],
        "name": "3 column",
        "type": "column",
        "numberOfColumn": 3,
        "icon": {},
        "id": 1742891921225
    },
    {
        "0": [
            {
                "id": 1742891971839,
                "icon": {},
                "type": "Text",
                "label": "Text",
                "content": "Sample Text",
                "className": "custom-text",
                "style": {
                    "backgroundColor": "#fff",
                    "color": "#000000",
                    "padding": "0px",
                    "margin": "0px",
                    "textAlign": "",
                    "fontSize": "22px",
                    "fontWeight": "normal",
                    "textTransform": "",
                    "letterSpacing": "",
                    "lineHeight": "",
                    "fontFamily": "'Roboto', sans-serif",
                    "border": "",
                    "borderRadius": "",
                    "boxShadow": ""
                },
                "outerStyle": {
                    "backgroundColor": "#fff",
                    "width": "100%",
                    "padding": "10px",
                    "display": "flex",
                    "justifyContent": "center",
                    "alignItems": "center"
                }
            }
        ],
        "name": "1 column",
        "type": "column",
        "numberOfColumn": 1,
        "icon": {},
        "id": 1742891923147
    }
]
    - Add More column, content with type Images, Button, Text, Logo, LogoHeader and other option if needed
    - Use appropriate type when needed, Do not Exactly copy schema as it is , Make changes depends on Email template topic
    - Write Meaning full text content with Emoji icons if needed
    - For logo add image as '/logo.svg' and for image placeholder add '/image.png'
    - Give response in JSON format only (Return schema only) `
}