import React from 'react';

const data = await fetch("http://localhost:1337/api/blogs?populate=*");
const response = await data.json();

const Data = () => {
    return (
        <div>
            {response.data && response.data.map((obj, index) => (
                <div
                    key={index}
                    className="p-4 rounded-lg shadow-custom w-full min-h-[437px] max-w-[394px] container"
                >
                    <div className="h-full">
                        <img src={`http://localhost:1337${obj.path.formats.thumbnail.url}`} alt="logo" className="rounded-lg" />
                        <h2 className="text-2xl text-black font-semibold leading-100 font-teko mt-3">
                            {obj.title}
                        </h2>
                        <p className="font-incon text-[#232323] leading-120 mt-3 text-base font-semibold">
                            {obj.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Data;