import React, { useState } from "react";
import { ChevronDownIcon } from '@heroicons/react/outline';
import PageTitle from "../PageTitle/PageTitle";

const Dropdown = ({ dropdownName, dropdownDefaultValue, dropdownMenu }) => {
    // dropdown props
    const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
    const [dropdownValue, setDropdownValue] = useState(dropdownDefaultValue);

    return (
        <>
            <div className="flex flex-wrap">
                <PageTitle title='Add Players' />
                <div className="w-full">
                    <div className="relative inline-flex align-middle w-full">
                        <div className="relative flex w-full flex-wrap items-stretch cursor-pointer">
                            <input type="text" name={dropdownName} value={dropdownValue} className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10 text-14-bpl-dark-blue font-semibold text-base cursor-pointer" onClick={() => setDropdownPopoverShow(!dropdownPopoverShow)} readOnly />
                            <span className="z-10 h-full leading-snug font-normal absolute text-center text-slate-300 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                                <ChevronDownIcon className={`${dropdownPopoverShow ? 'rotate-90' : 'rotate-0'} text-14-bpl-dark-blue duration-300`} />
                            </span>
                        </div>
                        <div
                            className={
                                `${dropdownPopoverShow ? 'scale-y-100' : 'scale-y-0'} bg-14-bpl-white z-50 float-left text-left rounded shadow-lg text-14-bpl-dark-blue origin-top duration-300 absolute top-full w-full overflow-hidden`
                            }
                        >
                            {
                                dropdownMenu.map(item => <button
                                    key={item}
                                    className={
                                        `${dropdownPopoverShow ? 'scale-y-100' : 'scale-y-0'} text-sm py-2 px-4 font-normal block w-full whitespace-nowrap hover:bg-14-bpl-dark-blue hover:text-14-bpl-white duration-300 origin-top`
                                    }
                                    onClick={e => {
                                        e.preventDefault();
                                        setDropdownValue(item);
                                        setDropdownPopoverShow(!dropdownPopoverShow);
                                    }}
                                >
                                    {item}
                                </button>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dropdown;