"use client";

import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/Input";
import toast from "react-hot-toast";
import { error } from "console";
import Button from "../Button";
import { FaGithub } from "react-icons/fa";

const RegisterModal = () => {
  const registermodal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    axios
      .post("/api/register", data)
      .then(() => {
        registermodal.onClose();
      })
      .catch((error) => {
        console.log("ERRRRRRRRR")
        toast.error("Something Went Wrong")
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const bodyComponent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome" subtitle="Create an Account" center />
      <Input 
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input 
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input 
        id="password"
        label="Password"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  const footerComponent =(
    <div className="flex flex-col gap-4 mt-3">
      <hr />

      <Button
        outline
        label="Continue with Google"
        icon={FcGoogle}
        onClick={() => {}}
      />
      <Button
        outline
        label="Continue with Google"
        icon={FaGithub}
        onClick={() => {}}
      />
      <div className="mt-4 text-neutral-500 font-light text-center">
        <div className="items-center flex flex-row justify-center gap-2">
          <div>
            Already have an Account?
          </div>
          <div onClick={registermodal.onClose} className="text-neutral-800 cursor-pointer hover:underline">
            Login
          </div>
          </div>

      </div>
    </div>
  )
  return (
    <Modal
      disabled={isLoading}
      isOpen={registermodal.isOpen}
      title="Register"
      actionLabel="Continue"
      onClose={registermodal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyComponent}
      footer={footerComponent}
    />
  );
};

export default RegisterModal;
