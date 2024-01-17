"use client";

import { Button } from "@/components/ui/button";
import axios from "axios";
import { CalendarRangeIcon, Loader } from "lucide-react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { toast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { revalidatePath, revalidateTag } from "next/cache";
import { useRouter } from "next/navigation";

const createNoteSchema = z.object({
  title: z.string().min(1),
  date: z.date(),
  message: z.string().min(1),
});

type CreateNoteSchemaType = z.infer<typeof createNoteSchema>;

const AddNoteForm = () => {
  const router = useRouter();
  const form = useForm<CreateNoteSchemaType>({
    resolver: zodResolver(createNoteSchema),
  });

  const { isSubmitting, disabled, isValid } = form.formState;

  const onSubmit = async (data: CreateNoteSchemaType) => {
    try {
      // const dt = await fetch("/api/note", {
      //   method: "POST",
      //   body: JSON.stringify(data),
      // });

      const out = await axios.post("/api/note", data);
      // revalidatePath("/");
      console.log({ out });
      router.refresh();
      // revalidateTag("notes");
      router.push("/");
    } catch (error) {
      console.log(error);
      toast({
        title: "Something went wrong",
      });
    }
  };

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-4/4 space-y-3 md:w-2/4"
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Note title</FormLabel>
                <FormControl>
                  <Input placeholder="e.g nice nootes .." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="e.g: express your thinking"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Note Date</FormLabel>

                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        className={cn(
                          " w-full",
                          !field.value && "text-muted-foreground",
                        )}
                        variant={"outline"}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarRangeIcon className="ml-auto" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent align="start">
                    <Calendar
                      selected={field.value}
                      onSelect={field.onChange}
                      mode="single"
                      disabled={(date) =>
                        date > new Date() || date < new Date("1997-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </FormItem>
            )}
          />

          <Button
            type="submit"
            disabled={!isValid || isSubmitting}
            aria-disabled={!isValid}
          >
            Submit
            {isSubmitting && <Loader className="ml-2 animate-spin" />}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AddNoteForm;
