"use client";
import Link from "next/link";

import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

const services = [
  { name: "Service 1", href: "service1" },
  { name: "Service 2", href: "service2" },
  { name: "Service 3", href: "service3" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white fixed top-0 left-0 right-0 z-1000 shadow-md">
      <nav
        aria-label="Global"
        className="mx-auto max-w-7xl p-6 lg:px-8 flex justify-between items-center min-h-15 lg:h-auto"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt="Logo"
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8 w-auto"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Link href="/" className="text-sm font-semibold text-gray-900">
            Home
          </Link>
          <Link href="/about" className="text-sm font-semibold text-gray-900">
            About
          </Link>
          <Disclosure as="div" className="relative">
            <DisclosureButton className="flex items-center gap-x-1 text-sm font-semibold text-gray-900">
              Services
              <ChevronDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </DisclosureButton>
            <DisclosurePanel className="absolute mt-3 bg-white shadow-lg rounded-md ring-1 ring-gray-900/5 z-10 w-[150px] h-auto translate-x-[-30%] ">
              <div className="p-2">
                {services.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    className="block px-4 py-2 font-mono text-center text-black hover:bg-gray-100"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </DisclosurePanel>
          </Disclosure>
          <Link href="/login" className="text-sm font-semibold text-gray-900">
            Login
          </Link>
          <Link href="signup" className="text-sm font-semibold text-gray-900">
            Sign-Up
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        className="lg:hidden"
      >
        <DialogPanel className="fixed inset-0 z-10 w-full bg-white px-6 py-6">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt="Logo"
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-10 space-y-4">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold text-gray-900"
            >
              Home
            </Link>
            <Link
              href="about"
              className="block text-base font-semibold text-gray-900"
            >
              About
            </Link>
            <Disclosure>
              <DisclosureButton className="w-full flex text-left text-base font-semibold text-gray-900">
                Services
                <ChevronDownIcon
                  className="ml-2 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </DisclosureButton>
              <DisclosurePanel className="mt-2">
                {services.map((service) => (
                  <a
                    key={service.name}
                    href={service.href}
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                  >
                    {service.name}
                  </a>
                ))}
              </DisclosurePanel>
            </Disclosure>
            <Link
              href="login"
              className="block text-base font-semibold text-gray-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              Login
            </Link>
            <Link
              href="signup"
              className="block text-base font-semibold text-gray-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sign-Up
            </Link>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
