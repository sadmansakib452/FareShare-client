import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import {
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
} from "@heroicons/react/24/outline";
import { Fragment } from "react";

import { Link } from "react-router-dom";

export default function Example(props) {
  const menus = [
    { name: "My Account", href: "/profile", icon: ChartPieIcon },
    {
      name:
        props.roles === "ADMIN" || props.roles === "USER"
          ? "Ride Now"
          : "Requested Ride",

      href:
        props.roles === "ADMIN" || props.roles === "USER"
          ? "/searchRide"
          : "/requestedRide",
      icon: CursorArrowRaysIcon,
    },
    { name: "Logout", icon: FingerPrintIcon },
  ];
  return (
    <Popover className="relative">
      <Popover.Button className="inline-flex items-center gap-x-1 text-lg font-semibold leading-6 text-gray-900">
        <span>{props.profileName}</span>
        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4 -mx-40">
          <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            <div className="p-4">
              {menus.map((item) => (
                <div
                  key={item.name}
                  className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50"
                >
                  <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <item.icon
                      className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    {/* <Link to={item.href} className="font-semibold text-gray-900">
                      {item.name}
                      <span className="absolute inset-0" />
                    </Link> */}

                    {item.href ? (
                      <Link
                        to={item.href}
                        className="font-semibold text-gray-900"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </Link>
                    ) : (
                      <Link
                        onClick={props.logout}
                        className="font-semibold text-gray-900"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
