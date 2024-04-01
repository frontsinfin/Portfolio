import Image from "next/image";
import { dataContacts } from "../constants/constants";
import TitleComp from "./TitleComp";
import Link from "next/link";

import React from "react";
import { useForm } from "react-hook-form";

const Contacts = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {};
  return (
    <div className="flex flex-col gap-4 md:gap-10">
      <TitleComp title="Контакты" titleId="Контакты" />
      <section className="flex gap-20">
        <div className="flex flex-col gap-4 text-xl font-bold">
          <h3>Соц.сети</h3>
          <div className="flex flex-col gap-2">
            {dataContacts.map((contact) => (
              <Link
                href={contact.link}
                key={contact.social}
                className="flex gap-2 items-center"
              >
                <Image
                  width={24}
                  height={24}
                  alt={contact.social}
                  src={contact.icon}
                />
                <span className="font-normal text-lg">{contact.social}</span>
              </Link>
            ))}
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 text-xl font-bold"
        >
          <h3>Написать мне</h3>
          <div className="flex flex-col gap-2">
            <input
              type="text"
              placeholder="name"
              {...register("name", { required: "Укажите имя", min: 3 })}
            />
            <input
              type="text"
              placeholder="email"
              {...register("email", { required: "Укажите почту" })}
            />
            <input
              type="tel"
              placeholder="number"
              {...register("number", { maxLength: 11 })}
            />
            <input
              type="text"
              placeholder="quest"
              {...register("quest", { required: "Напишите письмо" })}
            />
            <input type="submit" className="text-start" />
          </div>
        </form>
        <div className=" flex flex-col gap-1 fixed bottom-10 right-10">
          <span className="">{errors.name?.message}</span>
          <span className="">{errors.email?.message}</span>
          <span className="">{errors.quest?.message}</span>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
