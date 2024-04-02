import Image from "next/image";
import { dataContacts } from "../constants/constants";
import TitleComp from "./TitleComp";
import Link from "next/link";

import React from "react";
import { useForm } from "react-hook-form";
import Input from "../UI/Input";

const InputStyles =
  "w-full bg-inherit text-sm md:text-[14px] px-4 md:px-6 py-1 text-white font-normal placeholder:text-[#787878] placeholder:font-normal transition-opacity hover:opacity-70  active:opacity-50 outline-none border-white border-[1px] rounded-[4px] px-4 w-full ";

const Contacts = () => {
  const { handleSubmit, control, register } = useForm();
  const onSubmit = (data: {}) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col gap-4 md:gap-10 md:max-w-max">
      <TitleComp title="Контакты" titleId="Контакты" />
      <section className="flex flex-col md:flex-row gap-20">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-5 md:gap-6 text-xl font-bold w-full"
        >
          <div className="flex flex-col md:flex-row l gap-5 md:gap-6">
            <Input
              InputStyles={InputStyles}
              name="name"
              placeholder="имя*"
              control={control}
              rules={{
                required: "Укажите имя",
                minLength: {
                  value: 2,
                  message: "Минимум 2 символа",
                },
              }}
            />
            <Input
              InputStyles={InputStyles}
              name="email"
              placeholder="почта*"
              control={control}
              rules={{
                required: "Укажите почту",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Неверный формат почты",
                },
              }}
            />
            <Input
              InputStyles={InputStyles}
              name="number"
              placeholder="телефон"
              control={control}
            />
          </div>
          <textarea
            className={InputStyles}
            placeholder="ваш вопрос"
            rows={3}
            {...register("question")}
          ></textarea>
          <div className="flex gap-6 md:gap-8">
            <input
              type="submit"
              className={`${InputStyles} cursor-pointer max-w-min`}
            />
            <div className="flex gap-3 md:gap-4">
              {dataContacts.map((contact) => (
                <Link
                  href={contact.link}
                  key={contact.social}
                  className="flex gap-2 items-center hover:opacity-70 active:opacity-50 transition-opacity"
                >
                  <Image
                    width={20}
                    height={20}
                    alt={contact.social}
                    src={contact.icon}
                  />
                  <span className="text-[12px] font-normal hidden : md:block">
                    {contact.social}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contacts;
