import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useState } from "react"

type EditorFormProps = {
  form: any
  name: string
  title: string
}
const EditorForm = ({ form, name, title }: EditorFormProps) => {
  const [value, setValue] = useState('');
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="mb-4">
          <FormLabel className="text-sm font-medium">{title}</FormLabel>
          <FormControl>
            <ReactQuill
              className="border rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
              modules={modules}
              theme="snow"
              value={value || field.value}
              onChange={(content) => {
                setValue(content);
                field.onChange(content);
              }}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );

}

export default EditorForm


const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ align: ["right", "center", "justify"] }],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link"],
  ],
};