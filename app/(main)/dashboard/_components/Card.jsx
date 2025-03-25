'use client'

import email from '../../../../public/email.jpg';

const Card = ({ imageUrl, prompt, tid }) => {
    return (
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
            {/* Full-width Image */}
            <img className="w-full h-48 object-cover" src={email} alt="Card Image" />

            {/* Description */}
            <div className="p-5">
                <p className="text-gray-700 text-base mb-4">{prompt}</p>
                
                {/* Button */}
                <a
                    href={`/editor/${tid}`}
                    className="inline-block bg-red-800 text-white text-center px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
                >
                    View Template
                </a>
            </div>
        </div>
    );
};

export default Card;
