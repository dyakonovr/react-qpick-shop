import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import * as z from "zod";

const profileFormSchema = z.object({
  name: z.string(),
  typeId: z.string(),
  price: z.string(),
  rating: z.string(),
  info: z.array(
    z.object({
      value: z.string(),
    })
  ),
  urls: z.array(
    z.object({
      value: z.string().url({ message: "Введите валидную ссылку на фотографию." }),
    })
  )
})

type ProfileFormValues = z.infer<typeof profileFormSchema>;

export function ProductForm() {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      name: "",
      rating: "",
      price: "",
      info: [],
      typeId: "",
      urls: []
    },
    mode: "onChange",
  })

  const { fields: urlsFields, append: urlsAppend } = useFieldArray({
    name: "urls",
    control: form.control,
  });

  const { fields: infoFields, append: infoAppend } = useFieldArray({
    name: "info",
    control: form.control,
  });

  function onSubmit(data: ProfileFormValues) {
    console.log('!', data);

    toast({
      title: "Создание товара",
      description: (
        <span>Выполнено успешно</span>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Наименование товара</FormLabel>
              <FormControl>
                <Input placeholder="Название..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="typeId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Категория (id)</FormLabel>
              <FormControl>
                <Input placeholder="ID" type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Цена</FormLabel>
              <FormControl>
                <Input placeholder="223" type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="rating"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Рейтинг</FormLabel>
              <FormControl>
                <Input placeholder="5.0" type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div>
          <FormLabel className="mr-2">Характеристики</FormLabel>
          {infoFields.map((field, index) => (
            <FormField
              control={form.control}
              key={field.id}
              name={`info.${index}.value`}
              render={({ field }) => (
                <FormItem className="mt-3">
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          <FormDescription>Вводите характеристики в формате (без кавычек) - "Название_характеристики: текст"</FormDescription>
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="mt-2"
            onClick={() => infoAppend({ value: "" })}
          >
            Добавить характеристику
          </Button>
        </div>

        <div>
          <FormLabel className="mr-2">Ссылки на фотографии</FormLabel>
          {urlsFields.map((field, index) => (
            <FormField
              control={form.control}
              key={field.id}
              name={`urls.${index}.value`}
              render={({ field }) => (
                <FormItem className="mt-3">
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="mt-2"
            onClick={() => urlsAppend({ value: "" })}
          >
            Добавить URL
          </Button>
        </div>
        <Button type="submit">Создать товар</Button>
      </form>
    </Form>
  )
}
