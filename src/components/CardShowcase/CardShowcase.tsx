"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
  imageAlt?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  className?: string;
}

function CustomCard({
  title,
  description,
  imageUrl = "/api/placeholder/400/200",
  imageAlt = "Card image",
  ctaText,
  onCtaClick,
  className = "",
}: CardProps) {
  return (
    <Card
      className={`w-full max-w-sm overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${className}`}
    >
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={imageAlt}
          width={400}
          height={400}
          style={{ width: "100%", height: "100%" }}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <CardHeader>
        <CardTitle className="line-clamp-2">{title}</CardTitle>
        <CardDescription className="line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <p className="text-sm text-gray-600 line-clamp-3">{description}</p>
      </CardContent>

      {ctaText && (
        <CardFooter className="flex justify-end p-6">
          <Button
            onClick={onCtaClick}
            variant="default"
            className="transition-all duration-300 hover:shadow-md"
          >
            {ctaText}
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}

export function CardShowcase() {
  return (
    <div className="p-8">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Basic Card */}
        <CustomCard
          title="Basic Card Example"
          description="This is a simple card with just title and description."
          imageUrl="/images/card-1.jpg"
        />

        {/* Card with CTA */}
        <CustomCard
          title="Card with Call to Action"
          description="This card includes a call-to-action button below the content."
          ctaText="Learn More"
          imageUrl="/images/card-2.jpg"
          onCtaClick={() => alert("CTA clicked!")}
        />

        {/* Card with Custom Image */}
        <CustomCard
          title="Custom Image Card"
          description="This card uses a custom image instead of the placeholder."
          imageUrl="/images/card-3.jpg"
          imageAlt="Custom image description"
          ctaText="View Details"
          onCtaClick={() => alert("View details clicked!")}
        />

        {/* Long Content Card */}
        <CustomCard
          title="Card with Long Title That Should Be Truncated After Two Lines of Text Content"
          description="This is a much longer description that demonstrates how the card handles overflow content gracefully. The text will be truncated after a certain number of lines to maintain consistent card heights."
          ctaText="Read More"
          onCtaClick={() => alert("Read more clicked!")}
          imageUrl="/images/card-4.jpg"
        />
      </div>
    </div>
  );
}
