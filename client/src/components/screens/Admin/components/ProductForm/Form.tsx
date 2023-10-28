import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import * as z from "zod";
import { createProduct } from "../../api/createProduct";
import { IProductWithoutId } from "@/interfaces/IProduct";

const profileFormSchema = z.object({
  name: z.string().min(3, {message: "Минимальная длина имени товара - 3 символа"}),
  categoryId: z.string().min(0, {message: "TypeID не может быть меньше 0"}),
  price: z.string().min(0, {message: "Минимальная цена продукта - 0"}),
  rating: z.string().min(0, {message: "Минимальный рейтинг - 0"}),
  info: z.array(
    z.object({
      value: z.string().min(10, {message: "Минимальная длина характеристики - 10 символов"}),
    })
  ).min(1, {message: "Минимум должна быть одна характеристика"}),
  imgs: z.array(
    z.object({
      value: z.string().url({ message: "Введите валидную ссылку на фотографию." }),
    })
  ).min(1, {message: "Минимум должна быть одна ссылка на фотографию"})
})

type ProfileFormValues = z.infer<typeof profileFormSchema>;

export function AdminProductForm() {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      name: "",
      rating: "",
      price: "",
      info: [],
      categoryId: "",
      imgs: []
    },
    mode: "onChange",
  })

  const { fields: urlsFields, append: urlsAppend } = useFieldArray({
    name: "imgs",
    control: form.control,
  });

  const { fields: infoFields, append: infoAppend } = useFieldArray({
    name: "info",
    control: form.control,
  });

  // Функции
  async function onSubmit(data: ProfileFormValues) {
    const product: IProductWithoutId = {
      name: data.name,
      rating: Number(data.rating),
      price: Number(data.price),
      categoryId: Number(data.categoryId),
      imgs: data.imgs.map(obj => obj.value),
      info: data.info.map(obj => obj.value),
    };

    const response = await createProduct(product);

    if (typeof response === "string") {
      toast({
        title: "Создание товара",
        description: (
          <span>Произошла ошибка: {response}</span>
        ),
      });
      return;
    } else {
      console.log(response);
      toast({
        title: "Создание товара",
        description: (
          <span>Успешно!</span>
        ),
      });
    }
  }
  // Функции END

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
          name="categoryId"
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
              name={`imgs.${index}.value`}
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