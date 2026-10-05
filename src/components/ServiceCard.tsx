import { ArrowRight, type LucideIcon } from "lucide-react";

type Props = {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
};

export default function ServiceCard({ icon: Icon, title, description, href }: Props) {
  return (
    <article className="card-soft group flex flex-col p-6">
      <span className="flex size-12 items-center justify-center rounded-2xl bg-secondary text-primary-dark transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon className="size-6" />
      </span>
      <h3 className="mt-5 text-xl text-primary-dark">{title}</h3>
      <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
      <a
        href={href}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
      >
        Learn More
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
      </a>
    </article>
  );
}
