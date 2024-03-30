import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { X as DeleteIcon } from "lucide-react";
import { toast } from "sonner";
import { productFormDefaultValues, productFormSchema } from "./product-form.constants";
import AdminProductFormPhotosGrid from "./components/PhotosGrid";
import type { ProductFormValues } from "./product-form.constants";
import type { IProductForCreating } from "@/types/features/product/product.types";
import { Button } from "@/components/ui/shadcn/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/shadcn/form";
import { Input } from "@/components/ui/shadcn/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/shadcn/select";
import { useCategories } from "@/hooks/features/useCategories";
import ProductService from "@/services/product/product.service";
import { errorCatch } from "@/api/api.helper";

function AdminProductForm() {
  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productFormSchema),
    defaultValues: productFormDefaultValues,
    mode: "onChange"
  });

  const {
    fields: galleryFields,
    append: galleryAppendItem,
    remove: galleryRemoveItem
  } = useFieldArray({
    name: "gallery",
    control: form.control
  });

  const {
    fields: infoFields,
    append: infoAppendItem,
    remove: infoRemoveItem
  } = useFieldArray({
    name: "info",
    control: form.control
  });

  const { categories } = useCategories();

  // Функции
  async function onSubmit(data: ProductFormValues) {
    try {
      await ProductService.create({
        ...data,
        gallery: data.gallery.map((el) => el.value),
        categoryId: +data.categoryId
      } as IProductForCreating);
      toast("Продукт создан!");
    } catch (error) {
      toast("Ошибка создания продукта: ", { description: errorCatch(error) });
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
              <FormLabel>Категория</FormLabel>
              <Select onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите категорию из списка" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {categories &&
                    categories.map((category) => (
                      <SelectItem key={category.id} value={`${category.id}`}>
                        {category.name} (id: {category.id})
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
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
                <Input placeholder="223" type="number" min={0} {...field} />
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
                <Input
                  placeholder="5.0"
                  type="number"
                  step={0.1}
                  min={0}
                  max={5}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <AdminProductFormPhotosGrid
          images={[
            form.getValues().image,
            ...form.getValues().gallery.map((el) => el.value)
          ]}
        />

        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ссылка на фото-превью (1)</FormLabel>
              <FormControl>
                <Input
                  placeholder="https://loremflickr.com/300/300"
                  type="string"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div>
          <FormLabel className="mr-2">Галерея</FormLabel>
          <FormDescription>Добавьте ссылки на фотографии</FormDescription>
          {galleryFields.map((field, index) => (
            <FormField
              control={form.control}
              key={field.id + index}
              name={`gallery.${index}.value`}
              render={({ field }) => (
                <>
                  <FormItem className="flex gap-2 align-center mt-3 space-y-0 items-center">
                    <span>({index + 2})</span>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <button className="mt-0" onClick={() => galleryRemoveItem(index)}>
                      <DeleteIcon />
                    </button>
                  </FormItem>
                  <FormMessage />
                </>
              )}
            />
          ))}
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="mt-5"
            onClick={() => galleryAppendItem({ value: "" })}
          >
            Добавить фотографию
          </Button>
        </div>

        <div>
          <FormLabel className="mr-2">Характеристики</FormLabel>
          <div className="w-full">
            <div className="mt-4 mb-3 grid grid-cols-2">
              <FormDescription>Название характеристики</FormDescription>
              <FormDescription className="ml-[-10px]">Значение</FormDescription>
            </div>
            {infoFields.map((field, index) => (
              <div className="flex align-center gap-2 w-full mb-3" key={field.id + index}>
                <FormField
                  control={form.control}
                  key={field.id}
                  name={`info.${index}.name`}
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  key={field.id + index}
                  name={`info.${index}.value`}
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <button className="mt-0" onClick={() => infoRemoveItem(index)}>
                  <DeleteIcon />
                </button>
              </div>
            ))}
          </div>
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="mt-3"
            onClick={() => infoAppendItem({ value: "", name: "" })}
          >
            Добавить характеристику
          </Button>
        </div>

        <Button
          type="submit"
          onClick={() => console.log("errors: ", form.formState.errors)}
        >
          Создать товар
        </Button>
      </form>
    </Form>
  );
}

export default AdminProductForm;
