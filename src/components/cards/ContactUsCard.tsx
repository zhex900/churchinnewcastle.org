import clsx from 'clsx';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import Button from '@/components/buttons/Button';
import ButtonStatus from '@/components/buttons/ButtonStatus';

import { ContactUsFormData, statusType } from '@/types/types';

type ContactUsCardProps = {
  className?: string;
};

export default function ContactUsCard({ className }: ContactUsCardProps) {
  const { register, handleSubmit, reset } = useForm<ContactUsFormData>();
  const [status, setStatus] = useState<statusType>('idle');

  const onSubmit = async (data: ContactUsFormData) => {
    setStatus('loading');
    fetch('/api/contact-us', {
      method: 'post',
      body: JSON.stringify(data),
    })
      .then(function (response) {
        if (response.ok) {
          reset();
          setStatus('success');
          return;
        }

        setStatus('error');
      })
      .catch(function () {
        setStatus('error');
      });
  };

  return (
    <div className={clsx('rounded p-10', className)}>
      <div className='mt-2 flex flex-col gap-10 md:flex-row'>
        <div className='basis-1/2'>
          <p className='mt-2 text-justify  text-lg text-gray-700 dark:text-gray-300'>
            We are Christians who desire to enjoy our Lord exceedingly, and wish
            that as many people as possible enter into the same enjoyment.
            Should you wish to meet with us, please contact us by leaving us a
            message and your details on the right, so that we may give you the
            relevant information to attend any of our meetings in Newcastle.
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex basis-1/2 items-start'
        >
          <div className='space-y-5'>
            <input
              {...register('name')}
              className={clsx(
                'mt-2',
                'w-full rounded-md dark:bg-dark',
                'border border-gray-300 dark:border-gray-600',
                'text-sm md:text-base',
                'focus:border-primary-300 focus:outline-none focus:ring-0 dark:focus:border-primary-300'
              )}
              type='text'
              placeholder={'Name'}
              required
            />
            <input
              {...register('phone')}
              className={clsx(
                'mt-2',
                'w-full rounded-md dark:bg-dark',
                'border border-gray-300 dark:border-gray-600',
                'text-sm md:text-base',
                'focus:border-primary-300 focus:outline-none focus:ring-0 dark:focus:border-primary-300'
              )}
              type='text'
              placeholder={'Phone'}
              required
            />
            <input
              {...register('email')}
              className={clsx(
                'mt-2',
                'w-full rounded-md dark:bg-dark',
                'border border-gray-300 dark:border-gray-600',
                'text-sm md:text-base',
                'focus:border-primary-300 focus:outline-none focus:ring-0 dark:focus:border-primary-300'
              )}
              type='email'
              placeholder={'Email'}
              required
            />
            <textarea
              {...register('message')}
              className={clsx(
                'mt-2',
                'h-40',
                'w-full rounded-md dark:bg-dark',
                'border border-gray-300 dark:border-gray-600',
                'text-sm md:text-base',
                'focus:border-primary-300 focus:outline-none focus:ring-0 dark:focus:border-primary-300'
              )}
              placeholder={'Leave a message'}
              required
            />

            <div className='flex flex-wrap justify-end md:!text-lg'>
              <div className='group relative right-2'>
                <div
                  className={clsx(
                    'dark:from-primary-200 dark:via-primary-300',
                    'opacity-75 transition duration-1000 group-hover:opacity-100 group-hover:duration-200'
                  )}
                />
                <Button
                  type='submit'
                  isLoading={status === 'loading'}
                  className='inline-flex items-center px-5 py-2.5 text-center text-sm'
                  disabled={status !== 'idle'}
                >
                  <ButtonStatus setStatus={setStatus} status={status} />
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
