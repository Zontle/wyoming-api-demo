import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition.js';

function Features() {

    const [tab, setTab] = useState(1);

    const tabs = useRef(null);

    const heightFix = () => {
        if (tabs.current.children[tab]) {
            tabs.current.style.height = tabs.current.children[tab - 1].offsetHeight + 'px'
        }
    }

    useEffect(() => {
        heightFix()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tab])

    return (
        <section className="relative">

            {/* Section background (needs .relative class on parent and next sibling elements) */}
            <div className="absolute inset-0 pointer-events-none mb-16" aria-hidden="true"></div>
            <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-12 md:pt-20">

                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                        <h1 className="h2 mb-4">See the use cases</h1>
                        <p className="text-xl text-gray-600">Although the Business Registry provides you with all the information you need, an API can quickly give you detailed data on request, which can be easily integrated in any application by any developer.</p>
                    </div>

                    {/* Section content */}
                    <div className="md:grid md:grid-cols-12 md:gap-6">

                        {/* Content */}
                        <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                            {/* Tabs buttons */}
                            <div className="mb-8 md:mb-0">
                                <a
                                    className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 1 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                                    href="#0"
                                    onClick={(e) => { e.preventDefault(); setTab(1); }}
                                >
                                    <div>
                                        <div className="font-bold leading-snug tracking-tight mb-1">Find the closest register</div>
                                        <div className="text-gray-600">Who in the area can help me register a company in Wyoming? What is their address?</div>
                                    </div>
                                    <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                                        <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                                        </svg>
                                    </div>
                                </a>
                                <a
                                    className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 3 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                                    href="#0"
                                    onClick={(e) => { e.preventDefault(); setTab(2); }}
                                >
                                    <div>
                                        <div className="font-bold leading-snug tracking-tight mb-1">General Data Analysis</div>
                                        <div className="text-gray-600">How many companies where registered in WY in 2008? How many were registered in 2016?</div>
                                    </div>
                                    <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                                        <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.334 8.06a.5.5 0 00-.421-.237 6.023 6.023 0 01-5.905-6c0-.41.042-.82.125-1.221a.5.5 0 00-.614-.586 6 6 0 106.832 8.529.5.5 0 00-.017-.485z" fill="#191919" fillRule="nonzero" />
                                        </svg>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Tabs items */}
                        <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="zoom-y-out" ref={tabs}>
                            <div className="relative flex flex-col text-center lg:text-right">
                                {/* Item 1 */}
                                <Transition
                                    show={tab === 1}
                                    appear={true}
                                    className="w-full"
                                    enter="transition ease-in-out duration-700 transform order-first"
                                    enterStart="opacity-0 translate-y-16"
                                    enterEnd="opacity-100 translate-y-0"
                                    leave="transition ease-in-out duration-300 transform absolute"
                                    leaveStart="opacity-100 translate-y-0"
                                    leaveEnd="opacity-0 -translate-y-16"
                                >
                                    <div className="relative flex-row">
                                        <iframe src="https://codesandbox.io/embed/wyoming-api-demo-pt1-4dfdh?fontsize=14&hidenavigation=1&theme=dark&view=preview"
                                            style={{width: '100%', height:'400px', border:0, borderRadius: '4px', overflow: 'hidden'}}
                                            title="Wyoming API Demo pt1"
                                            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                                            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                                        ></iframe>
                                    </div>
                                </Transition>
                                {/* Item 2 */}
                                <Transition
                                    show={tab === 2}
                                    appear={true}
                                    className="w-full"
                                    enter="transition ease-in-out duration-700 transform order-first"
                                    enterStart="opacity-0 translate-y-16"
                                    enterEnd="opacity-100 translate-y-0"
                                    leave="transition ease-in-out duration-300 transform absolute"
                                    leaveStart="opacity-100 translate-y-0"
                                    leaveEnd="opacity-0 -translate-y-16"
                                >
                                    <div className="relative flex-row">
                                        <iframe src="https://codesandbox.io/embed/wyoming-api-demo-pt2-fmjpr?fontsize=14&hidenavigation=1&theme=dark&view=preview"
                                            style={{width: '100%', height:'400px', border:0, borderRadius: '4px', overflow: 'hidden'}}
                                            title="Wyoming API Demo pt1"
                                            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                                            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                                        ></iframe>
                                    </div>
                                </Transition>
                                {/* Item 3 */}
                                <Transition
                                    show={tab === 3}
                                    appear={true}
                                    className="w-full"
                                    enter="transition ease-in-out duration-700 transform order-first"
                                    enterStart="opacity-0 translate-y-16"
                                    enterEnd="opacity-100 translate-y-0"
                                    leave="transition ease-in-out duration-300 transform absolute"
                                    leaveStart="opacity-100 translate-y-0"
                                    leaveEnd="opacity-0 -translate-y-16"
                                >
                                    <div className="relative inline-flex flex-col">
                                        <img className="md:max-w-none mx-auto rounded" src={require('../images/features-bg.png')} width="500" height="462" alt="Features bg" />
                                        <img className="md:max-w-none absolute w-full left-0 transform animate-float" src={require('../images/features-element.png')} width="500" height="44" alt="Element" style={{ top: '30%' }} />
                                    </div>
                                </Transition>
                            </div>
                        </div >

                    </div >

                </div >
            </div >
        </section >
    );
}

export default Features;
