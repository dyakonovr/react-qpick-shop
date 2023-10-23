import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const profileFormSchema = z.object({
  name: z.string(),
})

type ProfileFormValues = z.infer<typeof profileFormSchema>;

export function CategoryForm() {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      name: "",
    },
    mode: "onChange",
  })

  function onSubmit(data: ProfileFormValues) {
    console.log('!', data);

    toast({
      title: "Создание категории",
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
              <FormLabel>Наименование категории</FormLabel>
              <FormControl>
                <Input placeholder="Название..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Создать категорию</Button>
      </form>
    </Form>
  )
}
