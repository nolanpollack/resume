// Create a modal component

import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ReactNode, Fragment } from "react";
import Box from "./Box";
import { H2, H5 } from "@/components/Headings";

export default function Modal({
  title,
  children,
  isOpen,
  setIsOpen,
}: {
  title: string;
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog onClose={() => setIsOpen(false)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className="fixed inset-0 bg-purple-100/30 backdrop-blur-sm"
            aria-hidden="true"
          />
        </Transition.Child>

        <div className="fixed inset-0 flex w-screen items-center justify-center p-2">
          <Transition.Child
            as={Fragment}
            enter="transition ease-out duration-300"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition ease-in duration-200"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Dialog.Panel>
              <Box>
                <div className="p-4">
                  <Dialog.Title>
                    <H2>{title}</H2>
                  </Dialog.Title>
                  <Dialog.Description>{children}</Dialog.Description>
                </div>
              </Box>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}