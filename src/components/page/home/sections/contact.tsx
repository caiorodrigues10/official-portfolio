"use client";
import { Button } from "@/components/button";
import { TextArea } from "@/components/textArea";
import { TextInput } from "@/components/textInput";
import { phoneMask } from "@/utils/MaskProvider";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "emailjs-com";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";

export default function Contact() {
  const t = useTranslations("main");
  const [isLoading, setIsLoading] = useState(false);

  const contactSchema = z.object({
    name: z.string().min(1, t("nameMandatory")),
    phone: z.string().min(1, t("phoneNumberMandatory")),
    message: z.string().min(1, t("messageMandatory")),
  });

  type ContactFormData = z.infer<typeof contactSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const sendEmail = async (data: ContactFormData) => {
    setIsLoading(true);
    await emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_TEMPLATE_ID || "",
        {
          from_name: data.name,
          message: "Olá, gostaria de fazer uma proposta",
          reply_to: "caio.henrique.rodrigues10@gmail.com",
        },
        process.env.NEXT_PUBLIC_USER_ID || ""
      )
      .then(
        (result) => {
          toast(t("sendEmail"));
          reset();
        },

        (error) => {
          toast(t("errorSendEmail") + error.text);
        }
      );
    setIsLoading(false);
  };

  return (
    <section className="flex w-full flex-col gap-12 mt-[230px]">
      <h1 className="text-5xl text-center dark:text-[#D7D7D7] syncopate-bold uppercase">
        {t("placeHolderWorkTogether")}
      </h1>
      <form className="flex flex-col gap-6" onSubmit={handleSubmit(sendEmail)}>
        <div className="flex gap-6 items-center w-full">
          <TextInput.Root className="w-full">
            <TextInput.Content>
              <TextInput.Input
                placeholder={t("placeHolderFullName")}
                {...register("name")}
              />
            </TextInput.Content>
            <TextInput.Error
              isInvalid={!!errors.name}
              description={errors.name?.message}
            />
          </TextInput.Root>

          <TextInput.Root className="w-full">
            <TextInput.Content>
              <TextInput.Input
                placeholder={t("phoneNumber")}
                {...register("phone")}
                onChange={(e) => setValue("phone", phoneMask(e.target.value))}
              />
            </TextInput.Content>
            <TextInput.Error
              isInvalid={!!errors.phone}
              description={errors.phone?.message}
            />
          </TextInput.Root>
        </div>

        <TextArea.Root>
          <TextArea.Content>
            <TextArea.Input
              rows={5}
              placeholder={t("placeHolderMessage")}
              {...register("message")}
            />
          </TextArea.Content>
          <TextArea.Errors
            isInvalid={!!errors.message}
            description={errors.message?.message}
          />
        </TextArea.Root>

        <Button type="submit" isLoading={isLoading}>
          {t("send")}
        </Button>
      </form>
    </section>
  );
}
