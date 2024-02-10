import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useCategories } from '@/hooks/features/useCategories';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFieldArray, useForm } from 'react-hook-form';
import {
  ProfileFormValues,
  productFormDefaultValues,
  profileFormSchema,
} from './product-form.constants';

export function AdminProductForm() {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: productFormDefaultValues,
    mode: 'onChange',
  });

  // const { fields: urlsFields, append: urlsAppend } = useFieldArray({
  //   name: 'gallery',
  //   control: form.control,
  // });

  const { fields: infoFields, append: infoAppend } = useFieldArray({
    name: 'info',
    control: form.control,
  });

  const { categories } = useCategories();

  console.log('!!!');

  // Функции
  function onSubmit(data: ProfileFormValues) {
    console.log('!!!!');
    console.log(data);
    // const product: ProductForCreating = {
    //   name: data.name,
    //   rating: Number(data.rating),
    //   price: Number(data.price),
    //   categoryId: Number(data.categoryId),
    //   gallery: data.gallery,
    //   // info: data.info.map((obj) => obj.value),
    // };
    // dispatch(createProduct(product));
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
              <Select onValueChange={field.onChange} defaultValue={field.value}>
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
          <FormDescription>
            Вводите характеристики в формате (без кавычек) -
            "Название_характеристики: текст"
          </FormDescription>
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="mt-2"
            onClick={() => infoAppend({ value: '', name: '' })}
          >
            Добавить характеристику
          </Button>
        </div>

        {/* <div>
          <FormLabel className="mr-2">Ссылки на фотографии</FormLabel>
          {urlsFields.map((field, index) => (
            <FormField
              control={form.control}
              key={field.id}
              name={`gallery.${index}`}
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
            onClick={() => urlsAppend({ value: '' })}
          >
            Добавить URL
          </Button>
        </div> */}
        <Button type="submit">Создать товар</Button>
      </form>
    </Form>
  );
}
