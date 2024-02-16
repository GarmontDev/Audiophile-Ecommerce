import {ErrorMessage, Field, useField} from "formik";

const CustomRadioButton = ({ label, value, ...props}) => {
  const [field, meta] = useField(props);
  return (
    <>
      <div id={label} className="radio-btn">
        <Field type="radio" 
          name={label}
          value={value}
          {...field}{...props} 
          className="h-4 w-4 border-green-500 focus:ring-0 text-red-500"
        />
        <span className="radio-btn-text">
          {label}
        </span>
        {/* {meta.error ? 
            <div className="text-red-800 bg-red-300 font-semibold p-2 mt-1">
              <ErrorMessage
                name={field.name}
                component="span"
              />
            </div>
            : ""
          } */}
      </div>
    </>
  );
 };

export default CustomRadioButton;