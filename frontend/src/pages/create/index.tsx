import { type FC } from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { INITIAL_VALUES, INPUT_FIELDS } from "../../utils/constants";
import userSchema from "../../utils/schema";
import { useCreatePlace } from "../../service";
import { useNavigate } from "react-router-dom";

const Create: FC = () => {
  const navigate = useNavigate();
  const { mutate, isSuccess, isPending } = useCreatePlace();

  // form verileri otomatik alinir,
  // e.preventDefault() kullanmaya gerek yoktur,
  // values : formdaki butun inputlarin degerlerini iceren objedir
  const handleSubmit = (values: any) => {
    mutate(values);
  };

  if (isSuccess) {
    navigate("/");
  }

  return (
    <div className="">
      <Formik
        onSubmit={handleSubmit}
        validationSchema={userSchema}
        initialValues={INITIAL_VALUES}
      >
        <Form className="w-full md:w-[60%] lg:w-[50%] mx-auto flex flex-col gap-5">
          {INPUT_FIELDS.map((field) => (
            <div key={field.name} className="mb-4">
              {field.type === "checkbox" ? (
                <div>
                  <Field type="checkbox" name={field.name} />
                  {field.label}
                </div>
              ) : (
                <div className="relative">
                  <Field
                    name={field.name}
                    placeholder={field.placeholder}
                    className="border border-gray-300 p-2 rounded w-full"
                  />
                  <ErrorMessage
                    name={field.name}
                    component="div"
                    className="text-red-500 text-sm mt-1 absolute left-0"
                  />
                </div>
              )}
            </div>
          ))}
          <button
            disabled={isPending}
            type="submit"
            className="bg-blue-400 w-full py-2 rounded-md text-white hover:bg-blue-500 transition cursor-pointer disabled:cursor-not-allowed disabled:bg-blue-200"
          >
            Oluştur
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Create;
