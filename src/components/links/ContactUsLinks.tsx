import { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { FiMail, FiMapPin, FiPhoneCall } from 'react-icons/fi';

import Accent from '@/components/Accent';
import Tooltip from '@/components/Tooltip';

import { COPY_CLIPBOARD_RESET } from '@/constants';

type ContactUsProps = {
  email: string;
  address: string;
  phone: string;
};

export default function ContactUsLinks({
  email,
  address,
  phone,
}: ContactUsProps) {
  const [copyStatus, setCopyStatus] = useState(`Click to copy`);
  const copiedToClipBoard = `Copied to clipboard`;

  const contactUs = [
    {
      value: phone,
      icon: FiPhoneCall,
      id: 'phone',
    },
    {
      value: email,
      icon: FiMail,
      id: 'email',
    },

    {
      value: address,
      icon: FiMapPin,
      id: 'address',
    },
  ];

  return (
    <div
      aria-label='contact us links'
      className='mt-8 flex items-center justify-center space-x-4 pt-2'
    >
      {contactUs.map((contact) => (
        <Tooltip
          key={contact.id}
          aria-label={`${contact.id} tooltip`}
          tipChildren={
            <div>
              {`${copyStatus} `}
              <Accent className='inline-block font-medium'>
                {contact.value}
              </Accent>
            </div>
          }
        >
          <CopyToClipboard
            text={contact.value as string}
            onCopy={() => {
              setCopyStatus(copiedToClipBoard);
              setTimeout(() => setCopyStatus(copyStatus), COPY_CLIPBOARD_RESET);
            }}
          >
            <button
              aria-label={`${contact.id}`}
              className='rounded-sm align-middle focus:outline-none focus-visible:ring focus-visible:ring-primary-300'
            >
              {contact.icon({
                className:
                  'h-7 w-7 align-middle text-gray-600 hover:text-primary-300 dark:text-gray-300 dark:hover:text-primary-300',
              })}
            </button>
          </CopyToClipboard>
        </Tooltip>
      ))}
    </div>
  );
}
