import { Input, Button, Spacer, Link, Row, Loading } from "@nextui-org/react";
import { User, Password } from "react-iconly";
import { useToast, TextDivider, Form } from "components";
import { OtherSignInPlatform } from "./other";
import { useRouter } from "next/router";
import { Formik } from "formik";

const defaultSignFormData = {
  username: "wangly19",
  password: "nextui.org",
};

export const LoginForm = () => {
  const router = useRouter();
  const { toast } = useToast();

  const handleSignSubmit = () => {
    toast({
      title: "Welcome.",
      description: "Start your trip next. ",
    });
    router.replace("/");
  };

  const handleSignFormValidate = (values: typeof defaultSignFormData) => {
    const errors: Record<string, string> = {};

    /** username is notfound ? */
    if (!values.username.trim()) {
      errors.username = "username required";
    }

    /** password is notfound ? */
    if (!values.password.trim()) {
      errors.password = "password required";
    }

    return errors;
  };

  return (
    <>
      <Formik
        initialValues={defaultSignFormData}
        validate={handleSignFormValidate}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
            toast({
              title: "Welcome.",
              description: "Start your trip next. ",
            });
            router.replace("/");
          }, 400);
        }}
      >
        {({
          values,
          errors,
          handleChange,
          isSubmitting,
          handleSubmit,
          handleBlur,
        }) => {
          console.log(errors, "withErrors");
          return (
            <Form autoComplete="off" onSubmit={handleSubmit}>
              <Input
                required
                name="username"
                labelLeft={<User set="bold" />}
                shadow={false}
                width="100%"
                placeholder="username: Arbitrary name"
                status={errors?.username ? "error" : undefined}
                value={values?.username}
                label={errors?.username || "UserName"}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <Spacer />
              <Input.Password
                required
                name="password"
                shadow={false}
                width="100%"
                placeholder="password: nextui.org"
                labelLeft={<Password set="bold" />}
                value={values?.password}
                status={errors?.password ? "error" : undefined}
                label={errors?.password || "Password"}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <Spacer y={1} />
              <Row justify="flex-end">
                <Link block color="primary">
                  Forgot Password ?
                </Link>
              </Row>
              <Spacer y={1} />
              <Button
                shadow
                type="submit"
                css={{
                  width: "100%",
                }}
                size="lg"
                color="primary"
              >
                {isSubmitting ? (
                  <Loading
                    type="points-opacity"
                    color="currentColor"
                    size="sm"
                  />
                ) : (
                  "SIGN IN"
                )}
              </Button>
            </Form>
          );
        }}
      </Formik>

      <Spacer y={1} />
      <TextDivider text="OR"></TextDivider>
      <OtherSignInPlatform />
    </>
  );
};
