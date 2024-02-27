import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/shadcn/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/shadcn/form";
import { Input } from "@/components/ui/shadcn/input";

const profileFormSchema = z.object({
  name: z.string().min(3, { message: "Минимальная длина названия категории - 3 символа" })
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

export function AdminCategoryForm({ onSuccess }: { onSuccess: () => void }) {
  // Валидация и настройка формы
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      name: ""
    },
    mode: "onChange"
  });
  // Валидация и настройка формы END

  // Функции
  async function onSubmit(data: ProfileFormValues) {
    console.log("category has created");
    onSuccess();
    // dispatch(createCategory(data.name));
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
              <FormLabel>Название категории</FormLabel>
              <FormControl>
                <Input placeholder="Машины" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Создать категорию</Button>
      </form>
    </Form>
  );
}
