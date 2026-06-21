import React, { useEffect, useMemo, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { testimonials } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const TESTIMONIALS_PER_PAGE = 6;

const PREVIEW_CHAR_LIMIT = 160;

const TestimonialText = ({ text, id, className = "", paragraphClassName = "" }) => {
  const paragraphs = text
    .split("\n")
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  return (
    <div id={id} className={className}>
      {paragraphs.map((paragraph, index) => (
        <p
          key={index}
          className={`${paragraphClassName}${index > 0 ? " mt-4" : ""}`}
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
};

const truncateTestimonial = (text, limit) => {
  if (text.length <= limit) {
    return { preview: text, isTruncated: false };
  }

  const truncated = text.slice(0, limit);
  const lastSpace = truncated.lastIndexOf(" ");
  const preview = `${lastSpace > 0 ? truncated.slice(0, lastSpace) : truncated}...`;

  return { preview, isTruncated: true };
};

const TestimonialModal = ({ testimonial, onClose }) => {
  useEffect(() => {
    if (!testimonial) return undefined;

    const handleEscape = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [testimonial, onClose]);

  if (!testimonial) return null;

  const { testimonial: text, name, designation, company, image } = testimonial;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="testimonial-modal-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        aria-label="Close testimonial"
        onClick={onClose}
      />

      <div className="relative bg-black-200 rounded-3xl p-8 sm:p-10 max-w-2xl w-full max-h-[85vh] overflow-y-auto border border-white/10 shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 text-white text-xl leading-none hover:bg-white/20 transition-colors"
          aria-label="Close"
        >
          ×
        </button>

        <p className="text-white font-black text-[48px] leading-none">"</p>

        <TestimonialText
          text={text}
          id="testimonial-modal-title"
          className="mt-2"
          paragraphClassName="text-white tracking-wider text-[18px] leading-relaxed"
        />

        <div className="mt-8 flex justify-between items-center gap-4 border-t border-white/10 pt-6">
          <div className="flex-1 flex flex-col">
            <p className="text-white font-medium text-[16px]">
              <span className="blue-text-gradient">@</span> {name}
            </p>
            <p className="mt-1 text-secondary text-[12px]">
              {designation} of {company}
            </p>
          </div>

          <img
            src={image}
            alt={`feedback_by-${name}`}
            className="w-12 h-12 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

const FeedbackCard = ({ testimonial, name, designation, company, image, onReadMore }) => {
  const cardRef = React.useRef(null);
  const { preview, isTruncated } = truncateTestimonial(testimonial, PREVIEW_CHAR_LIMIT);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return undefined;

    const animation = gsap.fromTo(
      el,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "top center",
          scrub: true,
          markers: false,
        },
      }
    );

    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full h-full flex flex-col min-h-[320px]"
    >
      <p className="text-white font-black text-[48px] leading-none">"</p>

      <div className="mt-1 flex flex-col flex-1">
        <TestimonialText
          text={preview}
          className="mt-2 line-clamp-6"
          paragraphClassName="text-[14px] text-white tracking-wider"
        />

        {isTruncated && (
          <button
            type="button"
            onClick={() =>
              onReadMore({ testimonial, name, designation, company, image })
            }
            className="mt-4 self-start text-[14px] font-semibold text-[#915eff] hover:text-[#bf61ff] transition-colors"
          >
            Read More
          </button>
        )}

        <div className="mt-auto pt-7 flex justify-between items-center gap-1">
          <div className="flex-1 flex flex-col">
            <p className="text-white font-medium text-[16px]">
              <span className="blue-text-gradient">@</span> {name}
            </p>
            <p className="mt-1 text-secondary text-[12px]">
              {designation} of {company}
            </p>
          </div>

          <img
            src={image}
            alt={`feedback_by-${name}`}
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

const Feedbacks = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(testimonials.length / TESTIMONIALS_PER_PAGE);

  const paginatedTestimonials = useMemo(
    () =>
      testimonials.slice(
        currentPage * TESTIMONIALS_PER_PAGE,
        (currentPage + 1) * TESTIMONIALS_PER_PAGE
      ),
    [currentPage]
  );

  const goToPage = (page) => {
    if (page >= 0 && page < totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <div className="mt-12 bg-black-100 rounded-[20px]">
        <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
          <div>
            <p className={styles.sectionSubText}>What others say</p>
            <h2 className={styles.sectionHeadText}>Testimonials.</h2>
          </div>
        </div>

        <div className={`-mt-20 pb-14 ${styles.paddingX}`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center items-stretch"
            >
              {paginatedTestimonials.map((testimonial) => (
                <FeedbackCard
                  key={testimonial.name}
                  {...testimonial}
                  onReadMore={setSelectedTestimonial}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {totalPages > 1 && (
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
              <button
                type="button"
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 0}
                className="px-5 py-2 rounded-xl bg-tertiary text-white font-semibold disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90 transition-opacity"
                aria-label="Previous testimonials"
              >
                Previous
              </button>

              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => goToPage(index)}
                    aria-label={`Go to page ${index + 1}`}
                    aria-current={currentPage === index ? "page" : undefined}
                    className={`h-2.5 rounded-full transition-all ${
                      currentPage === index
                        ? "w-8 bg-[#915eff]"
                        : "w-2.5 bg-white/30 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages - 1}
                className="px-5 py-2 rounded-xl bg-tertiary text-white font-semibold disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90 transition-opacity"
                aria-label="Next testimonials"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>

      <TestimonialModal
        testimonial={selectedTestimonial}
        onClose={() => setSelectedTestimonial(null)}
      />
    </>
  );
};

export default SectionWrapper(Feedbacks, "");
