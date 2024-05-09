import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import BlurImage from "./BlurImage";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import AutoHeight from "embla-carousel-auto-height";

const EmblaCarousel = ({ slides }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ playOnInit: true, delay: 7000 }),
    AutoHeight(),
  ]);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((post) => (
            <div className="embla__slide" key={post.id}>
              <div class="row d-block">
                <div className="col-lg">
                  <BlurImage
                    className="w-100 h-auto"
                    src={post.feature_image}
                    alt={post.title}
                    width="468"
                    height="438"
                  />
                </div>
                <div class="col-lg">
                  <div className="position-relative">
                    <h3 className="h4 post-title my-2 line-clamp">
                      <Link
                        href={`/articles/${post.slug}`}
                        className="text-link stretched-link"
                        title={post.title}
                      >
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mb-3 line-clamp">{post.excerpt}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
