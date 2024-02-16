import { ErrorMessage, Field, useField } from "formik"

const CustomInput = ({ label, type, placeholder, ...props }) => {
  const [field, meta] = useField(props);

  return(
    <>
      <div id={label} className="mt-2 w-auto">
        <div className="text-base">
          <h4>{label}</h4>
          <Field {...field} {...props} 
            placeholder={placeholder}
            className={meta.touched && meta.error ? 
            "border-red-500" : null}
          />
          {meta.touched && meta.error ? 
            <div className="text-red-800 bg-red-300 font-semibold p-2 mt-1">
              <ErrorMessage
                name={field.name}
                component="span"
              />
            </div>
            : ""
          }
        </div>
      </div>
    </>   
  )
}

export default CustomInput;