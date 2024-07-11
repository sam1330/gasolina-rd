"use client";

import InputGroup from "@/components/base/InputGroup";
import Select from "@/components/base/Select";
import { useGetGasTypesCatalog } from "@/components/hooks/useGasTypes";
import React from "react";

const CreateTestForm = () => {
  const [formValue, setFormValue] = React.useState({
    ron: null,
    plumb: null,
    sulfur: null,
    color: null,
    observations: null,
    gas_type_id: null,
    establishment_id: null,
    date: null,
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormValue((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.type === "number" ? +event.target.value : event.target.value,
    }));
  };

  const { gasTypes } = useGetGasTypesCatalog();

  const createTestResult = () => {
    fetch("http://localhost:4000/test_results", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `mutation CreateTestResult($data: TestResultInput!) {
          createTestResult(data: $data) {
            id
            observations
          }
        }`,
        variables: {
          data: {
            ...formValue,
          }
        },
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="border-b border-gray-900/10 pb-12 max-w-screen-lg mx-auto">
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Crear Test de gasolina
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          Use a permanent address where you can receive mail.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <InputGroup
              label="Octanaje (RON)"
              htmlFor="ron"
              type="number"
              name="ron"
              id="ron"
              placeholder="RON"
              required
              onChange={handleChange}
              value={formValue.ron as any}
            />
          </div>

          <div className="sm:col-span-3">
            <InputGroup
              label="Plomo"
              htmlFor="plumb"
              type="number"
              name="plumb"
              id="plumb"
              placeholder="Plumb"
              required
              onChange={handleChange}
              value={formValue.plumb as any}
            />
          </div>

          <div className="sm:col-span-3">
            <InputGroup
              label="Sulfur"
              htmlFor="sulfur"
              type="number"
              name="sulfur"
              id="sulfur"
              placeholder="Sulfur"
              required
              onChange={handleChange}
              value={formValue.sulfur as any}
            />
          </div>

          <div className="sm:col-span-3">
            <InputGroup
              label="Color"
              htmlFor="color"
              type="text"
              name="color"
              id="color"
              placeholder="Color"
              required
              onChange={handleChange}
              value={formValue.color as any}
            />
          </div>

          <div className="col-span-full">
            <InputGroup
              label="Observaciones"
              htmlFor="observations"
              type="text"
              name="observations"
              id="observations"
              placeholder="Observaciones"
              required
              onChange={handleChange}
              value={formValue.observations as any}
            />
          </div>

          <div className="sm:col-span-2 sm:col-start-1">
            <label
              htmlFor="gas_type_id"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              City
            </label>
            <Select
              name="gas_type_id"
              id="gas_type_id"
              onChange={handleChange}
              value={formValue.gas_type_id as any}
              options={gasTypes}
              className="mt-2"
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="region"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              State / Province
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="region"
                id="region"
                autoComplete="address-level1"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="postal-code"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              ZIP / Postal code
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="postal-code"
                id="postal-code"
                autoComplete="postal-code"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="col-span-full flex justify-end">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={createTestResult}
            >
              Crear
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateTestForm;