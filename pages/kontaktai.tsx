import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

import { Notification } from 'components/Notification';

import {
  ExclamationCircleIcon,
  MailIcon,
  PhoneIcon,
} from '@heroicons/react/outline';

import { CF7Response } from 'types/ContactForm7';
import { RefreshIcon } from '@heroicons/react/solid';

export default function Kontaktai() {
  const initialFormData = {
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    telephone: '',
    message: '',
  };

  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState<null | string>(null);
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = new FormData();
    for (const field in formData) {
      form.append(field, formData[field as keyof typeof formData]);
    }

    try {
      setLoading(true);
      const { data }: { data: CF7Response } = await axios.post(
        `${process.env.NEXT_PUBLIC_WP_API_URL}/contact-form-7/v1/contact-forms/27/feedback`,
        form
      );

      if (data.status === 'mail_sent') {
        setLoading(false);
        router.push('/zinute-issiusta');
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      setLoading(false);
      setFormError(error.message);
      setFormData(initialFormData);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFormError(null);
    }, 7000);

    return () => clearTimeout(timeout);
  }, [formError]);

  return (
    <div className="flex flex-col lg:flex-row max-w-7xl mx-auto mb-12 xl:mb-24">
      {formError && (
        <Notification
          icon={<ExclamationCircleIcon className="h-6 w-6 text-red-400" />}
          title="Nepavyko išsiųsti žinutės"
          description={formError}
          setShow={setFormError}
        />
      )}
      <div className="w-full px-4 sm:px-6 mt-10 mx-auto lg:mx-0">
        <h2 className="text-2xl font-extrabold tracking-tight text-pink-darkest sm:text-3xl">
          Susisiekite su mumis
        </h2>
        <dl className="mt-8 text-base text-gray-500">
          <div className="mt-6">
            <dt className="sr-only">Telefono numeris</dt>
            <dd className="flex">
              <PhoneIcon className="flex-shrink-0 h-6 w-6 text-gray-400" />
              <a href="tel:+37062696616" className="ml-3">
                +370 626 96616
              </a>
            </dd>
          </div>
          <div className="mt-3">
            <dt className="sr-only">Elektroninis paštas</dt>
            <dd className="flex">
              <MailIcon className="flex-shrink-0 h-6 w-6 text-gray-400" />
              <a href="mailto:info@hirepartners.lt" className="ml-3">
                info@hirepartners.lt
              </a>
            </dd>
          </div>
        </dl>
      </div>
      <div className="w-full px-4 sm:px-6 mx-auto lg:max-w-none">
        <form
          className="mt-14 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
          onSubmit={handleSubmit}
        >
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700"
            >
              Vardas
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="firstName"
                id="firstName"
                autoComplete="given-name"
                className="block w-full shadow-sm sm:text-sm focus:ring-pink focus:border-pink border-gray-300 rounded-md"
                onChange={handleChange}
                value={formData.firstName}
                required
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700"
            >
              Pavardė
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="lastName"
                id="lastName"
                autoComplete="family-name"
                className="block w-full shadow-sm sm:text-sm focus:ring-pink focus:border-pink border-gray-300 rounded-md"
                onChange={handleChange}
                value={formData.lastName}
                required
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              El. paštas
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full shadow-sm sm:text-sm focus:ring-pink focus:border-pink border-gray-300 rounded-md"
                onChange={handleChange}
                value={formData.email}
                required
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="company"
              className="block text-sm font-medium text-gray-700"
            >
              Įmonės pavadinimas
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="company"
                id="company"
                autoComplete="organization"
                className="block w-full shadow-sm sm:text-sm focus:ring-pink focus:border-pink border-gray-300 rounded-md"
                onChange={handleChange}
                value={formData.company}
                required
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <div className="flex justify-between">
              <label
                htmlFor="telephone"
                className="block text-sm font-medium text-gray-700"
              >
                Telefono numeris
              </label>
              <span
                id="telephone_description"
                className="text-sm text-gray-500"
              >
                Nebūtinas
              </span>
            </div>
            <div className="mt-1">
              <input
                type="text"
                name="telephone"
                id="telephone"
                autoComplete="tel"
                aria-describedby="telephone_description"
                className="block w-full shadow-sm sm:text-sm focus:ring-pink focus:border-pink border-gray-300 rounded-md"
                onChange={handleChange}
                value={formData.telephone}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <div className="flex justify-between">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Jūsų žinutė
              </label>
            </div>
            <div className="mt-1">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full shadow-sm sm:text-sm focus:ring-pink focus:border-pink border-gray-300 rounded-md"
                onChange={handleChange}
                value={formData.message}
                required
              ></textarea>
            </div>
          </div>
          <div className="text-right sm:col-span-2">
            <button
              type="submit"
              className={`inline-flex justify-center py-2 px-4 border border-transparent text-sm font-medium shadow-md rounded-md text-white bg-pink-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-dark transition-opacity ${
                loading
                  ? 'cursor-not-allowed opacity-70'
                  : 'cursor-pointer hover:opacity-90'
              }`}
              disabled={loading}
            >
              {!loading ? (
                <span>Siųsti</span>
              ) : (
                <span>
                  Siunčiama
                  <RefreshIcon className="inline-block animate-spin h-4 w-4 ml-2" />
                </span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
