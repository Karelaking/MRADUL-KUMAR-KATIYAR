import React from "react";
import { useForm } from "react-hook-form";
import { PageTemplate } from "../../components/PageTemplate/PageTemplate";

const Contacts = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <PageTemplate classes="flex" id="contacts">
      {
        <div className="w-full sm:w-1/2 h-full min-h-screen hidden sm:block bg-[url('./src/assets/img/projects.png')] bg-cover"></div>
      }
      <div className="w-full sm:w-1/2 px-7 sm:px-16 h-full min-h-screen flex flex-wrap gap-4 items-center">
        <h1 className="text-center w-full font-extrabold  text-black text-4xl my-12">
          Contact Me
        </h1>
        <form
          className="w-full h-max mx-auto flex flex-col "
          action="#"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="text"
            placeholder="Email"
            className="my-2 h-12 border-2 rounded"
            {...register("email", { required: true })}
          />
          <textarea
            placeholder="Message"
            {...register("message", { required: true })}
          ></textarea>
          <input type="submit" value="Send Me" />
        </form>
      </div>
    </PageTemplate>
  );
};

export { Contacts };
