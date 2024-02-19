import React, { useState } from "react";
import Head from "next/head";
import Transition from "@/components/Transition";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import Layout from "@/components/Layout";
import { sendContactForm } from "../../lib/api";

const initValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const initState = { values: initValues };

const Contact = () => {
  const toast = useToast();
  const [form, setForm] = useState(initState);
  const [input, setInput] = useState({});

  const { values, isLoading, error } = form;

  const onBlur = ({ target }) =>
    setInput((prev) => ({ ...prev, [target.name]: true }));

  const handleChange = ({ target }) =>
    setForm((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async () => {
    setForm((prev) => ({
      ...prev,
      isLoading: true,
    }));

    try {
      await sendContactForm(values);
      setInput({});
      setForm(initState);
      toast({
        title: "Message sent.",
        status: "success",
        duration: 2000,
        position: "top",
      });
    } catch (error) {
      setForm((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };

  return (
    <>
      <Head>
        <title>CB | Contact</title>
        <meta name="description" content="any description" />
      </Head>
      <Transition />
      <main>
        <h2 className="text-center text-4xl font-bold text-black mt-4 mb-4 dark:text-white">
          Contact Us
        </h2>
        {error && (
          <Text
            color="red.300"
            my={4}
            fontSize="xl"
            style={{ textAlign: "center" }}
          >
            {error}
          </Text>
        )}
        <Layout className="pt-16">
          <FormControl isRequired isInvalid={input.name && !values.name} mb={5}>
            <FormLabel className=" text-black dark:text-white">Name</FormLabel>
            <Input
              type="text"
              name="name"
              errorBorderColor="red.300"
              value={values.name}
              onChange={handleChange}
              onBlur={onBlur}
              className="text-black dark:text-white"
            />
            <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>

          <FormControl
            isRequired
            isInvalid={input.name && !values.email}
            mb={5}
          >
            <FormLabel className=" text-black dark:text-white">Email</FormLabel>
            <Input
              type="email"
              name="email"
              errorBorderColor="red.300"
              value={values.email}
              onChange={handleChange}
              onBlur={onBlur}
              className="text-black dark:text-white"
            />
            <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>

          <FormControl
            isRequired
            isInvalid={input.name && !values.subject}
            mb={5}
          >
            <FormLabel className=" text-black dark:text-white">Subject</FormLabel>
            <Input
              type="text"
              name="subject"
              errorBorderColor="red.300"
              value={values.subject}
              onChange={handleChange}
              onBlur={onBlur}
              className="text-black dark:text-white"
            />
            <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>

          <FormControl
            isRequired
            isInvalid={input.name && !values.message}
            mb={5}
          >
            <FormLabel className=" text-black dark:text-white">Message</FormLabel>
            <Textarea
              type="text"
              rows={4}
              name="message"
              errorBorderColor="red.300"
              value={values.message}
              onChange={handleChange}
              onBlur={onBlur}
              className="text-black dark:text-white"
            />
            <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>

          <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="outline"
            colorScheme="blue"
            isLoading={isLoading}
            disabled={
              !values.name ||
              !values.email ||
              !values.subject ||
              !values.message
            }
            onClick={onSubmit}
          >
            Submit
          </Button>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Contact;
