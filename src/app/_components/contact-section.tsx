"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { contactHighlights } from "@/lib/data/contact";
import {
  contactFormDefaults,
  contactFormSchema,
  type ContactFormValues,
} from "@/lib/data/contact-form";

export function ContactSection() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: contactFormDefaults,
  });

  const onSubmit = async (values: ContactFormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    // TODO: Wire up API integration.
    console.log("Contact submission", values);
    form.reset();
  };

  return (
    <section id="contact" className="bg-secondary-foreground text-primary-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-20 lg:flex-row lg:items-center">
        <div className="max-w-xl space-y-6">
          <span className="inline-flex items-center rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-4 py-1 text-sm font-semibold tracking-wide">
            Let&apos;s grow resilient agrifood systems
          </span>
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Ready to co-create your next agritech release?
          </h2>
          <p className="text-base text-primary-foreground/90">
            Share your production regions, partner network, and current tools. Our Nairobi-based solution architects will
            curate a tailored roadmap with pilots, integrations, and adoption plans.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-primary-foreground/80">
            {contactHighlights.map((item) => {
              const Icon = item.icon;
              return (
                <span key={item.text} className="flex items-center gap-2">
                  <Icon className="h-4 w-4 text-primary-foreground" />
                  {item.text}
                </span>
              );
            })}
          </div>
        </div>
        <Card className="w-full max-w-lg border-none bg-card text-card-foreground shadow-xl">
          <CardHeader>
            <CardTitle>Contact the Forinda team</CardTitle>
            <CardDescription>
              We respond within one business day. Prefer email? Reach us at{" "}
              <a className="font-medium text-primary" href="mailto:hello@forinda.org">
                hello@forinda.org
              </a>
              .
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Form {...form}>
              <form
                className="space-y-4"
                onSubmit={form.handleSubmit(onSubmit)}
                noValidate
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full name</FormLabel>
                        <FormControl>
                          <Input placeholder="Wanjiru Kamau" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Business email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="wanjiru@agritech.co.ke"
                            type="email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company</FormLabel>
                      <FormControl>
                        <Input placeholder="Ukulima Digital Cooperative" {...field} />
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
                      <FormLabel>Project vision</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your crop focus, partner network, and the transformation you want to unlock."
                          rows={4}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? "Submitting..." : "Submit enquiry"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
